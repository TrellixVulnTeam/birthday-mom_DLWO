const button  = document.querySelector(".hero-btn-link")
const hero = document.querySelector(".hero")

button.addEventListener('click', (e)=>{
  e.preventDefault()
  document.querySelector('.thankyou').scrollIntoView({
    behavior: 'smooth',
  })
})


const revealSection = function(entries, observer){
  const [entry] = entries

  if(!entry.isIntersecting) return
  entry.target.classList.remove('invisible')

  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root : null,
  threshold : .4,
})

const allSections = document.querySelectorAll('.invisible')
allSections.forEach(function(section) {
  sectionObserver.observe(section)
})

