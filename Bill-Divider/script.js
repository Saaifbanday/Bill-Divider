const finalAmount = document.querySelector('.final')
const btn  = document.querySelector(".Calculate")
const reset = document.querySelector('.reset')

btn.addEventListener('click',()=>{
   const totalUsers = document.querySelector('#users').value
   const  totalAmount = document.querySelector('#totalAmount').value
   const finalPrice  = totalAmount/totalUsers
   finalAmount.innerText = `Each Person has to pay ${finalPrice} Rupees`
})
reset.addEventListener('click',()=>{
    finalAmount.innerText = " "
})