function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    let newArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          newArray.push(callback(collection[key]));
        }
      }
    }
  
    return newArray;
  }
  
  function myReduce(collection, callback, acc) {
    let hasInitialValue = acc !== undefined;
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (!hasInitialValue) {
          acc = collection[i]; 
          hasInitialValue = true;
        } else {
          acc = callback(acc, collection[i], collection);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (!hasInitialValue) {
            acc = collection[key]; 
            hasInitialValue = true;
          } else {
            acc = callback(acc, collection[key], collection);
          }
        }
      }
    }
  
    return acc;
  }

  function myFind(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i]; 
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && callback(collection[key])) {
          return collection[key];  
        }
      }
    }
    return undefined; 
  }


  function myFilter(collection, callback) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (callback(collection[key])) {
            result.push(collection[key]);
          }
        }
      }
    }
  
    return result;  
  }
  

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;  // Return 0 for any other input
  }

  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];  // Return the first element if no `n` is provided
    } else {
      return array.slice(0, n);  // Return the first `n` elements
    }
  }
  
  
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];  
    } else {
      return array.slice(-n);  
    }
  }
  
  function myKeys(obj) {
    return Object.keys(obj);
  }

  function myValues(obj) {
    return Object.values(obj);
  }
  
  function mySortBy(collection, iteratee) {
    return collection.slice().sort((a, b) => {
      const valA = iteratee(a);
      const valB = iteratee(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  
  function myFlatten(array, shallow = false) {
    if (shallow) {
      return array.reduce((acc, val) => acc.concat(val), []);
    } else {
      return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? myFlatten(val) : val), []);
    }
  }

  
  
  

  