let cartData = JSON.parse(localStorage.getItem("cart-list")) || [];
console.log(cartData)
let totalItems = document.getElementById('total-items')
let productCart = document.getElementById('item-cards')
let subtotal = document.getElementById('subtotal-items')
let subtotalSum = document.getElementById('subtotal')
let estimatedShipping = document.getElementById('estimated-shipping')
let tax = document.getElementById('tax')
let orderTotal = document.getElementById("order-total")
let alert = document.getElementById("alert-here")
let couponInput = document.getElementById("apply-coupon-input")
let couponButton = document.getElementById("coupon-btn")

function append(){
    productCart.innerHTML = null

    cartData.map((item,index) => {
        let div = document.createElement("div")
        div.setAttribute("class","card-divs")

        let title = document.createElement("h3")
        title.innerText = item.title

        let imagediv = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src",item.imageUrl)

        let otherthings = document.createElement("div")
        let price = document.createElement("p")
        price.innerText = "$" + item.price

        totalItems.innerText = cartData.length
        subtotal.innerText = cartData.length

        let quan = document.createElement("div")
        quan.setAttribute("id","quantity-div")
        let add = document.createElement("button")
        let less = document.createElement("button")
        let span = document.createElement("span")
        add.innerText = "+"
        less.innerText = "-"
        span.innerText = item.quantity

        add.addEventListener("click",()=>{
            item.quantity++
            span.innerText = item.quantity
            totalOf()
        })
        less.addEventListener("click",()=>{
            if(item.quantity>1){
                item.quantity--
            }
            span.innerText = item.quantity
            totalOf()
        })

        let remove = document.createElement("button")
        remove.setAttribute("id","removebtn")
        remove.innerText = "Remove"

        remove.addEventListener("click",()=>{
            cartData.splice(index,1)
            localStorage.setItem("cart",JSON.stringify(cartData))
            append()
            totalOf()
              
          })


        imagediv.append(image)
        quan.append(add,span,less,remove)
        otherthings.append(price)
        div.append(title,imagediv,otherthings,quan)
        productCart.append(div)

    })
}

append()

let sum;
function totalOf(){
    sum = 0
    for(let key of cartData){
        sum += key.price*key.quantity
    }
    subtotalSum.innerText = Math.ceil(sum) 
    tax.innerText = Math.ceil(sum*0.05)
    orderTotal.innerText = Math.ceil(sum)
    if(sum<40){
        if(sum==0){
            estimatedShipping.innerText = 0
        }else{
            estimatedShipping.innerText = 40
            sum += 40
            
            orderTotal.innerText = Math.ceil(sum)
        }
        alert.innerText = `
        ADD $${40-Math.floor(sum)} OF ELIGIBLE ITEMS TO QUALIFY FOR FREE SHIPPING
        `
    }else{
        estimatedShipping.innerText = 0
        alert.innerText = `
        YOUR ORDER QUALIFIES FOR FREE STANDARD SHIPPING
        `
    }
    sum = Math.ceil(sum)
    localStorage.setItem("sum",sum)
}
totalOf()


couponButton.addEventListener("click",()=>{
    let result = couponInput.value

    if(result == "WE5"){
        temp = sum*0.3
        sum +=Math.ceil(temp)
        orderTotal.innerText = Math.ceil(sum-temp) + `(-${Math.ceil(temp)})`
    }
})
