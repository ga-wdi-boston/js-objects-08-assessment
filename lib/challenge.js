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

// 'Appointment'
// Description: Our app manages your calendar's appointments
// Every 'appointment' has
// - a date
// - a title
// - a start time
// - an end time
// Every 'appointment' can
// - create a reminder
// -repeat yearly, monthly, weekly, or daily

// 'Birthday'
// Description: Our app manages birthdays on your calendar
// Every 'birthday' has
// - a date
// - name of person with birthday
// Every 'birthday' can
// - create a reminder
// - repeat yearly

// 'Holiday'
// Description: Our app manages holidays on your calendar
// Every 'holiday' has
// - a date
// - a title
// Every 'holiday' can
// - create a reminder
// - repeat yearly or monthly
// - override appointments


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner = {
  name: '',
  address: {
    addressAndStreet: '',
    aptNumber: '',
    city: '',
    zipCode: ''
  }
};


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
  name: '',
  species: '',
  breed: '',
  noise: '',
  makeNoise: function() {
    return this.noise;
  }
};

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet = function(name, species, breed, noise) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise = noise;
  this.makeNoise = function() {
    return this.noise;
  };
};



module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
