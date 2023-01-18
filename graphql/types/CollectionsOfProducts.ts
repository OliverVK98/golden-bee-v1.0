import {intArg, list, nonNull, objectType, queryField} from "nexus";

export const CollectionOfProducts = objectType({
    name: "CollectionOfProducts",
    definition(t) {
        t.int("collectionId");
        t.list.nonNull.int("productId");
    }
})

export const SpecificCollectionQuery = queryField("SpecificCollectionQuery", {
    type: nonNull(list(CollectionOfProducts)),
    args: {collectionId: nonNull(intArg())},
    async resolve(_parent, args, ctx) {
        return await ctx.prisma.collectionsOfProducts.findFirst({
            where: {
                collectionId: args.collectionId
            }
        });
    }
});
