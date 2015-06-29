/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
// 'Calendar'
// Description: Calendar App
// Every 'event' has
// - a 'day'
// - a 'month'
// - a 'yeah'
// - a 'time'
// Every 'event' can
// - be removed
// - be edited
// - be created
// - be duplicated
//  - repeat
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

// Answer Starts Here

var pet_owner = {
  firstName: 'Chris',
  lastName: 'Payne',
  address: {
    number: 123,
    street: 'Main St',
    city: 'Boston',
    state: 'MA',
    zip: '02135'
  }
};



// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

var some_pet = {
  name: 'Fluffy',
  species: 'dog',
  breed: 'lab',
  noise: 'ruff',
  makeNoise: function(){
    console.log(this.noise);
  }
};

// Answer Starts Here

// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet = function(name, species, breed, noise, makeNoise) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise = noise;
  this.makeNoise = function() {
    console.log(this.noise);
  };
};

var cat1 = new Pet('Peter', 'cat', 'mutt', 'meow');

// Answer Starts Here
console.log(some_pet);
console.log(some_pet.makeNoise(this.noise));
console.log(Pet.makeNoise);
// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
