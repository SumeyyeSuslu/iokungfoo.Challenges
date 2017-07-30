/**
 * Title: Contains Duplicate
 *
 * Summary: Determine if a string contains any duplicate letters.
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * input: String
 * 
 * output: true if input contains any duplicate letters
 *         else false
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: "asdfghjklqwergtyuiop"
 *  output: true
 *
 * Test Case 2:
 *   input: "asdfghjklqwertyuiop"
 *  output: false
 *
 * Test Case 3:
 *   input: ""
 *  output: false
 *
 *  [show all test cases]
 *
 * Test Case 4:
 *   input: "zxcvbnmasdfghjnklop"
 *  output: true
 */

function kungfoo(input) {
var arr =  new Array(256).fill(0);
for ( var i=0; i<=input.length; i++){
    arr[input.charCodeAt(i)]++;
}
for ( var j=0; j<=input.length; j++){
    if (arr[input.charCodeAt(j)]>1)
    return true;
}
return false;
}
