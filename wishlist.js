let basket = document.getElementById("items-in-wishlist");
let sorting = document.getElementById("sort")
let restData = JSON.parse(localStorage.getItem("wish-list"));
if(restData===null){
  restData=[];
}

 sorting.addEventListener("change", () => {
  //  let sortdata = restData.forEach((element) => {
 if(sorting.value==="ZtoA"){
  restData.sort((a,b) => {
    if(a.title>b.title)
    return -1;
  })
}
if(sorting.value==="AtoZ"){
  restData.sort((a,b) => {
    if(a.title<b.title)
    return -1;
  }) 
}
if(sorting.value==="default"){
  return -1;
}
displayBooks(restData);
 })

     displayBooks(restData);

    function displayBooks(Array){ 
      basket.innerHTML=null
    Array.forEach((element) => { 
      let book = document.createElement("div")
     
      let img = document.createElement("div")
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    
    let card = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = element.title;

    let subtitle = document.createElement("h3");
    subtitle.innerText = element.subtitle;

    let  authors = document.createElement("p");
     authors.innerText = element. authors;

     let add = document.createElement("button")
     add.innerText = "Add to Cart"
     
     add.addEventListener("click",() => {
      let cartData = JSON.parse(localStorage.getItem("cart-list"));
      if(cartData===null){
        cartData=[];
      }
    let alreadyAdded= false;
    for(let i=0;i<cartData.length;i++){
      if(cartData[i].id === element.id){
        alreadyAdded= true;
        break;
      }
    }
    
    if(alreadyAdded === true){
      alert("Book Already in Cart")
    }else{
      cartData.push(element)
      localStorage.setItem("cart-list",JSON.stringify(cartData))
      alert("Book Added To Cart")
    }

    })
 
    
   img.append(image) 
   card.append(title, subtitle, authors, add);
   book.append(img,card)
   basket.append(book);
    });
   }