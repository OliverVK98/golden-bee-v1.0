import roundDecimals from "../round-decimals";
import {ICartItem} from "../../store/slices/cartSlice";
import {NextApiResponse} from "next";

const stripe = require('stripe')(process.env.STRIPE_KEY_SECRET);

const createCheckoutSession = async (cartItems: ICartItem[], res: NextApiResponse, userId: null | number) => {

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

    if (userId!=null) metadata.userId = userId;

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
                        unit_amount: item.discountedPrice ? roundDecimals(item.discountedPrice) * 100 : roundDecimals(item.price) * 100,
                    },
                    quantity: item.quantity,
                }
            }),
            mode: 'payment',
            success_url: `http://localhost:3000/user/order-successful`,
            cancel_url: `http://localhost:3000/checkout`,
            metadata,
        });
        res.status(200).json({url: session.url});
        return;
    } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
    }
}

export default createCheckoutSession