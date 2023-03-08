import TokenService from "./token-service";
import {NextApiRequest, NextApiResponse} from "next";

const checkIsUserAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({
            error: "User is not authorized"
        });
        return;
    }
    const accessToken = authHeader.split(' ')[1];
    const userData: any = await TokenService.validateAccessToken(accessToken);

    if (!userData) {
        res.status(401).json({
            error: "User is not authorized"
        });
        return;
    }

    return userData;
}

export default checkIsUserAuth