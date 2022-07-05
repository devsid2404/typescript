import { IContact } from "../interfaces/tsInterface";

type ContactFields = keyof IContact;

const field: ContactFields = "birthDate";

function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName];
}

getValue({min: 1, max: 23}, 'min');