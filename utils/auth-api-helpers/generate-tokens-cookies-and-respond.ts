import TokenService from "./token-service";
import Cookie from "cookies";
import {NextApiRequest, NextApiResponse} from "next";
import {IDtoUser} from "./user-dto";

const generateTokensCookiesAndRespond = async (userDtoInfo: IDtoUser, req: NextApiRequest, res: NextApiResponse) => {
    const tokens  = TokenService.generateTokens(userDtoInfo)
    await TokenService.saveToken(userDtoInfo.userId, tokens.refreshToken)

    const cookies = new Cookie(req, res);
    cookies.set("refreshToken", tokens.refreshToken, {
        maxAge: 10 * 1000,
        httpOnly: true
    })

    res.status(200).json({
        user: {...userDtoInfo},
        ...tokens
    });
}

export default generateTokensCookiesAndRespond