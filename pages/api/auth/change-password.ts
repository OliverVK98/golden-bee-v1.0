import {NextApiRequest, NextApiResponse} from "next";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import bcrypt from "bcrypt";
import checkIsUserAuth from "../../../utils/auth-api-helpers/check-is-user-auth";
import {IUser, userDto} from "../../../utils/auth-api-helpers/user-dto";

interface IUpdatedData {
    firstName?: string,
    lastName?: string,
    email?: string
}

interface IUserData {
    email: string,
    userId: number,
    lastName: string,
    firstName: string,
    iat: number,
    exp: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
        const userData = await checkIsUserAuth(req, res);
        if (!userData) return;

        const {userPassword, newPassword} = req.body;

        if (!userPassword || !newPassword) {
            res.status(400).json({
                error: "Old or new password is missing"
            });
            return;
        }

        const user = await prisma.user.findFirst({
            where: {
                userId: userData.userId
            }
        })

        if (!user) {
            res.status(400).json({
                error: "User not found"
            });
            return;
        }

        const doesPasswordMatch = await bcrypt.compare(userPassword, user.password);

        if(!doesPasswordMatch) {
            return res.status(400).send({ error: "Incorrect password" });
        }

        const response = await prisma.user.update({
            where: {
                userId: +userData.userId
            },
            data: {
                password: await bcrypt.hash(newPassword, 3)
            }
        })

        res.status(200).json(userDto(response as IUser));

    } else {
        res.status(405).end()
    }
}


