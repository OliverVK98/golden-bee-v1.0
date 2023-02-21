import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../lib/prisma";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
        const { email, name } = req.body

        if (email && name) {
            const regularUserExists = await prisma.user.findFirst({
                where: {
                    email
                }
            })

            if (regularUserExists) return res.status(400).json({
                error: "User with that email already exists"
            });

            const socialUserExists = await prisma.providerUser.findFirst({
                where: {
                    email
                }
            })

            if (socialUserExists) return res.status(200).json({
                userInfo: socialUserExists
            });

            const newUser = await prisma.providerUser.create({
                data: {
                    email,
                    name,
                }
            })

            return res.status(200).json({
                userInfo: newUser
            });

        } else {
            return res.status(400).json({
                error: "One of the required parameters is missing"
            })
        }
    } else {
        return res.status(405).end()
    }
}


