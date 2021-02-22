/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then(value => { 
     try{
       let result = transformer(value);
       resolve(result);
     } catch(error) {
       reject(error)
     };
    })
    .catch(error => reject(error))
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */


 
function squarePromise(numberPromise){
  return numberPromise
  .then(value => {
    if(!isNaN(value)){
      let newNumber = Number(value);
      return newNumber*newNumber
    } else {
     throw `Cannot convert '${value}' to a number!`;
    };
  })
  .catch(error => {throw error});
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(promise => 0);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(error => {throw error}, promise => promise); 
}



/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */;

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};