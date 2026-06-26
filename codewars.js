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

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item === "number");
}
console.log(filter_list([1, 2, "a", "b", 3, true, false, 5, "5"])); // Output: [1, 2, 3, 5]

function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  const result = {};
  const mealTypes = ['standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'];
  
  for (let i = 0; i < mealTypes.length; i++) {
    const mealType = mealTypes[i];
    const count = list.filter(developer => developer.meal === mealType).length;
    result[mealType] = count;
  }
  return result;
} 
const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
console.log(orderFood(list1));
