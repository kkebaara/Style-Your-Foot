console.log("hello world")

const baseUrl = "http://localhost:3000/shoes";
const oneShoeUrl = "http://localhost:3000/shoes/1";
const shoeDiv = document.getElementById('shoe');

function getUrl(param1, param2, param3){
    fetch(baseUrl)
    .then((resp) => resp.json())
    .then((allShoes) => {
    })
}

//displayOneShoe on main page
function handleDisplayShoe(oneShoe){
    const newImage = document.createElement('img')
    newImage.src = oneShoe.image;
    shoeDiv.appendChild(newImage);
} 

const formSelector = document.querySelector('form');
console.log(formSelector)

//event handler and event listener
formSelector.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.Activities.value)

    //copy and trying this out
    // const actIvit = event.target.Activities.value;
    // const weathA = event.target.weather.value;
    // const colo = event.target.Color.value;

    // console.log(actIvit, weathA, colo)

    // const nameInput = document.getElementById("activ");
    // const restaurantInput = document.getElementById("weat");
    // const imageInput = document.getElementById("col");
    //handleDisplayShoe(newShoe);
    });
