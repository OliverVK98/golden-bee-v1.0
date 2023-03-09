import {NextApiRequest, NextApiResponse} from "next";
import Cors from "cors";

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
    origin: `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    allowedHeaders: ['Content-Type', 'Authorization'],
})

export function runMiddlewareCors(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    return new Promise((resolve, reject) => {
        cors(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}