export interface IUser {
    uid: string,
    displayName: string | null,
    email: string | null,
    emailVerified: boolean,
    photoUrl: string | null,
}