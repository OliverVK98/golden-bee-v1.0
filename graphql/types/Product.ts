import {intArg, list, nonNull, objectType, queryField} from "nexus";

export const Product = objectType({
    name: "Product",
    definition(t) {
        t.int("productId");
        t.string("itemName");
        t.float("price");
        t.float("discountedPrice");
        t.int("rating");
        t.string("frontImageUrl");
        t.list.string("extraImageUrls");
        t.list.string("bannerImageUrls");
        t.boolean("isAvailable");
    }
})

export const ProductsQuery = queryField("ProductsList", {
    type: list(nonNull("Product")),
    async resolve(_parent, _args, ctx) {
        return await ctx.prisma.product.findMany();
    }
});

export const ProductsByIdQuery = queryField("ProductById", {
    type: "Product",
    args: {id: nonNull(intArg())},
    async resolve(_parent, args, ctx) {
                    return await ctx.prisma.product.findUnique({
                        where: {productId: +args.id}
                });
            }
});

export const ProductsByMultipleIdsQuery = queryField("ProductsByMultipleIds", {
    type: list(Product),
    args: {id: list(nonNull(intArg()))},
    async resolve(_parent, args, ctx) {
        return await ctx.prisma.product.findMany({
            where: {
                productId: {
                    in: [...args.id as number[]]
                }
            }
        });
    }
});
