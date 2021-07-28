const button  = document.querySelector(".hero-btn-link")
const hero = document.querySelector(".hero")

button.addEventListener('click', (e)=>{
  e.preventDefault()
  document.querySelector('.thankyou').scrollIntoView({
    behavior: 'smooth',
  })
})

