import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import prisma from "../../../lib/prisma";
import Cors from "micro-cors";

export const config = {
    api: {
        bodyParser: false
    }
}

const cors = Cors({
    allowMethods: ['POST', 'HEAD'],
});

interface IProductData {
    [key: string]: any;
}

const stripe = require('stripe')(process.env.STRIPE_KEY_SECRET);

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature']!;
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        let event;
        
        try {
            if (!sig || !webhookSecret) return;

            event  = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
        } catch (e: any) {
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

export default cors(webhookHandler as any);