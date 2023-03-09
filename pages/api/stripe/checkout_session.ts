import {NextApiRequest, NextApiResponse} from "next";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import createCheckoutSession from "../../../utils/stripe/create-checkout-session";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddlewareCors(req, res);

    if (req.method === 'POST') {
        const {cartItems, userId, providerId} = req.body;

        if (userId&&cartItems) {
            await createCheckoutSession(cartItems, res, userId, "user");
            return;
        }

        if (providerId&&cartItems) {
            await createCheckoutSession(cartItems, res, providerId, "provider");
            return;
        }

        if (cartItems) {
            await createCheckoutSession(cartItems, res, null, null);
            return;
        } else {
            res.status(400).json({
                error: "Cart Items are missing"
            })
        }


    } else {
        res.status(405).end('Method Not Allowed');
    }
}