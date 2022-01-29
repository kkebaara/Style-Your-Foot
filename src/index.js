const baseUrl = "http://localhost:3000/shoes";
//const oneShoeUrl = "http://localhost:3000/shoes/1";
const shoeDiv = document.getElementById('shoe');

function getShoe(param1, param2, param3){
    fetch(baseUrl+`?activity=${param1}&resistance=${param2}&color=${param3}`)
    .then((resp) => resp.json())
    .then((allShoes) => {
        console.log(allShoes);
        function displayShoe(shoe){
            const yourPair = document.getElementById("shoe")
            yourPair.src = shoe.image
        }

        displayShoe(allShoes[0])
        
        
    //allShoes.forEach(displayShoe)

        // allShoes.forEach(() => {
        //     const newShoe = document.getElementById("images")
        // })
        // //forEach(allShoes)
        // //console.log(forEach)
        
    })
}

//displayOneShoe on main page

// fetch(baseUrl)
//   .then(function (response) {
//     // The JSON data will arrive here
//   })
//   .catch(function (err) {
//     // If an error occured, you will catch it here
//   });

const formSelector = document.querySelector('form');
// console.log(formSelector)

//event handler and event listener
formSelector.addEventListener("submit", (event) => {
    event.preventDefault();

    const activity = event.target.Activities.value
    const weather = event.target.weather.value
    const color = event.target.Color.value

    getShoe(activity, weather, color);
    

    // console.log(event.target.Activities.value)
    // console.log(event.target.weather.value)
    // console.log(event.target.Color.value)
    //we need to fetch and return a model and image below
    //function getOneShoe(shoes) {
        
        // fetch("http://localhost:3000/shoes/1")
        // .then((resp) => resp.json)
    });
