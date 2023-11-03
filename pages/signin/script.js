let next = document.querySelector(".next")
let email = document.querySelector(".email")
let password = document.querySelector(".password")



const bas = " http://localhost:8080"



 function avaz (arr) {

 
   next.onclick = (e) => {
   

    arr.filter(el => {
        if(el.email === email.value && el.password === password.value ) {
            location.assign('/index.html')

            localStorage.setItem('user' , JSON.stringify(el))
        }
    })
    



}

}


fetch(bas + "/dannie")
.then(res => res.json())
.then(res => avaz(res))