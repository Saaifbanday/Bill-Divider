const showToastBtn = document.querySelector('.show-toast')
const toastContainer = document.querySelector('.toastContainer')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastType = document.querySelector('#toastType')
const message = document.querySelector('.toast-message')
const reset = document.querySelector('.reset')
const own = document.querySelector('.own')
const durationInput = document.querySelector("#duration")

showToastBtn.addEventListener('click', () => {

    const newToast = document.createElement('div')
    newToast.classList.add("toast")
    newToast.innerHTML = `✗ ${message.value}`;
    toastContainer.append(newToast)

    const closeIcon = document.createElement('span')
    closeIcon.innerText = " ✕"
    closeIcon.classList.add('closeIcon')
    newToast.append(closeIcon)

    if (horizontalPosition.value === "right") {
        toastContainer.classList.add('right')
    }
    else {
        toastContainer.classList.remove('right')
    }
    if (verticalPosition.value === "bottom") {
        toastContainer.classList.add('bottom')
    }
    else {
        toastContainer.classList.remove('bottom')
    }

    if (toastType.value === "success") {
        newToast.style.backgroundColor = "green"
       
    }
    else if (toastType.value === "error") {
        newToast.style.backgroundColor = "red"
       
    }
    else if (toastType.value === "warning") {
        newToast.style.backgroundColor = "crimson"
 
    }
    else if (toastType.value === "info") {
        newToast.style.backgroundColor = "orange"
    }

    function removeToast(){
        
        newToast.classList.add('goLeft')
        setTimeout(()=>{
            newToast.remove()
        },100)
    }
    closeIcon.addEventListener('click', () => {
        removeToast()
    })

    setTimeout(()=>{
        removeToast()
    },parseInt(durationInput.value)*1000) // coverts in miliseconds as settimeout only understands milliseonds

   
})
reset.addEventListener('click', () => {
    toastContainer.innerText = " "
    durationInput.value = parseInt(4)
    message.value = 'This is a Toast Message'
})


