const generateMemeBtn = document.querySelector('.generate')
const memeImage = document.querySelector('.meme-image')
const memeTitle = document.querySelector('.meme-title')
const authorName = document.querySelector('.author')

generateMemeBtn.addEventListener('click',()=>{
    fetch('https://meme-api.com/gimme/wholesomememes ')
    .then((res)=> res.json())
       
    .then((data)=>{
        //we will use destrucing to destructure the only items we need from api 
        const {author,title,url} = data
        // console.log(data);
        memeImage.src = url
        memeTitle.innerText = title
        authorName.innerText = `Meme By: ${author}`
    })
})