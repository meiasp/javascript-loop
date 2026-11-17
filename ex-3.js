// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0]; //start checking from index0
for (let x of scores){ //put array value of scores in x
    if(x < minScore){ //meaning if current array (x) is less than index0 array
        minScore = x; //update minScore as the current array (x)
    }
}

console.log(minScore);
