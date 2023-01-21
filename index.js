let newThisWeek = document.getElementById("newThisWeek")

let baseServerURL= "https://www.dbooks.org/api/recent"


console.log('ashihs')













// function getdata(data){
//     data
// }
let books=[];
fetchAndRenderproduct()







function fetchAndRenderproduct(queryParamString = null) {
    fetch(`${baseServerURL}${queryParamString ? queryParamString : ""}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.books);
        let books = data.books.map((book) => ({
          id: book.id,
          imageUrl: book.image,
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
    let cardList = `
      <div class="card-list">
        ${booksdata
          .map((item) =>
            getCard(
         
              item.id,
              item.imageUrl,
              item.title,
              item.author,
              item.subtitle
              
            )
          )
          .join("")}
      </div>
    `;


   let searchelement= document.getElementById("searchproduct");

   searchelement.innerHTML=cardList;
  



   let newThisWeek= document.getElementById('newThisWeek');
    newThisWeek.innerHTML = cardList;

    let button =newThisWeek.querySelectorAll("button");
    button.forEach(el=>{
      el.addEventListener('click',e=>{
        booksdata.forEach(ele=>{
          if(ele.id=== e.target.parentNode.getAttribute('data-id')){
            alert(`${ele.title} added`)
          }
        })
      })
    })
   

    
   document.querySelector('#products').innerHTML=cardList

   let addtocart =   document.querySelector('#products').querySelectorAll("button");
   addtocart.forEach(el=>{
     el.addEventListener('click',e=>{
       booksdata.forEach(ele=>{
         if(ele.id=== e.target.parentNode.getAttribute('data-id')){
           alert(`${ele.title} added`)
         }
       })
     })
   })
    
  }


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
          <button  class="button-27" role="button">Add to cart</button>
        </div>
        
       
    `;
    return card;
  }




  let searchbar= document.getElementById("addTodoForm")
   searchbar.addEventListener('submit', e=>{
    e.preventDefault()
    let value= document.getElementById("Hsearch").value;
    console.log(value);

    console.log()



   })

  



  
 




 



