let accordian = document.querySelectorAll('.accordian')

accordian.forEach(item => {
   let question = item.querySelector('.question');
   let answer = item.querySelector('.answer');

    item.addEventListener('click',()=>{
        question.classList.toggle('active')
        answer.classList.toggle('active')
        
    })
  });
// get data from js

