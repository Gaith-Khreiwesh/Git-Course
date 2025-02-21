const scriptURL = "https://script.google.com/macros/s/AKfycbx02WaR8Pptqf7NoDPzGjqgU0qGpU70NohYxTpyRNcL4pGCJlI5HFIRDdF-bvf-edcV/exec";
let form = document.getElementById("form_contact");

form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method:"POST",
        body: new FormData(form),
    })
    .then((response) => {
         setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
         }, 3000)
    })
    .catch((error) => console.error("error!" , error.message))
    });