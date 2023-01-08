export interface IUser{
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    userId: number
}

export interface IDtoUser {
    email: string,
    userId: number
}

export const userDto = (userInfo: IUser) => {
    const {email, userId} = userInfo

    return {
        email,
        userId
    } as IDtoUser
}