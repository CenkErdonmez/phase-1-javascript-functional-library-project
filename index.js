// Helper function to check if a given value is an object
function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
  
  function myEach(collection, callback) {
    if (isObject(collection)) {
      collection = Object.values(collection);
    }
    
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
    
    return collection;
  }
  
  function myMap(collection, callback) {
    if (isObject(collection)) {
      collection = Object.values(collection);
    }
    
    const mappedArray = [];
    
    for (let i = 0; i < collection.length; i++) {
      mappedArray.push(callback(collection[i], i));
    }
    
    return mappedArray;
  }
  
  function myReduce(collection, callback, acc) {
    if (isObject(collection)) {
      collection = Object.values(collection);
    }
    
    let startIdx = 0;
    
    if (typeof acc === 'undefined') {
      acc = collection[0];
      startIdx = 1;
    }
    
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (isObject(collection)) {
      collection = Object.values(collection);
    }
    
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    if (isObject(collection)) {
      collection = Object.values(collection);
    }
    
    const filteredArray = [];
    
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        filteredArray.push(collection[i]);
      }
    }
    
    return filteredArray;
  }
  
  function mySize(collection) {
    if (isObject(collection)) {
      return Object.keys(collection).length;
    } else {
      return collection.length;
    }
  }
  
  function myFirst(array, n) {
    if (typeof n === 'undefined') {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (typeof n === 'undefined') {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast
  };
  