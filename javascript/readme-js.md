##ReLearn Vanila Javascript:

1. Array, String and their methods
2. Object and classes
3. Modern Javascript ES6 and Higher order function
4. Object Oriented Programming
5. Data structures and algorithm
6. Practice and solve problem

---
A comprehensive list of array methods available in JavaScript, along with brief descriptions:

##Mutator Methods
These methods modify the array it.


1. `push(element1, ..., elementN)`: Adds one or more elements to the end of an array and returns the new length.

2. `pop()`: Removes the last element from an array and returns that element.

3. `unshift(element1, ..., elementN)`: Adds one or more elements to the beginning of an array and returns the new length.

4. `shift()`: Removes the first element from an array and returns that element.

5. `splice(start, deleteCount, item1, ..., itemN)`: Adds/removes items to/from an array and returns the removed items.

6. `sort([compareFunction])`: Sorts the elements of an array in place and returns the array.

7. `reverse()`: Reverses the order of the elements of an array in place.

8. `fill(value, start, end)`: Fills all the elements of an array from a start index to an end index with a static value.

9. `copyWithin(target, start, end)`: Shallow copies part of an array to another location in the same array and returns it without modifying its length.

##Accessor Methods
These methods do not modify the array and return a new array or a value.

1. `concat(array1, ..., arrayN)`: Merges two or more arrays and returns a new array.

2. `join(separator)`: Joins all elements of an array into a string.

3. `slice(start, end)`: Returns a shallow copy of a portion of an array into a new array.

4. `toString()`: Returns a string representing the array and its elements.

5.` toLocaleString()`: Returns a localized string representing the array and its elements.

6. `includes(element, start)`: Determines whether an array includes a certain element, returning true or false.

7. `indexOf(searchElement, fromIndex)`: Returns the first index at which a given element can be found in the array.

8. `lastIndexOf(searchElement, fromIndex)`: Returns the last index at which a given element can be found in the array.

##Iteration Methods
These methods iterate over each element of an array and perform a function on each element.

1. `forEach(callback(currentValue, index, array))`: Executes a provided function once for each array element.

2. `map(callback(currentValue, index, array))`: Creates a new array with the results of calling a provided function on every element.

3. `filter(callback(currentValue, index, array))`: Creates a new array with all elements that pass the test implemented by the provided function.

4. `reduce(callback(accumulator, currentValue, index, array), initialValue)`: Executes a reducer function on each element of the array, resulting in a single output value.

5. `reduceRight(callback(accumulator, currentValue, index, array), initialValue)`: Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

6. `every(callback(currentValue, index, array))`: Tests whether all elements in the array pass the test implemented by the provided function.

7. `some(callback(currentValue, index, array))`: Tests whether at least one element in the array passes the test implemented by the provided function.

8. `find(callback(currentValue, index, array))`: Returns the value of the first element in the array that satisfies the provided testing function.

9. `findIndex(callback(currentValue, index, array))`: Returns the index of the first element in the array that satisfies the provided testing function.

10. `entries()`: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

11. `keys()`: Returns a new Array Iterator that contains the keys for each index in the array.

12. `values()`: Returns a new Array Iterator object that contains the values for each index in the array.

13. `flat(depth)`: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

14. `flatMap(callback(currentValue, index, array))`: Maps each element using a mapping function, then flattens the result into a new array.