const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
fetch("https://www.dbooks.org/api/recent")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data.books);
    
    fun1(data.books);
    fun2(data.books);
    fun3(data.books);
    fun4(data.books);
    fun5(data.books);
})
function fun1(data){
    let a = document.querySelector(".product-container");
    
    data.forEach((ele,item) => {
        let main = document.createElement("div");
        main.setAttribute("class", "product-card");

        let div1 = document.createElement("div");
        div1.setAttribute("class","product-image")

        let span = document.createElement("span");
        span.setAttribute("class","discount-tag")

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.setAttribute("class","product-thumb");

        let button =  document.createElement("button");
        button.setAttribute("class","card-btn")
        div1.append(span, image, button);
        button.textContent = "Add to wishlist";
        button.addEventListener("click",function(){
            alert(`${ele.title} is added to Wishlist`)
            let bookd = JSON.parse(localStorage.getItem("wish"))||[];
            let a = ele;
            a.price = Math.floor(Math.random()*1000)
            bookd.push(a);
            localStorage.setItem("wish",JSON.stringify(bookd));
        })

        let div2 = document.createElement("div");
        div2.setAttribute("class", "product-info");

        let h2 = document.createElement("h2");
        h2.textContent = ele.authors;
        h2.setAttribute("class","product-brand")

        let p = document.createElement("p");
        p.textContent = ele.title;
        p.setAttribute("class", "product-short-description")

        let span2 = document.createElement("span");
        span2.textContent = `Rs. ${ Math.floor(Math.random()*1000)}`
        span2.setAttribute("clas","price");
        div2.append(h2, p, span2);

        main.append(div1, div2)
        
        a.append(main);
        
    })
}
function fun2(data){
    let b = document.querySelector("#oneone");
    
    data.forEach((ele,item) => {
        let main = document.createElement("div");
        main.setAttribute("class", "product-card");

        let div1 = document.createElement("div");
        div1.setAttribute("class","product-image")

        let span = document.createElement("span");
        span.setAttribute("class","discount-tag")

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.setAttribute("class","product-thumb");

        let button =  document.createElement("button");
        button.setAttribute("class","card-btn")
        div1.append(span, image, button);
        button.textContent = "Add to wishlist";
        button.addEventListener("click",function(){
            alert(`${ele.title} is added to Wishlist`)
            let bookd = JSON.parse(localStorage.getItem("wish"))||[];
            let a = ele;
            a.price = Math.floor(Math.random()*1000)
            bookd.push(a);
            localStorage.setItem("wish",JSON.stringify(bookd));
        })


        let div2 = document.createElement("div");
        div2.setAttribute("class", "product-info");

        let h2 = document.createElement("h2");
        h2.textContent = ele.authors;
        h2.setAttribute("class","product-brand")

        let p = document.createElement("p");
        p.textContent = ele.title;
        p.setAttribute("class", "product-short-description")

        let span2 = document.createElement("span");
        span2.textContent = `Rs. ${ Math.floor(Math.random()*1000)}`;
        span2.setAttribute("clas","price");

        div2.append(h2, p, span2);

        main.append(div1, div2)
        
        b.append(main);
        
    })
}
function fun3(data){
    let c = document.querySelector("#two");
    
    data.forEach((ele,item) => {
        let main = document.createElement("div");
        main.setAttribute("class", "product-card");

        let div1 = document.createElement("div");
        div1.setAttribute("class","product-image")

        let span = document.createElement("span");
        span.setAttribute("class","discount-tag")

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.setAttribute("class","product-thumb");

        let button =  document.createElement("button");
        button.setAttribute("class","card-btn")
        div1.append(span, image, button);
        button.textContent = "Add to wishlist";
        button.addEventListener("click",function(){
            alert(`${ele.title} is added to Wishlist`)
            let bookd = JSON.parse(localStorage.getItem("wish"))||[];
            let a = ele;
            a.price = Math.floor(Math.random()*1000)
            bookd.push(a);
            localStorage.setItem("wish",JSON.stringify(bookd));
        })


        let div2 = document.createElement("div");
        div2.setAttribute("class", "product-info");

        let h2 = document.createElement("h2");
        h2.textContent = ele.authors;
        h2.setAttribute("class","product-brand")

        let p = document.createElement("p");
        p.textContent = ele.title;
        p.setAttribute("class", "product-short-description")

        let span2 = document.createElement("span");
        span2.textContent =`Rs. ${ Math.floor(Math.random()*1000)}`;
        span2.setAttribute("clas","price");

        div2.append(h2, p, span2);

        main.append(div1, div2)
        
        c.append(main);
        
    })
}
function fun4(data){
    let d = document.querySelector("#three");
    
    data.forEach((ele,item) => {
        let main = document.createElement("div");
        main.setAttribute("class", "product-card");

        let div1 = document.createElement("div");
        div1.setAttribute("class","product-image")

        let span = document.createElement("span");
        span.setAttribute("class","discount-tag")

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.setAttribute("class","product-thumb");

        let button =  document.createElement("button");
        button.setAttribute("class","card-btn")
        div1.append(span, image, button);
        button.textContent = "Add to wishlist";
        button.addEventListener("click",function(){
            alert(`${ele.title} is added to Wishlist`)
            let bookd = JSON.parse(localStorage.getItem("wish"))||[];
            let a = ele;
            a.price = Math.floor(Math.random()*1000)
            bookd.push(a);
            localStorage.setItem("wish",JSON.stringify(bookd));
        })

        let div2 = document.createElement("div");
        div2.setAttribute("class", "product-info");

        let h2 = document.createElement("h2");
        h2.textContent = ele.authors;
        h2.setAttribute("class","product-brand")

        let p = document.createElement("p");
        p.textContent = ele.title;
        p.setAttribute("class", "product-short-description")

        let span2 = document.createElement("span");
        span2.textContent =  `Rs. ${ Math.floor(Math.random()*1000)}`;
        span2.setAttribute("clas","price");

        div2.append(h2, p, span2);

        main.append(div1, div2)
        
        d.append(main);
        
    })
}
function fun5(data){
    let e = document.querySelector("#four");
    
    data.forEach((ele,item) => {
        let main = document.createElement("div");
        main.setAttribute("class", "product-card");

        let div1 = document.createElement("div");
        div1.setAttribute("class","product-image")

        let span = document.createElement("span");
        span.setAttribute("class","discount-tag")

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.setAttribute("class","product-thumb");

        let button =  document.createElement("button");
        button.setAttribute("class","card-btn")
        div1.append(span, image, button);
        button.textContent = "Add to wishlist";
        button.addEventListener("click",function(){
            alert(`${ele.title} is added to Wishlist`)
            let bookd = JSON.parse(localStorage.getItem("wish"))||[];
            let a = ele;
            a.price = Math.floor(Math.random()*1000)
            bookd.push(a);
            localStorage.setItem("wish",JSON.stringify(bookd));
        })


        let div2 = document.createElement("div");
        div2.setAttribute("class", "product-info");

        let h2 = document.createElement("h2");
        h2.textContent = ele.authors;
        h2.setAttribute("class","product-brand")

        let p = document.createElement("p");
        p.textContent = ele.title;
        p.setAttribute("class", "product-short-description")

        let span2 = document.createElement("span");
        span2.textContent = `Rs. ${ Math.floor(Math.random()*1000)}`;
        span2.setAttribute("clas","price");

        div2.append(h2, p, span2);

        main.append(div1, div2)
        
        e.append(main);
        
    })
}



document.querySelector("#accIcon").addEventListener("click",()=>{
    window.location.assign("./signup.html")
  })





