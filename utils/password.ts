import { genSaltSync, hashSync } from "bcrypt-ts";

export function hashPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
}

export function comparePassword(password: string, hashPas: string) {
    return hashSync(password, hashPas);
}

export function checkPassword(password: string, hashPas: string) {
    return comparePassword(password, hashPas);
}