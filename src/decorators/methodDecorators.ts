import { IContact } from "../interfaces/tsInterface";

/**
 * MethodDecorator => authorize
 * @param target => Object to which the decorator is applied to, below the instance of class
 * @param property => name of the method/property
 * @param descriptor => metadata of the method/property
 */
function decoratorFactory(name: string) {
  return function authorize(target: any, property: string, descriptor: PropertyDescriptor) {
    console.log('inside decorator');
    console.log(this);
    console.log(target, property, descriptor);
        const givenMethod = descriptor.value;
        //descriptor.value is the function when the method is called
        descriptor.value = async(...givenArguments: Array<any>) => {
            console.log('Inside decorator method');
            try {
                return givenMethod.apply(this, givenArguments);
            } catch (err) {
                throw err;
            } 
        }
    } as Function;
}


class ContactRepository {

    @decoratorFactory('')
    public getContactDetails = async():Promise<IContact> => {
        console.log('inside getContactDetails method');
        return await new Promise(resolve => resolve({
            name: 'sid',
            birthDate: '',
            status: 'ACTIVE',
        } as IContact));
    }
}

const asyncFunction = async() => {
    const contactRepo = new ContactRepository();
    const contact = await contactRepo.getContactDetails();
    console.log('contact==>', contact)
}


asyncFunction();




