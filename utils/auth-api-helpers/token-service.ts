import jwt, {Secret, JwtPayload} from "jsonwebtoken"
import prisma from "../../lib/prisma";

class TokenService {
    generateTokens = (payload: JwtPayload) => {
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET as Secret, {
            expiresIn: '30m'
        })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as Secret, {
            expiresIn: '30d'
        })
        return {
            accessToken,
            refreshToken
        }
    }

    saveToken = async (userId: number, refreshToken: string) => {
        const tokenData = await prisma.token.findFirst({
            where: {
                userId
            }
        })

        if (tokenData) {
            await prisma.token.update({
                where: {
                    userId,
                },
                data: {
                    refreshToken
                }
            })
        } else {
            await prisma.token.create({
                data: {
                    userId,
                    refreshToken
                }
            })
        }
    }

    validateAccessToken = async (accessToken: string) => {
        try {
             return jwt.verify(accessToken, process.env.JWT_SECRET as Secret);
        } catch (e) {
            return null
        }
    }

    validateRefreshToken = async (refreshToken: string) => {
        try {
             return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as Secret);
        } catch (e) {
            return null
        }
    }

    findToken = async (refreshToken: string) => {
        return prisma.token.findFirst({
            where: {
                refreshToken
            }
        })
    }

    removeToken = async(refreshToken:string) => {
        return await prisma.token.delete({
            where: {
                refreshToken
            }
        })
    }

}

export default new TokenService