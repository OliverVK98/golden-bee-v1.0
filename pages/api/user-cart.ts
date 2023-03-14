import {NextApiRequest, NextApiResponse} from "next";
import {runMiddlewareCors} from "../../utils/auth-api-helpers/run-middleware-cors";
import {authMiddleware} from "../../utils/auth-api-helpers/auth-middleware";
import prisma from "../../lib/prisma";

interface IAuthData {
    email: string,
    userId: number,
    iat: number,
    exp: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res);

    if (req.method === "GET") {
        const isAuth = await authMiddleware(req, res) as IAuthData;
        if (!isAuth) return;

        const userId = isAuth.userId;

        const cart = await prisma.cart.findFirst({
            where: {
                userId,
            },
        });

        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
            return;
        }

        const userCarts = await prisma.productsInCart.findMany({
            where: {
                cartId: cart.cartId,
            },
        });

        const productsIdArr = userCarts.map((productCart) => productCart.productId);

        res.status(200).json(productsIdArr);
    } else {
        res.status(405).end();
    }
}


