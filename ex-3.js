// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
minScore = scores[0];

for (const studentScores of scores) {
    if (minScore > studentScores) {
        minScore = studentScores;
    }
}

console.log(minScore);
