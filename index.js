fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let i in collection) {
        callback(collection[i], i, collection)
      }
      return collection;
    },

    map: function(collection, callback) {
    const newColl = [];
      for (let i in collection) {
        newColl.push(callback(collection[i]));
      }
      return newColl;
    },
// Remember in a  loop we can not use const if we want to reassign the value.
    reduce: function(collection, callback, acc = 0) {
      for (let i in collection) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

      find: function(collection, callback) {
        for (let i in collection) {
          if (callback(collection[i]))
            return collection[i];
        }
      },

      filter: function(collection, callback) {
        array = [];
        for (let i in collection) {
          if (callback(collection[i]))
            array.push(collection[i]);
        }
        return array;
      },

      size: function(collection) {
        array = (collection.isArray) ? collection.slice() : Object.values(collection);
        return array.length;
      },

      first: function(array, n=1) {
        arrayNew = [];
        for (let i = 0; i < n; i++) {
          arrayNew.push(array[i]);
        }
        return n === 1 ? arrayNew[0] : arrayNew;
      },

      last: function(array, n=1) {
        if (n === 1) return array[array.length - 1];

        let arrayNew = [];
        let copiedArray = [...array];
        while(n--) {
          let currentLastElement = copiedArray.pop();
          arrayNew.unshift(currentLastElement);
        }
        return arrayNew;

      //   for( let i = array.length -1; counter < n; i--, counter++){
      //     arrayNew.unshift(array[i]);
      //   }
      //   console.log(arrayNew, n)
      //   return n === 1 ? arrayNew[arrayNew.length-1] : arrayNew;
      },

      compact: function(array) {
        let arrayNew = [];
        for (let i = 0; i < array.length ; i ++ ) {
          if (array[i]) {
            arrayNew.push(array[i]);
          }
        }
        return arrayNew;
      }
  }
})()


fi.libraryMethod()
