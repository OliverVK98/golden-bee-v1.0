import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/prisma";
import bcrypt from 'bcrypt'
import {IUser, userDto} from "../../../utils/auth-api-helpers/user-dto";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import generateTokensCookiesAndRespond from "../../../utils/auth-api-helpers/generate-tokens-cookies-and-respond";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
        const { email, password, lastName, firstName } = req.body

        if (email && password && lastName && firstName) {
            const user = await prisma.user.findFirst({
                where: {
                    email
                }
            })

            if(!user) {
                const hashPassword = await bcrypt.hash(password, 3);
                const newUser = await prisma.user.create({
                    data: {
                        email,
                        firstName,
                        lastName,
                        password: hashPassword
                    }
                })

                const userDtoInfo = userDto(newUser as IUser);
                await generateTokensCookiesAndRespond(userDtoInfo, req, res);
            } else {
                res.status(400).json({
                    error: "A user with that email already exists"
                });
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


