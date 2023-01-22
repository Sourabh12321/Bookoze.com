
let userdata= 
JSON.parse(localStorage.getItem('userdata')) || [];

document.querySelector('.formdata').addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('afdadfadfsf')
   
    let name= document.getElementById('name').value;
   
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;
    let obj={name:name, email:email, password:password}

            let isalready=false;
            for(let i=0;i<userdata.length;i++){
              if(userdata[i].email==obj.email){
              isalready=true;
              break;
              }}
             
              if(isalready===true){
                
                alert('This Email Id has been already used please try with another Email Id')
                  }
              else{
                userdata.push(obj);
      localStorage.setItem('userdata',JSON.stringify(userdata))
      alert('Hii '+' '+first+' '+'your Account has created');
      window.location.assign("./login.html")
                  }
    })



    
   




  //  login signup Symbol 
//   document.querySelector("#accIcon").addEventListener("click",()=>{
//     window.location.assign("./signup.html")
//   })