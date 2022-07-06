
/**
 * 
 * @param target Decorator for class
 */
function freeze(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

/**
 * 
 * @param constructor 
 * @returns 
 */
function singleton(constructor: any) {
    return class Singleton extends constructor {
        static instance = null;
        constructor(...args) {
            super(...args);

            if(Singleton.instance) throw new Error();
            Singleton.instance = this;
        }
    }
}

//called when a instance of the class is created, in the constructor
@singleton
class Contact {

}