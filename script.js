
let arr = []

for (let i = 0; i <= 100; i++){

    
    let arr =[i]

    let newDiv = document.createElement("div")
    
    let content = document.createTextNode(arr)

    let oldDiv = document.getElementById("box")


    newDiv.style.cssText = "background-color: rgba(0, 0, 0, 0.332); width: 8vw; height: 14vh; display: flex; justify-content: center; align-items: center; gap: 5px; flex-direction: row;"

    newDiv.appendChild(content)

    oldDiv.appendChild(newDiv)

    function isPrime1(n) {
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
        var m = Math.sqrt(n); //returns the square root of the passed value
        for (var i = 2; i <= m; i++)
            if (n % i == 0) return false;
        return true;
    }

    let prr = isPrime1(arr)

    let even = "Even"

    if (arr % 2 == 0 ){
        newDiv.style.cssText = " color: white;background-color: #4F6F52; width: 8vw; height: 14vh; display: flex; justify-content: center; align-items: center; gap: 5px; flex-direction: row;"
        newDiv.addEventListener("mouseover", ()=>{
        
                newDiv.innerText = "Even"

        setTimeout(()=>{
            newDiv.innerText= ""
            newDiv.appendChild(content)
        },800)
            
            
        } )
    }   else if (arr % 2 == !0){
        newDiv.style.cssText = "color: white;background-color: #F8DE22; width: 8vw; height: 14vh; display: flex; justify-content: center; align-items: center; gap: 5px; flex-direction: row;"
        newDiv.addEventListener("mouseover", ()=>{
        
            newDiv.innerText = "Odd"

    setTimeout(()=>{
        newDiv.innerText= ""
        newDiv.appendChild(content)
    },800)
        
        
    } )

    }

    if (prr){
        newDiv.style.cssText = "color: white;background-color: red; width: 8vw; height: 14vh; display: flex; justify-content: center; align-items: center; gap: 5px; flex-direction: row;"
        newDiv.addEventListener("mouseover", ()=>{
        
            newDiv.innerText = "Prime"

    setTimeout(()=>{
        newDiv.innerText= ""
        newDiv.appendChild(content)
    },800)
        
        
    } )
    }
 






   
}

