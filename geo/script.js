async function getText(file)
{
    const arrayNumber = fetch(file)
    .then((response) => response.text())
    .then((data) => {
        const obj = JSON.parse(data);
        document.getElementById("json").innerHTML = obj;
        console.log(obj[0].nom);
        console.log(obj[0].longitude);
        console.log(obj[0].latitude);
    }); 
}

getText("geo-boulangeries.json");