/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroids = data.asteroids;

  const filterYear = asteroids.map((element) => element.discoveryYear);

  const newObj = asteroids.map((element) => {
    return {
      year: element.discoveryYear,
      countDiscYear: filterYear.reduce((accumletor, value) => {
        if (value === element.discoveryYear) {
          accumletor += 1;
        }
        return accumletor;
      }, 0),
    };
  });

  let max = 0;
  let year;
  for (let i = 0; i < newObj.length; i++) {
    if (newObj[i].countDiscYear > max) {
      max = newObj[i].countDiscYear;
      year = newObj[i].year;
    }
  }

  return year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
