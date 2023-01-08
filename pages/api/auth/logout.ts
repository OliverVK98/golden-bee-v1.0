import {NextApiRequest, NextApiResponse} from "next";
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
        await TokenService.removeToken(refreshToken as string);
        cookies.set("refreshToken");
        res.status(200).end();
    } else {
        res.status(405).end()
    }
}


