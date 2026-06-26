function mostFrequentItemCount(collection) {
  // Do your magic. :)
  
  if (collection.length === 0) return 0;

  const counts = {};
  for (const x of collection) {
    counts[x] = (counts[x] || 0) + 1;
  }

  return Math.max(...Object.values(counts));
}
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3, 9, 9, 9, 9, 9, 9, 9]));

//list filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item === "number")
}
console.log(filter_list([1, 2, "a", "b", 3])); // Output: [1, 2, 3]