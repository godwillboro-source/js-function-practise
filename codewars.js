function mostFrequentItemCount(collection) {
  // Do your magic. :)
  //return 0 if nothing is present in the array
  
  if (collection.length === 0) return 0;
  
  //Math.max is used to find the maximum number type(num) in the array
  //... is used as Math.max cannot diectly access items in the array
  //collection.map is used to create a shadoy copy of the array to store frequencies
  //.length is used to run through all the items in the "frequency array" 
  return Math.max(...collection.map(num =>
  collection.filter(i => i === num).length));
}
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3, 9, 9, 9, 9, 9, 9, 9]));

//list filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item === "number")
}
console.log(filter_list([1, 2, "a", "b", 3])); // Output: [1, 2, 3]