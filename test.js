const algorithm = require("./algorithm");

function testAlgorithm(data, length, expectedResult) {
	const result = algorithm(data, length);

	// check expected keys
	for (let key of Object.keys(expectedResult)) {
		const expectedAmount = expectedResult[key];
		const actualAmount = result[key] || "[not in result]";
		if (expectedAmount !== actualAmount) {
			console.error(`🟥 Test for length ${length} failed: Expected ${key} with amout ${expectedAmount}, but was ${actualAmount}`);
			return;
		} else {
			delete result[key];
		}
	}

	// fail if unexpected keys
	if (Object.keys(result).length > 0) {
		const unexpectedKeys = JSON.stringify(Object.keys(result));
		console.error(
			`🟥 Test for length ${length} failed: ${result.length} unexpected results: ${unexpectedKeys} (don't occur combination in >1 dataset)`
		);
	} else {
		console.log(`🟩 Test for length ${length} passed`);
	}
}

const DATA = [[1, 2, 4, 6], [3, 5], [1, 4, 6], [3, 4, 6], [4]];
testAlgorithm(DATA, 2, {"[4,6]": 3, "[1,4]": 2, "[1,6]": 2});
testAlgorithm(DATA, 3, {"[1,4,6]": 2});
