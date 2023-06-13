var searchform = document.querySelector(".search-bar");
var descp = document.querySelector(".descp");
var Name = document.querySelector(".marvel");
let apikey = "bf3413e0ed5ed4490f2abdc1bb093735";
let hash = "6ca06d775cb93268b07bb8626af30257";


const getInputvalue = (event) => {
  event.preventDefault();
  let searchText = searchform.search.value;
  //   console.log(searchText)
  fetchAllSuperHero(searchText);
};
searchform.addEventListener("submit", getInputvalue);

function displayImage() {
  
  var imageElement = document.getElementById('image');

  // Update the source of the image element
  imageElement.src = 'img/' + searchText + '.png';
}

const fetchAllSuperHero = async (searchText) => {
  let url = `https://gateway.marvel.com/v1/public/characters?name=${searchText}&ts=1&apikey=${apikey}&hash=${hash}`;
  try {
    const response = await fetch(url);
    allData = await response.json();
    console.log(allData);
    allData.data["results"].forEach(element => {
      // console.log(element.urls["0"]["url"]);
      descp.innerHTML = `${element.description}`;
      Name.innerHTML = `${element.name}`;
      
      // model.innerHTML = `<img src="${element.thumbnail["path"] + "." + element.thumbnail["extension"]}"/>`;
    });

  } catch {
    console.log(Error);
  }
};



// fetch('https://gateway.marvel.com/v1/public/characters?name=captain america&ts=1&apikey=bf3413e0ed5ed4490f2abdc1bb093735&hash=6ca06d775cb93268b07bb8626af30257').then((data)=>{
//     return data.json();
//     }).then((objectdata)=>{
//     console.log(objectdata);
//     })
