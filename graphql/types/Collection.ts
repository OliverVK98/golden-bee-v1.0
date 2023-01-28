import {booleanArg, list, nonNull, objectType, queryField} from "nexus";

export const Collection = objectType({
    name: "Collection",
    definition(t) {
        t.int("collectionId");
        t.string("name");
        t.boolean("isStyle");
        t.string("imageUrl");
    }
})

export const CollectionsQuery = queryField("CollectionsList", {
    type: list(nonNull("Collection")),
    args: {condition: nonNull(booleanArg())},
    async resolve(_parent, args, ctx) {
        return await ctx.prisma.collection.findMany({
            where: {
                isStyle: args.condition
            }
        });
    }
});
