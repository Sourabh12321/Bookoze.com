let basket = document.getElementById("items-in-wishlist");
let sorting = document.getElementById("sort")
let restData = JSON.parse(localStorage.getItem("wish"))||[];
console.log(restData)
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
     authors.innerText ="John Sigma"

     let price = document.createElement("h3");
     price.innerText = element.price;

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
      cartData.push({...element,quantity:1})
      console.log(cartData)
      localStorage.setItem("cart-list",JSON.stringify(cartData))
      alert("Book Added To Cart")
    }

    })

    let remove=document.createElement("button")
    remove.innerText="Remove";
    remove.addEventListener("click",()=>{
        restData=restData.filter((el) => {
            return element.id!=el.id;
        })
        localStorage.setItem("wish",JSON.stringify(restData))
    displayBooks(restData)
    })

    
   img.append(image) 
   card.append(title, subtitle, authors, price, add, remove);
   book.append(img,card)
   basket.append(book);
    });
   }