import fetch from "node-fetch";

export default async function validation(newQuote) {
  let validatedPostcode = await validatePostcode(newQuote);
  let validatedBreed = await validateDogBreed(newQuote);

  return [validatedPostcode, validatedBreed];
}

async function validatePostcode(newQuote) {
  const postcode = newQuote.postcode;

  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  const data = await response.json();

  //console.log("outside", validatedPostcode);
  if (data.status === 200) {
    return true;
    //console.log("inside", validatedPostcode);
  }
  return false;
}

async function validateDogBreed(newQuote) {
  let dogList = [];
 

  const enteredBreed = newQuote.pet_breed.toLowerCase();

  let response = await fetch(`https://api.thedogapi.com/v1/breeds/`);
  const data = await response.json();

  data.map((breed) => {
    let dogBreed = breed.name.toLowerCase();
    dogList.push(dogBreed);

  });

  //   console.log("outside", validatedBreed);
  if (dogList.includes(enteredBreed)) {
    return true;
    // console.log("inside", validatedBreed);
  }

  return false;
}

//[newQuote.pet_type, newQuote.pet_breed, newQuote.pet_age, newQuote.gender, newQuote.name,  newQuote.address, newQuote.city, newQuote.postcode, newQuote.number_of_pets ]
