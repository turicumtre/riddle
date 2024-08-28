const DATA = [
	[1, 2, 4, 6], 
	[3, 5], 
	[1, 4, 6], 
	[3, 4, 5, 6], 
	[2]
];

function fancyAlgorithm(length) {
	const combinationCount = {};

	// Helper function to generate combinations of a specific size
	function generateCombinations(arr, size) {
		const results = [];

		function helper(start, path) {
			if (path.length === size) {
				results.push([...path]);
				return;
			}

			for (let i = start; i < arr.length; i++) {
				path.push(arr[i]);
				helper(i + 1, path);
				path.pop();
			}
		}

		helper(0, []);
		return results;
	}

	// Loop through each array in the input data
	for (let arr of DATA) {
		const combinations = generateCombinations(arr, length);

		// Count each combination
		for (let combination of combinations) {
			// Sort the combination to ensure uniqueness
			combination.sort((a, b) => a - b);
			const key = JSON.stringify(combination);

			if (combinationCount[key]) {
				combinationCount[key]++;
			} else {
				combinationCount[key] = 1;
			}
		}
	}

	// Filter out combinations that occur only once
	for (let key in combinationCount) {
		if (combinationCount[key] < 2) {
			delete combinationCount[key];
		}
	}

	return combinationCount;
}

////////////////////////// TESTS //////////////////////////

function check(length, expectedResult) {
	const result = sorted(fancyAlgorithm(length));

	for (let key of Object.keys(expectedResult)) {
		const expectedAmount = expectedResult[key];
		const actualAmount = result[key] || "[value combination not in result]";
		if (expectedAmount !== actualAmount) {
			console.error(`Test for length ${length} failed: Expected ${key}: ${expectedAmount}, but got ${actualAmount}`);
			return;
		}
		delete result[key];
	}

	if (Object.keys(result).length > 0) {
		console.error(`Test for length ${length} failed: Unexpected values in result ${JSON.stringify(Object.keys(result))}`);
	} else {
		console.log(`Test for length ${length} passed :D`);
	}
}

function sorted(obj) {
	const sortedObj = {};
	Object.keys(obj).sort().forEach((key) => {
		sortedObj[key] = obj[key];
	});
	return sortedObj;
}

check(2, {"[1,4]": 2, "[1,6]": 2, "[3,5]": 2, "[4,6]": 3});
check(3, {"[1,4,6]": 2});