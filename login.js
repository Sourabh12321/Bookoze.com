
let form = document.querySelector('.editform');

let userdata= 
JSON.parse(localStorage.getItem('userdata')) || [];

document.querySelector('.editform').addEventListener('submit', (el)=>{
  el.preventDefault();
  let mail=document.getElementById('email').value;
  let pasword= document.getElementById('password').value;
// console.log(mail,pasword);


  let id=false;
  for(let i=0;i<userdata.length;i++){
      if(userdata[i].email===mail){
          id=true;
      }
  }

  let pwd=false;
  for(let i=0;i<userdata.length;i++){
      if(userdata[i].password===pasword){
          pwd=true;
      }
  }

  if(id==false){
      alert('Please Insert Correct Email Id')
      if(pwd==false){
          alert('Your Password is Incorrect')
      }
  }
 
  if(id==true && pwd==true ){
      alert('You are successfully logged in to the page');
      window.location.replace("index.html");
  }

})
   





  //  login signup Symbol 
  document.querySelector("#accIcon").addEventListener("click",()=>{
    window.location.assign("./signup.html")
  })