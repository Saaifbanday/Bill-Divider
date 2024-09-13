const firstText = document.querySelector('#first-text')
const add = document.querySelector('.add-button')
const addedContainer = document.querySelector('.added-container')

add.addEventListener('click', () => {
    const addedElement = document.createElement('div');
    const mainInput = document.createElement('input')
    mainInput.type = 'text'
    mainInput.disabled = true;
    mainInput.classList.add('main-input')
    addedElement.append(mainInput)
    // Create the Font Awesome icon
    const circle = document.createElement('i');
    circle.classList.add('fa-regular', 'fa-circle');  
    addedElement.append(circle);  // Append the icon first
    // add delete icon
    const deleteElement = document.createElement('i')
    deleteElement.classList.add('fa-solid', 'fa-trash')
    // append the delete icon
    addedElement.append(deleteElement)
    //create edit button
    const editButton = document.createElement('i')
    editButton.classList.add('fa-regular','fa-pen-to-square')
    //append the edit button
    addedElement.append(editButton)
    mainInput.value = firstText.value
    addedElement.classList.add('added-element');
    addedContainer.prepend(addedElement);

    circle.addEventListener('click',()=>{
         
        const tick = document.createElement('i')
        tick.classList.add('fa-solid', 'fa-check')
        addedElement.append(tick)
        mainInput.classList.add('mark-done')
    })

    deleteElement.addEventListener('click',()=>{
        addedElement.remove()
    })
    editButton.addEventListener('click',()=>{

        if( mainInput.classList.contains('mark-done') ){
            editButton.disabled = true
        }
        else{

            // mainInput.value  = inputText.value
            // mainInput.value = firstText.value
            mainInput.disabled = false;
            editButton.remove()
            const saveItem = document.createElement('i')
            saveItem.classList.add('fa-solid', 'fa-plus')
            addedElement.append(saveItem)
     
            saveItem.addEventListener('click',()=>{
            const updatedValue = mainInput.value
                 mainInput.value = updatedValue
                 mainInput.disabled = true;
                 saveItem.remove()
                 addedElement.append(editButton)
            })
        }
      
    })

});

