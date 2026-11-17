// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

for (let i = 0; i < restaurants.length; i++){ //start at index0 ; reassign all i in array; i+1;
    newRestaurants[i] = "Restaurant Name: " + restaurants[i]; // new name is string + array restaurant
}

console.log(newRestaurants);
