/**
 * Finds combinations of numbers that occur more than once in the provided data.
 *
 * @param {number[][]} data - An 2d-array of number combinations.
 * @param {number} length - The length of combinations of interest
 * @returns {Object} An object where the keys are sorted and stringified arrays of the specified length,
 *                   and the values are the number of occurrences of the combination. Occurrences of only
 * 					 1 are not of interest and must not be included.
 *
 * @example
 * const DATA = [[1, 2, 4, 6], [3, 5], [1, 4, 6], [3, 4, 6], [4]];
 * algorithm(DATA, 2); // { "[4,6]": 3, "[1,4]": 2, "[1,6]": 2 }
 * algorithm(DATA, 3); // { "[1,4,6]": 2 }
 *
 * Test your algorithm by running 'node test' (without the quotes, requires node.js)
 */
function algorithm(data, length) {
	// TODO implement your algorithm here
	// the existing code creates the results for the example data to make the test pass

	let result = {};
	function addResult(valueArray, amount) {
		result[JSON.stringify(valueArray.sort())] = amount;
	}

	if (length === 3) {
		addResult([1, 4, 6], 2);
	} else if (length === 2) {
		addResult([1, 6], 2);
		addResult([4, 6], 3);
		addResult([1, 4], 2);
	}

	return result;
}

module.exports = algorithm;
