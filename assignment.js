

    const changeText = () => { 
      const qs = document.querySelector("p");
      qs.textContent = "welcome to the world of javascript"; }

     const form = document.querySelector("#submitHandler");
     form.addEventListener("submit", function(e){
      e.preventDefault();
        const firstName = document.querySelector("#fname").value;
        const middleName = document.querySelector("#mname").value;
        const lastName = document.querySelector("#lname").value;
        window.alert(`${firstName} ${middleName} ${lastName}`);

     })
      