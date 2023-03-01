import {intArg, list, nonNull, objectType, queryField} from "nexus";

export const PastOrders = objectType({
    name: "PastOrders",
    definition(t) {
        t.int("orderId");
        t.int("userId");
        t.list.int("productList");
        t.list.int("quantity");
        t.string("createdAt");
    }
})

export const PastOrdersQuery = queryField("PastOrdersQuery", {
    type: list(nonNull(PastOrders)),
    args: { userId: nonNull(intArg()) },
    async resolve(_parent, args, ctx) {
        const pastOrders = await ctx.prisma.pastOrders.findMany({
            where: {
                userId: args.userId,
            },
        });
        return pastOrders.map((order: any) => ({
            ...order,
            createdAt: order.createdAt.toISOString(),
        }));
    },
});
