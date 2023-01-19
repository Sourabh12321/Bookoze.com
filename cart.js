let addCart = JSON.parse(localStorage.getItem("cart")) || []
console.log(addCart)
let totalItems = document.getElementById('total-items')
let productCart = document.getElementById('item-cards')
let subtotal = document.getElementById('subtotal-items')

function append(){
    productCart.innerHTML = null

    addCart.map((item,index) => {
        let div = document.createElement("div")
        div.setAttribute("class","card-divs")

        let title = document.createElement("h3")
        title.innerText = item.title.substring(0,20)

        let imagediv = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src",item.image)

        let otherthings = document.createElement("div")
        let price = document.createElement("p")
        price.innerText = item.price

        totalItems.innerText = addCart.length
        subtotal.innerText = addCart.length

        let remove = document.createElement("button")
        remove.innerText = "Remove"


        imagediv.append(image)
        otherthings.append(price,remove)
        div.append(title,imagediv,otherthings)
        productCart.append(div)

    })
}

append()


// function appendData (data){
//     let getcard = `
//         ${
//             data.map(item => {
//                 return getdata(item.title,item.image,item.price)
//             }).join(" ")
//         }
//     `
//     productCart.innerHTML = getcard
// }

// appendData (addCart)

// function getdata(title,image,price){
//     let card = `
//     <div class="card">
//     <h3 id="title">${title}</h3>
//     <img src=${image} alt="">
//     <p>${price}</p>
//     </div>
//     `
// }