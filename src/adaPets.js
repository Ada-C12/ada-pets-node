// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => { axios.get(BASE_URL)
.then((response) => {
      // console.log('The data given back by the API response is:', response.data);
      setResult(response.data) })
    .catch((error) => {
      // console.log('The data given back by the API response is:', error.response.data);
      setError('There was an error with this request!');
    });
  }

const showDetails = (selectedPet) => {

  axios.get(BASE_URL + `${selectedPet}`)
    .then((response) => {
      // console.log(response.data);
      setResult(response.data) 
    })
    .catch((error) => {
      if (!selectedPet) {
        setError("You tried to show details for a pet without selecting it!");
        return; }
      else
      {  setError('/detailsfailed/' + `${selectedPet}`); }
    });
  }

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 3.
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
