const clearButton = document.getElementById("clearButton");
const searchButton = document.getElementById("searchButton");

clearButton.addEventListener("click", clearSearch);
searchButton.addEventListener("click", generateSearchResult);

function clearSearch() {
  recResult.innerHTML = "";
}

function generateSearchResult() {
  const recResult = document.getElementById("recResult");
  const searchInput = document.getElementById("searchInput");
  let searchObjL = searchInput.value.toLowerCase();
  recResult.innerHTML = "";

  let searchObjLt;

  if (searchObjL == "beaches") {
    searchObjLt = "beach";
  } else if (searchObjL == "temples") {
    searchObjLt = "temple";
  } else if (searchObjL == "countries") {
    searchObjLt = "country";
  } else {
    searchObjLt = searchObjL;
  }

  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(searchObjLt);
      if (searchObjLt == "beach") {
        recResult.innerHTML += `<h2>Name: ${data.beaches[0].name}</h2><br>`;
        recResult.innerHTML += `<p>Description: ${data.beaches[0].description}</p><br><br>`;
        recResult.innerHTML += `<img src="${data.beaches[0].imageUrl}" alt="hjh">`;

        recResult.innerHTML += `<h2>Name: ${data.beaches[1].name}</h2><br>`;
        recResult.innerHTML += `<p>Description: ${data.beaches[1].description}</p><br><br>`;
        recResult.innerHTML += `<img src="${data.beaches[1].imageUrl}" alt="hjh">`;
      } else if (searchObjLt == "temple") {
        recResult.innerHTML += `<h2>Name: ${data.temples[0].name}</h2><br>`;
        recResult.innerHTML += `<p>Description: ${data.temples[0].description}</p><br><br>`;
        recResult.innerHTML += `<img src="${data.temples[0].imageUrl}" alt="hjh">`;

        recResult.innerHTML += `<h2>Name: ${data.temples[1].name}</h2><br>`;
        recResult.innerHTML += `<p>Description: ${data.temples[1].description}</p><br><br>`;
        recResult.innerHTML += `<img src="${data.temples[1].imageUrl}" alt="hjh">`;
      } else if (searchObjLt == "country") {
        recResult.innerHTML += `<h2>Name: ${data.countries[1].cities[0].name}</h2><br>`;
        recResult.innerHTML += `<p>Description: ${data.countries[1].cities[0].description}</p><br><br><br>`;
        recResult.innerHTML += `<img src="${data.countries[1].cities[0].imageUrl}" alt="hjh">`;

        recResult.innerHTML += `<h2>Name: ${data.countries[2].cities[1].name}</h2><br>`;
        recResult.innerHTML += `<p>Description: ${data.countries[2].cities[1].description}</p><br><br><br>`;
        recResult.innerHTML += `<img src="${data.countries[2].cities[1].imageUrl}" alt="hjh">`;
      }

      //   for (i of [0, 1, 2]) {
      //     if (data.countries[i].name.toLowerCase().includes(searchObjLt)) {
      //       recResult.innerHTML = `Name: ${data.countries[i].cities[0].name}<br>`;
      //       recResult.innerHTML += `Description: ${data.countries[i].cities[0].description}<br><br><br>`;
      //       recResult.innerHTML += `Name: ${data.countries[i].cities[1].name}<br>`;
      //       recResult.innerHTML += `Description: ${data.countries[i].cities[1].description}<br><br><br>`;
      //       console.log("1", recResult.innerHTML);

      //       for (j of [0, 1]) {
      //         if (
      //           data.countries[i].cities[j].name
      //             .toLowerCase()
      //             .includes(searchObjLt)
      //         ) {
      //           //   console.log(
      //           //     "this is the three:",
      //           //     data.countries[i].cities[j].name.toLowerCase()
      //           //   );
      //           recResult.innerHTML = `Name: ${data.countries[i].cities[j].name}<br><br>`;
      //           recResult.innerHTML += `Description: ${data.countries[i].cities[j].description}<br>`;
      //           console.log("2", recResult.innerHTML);
      //         }
      //       }
      //     }
      //     for (i of [0, 1])
      //       if (data.temples[i].name.toLowerCase().includes(searchObjLt)) {
      //         // console.log(
      //         //   "this is the three:",
      //         //   data.temples[i].name.toLowerCase()
      //         // );

      //         recResult.innerHTML = `Name: ${data.temples[i].name}<br><br>`;
      //         recResult.innerHTML += `Description: ${data.temples[i].description}<br>`;
      //         console.log("3", recResult.innerHTML);
      //       }

      //     for (i of [0, 1])
      //       if (data.beaches[i].name.toLowerCase().includes(searchObjLt)) {
      //         // console.log(
      //         //   "this is the three:",
      //         //   data.beaches[i].name.toLowerCase()
      //         // );
      //         recResult.innerHTML = `Name: ${data.beaches[i].name}<br><br>`;
      //         recResult.innerHTML += `Description: ${data.beaches[i].description}<br>`;
      //         console.log("4", recResult.innerHTML);
      //       }
      //     //recResult.innerHTML = `Name: ${data.Name}<br><br>`;
      //     //recResult.innerHTML += `Description: ${data.Description}<br>`;

      //     //searchObjLt = data.countries.find(
      //     //(item) => item.name.toLowerCase() === input
      //}
    })

    .catch((error) => {
      console.error("Error:", error);
      console.log("An error occurred while fetching data.");
    });
}
