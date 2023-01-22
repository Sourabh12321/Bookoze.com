let fiction = document.getElementById("fic");

let fetchedData = [];

fetch("https://63ca48cef36cbbdfc7554c04.mockapi.io/books3")
.then((responseObj) => {
  return responseObj.json();
})
.then((actualData) => {
fetchedData=actualData;

console.log(actualData)
displayBooks(actualData);
})
.catch((error) => {
console.log(error);
})

// displayBooks()

function displayBooks(Array){
    fiction.innerHTML = null;
   Array.forEach(element => {
      
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src",element.image);

    let title = document.createElement("p");
    title.innerText = element.title;

    // let subtitle = document.createElement("p");
    // subtitle.innerText = element.subtitle;

    let  authors = document.createElement("p");
     authors.innerText = element.authors;
    
     let price = document.createElement("h3");
     price.innerText ="$" +Math.floor(Math.random()*1000);

    let wishlist = document.createElement("button");
    wishlist.innerText = "Wishlist";
    

    wishlist.addEventListener("click",() => {

      let restData = JSON.parse(localStorage.getItem("wish"));
      
      
      if(restData===null){
        restData=[];
      }
    let alreadyAdded= false;
    for(let i=0;i<restData.length;i++){
      if(restData[i].id === element.id){
        alreadyAdded= true;
        break;
      }
    }
    
    if(alreadyAdded === true){
      alert("Book Already in Wishlist")
    }else{
      element.price = Math.floor(Math.random()*1000)
      restData.push(element)
      localStorage.setItem("wish",JSON.stringify(restData))
      alert("Book Added To Wishlist")
    }

    })
   card.append(image, title, authors,price, wishlist);
   fiction.append(card);
  })
   }