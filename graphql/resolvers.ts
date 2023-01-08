import {GetUserInfoByEmail} from "./types";

export const resolvers = {
    Query: {
        ProductById: async (root: any, args: any, ctx: any) => await ctx.prisma.product.findUnique({
            where: {productId: +args.id}
        }),
        ProductsList: async (root: any, args: any, ctx: any) => await ctx.prisma.product.findMany(),
        ProductsByMultipleIds: async (root: any, args: any, ctx: any) => await ctx.prisma.product.findMany({
            where: {
                productId: {
                    in: args.id
                }
            }
        }),
        CollectionsList: async (root: any, args: any, ctx: any) => await ctx.prisma.collection.findMany({
            where: {
                isStyle: args.condition
            }
        }),
        SpecificCollectionQuery: async (root: any, args: any, ctx: any) => await ctx.prisma.collectionsOfProducts.findMany(
            {
                where: {
                    collectionId: args.collectionId
                }
            }
        ),
        GetUserInfoByEmail: async (root: any, args: any, ctx: any) => await ctx.prisma.user.findFirst(
            {
                where: {
                    email: args.email
                }
            }
        )
    },

    Mutation: {
        CreateUser: async (root: any, { email, password, lastName, firstName }: IUser, ctx: any) => ctx.prisma.user.create({
                data: {
                    email,
                    password,
                    firstName,
                    lastName
                },
            })
    }
}

interface IUser {
    email: string,
    password: string,
    lastName: string,
    firstName: string
}

