const showToastBtn = document.querySelector('.show-toast')
const toastContainer = document.querySelector('.toastContainer')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastType = document.querySelector('#toastType')
const message = document.querySelector('.toast-message')
const reset = document.querySelector('.reset')
const own = document.querySelector('.own')

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
        //----Event Listner Added here
        closeIcon.addEventListener('click', () => {
            newToast.style.display = "none"
        })

    }
    else if (toastType.value === "error") {
        newToast.style.backgroundColor = "red"
        //----Event Listner Added here
        closeIcon.addEventListener('click', () => {
            newToast.style.display = "none"
        })
    }
    else if (toastType.value === "warning") {
        newToast.style.backgroundColor = "crimson"
    // Event Listner Added here
        closeIcon.addEventListener('click', () => {
            newToast.style.display = "none"
        })

    }
    else if (toastType.value === "info") {
        newToast.style.backgroundColor = "orange"
    // Added Event Listner
        closeIcon.addEventListener('click', () => {
            newToast.style.display = "none"
        })
    }


})

reset.addEventListener('click', () => {
    toastContainer.innerText = " "
})
