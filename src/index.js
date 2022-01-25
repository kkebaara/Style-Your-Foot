const baseUrl = "http://localhost:3000/shoes"
fetch(baseUrl)
    .then((resp) => resp.json())
    .then((json) => console.log(json));