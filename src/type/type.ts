import { ContactStatus, IAddress, IPerson } from "../interfaces/tsInterface";



//alternate to ENUM values



const newTypesPerson = {
    id: '',
    name: '',
    birthDate: '',
    status: 'ACTIVE'
}

// Type Alias
type BirthDate = Date | string;


 type AddressablePerson = IPerson & IAddress;