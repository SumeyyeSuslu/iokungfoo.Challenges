/**
 * Title: 13 + 1
 *
 * Summary: Determine if a number is a multiple of 13 or 1 greater then a multiple of 13.
 *
 * Difficulty: Easy
 *
 * Tags: Modulus
 *
 * Specification:
 *
 * input: positive integer.
 * 
 * output: return true if input is a multiple of 13 or 
 *         input is a multiple of 13 + 1 else return false.
 * 
 * Examples:
 * 25 -> false
 * 26 -> true
 * 27 -> true
 * 28 -> false
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: 41
 *  output: false
 *
 * Test Case 2:
 *   input: 52
 *  output: true
 *
 * Test Case 3:
 *   input: 66
 *  output: true
 *
 *  [show all test cases]
 *
 * Test Case 4:
 *   input: 90
 *  output: false
 *
 * Test Case 5:
 *   input: 69186
 *  output: true
 *
 * Test Case 6:
 *   input: 6917
 *  output: true
 *
 * Test Case 7:
 *   input: 66588
 *  output: false
 *
 * Test Case 8:
 *   input: 10152
 *  output: false
 */

function kungfoo(input) {

    if ( (input%13<=1)){
        return true;
    }
    return false;
}


