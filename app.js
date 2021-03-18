// const form = document.querySelector("form")
// const btn = document.querySelector("button");

// btn.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const search = form.elements.query.value;
//     const question = {headers: {q: search}}
//     const config = {headers: {Accept: "application/json"}}
//     fetch("http://api.tvmaze.com/search/shows",question, config)
//     .then(res => res.json())
//     .then(data => console.log(data))
// })

const form = document.querySelector("#searchForm")
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const picture = document.querySelector(".images")
const getData = async(event) => {
    event.preventDefault();
    const search = form.elements.mike.value;
    // const config = {params: {q: search}}
    const url = `http://api.tvmaze.com/search/shows?q=${search}`;
    await fetch(url)
    .then(res => res.json())
    .then((data) => {
    // you can use .map to create a new array or you can just use data 
    // const loopData = data.map(element => element.show.name)
    const loopData = data;
    console.log(loopData)
    display(loopData)
})}

const display = async(loopData) => {
    ul.innerHTML = "";
    picture.innerHTML = "";
    loopData.forEach((result) => {
        const li = document.createElement("li");
        // if you used .map you will use the grayed one 
        // li.append(result);
        // li.append(result.show.name);
        if(result.show.image){
        const image = document.createElement("img")
        image.src = result.show.image.medium;
        picture.append(image)
        }
        // ul.append(li);
    })
    form.elements.mike.value = "";
}

form.addEventListener("submit", getData)






// form.addEventListener("submit", async(event) => {
//     event.preventDefault();
//     const search = form.elements.query.value;
//     const config = {params: {q: search}}
//     const res = await axios.get("http://api.tvmaze.com/search/shows", config)
//     console.log(res.data)
// });