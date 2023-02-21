import { NextApiRequest, NextApiResponse } from "next";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import { buffer } from "micro";
import prisma from "../../../lib/prisma";

export const config = {
    api: {
        bodyParser: false
    }
}

interface IProductData {
    [key: string]: any;
}

const stripe = require('stripe')(process.env.STRIPE_KEY_SECRET);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddlewareCors(req, res);

    if (req.method === 'POST') {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature'];
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        let event;
        
        try {
            if (!sig || !webhookSecret) return;

            event  = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
        } catch (e: any) {
            console.log(`Webhook error: ${e.message}`);
            return res.status(400).send(`Webhook error: ${e.message}`);
        }

        if (event.type === "checkout.session.completed") {
            if("userId" in event.data.object.metadata) {
                const productsData: IProductData = {...event.data.object.metadata};
                delete productsData.userId;
                const userId = Number(event.data.object.metadata.userId);
                const productList = Object.keys(productsData).map(key => Number(key));
                const quantity = Object.values(productsData).map(value => Number(value));

                await prisma.pastOrders.create({
                    data: {
                        userId,
                        productList,
                        quantity
                    }
                })
            }

            if("providerId" in event.data.object.metadata) {
                const productsData: IProductData = {...event.data.object.metadata};
                delete productsData.providerId;
                const providerId = Number(event.data.object.metadata.providerId);
                const productList = Object.keys(productsData).map(key => Number(key));
                const quantity = Object.values(productsData).map(value => Number(value));

                await prisma.providerPastOrders.create({
                    data: {
                        providerId,
                        productList,
                        quantity
                    }
                })
            }

            return res.status(200).end();
        }

        return res.status(200).end();
    } else {
        res.status(405).end('Method Not Allowed');
    }
}