import { IPerson } from "../interfaces/tsInterface";

/**  
 * Record type
*/

// some variable accept object with parameter name to be string and value to be string
let someVariable : Record<string, string> = {name: 'sid'};

// below statement will give an error since number type is not defined
// solution change above type => Record<string, string | number>
someVariable.number = 987654210;


// eg 1 => here all keys of IPerson is required
const someOtherVariable : Record<keyof IPerson, string> = {
    id: '',
    name: '',
    lastName: '',
    birthDate: '',
    status: 'ACTIVE'
};

// eg 2 => here all keys of IPerson are optional
let newPersonType : Partial<Record<keyof IPerson, string>> = {
    name: ''
};

newPersonType.id = '';

/**  
 * OMIT
 * Can Omit few parameters of a type
*/ 

// this omit the type birthDate and id in IPerson interface
let aNewVariable : Omit<Partial<Record<keyof IPerson, string>>, 'birthDate' | 'id'> = {
    name: 'sid'
};

// following code will give error
aNewVariable.id = '';
aNewVariable.birthDate = ''; 