let newThisWeek = document.getElementById("newThisWeek")

let baseServerURL= "https://www.dbooks.org/api/recent"








// function getdata(data){
//     data
// }
var books=[];
fetchAndRenderproduct()

// console.log(booksdata)







function fetchAndRenderproduct(queryParamString = null) {
    fetch(`${baseServerURL}${queryParamString ? queryParamString : ""}`)
      .then((res) => res.json())
      .then((data) => {
        let books = data.books.map((book) => ({
          id: book.id,
          image: book.image,
          url:  `${baseServerURL}${book.url}`,
          title: book.title,
          author: book.author,
          subtitle: book.subtitle

        
        }));
         booksdata=books;
       
        renderCardList(booksdata);
      });
    
  }



 


  function renderCardList(cardData) {
    // console.log(cardData)
    let cardList = `
      <div class="card-list">
        ${booksdata
          .map((item) =>
            getCard(
         
              item.id,
              item.image,
              item.title,
              item.author,
              item.subtitle
              
            )
          )
          .join("")}
      </div>
    `;


    let searchbar= document.getElementById("addTodoForm")
   searchbar.addEventListener('submit', e=>{
    e.preventDefault()
    let value= document.getElementById("Hsearch").value;
    console.log(value)
  

   let newsearch= booksdata.filter(function(elem){
      return elem.title.toLowerCase().includes(value.toLowerCase())
      console.log(elem)
  })

  let cardi =

  `
      <div class="card-list-data">
        ${newsearch
          .map((item) =>
            getCard(
         
              item.id,
              item.image,
              item.title,
              item.author,
              item.subtitle
              
            )
          )
          .join("")}
      </div>
    `;

    if(value==''){
      document.querySelector("#searchproduct").innerHTML=null;

      alert("Please insert Product Name");
}else{
  document.querySelector("#searchproduct").innerHTML= cardi;

}
let searchProduct= document.getElementById('searchproduct');

   

let buttonInSearch =searchProduct.querySelectorAll("button");
buttonInSearch.forEach(el=>{
  el.addEventListener('click',e=>{
   console.log(e.target)
    booksdata.forEach(ele=>{
       let wishList = JSON.parse(localStorage.getItem("wish")) || [];
      if(ele.id=== e.target.parentNode.getAttribute('data-id')){
        alert(`${ele.title} added`)
        ele.price =Math.floor(Math.random()*1000);
       wishList.push(ele)
        localStorage.setItem('wish', JSON.stringify(wishList))
      }
    })
  })
})
 
   })
  


   


  


  



   let newThisWeek= document.getElementById('newThisWeek');
    newThisWeek.innerHTML = cardList;
    console.log(newThisWeek)

    let button =document.querySelectorAll("button");
    button.forEach(el=>{
      el.addEventListener('click',e=>{
        booksdata.forEach(ele=>{
           let wishList = JSON.parse(localStorage.getItem("wish")) || [];
          if(ele.id=== e.target.parentNode.getAttribute('data-id')){
            alert(`${ele.title} added`)
            ele.price =Math.floor(Math.random()*1000);
           wishList.push(ele)
            localStorage.setItem('wish', JSON.stringify(wishList))
          }
        })
      })
    })
   

    
   document.querySelector('#products').innerHTML=cardList

   let addtocart =   document.querySelector('#products').querySelectorAll("button");
   addtocart.forEach(el=>{
     el.addEventListener('click',e=>{
       booksdata.forEach(ele=>{
        let wish = JSON.parse(localStorage.getItem("wish")) || [];
          if(ele.id=== e.target.parentNode.getAttribute('data-id')){
            alert(`${ele.title} added`)
            ele.price =Math.floor(Math.random()*1000);
            wish.push(ele)
            localStorage.setItem('wish', JSON.stringify(wish))
          }
       })
     })
   })
    
  }

  // productscard()

  // function productscard() {
  //   let cardList = `
  //     <div class="card-list">
  //       ${booksdata
  //         .map((item) =>
  //           getCard(
         
  //             item.id,
  //             item.imageUrl,
  //             item.title,
  //             item.author,
  //             item.subtitle
              
  //           )
  //         )
  //         .join("")}
  //     </div>
  //   `;
  
  //   document.getElementById("products").innerHTML = cardList;
    
  //   let button =newThisWeek.querySelectorAll("button");
  //   button.forEach(el=>{
  //     el.addEventListener('click',e=>{
  //       booksdata.forEach(ele=>{
  //         if(ele.id=== e.target.parentNode.getAttribute('data-id')){
  //           alert(`${ele.title} added`)
  //         }
  //       })
  //     })
  //   })
   
  // }



  function getCard(id, imageUrl, title, author, subtitle) {
    let card = `
        <div class="card hide" data-id=${id} >
          <div class="card-image">
          <img src=${imageUrl} alt="book" />
          </div>
          <div class="card-body">
            <h4 class="card-item card-title"> ${author==undefined? 'John Sigma':author }</h4>
            <div class="card-item card-description">
            <p>${title}</p>
            </div>
            <div class ="card-item card-additional-info">${subtitle}</div>
          </div>
          <button  class="button-27" role="button">Add to Wishlist</button>
        </div>
        
       
    `;
    return card;
  }




  // let searchbar= document.getElementById("addTodoForm")
  //  searchbar.addEventListener('submit', e=>{
  //   e.preventDefault()
  //   let value= document.getElementById("Hsearch").value;
  //   console.log(value);

  //   console.log()



  //  })

  let btn = document.querySelector("#fifty-fifty");
  btn.addEventListener("click",function(){
    window.location.assign("./ebook.html")
  })


  let imgToEbook= document.querySelector(".imageSlider")
  imgToEbook.addEventListener('click',(e)=>{
    window.location.assign("./bookpage.html")
  })

  document.querySelector("#accIcon").addEventListener("click",()=>{
    window.location.assign("./signup.html")
  })





  
 




 



