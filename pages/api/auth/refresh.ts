import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../lib/prisma";
import {IDtoUser, IUser, userDto} from "../../../utils/auth-api-helpers/user-dto";
import TokenService from "../../../utils/auth-api-helpers/token-service";
import Cookie from "cookies";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import generateTokensCookiesAndRespond from "../../../utils/auth-api-helpers/generate-tokens-cookies-and-respond";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'GET') {
        const cookies = new Cookie(req, res);
        const refreshToken: string | undefined = cookies.get('refreshToken');

        if (!refreshToken) {
            res.status(401).json({
                error: "User is not authorized"
            })
        } else {
            const userData = await TokenService.validateRefreshToken(refreshToken) as IDtoUser;
            const tokenFromDb = await TokenService.findToken(refreshToken);

            if (!userData || !tokenFromDb) {
                res.status(401).json({
                    error: "User is not authorized"
                })
            } else {
                const user = await prisma.user.findFirst({
                    where: {
                        userId: userData.userId
                    }
                })

                const userDtoInfo = userDto(user as unknown as IUser)

                await generateTokensCookiesAndRespond(userDtoInfo, req, res);
            }
        }

    } else {
        res.status(405).end()
    }
}


