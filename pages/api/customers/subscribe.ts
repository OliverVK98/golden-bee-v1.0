import {NextApiRequest, NextApiResponse} from "next";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import prisma from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
        const {email} = req.body;
        if (email) {
            const isUserSubscribed = await prisma.subscribptionEmailList.findFirst({
                where: {
                    email
                }
            })

            if (isUserSubscribed) {
                res.status(400).json({
                    error: "User already subscribed"
                });
                return;
            }

            const addUserEmail = await prisma.subscribptionEmailList.create({
                data: {
                    email
                }
            })

            res.status(200).json(addUserEmail);

            return;
        }

        res.status(400).json({
            error: "User email is missing"
        });

    } else {
        res.status(405).end()
    }
}
