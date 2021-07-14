const clickArea = document.querySelector(".photosGrid");
const heartShow = (e) =>{
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    clickArea.appendChild(heart) ;
    setTimeout(() =>{
        heart.remove();
    }, 800)
}
const increament=() =>{
    clickArea.addEventListener("dblclick", (e)=>{
        heartShow(e);
    })
}
increament();