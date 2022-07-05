import { IPerson } from "../interfaces/tsInterface";


/**
 * PICK
 * Will only pick certain element name from the interface
 */

// newPersonVar: {name?: string, id?: string};
let newPersonVar : Partial<
    Pick<
        Record<keyof IPerson, string>,
        'id' | 'name'
        >
    > = {
    name: 'sid',
    id: ''
};

// below code will give error
newPersonVar.lastName = '';


/**
 * Required
 * It makes all the elements of required
 * compliment to partial
 */

type RequiredPersonType = Required<IPerson>;

// Here even lastName is required element but in the original IPerson Object it is optional
 let newOtherPersonVar : Record<keyof RequiredPersonType, string> = {
    name: 'sid',
    id: '',
    birthDate: '',
    status: 'ACTIVE',
    lastName: ''
};