// Generic Type

import { ContactStatus, IContact } from "../interfaces/tsInterface";

function getClone<T>(contact: T): T {
    return Object.apply({}, contact);
}

const newContactDetails = {
    id: "ID1234",
    name: "Sid",
    birthDate: new Date("24-04-1990"),
    line1: "some address",
    postalCode: 123456,
    status: ContactStatus.active
};

const clonedContact = getClone(newContactDetails);

const originalObject = {
    a: 'b',
    c: 'd',
    e: 'f'
};
const clonedObject = getClone(originalObject);



function getClone2<T1, T2 extends T1>(contact: T1): T2 {
    return Object.apply({}, contact);
}

getClone2<IContact, IContact>(newContactDetails);

interface IGenericContact<T> {
    id: string;
    name: string;
    birthDate: Date;
    lastName?: string // optional field
    status: T; 
}

const genericContact: IGenericContact<ContactStatus> = {
    id: "ID1234",
    name: "Sid",
    birthDate: new Date("24-04-1990"),
    status: ContactStatus.active
}
