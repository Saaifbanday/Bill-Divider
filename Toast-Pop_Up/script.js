const showToastBtn = document.querySelector('.show-toast')
const toastContainer = document.querySelector('.toastContainer')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastType = document.querySelector('#toastType')
const message = document.querySelector('.toast-message')
const reset = document.querySelector('.reset')
const own = document.querySelector('.own')

showToastBtn.addEventListener('click',()=>{

    const newToast = document.createElement('div')
    newToast.classList.add("toast")
    toastContainer.append(newToast)
    newToast.innerHTML = `✗ ${message.value}`;

   if(horizontalPosition.value === "right"){
    toastContainer.classList.add('right')
   }
   else{
    toastContainer.classList.remove('right')
   }
   if(verticalPosition.value === "bottom"){
    toastContainer.classList.add('bottom')
   }
   else{
    toastContainer.classList.remove('bottom')
   }
   if(toastType.value === "success"){
      

       newToast.innerHTML = `✓ ${message.value}`;
         newToast.style.backgroundColor = "green"
         const closeIcon = document.createElement('span')
         closeIcon.innerText = " ✕"
         newToast.append(closeIcon) 
         closeIcon.classList.add('closeIcon')
        
   }
   else if(toastType.value==="error"){
    newToast.style.backgroundColor = "red"
    const closeIcon = document.createElement('span')
    closeIcon.innerText = " ✕"
    newToast.append(closeIcon) 
    closeIcon.classList.add('closeIcon')
   }
   else if(toastType.value==="warning"){
    newToast.style.backgroundColor = "crimson"
    const closeIcon = document.createElement('span')
    closeIcon.innerText = " ✕"
    newToast.append(closeIcon) 
    closeIcon.classList.add('closeIcon')
   
   }
   else if(toastType.value==="info"){
       newToast.style.backgroundColor = "orange"
       const closeIcon = document.createElement('span')
       closeIcon.innerText = " ✕"
       newToast.append(closeIcon) 
       closeIcon.classList.add('closeIcon')
   }

   closeIcon.addEventListener('click',()=>{
      newToast.style.display = "none"
   })
  
})

reset.addEventListener('click',()=>{
    toastContainer.innerText = " "  
})
