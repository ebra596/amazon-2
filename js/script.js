let slidebtnLeft = document.getElementById("slidebtn-l")
let slidebtnRight = document.getElementById("slidebtn-r")
let images = document.querySelectorAll(".image-itmes")

let startslideall = 0
let endslideall = (images.length - 1) * 100
slidebtnLeft.addEventListener("click", ()=>{
    if(startslideall < 0){
        startslideall = startslideall + 100
    }
    images.forEach(element=>{
        element.style.transform = `translateX(${startslideall}%)`
    })
})
slidebtnRight.addEventListener("click", ()=>{
    if(startslideall >= -endslideall+100){
        startslideall = startslideall - 100
    }
    images.forEach(element=>{
        element.style.transform=`translateX(${startslideall}%)`
    })
})


let leftbtn = document.querySelector(".slibtnl")
let rightbtn = document.querySelector(".slibtnr")

leftbtn.addEventListener("click", function (event) {
    const contnet = document.querySelector(".cump")
    contnet.scrollLeft -= 100
    event.preventDefault()

})
rightbtn.addEventListener("click", function (event) {
    const contnet = document.querySelector(".cump")
    contnet.scrollLeft += 100
    event.preventDefault()

})

let leftbtn1 = document.querySelector(".slibtnl-1")
let rightbtn1 = document.querySelector(".slibtnr-1")

leftbtn1.addEventListener("click", function (event) {
    const contnet = document.querySelector(".cump-1")
    contnet.scrollLeft -= 100
    event.preventDefault()

})
rightbtn1.addEventListener("click", function (event) {
    const contnet = document.querySelector(".cump-1")
    contnet.scrollLeft += 100
    event.preventDefault()

})



let leftbtn2 = document.querySelector(".slibtnl-2")
let rightbtn2 = document.querySelector(".slibtnr-2")

leftbtn2.addEventListener("click", function (event) {
    const contnet = document.querySelector(".cump-2")
    contnet.scrollLeft -= 100
    event.preventDefault()

})
rightbtn2.addEventListener("click", function (event) {
    const contnet = document.querySelector(".cump-2")
    contnet.scrollLeft += 100
    event.preventDefault()

})



let display = document.querySelector(".menubar")
let closse = document.querySelector(".xmark")
let blocker = document.querySelector(".heaider-1")

display.addEventListener("click",function(){
    blocker.classList.add("block")
    closse.classList.add("active")
    document.body.classList.remove(".stopscrool")
})

closse.addEventListener("click",function(){
    blocker.classList.remove("block")
    closse.classList.remove("active")

})

let right1 = document.querySelector(".right-1")
let diply1 = document.querySelector(".min")
let left1 = document.querySelector(".left-1")
let hidden = document.querySelector(".text")


right1.addEventListener("click", function(){
    diply1.classList.add("dis")
    hidden.classList.remove("remove")
})

left1.addEventListener("click", function(){
    diply1.classList.remove("dis")
    hidden.classList.remove("remove")

})




let right2 = document.querySelector(".right-2")
let diply2 = document.querySelector(".min-1")
let left2 = document.querySelector(".left-2")
let hidden2 = document.querySelector(".text")

right2.addEventListener("click", function(){
    diply2.classList.add("dis")
    hidden2.classList.remove("remove")
})

left2.addEventListener("click", function(){
    diply2.classList.remove("dis")
    hidden2.classList.remove("remove")

})


let right3 = document.querySelector(".right-3")
let diply3 = document.querySelector(".min-2")
let left3 = document.querySelector(".left-3")
let hidden3 = document.querySelector(".text")

right3.addEventListener("click", function(){
    diply3.classList.add("dis")
    hidden3.classList.remove("remove")
})

left3.addEventListener("click", function(){
    diply3.classList.remove("dis")
    hidden3.classList.remove("remove")

})




let right4 = document.querySelector(".right-4")
let diply4 = document.querySelector(".min-3")
let left4 = document.querySelector(".left-4")
let hidden4 = document.querySelector(".text")

right4.addEventListener("click", function(){
    diply4.classList.add("dis")
    hidden4.classList.remove("remove")
})

left4.addEventListener("click", function(){
    diply4.classList.remove("dis")
    hidden4.classList.remove("remove")

})
closse.addEventListener("click", function(){
    diply4.classList.remove("dis")
})

closse.addEventListener("click", function(){
    diply3.classList.remove("dis")
})

closse.addEventListener("click", function(){
    diply2.classList.remove("dis")
})

closse.addEventListener("click", function(){
    diply1.classList.remove("dis")
})

let down = document.querySelector(".seeall-1")
let mores = document.querySelector(".hdd")
let less = document.querySelector(".seeless-1")


down.addEventListener("click", function(){
    mores.classList.toggle("active")
   less.classList.add("active")
   down.classList.add("active")

})
less.addEventListener("click",()=>{
        mores.classList.toggle("active")
   less.classList.remove("active")
   down.classList.remove("active")
})
          

let down2 = document.querySelector(".seeall-2")
let mores2 = document.querySelector(".hdd-1")
let less2 = document.querySelector(".seeless-2")


down2.addEventListener("click", function(){
    mores2.classList.toggle("active")
   less2.classList.add("active")
  down2.classList.add("active")

})
less2.addEventListener("click",()=>{
        mores2.classList.toggle("active")
   less2.classList.remove("active")
   down2.classList.remove("active")
})


let clicklan = document.querySelector(".lann")
let langu = document.querySelector(".language")
let point = document.querySelector(".pointes")

clicklan.addEventListener("click", function(){
    langu.classList.toggle("active")
    point.classList.toggle("active")
      signup.classList.remove("active")
    clicker.classList.remove("active")
})
// account
let touch = document.querySelector(".acc")
let signup = document.querySelector(".signup")
let clicker = document.querySelector(".fa-sort-up")


touch.addEventListener("click",()=>{
    signup.classList.toggle("active")
    clicker.classList.toggle("active")
    langu.classList.remove("active")
    point.classList.remove("active")
})


let llan = document.querySelector(".languy")
let pon = document.querySelector(".pointes-1")
let tock = document.querySelector(".dd")


tock.addEventListener("click", ()=>{
    pon.classList.toggle("active")
    llan.classList.toggle("active")

})
let upp = document.querySelector(".upp")

upp.addEventListener("click", ()=>{
        pon.classList.remove("active")
    llan.classList.remove("active")

})

