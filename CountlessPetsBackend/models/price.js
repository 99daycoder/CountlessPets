// let mockData={
//     pet_breed: "Akita",
//     pet_age: "0",
//     city: "bla",
//     number_of_pets: 1

// }

function price(newQuote) {
  let basePrice = 120;
  let newPrice;

  // increase price 5% for each year up to 5years
  if (newQuote.pet_age < 1) {
    newPrice = basePrice;
  }
  if (newQuote.pet_age <= 5) {
    newPrice = basePrice + basePrice * 0.05 * newQuote.pet_age;
  }
  // for 6+ years increase 10% each year
  if (newQuote.pet_age >= 6) {
    newPrice = basePrice + basePrice * 0.1 * newQuote.pet_age;
  }

  if (
    newQuote.pet_breed === "Akita" ||
    newQuote.pet_breed === "Chinook" ||
    newQuote.pet_breed === "Harrier"
  ) {
    //10%
    newPrice = newPrice * 0.9;
  }

  if (
    newQuote.city === "London" ||
    newQuote.city === "Manchester" ||
    newQuote.city === "Birmingham"
  ) {
    newPrice = newPrice * 1.15;
  }

  if (newQuote.number_of_pets >= 2) {
    newPrice =
      newQuote.number_of_pets * newPrice -
      basePrice * 0.1 * newQuote.number_of_pets;
  }
  return newPrice;
}

// console.log ("price", price(mockData))

export default price;

//[newQuote.pet_type, newQuote.pet_breed, newQuote.pet_age, newQuote.gender, newQuote.name,  newQuote.address, newQuote.city, newQuote.postcode, newQuote.number_of_pets ]
