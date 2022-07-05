// interface will appear in runtime js code

export interface IContact extends IAddress {
    id: string;
    name: string;
    birthDate: BirthDate;
    lastName?: string // optional field
    status: ContactStatus;
}

export interface IPerson  {
    id: IContact['id'];
    name: IContact['name'];
    birthDate: BirthDate;
    lastName?: string // optional field
    status: TypeContactStatus;
}

//alternate to ENUM values
type TypeContactStatus = "ACTIVE" | "INACTIVE" |'NEW';

// Type Alias
type BirthDate = Date | string;

//enum
export enum ContactStatus {
    active = "ACTIVE",
    inActive = "INACTIVE",
    new = 'NEW'
}

export interface IAddress {
    line1: string;
    line2?: string;  // optional field
    region?: string;  // optional field
    postalCode: number 
}


const newContact: IContact = {
    id: "ID1234",
    name: "Sid",
    birthDate: new Date("24-04-1990"),
    line1: "some address",
    postalCode: 123456,
    status: ContactStatus.active
};


function getDuplicateContact(contact: IContact): IContact {
    return Object.apply({}, contact);
}

const duplicateContact = getDuplicateContact(newContact);




