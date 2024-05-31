const back = document.querySelector('.background')
const bbutton = document.querySelector(".blackbutton")
const ybutton = document.querySelector(".yellowbutton")
const rbutton = document.querySelector(".redbutton")

bbutton.addEventListener('click' , (e) => {
    console.log(e.target)
    if (back.style.backgroundColor === "black") {
        bbutton.style.backgroundColor = "black";
        back.style.backgroundColor = "white";
    } else {
        bbutton.style.backgroundColor = "white";
        back.style.backgroundColor = "black";
    }
})

ybutton.addEventListener('click', (e) => {
    console.log(e.target)
    if (back.style.backgroundColor === "yellow") {
        ybutton.style.backgroundColor = "yellow";
        back.style.backgroundColor = "white";
    } else {
        ybutton.style.backgroundColor = "white";
        back.style.backgroundColor = "yellow";
    }
})


rbutton.addEventListener('click', (e) => {
    console.log(e.target)
    if (back.style.backgroundColor === "red") {
        rbutton.style.backgroundColor = "red";
        back.style.backgroundColor = "white";
    } else {
        rbutton.style.backgroundColor = "white";
        back.style.backgroundColor = "red";
    }
})