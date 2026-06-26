function mergeAlternately(word1, word2) {
    let result = [];
    let i = 0, j = 0;
    const len1 = word1.length, len2 = word2.length;

    while (i < len1 || j < len2) {
        if (i < len1) {
            result.push(word1[i]);
            i++;
        }
        if (j < len2) {
            result.push(word2[j]);
            j++;
        }
    }

    return result.join("");
}
let word1 = "abc", word2 = "pqr";
console.log(mergeAlternately(word1, word2)); // Output: "apbqcr"                                                                        