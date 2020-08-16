

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
 
window.addEventListener("load", () => {

    console.log("Loaded");  

    const userName=document.getElementById('name')
    const email=document.getElementById('email')
    const password=document.getElementById('password')
    const age=document.getElementById('age')
    const password1=document.getElementById('password1')

    const signUpButton = document.querySelector('#signUpButton')
    const signUpLink = document.getElementById('signUpLink')

    signUpButton.addEventListener("click", () => {
        
        postData('/users', { 
            name: userName.value,
            email: email.value,
            password1:password1.value ,
            password:password.value!==password1.value ?  'password' : password.value,
            age: age.value,
         })
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
    
        
        

    });

 
    signUpLink.addEventListener("click", () => {
      window.location('/signin.html')
  });

});



  






