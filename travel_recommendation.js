fetch("travel_recommendation_api.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("data");
    );
});

  .catch((error) => {
    console.error("Error:", error);
    console.log("An error occurred while fetching data.");
  });