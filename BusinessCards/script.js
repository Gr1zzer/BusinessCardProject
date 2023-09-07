const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards")
let para = document.createElement("p")

fetch(URL)
.then((response)=>response.json())
.then((jsObject)=>{
    let business = jsObject.business
    for(let i=0;i<business.length;i++){
        let card = document.createElement("section");
        card.className = "card";
        let img = document.createElement("img");
        img.src = business[i].imageurl;
        card.appendChild(img);
        let h2 = document.createElement("h2");
        h2.textContent = business[i].name;
        card.appendChild(h2);
        let discr = document.createElement("p");
        discr.textContent = business[i].description;
        card.appendChild(discr);
        document.querySelector("div.cards").appendChild(card);
    }
})
console.log(URL)