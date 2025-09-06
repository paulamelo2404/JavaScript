/* Write a function createHelloWorld. It should return a new function that 
always returns "Hello World". */

function createHelloWorld() {
  return function(...args) {
    return "Hello World";
  };
}
// Para ver o resultado!
const f = createHelloWorld();
console.log(f());