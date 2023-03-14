import {NextApiRequest, NextApiResponse} from "next";
import {runMiddlewareCors} from "../../../utils/auth-api-helpers/run-middleware-cors";
import {IUser, userDto} from "../../../utils/auth-api-helpers/user-dto";
import checkIsUserAuth from "../../../utils/auth-api-helpers/check-is-user-auth";
import prisma from "../../../lib/prisma";

interface IUpdatedData {
    firstName?: string,
    lastName?: string,
    email?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddlewareCors(req, res)

    if (req.method === 'POST') {
        const userData = await checkIsUserAuth(req, res);

        const {firstName, lastName, email} = req.body;

        if (!firstName && !lastName && !email) {
            res.status(400).json({
                error: "No updated information was sent"
            });
            return;
        }

        const updatedData: IUpdatedData = {
            ...(firstName && {firstName}),
            ...(lastName && {lastName}),
            ...(email && {email}),
        }

        if (!userData) return;

        const response = await prisma.user.update({
            where: {
                userId: +userData.userId
            },
            data: updatedData
        })

        res.status(200).json(userDto(response as IUser));

    } else {
        res.status(405).end()
    }
}


