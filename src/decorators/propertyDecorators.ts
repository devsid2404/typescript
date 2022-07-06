
function editable(target: any, property: string | symbol) {

    let originalValue = target[property];



    Object.defineProperty(target, property, {
        get: () => originalValue,
        set: (newValue) => {
            console.log(`${property.toString()} changed: `, newValue);
            originalValue = newValue;
        },
        enumerable: true,
        configurable: true
    });
}

class Person {
    @editable
    private name: string;

}