// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
// //   .then((res) => reload(res));


let inps = document.querySelectorAll("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");

// const base_url = "http://localhost:8080";

let patterns = {
      name: /^[a-z ,.'-]+$/i,
      surname: /^[a-z ,.'-]+$/i,
      email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
      tel:  /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
      age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/,
      text: /^([a-zA-Z0-9 _-]+)$/,
      password: /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/gi
    };

    inps.forEach((inp) => {
        inp.onkeyup = () => {
          if (patterns[inp.name].test(inp.value)) {
            inp.style.borderColor = "green";
          } else {
            inp.style.borderColor = "red";
          }
        };
      });

      // btn.onclick = () => {
      //       window.location.href = '/pages/signin/'
        
      // }




      // form.onsubmit = (e) => {
      //   e.preventDefault();
      
      //   fetch(base_url + "/users", {
      //     method: "post",
      //     body: JSON.stringify(form),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }).then((res) => {
      //     if (res.status === 200 || res.status === 201) {
      //       window.location.href = '/pages/signin/'
      //         // form.reset()
      //     //   console.log(res);
      
      //       fetch(base_url + "/users")
      //         .then((res) => res.json())
      //         // .then((res) => reload(form));
      
      //     }
      //   });
      //     // .then(res => console.log(res))
      // };



