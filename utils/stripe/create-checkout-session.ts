import roundDecimals from "../round-decimals";
import {ICartItem} from "../../store/slices/cartSlice";
import {NextApiResponse} from "next";

const stripe = require('stripe')(process.env.STRIPE_KEY_SECRET);

const createCheckoutSession = async (cartItems: ICartItem[], res: NextApiResponse, id: null | number, userType: "user" | "provider" | null) => {

    const metadata = cartItems.reduce((acc: any, item) => {
        if (acc[item.productId] !== undefined) {
            return {
                ...acc,
                [item.productId]: acc[item.productId] + item.quantity,
            };
        }

        return {
            ...acc,
            [item.productId]: item.quantity,
        };
    }, {});

    if (id!=null) {
        if (userType==="user") metadata.userId = id;
        if (userType==="provider") metadata.providerId = id;
    }

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: cartItems.map((item) => {
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.itemName,
                            images: [item.frontImageUrl],
                        },
                        unit_amount: item.discountedPrice ? Math.round(roundDecimals(item.discountedPrice) * 100) : Math.round(roundDecimals(item.price) * 100),
                    },
                    quantity: item.quantity,
                }
            }),
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/user/order-successful`,
            cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/user/order-failed`,
            metadata,
        });
        res.status(200).json({url: session.url, cartItems});
        return;
    } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
    }
}

export default createCheckoutSession