import {intArg, list, nonNull, objectType, queryField, stringArg, mutationField} from "nexus";

export const User = objectType({
    name: "User",
    definition(t) {
        t.int("userId");
        t.string("firstName");
        t.string("lastName");
        t.string("email");
        t.string("password");
    }
});

export const GetUserInfoByEmail = queryField("GetUserInfoByEmail", {
    type: nonNull(User),
    args: {email: nonNull(stringArg())},
    async resolve(_parent, args, ctx): Promise<any> {
        return await ctx.prisma.user.findFirst({
            where: {
                email: args.email
            }
        });
    }
});

export const createUser = mutationField('CreateUser', {
    type: User,
    args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
    },
    async resolve(_parent, { email, password, lastName, firstName }, ctx) {
        return ctx.prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName
            },
        });
    },
});

