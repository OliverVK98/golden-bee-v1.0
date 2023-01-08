import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import {IUser, userDto} from "../../../utils/auth-api-helpers/user-dto";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import generateTokensCookiesAndRespond from "../../../utils/auth-api-helpers/generate-tokens-cookies-and-respond";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
        const { email, password } = req.body

        if (email && password) {
            const user = await prisma.user.findFirst({
                where: {
                    email
                }
            })

            if (!user) {
                res.status(400).json({
                    error: "No user with that email exist"
                });
            } else {
                const doesPasswordMatch = await bcrypt.compare(password, user.password)
                if(!doesPasswordMatch) {
                    res.status(400).json({
                        error: "Password is incorrect"
                    });
                } else {
                    const userDtoInfo = userDto(user as IUser)
                    await generateTokensCookiesAndRespond(userDtoInfo, req, res);
                }
            }

        } else {
            res.status(400).json({
                error: "One of the required parameters is missing"
            })
        }
    } else {
        res.status(405).end()
    }
}


