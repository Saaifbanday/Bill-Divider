const plus = document.querySelector('.add')
const minus = document.querySelector('.minus')
const counter = document.querySelector('.counter')
const reset = document.querySelector('.reset')
const changeBy = document.querySelector('.newToMe')


plus.addEventListener('click',()=>{
   const counterValue = parseInt(counter.innerText)
   const changeByValue = parseInt(changeBy.value)
   counter.innerText = counterValue+changeByValue

})
minus.addEventListener('click',()=>{
    const counterValue = parseInt(counter.innerText)
    const changeByValue = parseInt(changeBy.value)
    counter.innerText = counterValue-changeByValue
})
reset.addEventListener('click', ()=>{
    counter.innerText = 0
})


