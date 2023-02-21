import {intArg, list, nonNull, objectType, queryField} from "nexus";

export const ProviderPastOrders = objectType({
    name: "ProviderPastOrders",
    definition(t) {
        t.int("orderId");
        t.int("userId");
        t.list.int("productList");
        t.list.int("quantity");
        t.string("createdAt");
    }
})

export const ProviderPastOrdersQuery = queryField("ProviderPastOrdersQuery", {
    type: list(nonNull(ProviderPastOrders)),
    args: { providerId: nonNull(intArg()) },
    async resolve(_parent, args, ctx) {
        const pastOrders = await ctx.prisma.providerPastOrders.findMany({
            where: {
                providerId: args.providerId,
            },
        });
        return pastOrders.map((order) => ({
            ...order,
            createdAt: order.createdAt.toISOString(),
        }));
    },
});
