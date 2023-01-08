import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../lib/prisma";
import {IDtoUser, IUser, userDto} from "../../../utils/auth-api-helpers/user-dto";
import TokenService from "../../../utils/auth-api-helpers/token-service";
import Cookie from "cookies";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
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
                const user = prisma.user.findFirst({
                    where: {
                        userId: userData.userId
                    }
                })

                const userDtoInfo = userDto(user as unknown as IUser)
                const tokens  = TokenService.generateTokens(userDtoInfo)
                await TokenService.saveToken(userDtoInfo.userId, tokens.refreshToken)

                res.status(200).json({
                    user: {...userDtoInfo},
                    ...tokens
                });
            }
        }

    } else {
        res.status(405).end()
    }
}


