const button = document.querySelectorAll(".circle")

button.forEach(button => {
    button.onclick=() =>{
        document.body.style.background=button.id
    }
});