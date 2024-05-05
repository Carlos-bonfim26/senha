let olho = document.querySelector('.fa-eye-slash');

let senha = document.getElementById('password');


olho.addEventListener('click', () => {
  if(senha.type == "password"){
    senha.type = "text"
    olho.classList.remove("fa-eye-slash")
    olho.classList.add("fa-eye")
  } else{
    senha.type = "password"
    olho.classList.add("fa-eye-slash")
    olho.classList.remove("fa-eye")
  }
})
