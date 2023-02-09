export interface IUser{
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    userId: number
}

export interface IDtoUser {
    email: string,
    userId: number,
    lastName: string,
    firstName: string
}

export const userDto = (userInfo: IUser) => {
    const {email, userId, lastName, firstName} = userInfo

    return {
        email,
        userId,
        lastName,
        firstName
    } as IDtoUser
}