import {NextApiRequest, NextApiResponse} from "next";
import {runMiddlewareCors} from "../../utils/auth-api-helpers/run-middleware-cors";
import roundDecimals from "../../utils/round-decimals";

interface ICartItem {
    itemName: string,
    price: number,
    discountedPrice: number,
    productId: number,
    frontImageUrl: string,
    quantity?: number
}

const stripe = require('stripe')(process.env.STRIPE_KEY_SECRET);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddlewareCors(req, res);

    if (req.method === 'POST') {
        const {cartItems, userId} = req.body;

        if (cartItems) {
            try {
                const session = await stripe.checkout.sessions.create({
                    line_items: cartItems.map((item: ICartItem) => {
                        return {
                            price_data: {
                                currency: "usd",
                                product_data: {
                                    name: item.itemName,
                                    images: [item.frontImageUrl],
                                },
                                unit_amount: item.discountedPrice ? roundDecimals(item.discountedPrice) * 100 : roundDecimals(item.price) * 100,
                            },
                            quantity: item.quantity
                        }
                    }),
                    mode: 'payment',
                    success_url: `http://localhost:3000/checkout`,
                    cancel_url: `http://localhost:3000/checkout`,
                });
                res.send({url: session.url});
            } catch (err: any) {
                res.status(err.statusCode || 500).json(err.message);
            }
        } else {
            res.status(400).json({
                error: "Cart Items are missing"
            })
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}