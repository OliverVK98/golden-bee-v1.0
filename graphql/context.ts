import {PrismaClient} from "@prisma/client";
import prisma from "../lib/prisma";
import {IncomingMessage, ServerResponse} from "http";

export type Context = {
    prisma: PrismaClient;
}

export async function createContext(req: IncomingMessage,res: ServerResponse): Promise<Context> {
    return {
        prisma,
    }
}