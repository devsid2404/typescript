/**
 * 
 * @param {string} inputValue // <= this add checks to the below function
 */


async function newFunction(inputValue) {
    await new Promise(resolve => setTimeout(() => resolve("Given input value => " + inputValue), 1000)    );
}

newFunction("Hello");


/**
 * 
 * @param {number} inputValue  // <= this add checks to the below function
 * @returns 
 */
async function ajaxCall(inputValue) {
   return await $.ajax({ // gives a type error if you do not install @types/jquery
   });
}

ajaxCall(23);

/**
 * Can Install @types package if any package does not support the types inbuilt
 * Eg: jquery above
 * Places to find @types packages =>
 * a. https://github.com/definitelytyped/definitelytyped || https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
 * b. https://www.npmjs.com/search?q=%40types
 */
