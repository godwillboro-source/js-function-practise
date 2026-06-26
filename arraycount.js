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