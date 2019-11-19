// Use Node-style imports for dependencies.
const axios = require("axios");
const result = require("./result.js");

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios
    .get(BASE_URL)
    .then(response => {
      // console.log(response.data);
      return setResult(response.data);
    })
    .catch(error => {
      return setError("Invalid Input");
    });
};

const showDetails = selectedPet => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }
  // Fill out as part of Wave 2.
  axios
    .get(BASE_URL + selectedPet)
    .then(response => {
      console.log("Successful");
      setResult(response.data);
    })
    .catch(error => {
      return setError("Failed, could not show details, select somthing else");
    });
};

const removePet = selectedPet => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  // Fill out as part of Wave 3.
  axios
    .delete(BASE_URL + selectedPet)
    .then(response => {
      console.log("Successfully deleted");
      return setResult(response.data);
    })
    .catch(error => {
      return setError("Failed, to remove");
    });
};

const addPet = petInfo => {
  // Fill out as part of Wave 4.
  axios
    .post(BASE_URL, petInfo)
    .then(response => {
      console.log("Successfully added");
      return setResult(petInfo);
    })
    .catch(error => {
      return setError("failed, to add a pet");
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
};
