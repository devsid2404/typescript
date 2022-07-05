import { IPerson } from "../interfaces/tsInterface";


// Partial<> makes all parameters partial or optional
type PartialType = Partial<IPerson>

const myType = {min: 1, max: 24};


const newPerson : PartialType = {
    id: '',
    name: '',
    birthDate: ''
};


function save(params: typeof myType) { //params take the value {min: number, max: number} from above my type

}

//save function accepts a object of interface of myType
save({
    min: 0,
    max:10
});








