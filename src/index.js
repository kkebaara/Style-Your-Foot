const baseUrl = "http://localhost:3000/shoes"
fetch(baseUrl)
    .then((resp) => resp.json())
    .then((json) => console.log(json));

    function activityMenu() {  
        const activity = document.getElementById("activity");  
        document.getElementById("activity").value = activity.options[activity.selectedIndex].text;  
        }  