/*const sum = (a, b) => {
    return a + b;
};
 
const logName = (fn) => {
    
    return (...args) => {
        console.log(`Call function "${fn.name}"`);
        return fn(...args);
    }
}
 
const wrappedSum = logName(sum);
const result = wrappedSum(2, 3);
console.log(result);*/

/*const sum = (a, b) => {
    return a + b;
};
const integerArgs = (fn) => {
    return (...args) => {
        if (args.some((arg) => !Number.isInteger(arg))) {
            throw new Error('Переданные аргументы должны быть целыми числами');
        }
 
        return fn(...args);
    }
}
 
const wrappedSum = integerArgs(sum);
const result = wrappedSum('2', 3);
// Error: Переданные аргументы должны быть целыми числами
console.log(result);*/


let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod(); 
    }
  };
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); 
      cache.set(x, result);
      return result;
    };
  }
  
  console.log( worker.slow(1) ); 
  
  worker.slow = cachingDecorator(worker.slow); 
  
  console.log( worker.slow(2) ); 