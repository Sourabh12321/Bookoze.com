let details_arr = JSON.parse(localStorage.getItem("details")) || []
let form = document.querySelector('form')

form.addEventListener('submit', signup)
function signup(event) {
    event.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    if (email !== "" && password !== "") {
        let flag_email = "No";
        let pass = "";
        let temp;

        for (let i = 0; i < details_arr.length; i++) {
            if (email == details_arr[i].email) {

                flag_email = "yes";
                pass = details_arr[i].password;

                temp = details_arr[i];
                }
                
            console.log(details_arr[i]);
        }

        if (flag_email == "yes" && pass == password) {

            location.href = "index.html";
            form.reload();
        } else {
            alert("Invalid Email or Password ")
        }
    } else {
        alert("please fill the valid details")
    }
}