import {NextApiRequest, NextApiResponse} from "next";
import TokenService from "./token-service";

export const authMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).end();
        }

        const accessToken = authorizationHeader.split(' ')[1];
        const userData = await TokenService.validateAccessToken(accessToken);

        if (!userData) {
            return res.status(401).end();
        }

        return userData

    } catch (e) {
        return res.status(401).end();
    }


}