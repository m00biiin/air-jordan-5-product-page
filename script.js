document.querySelector(".gallery").addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        document.querySelector(".mainImage img").src = e.target.src;
        document.querySelector(".gallery .active")?.classList.remove("active")  
        e.target.parentNode.classList.add("active")
    }
})

let input = document.querySelector("input[type=number]")

document.querySelector("#amountIncrease").addEventListener("click", ()=>{
    input.value = Number(input.value || 0) + 1;
})
document.querySelector("#amountDecrease").addEventListener("click", ()=>{
    const amount = Number(input.value || 0)
    if(amount > 0){
        input.value = amount - 1;
    }
})