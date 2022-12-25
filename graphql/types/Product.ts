import {extendType, objectType} from "nexus";

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

export const LinksQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("products", {
            type: "Product",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.product.findMany();
            }
        });
    }
})