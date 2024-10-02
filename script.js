 let bar_icon = document.querySelector("#bar-icon")
 let navbar = document.querySelector(".navbar")
 let responsive_nav = document.querySelector(".responsive-nav") 
 let list = document.querySelectorAll(".list li a") 
 let imglogo = document.querySelector("img")

 let banner_left_arrow = document.querySelector(".banner-left-arrow")
 let banner_right_arrow = document.querySelector(".banner-right-arrow")
 let parent = document.querySelector(".all-slides")
 let slider = document.querySelectorAll("#slider")


let all_main_slides = document.querySelector(".all-main-slides")
let mangement_slide_circle = document.querySelectorAll(".mangement-slide-circle")

// console.log(mangement_slide_circle);

let video_btn = document.querySelector(".video-btn")
let video_main = document.querySelector(".video-main")
let video_cross = document.querySelector(".video-cross")


let g_pluseIcon = document.querySelectorAll(".g-pluseIcon")
let profolio_gallry = document.querySelector(".profolio-gallry")
let gallry_cross = document.querySelector(".gallry-cross")
let gallry_main_slide = document.querySelector(".gallry-main-slide")
let left_gallry_arrow = document.querySelector(".left-gallry-arrow")
let right_gallry_arrow = document.querySelector(".right-gallry-arrow")
let all_slides_main = document.querySelector(".all-slides-main")
let image_box = document.querySelectorAll(".image-box")

let team_left_arrow = document.querySelector(".team-left-arrow")
let team_right_angle = document.querySelector(".team-right-angle")
let all_team_main = document.querySelector(".all-team-main")
let card = document.querySelectorAll(".card")

var slideMarginLeft = 33

const mediaQuery_large = window.matchMedia("(max-width: 991px)");
const mediaQuery_medium = window.matchMedia("(max-width: 700px)");

if(mediaQuery_large.matches){
    slideMarginLeft = 50
}

if (mediaQuery_medium.matches){
    slideMarginLeft = 100
}


var teamindex = 0 

team_left_arrow.addEventListener("click", () => {
    teamindex--
console.log(teamindex);

    if(teamindex < 0){
        teamindex =  card.length - 3;

    }


    all_team_main.style.marginLeft = teamindex * -slideMarginLeft + "%"
})

team_right_angle.addEventListener("click", () => {

    teamindex++
    console.log(teamindex);

    if(teamindex > card.length - 3){
        teamindex = 0
    }

    all_team_main.style.marginLeft = teamindex * -slideMarginLeft + "%"
    
    
})





var galleryindex = 0;


left_gallry_arrow.addEventListener("click", () => {
    galleryindex--
    
    if(galleryindex < 0){

        galleryindex = image_box.length -1;

    }


    console.log(galleryindex);  
    all_slides_main.style.marginLeft = (galleryindex * -100) + "%"

})

right_gallry_arrow.addEventListener("click", () => {
    galleryindex++
    console.log(galleryindex);

    if(galleryindex > 0){

        galleryindex = image_box.length -1;

    }

    all_slides_main.style.marginLeft = (galleryindex * -100) + "%"


})

g_pluseIcon.forEach((icon, i) =>{

    icon.addEventListener("click", () => {
        profolio_gallry.style.display = "flex";
        galleryindex=i
        all_slides_main.style.marginLeft = (galleryindex * -100) + "%"
})

})

gallry_cross.addEventListener("click", () => {
    profolio_gallry.style.display = "none"

})





video_btn.addEventListener("click", ()=>{

    video_main.style.display = "flex"



})
video_cross.addEventListener("click", () => {
    video_main.style.display = "none"

})



var num = 0;

setInterval(()=>{
    num++
    if(num > mangement_slide_circle.length-1){
        num=0
    }

    all_main_slides.style.marginLeft = num * -100 + "%"
    mangement_slide_circle.forEach((e, i) => {
        mangement_slide_circle[i].style.backgroundColor = "#FFFFFF"
    })
    mangement_slide_circle[num].style.backgroundColor = "#00FFFF"

}, 3000)




mangement_slide_circle.forEach((e,i) => {
    e.addEventListener("click", function(){
        console.log("i", i);
        
        all_main_slides.style.marginLeft = i * -100 + "%"
        mangement_slide_circle.forEach((e, i) => {
            mangement_slide_circle[i].style.backgroundColor = "#FFFFFF"
        })
        mangement_slide_circle[i].style.backgroundColor = "#00FFFF"
    })
})



 let index = 0;


 banner_left_arrow.addEventListener("click", ()=>{
    index--
    
    
    if(index < 0){
        index = slider.length-1
    }
    
    console.log(index);
    parent.style.marginLeft = `${index * -100}%`


 })

 banner_right_arrow.addEventListener("click", ()=> {
    index++

    if(index >= slider.length){
        index = 0
    }

    console.log(slider[index]);
    var image = slider[index].querySelector('.slide-Image')
    
    image.style.animation = "slide-zoom 3s linear forwards"
    
    setTimeout(() => {
        image.style.animation = ""
    }, 3000)

    parent.style.marginLeft = `${index * -100}%`

    console.log(index);


 })


 









 var lists = document.querySelectorAll(".list li a")



window.addEventListener('scroll', () => {
    console.log(scrollY);

    if(scrollY > 20){
        navbar.style.backgroundColor = "#F8F9FA";
        list.forEach(element => {
            element.style.color = "black";
            imglogo.src = "./images/logo.png"
        });



    }else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.color = ""
        list.forEach(element => {
            element.style.color = "white";
            imglogo.src = "./images/logo-light.png"
            
        });

    }
    lists[0].style.color = "blue"

    if(scrollY > 500){
        list.forEach(element => {
            element.style.color = "black";
        });
        lists[1].style.color = "blue"
    }


    if(scrollY > 1000){
        list.forEach(element => {
            element.style.color = "black";
        });
        lists[2].style.color = "blue"
    }

    if(scrollY > 1100){
        list.forEach(element => {
            element.style.color = "black";
        });
        lists[3].style.color = "blue"
    }

    if(scrollY > 1900){
        list.forEach(element => {
            element.style.color = "black";
        });
        lists[4].style.color = "blue"
    }

    if(scrollY > 2900){
        list.forEach(element => {
            element.style.color = "black";
        });
        lists[5].style.color = "blue"
    }
    if(scrollY > 4254){
        list.forEach(element => {
            element.style.color = "black";
        });
        lists[6].style.color = "blue"
    }

    

    
})



 bar_icon.addEventListener("click", ()=>{

    if(responsive_nav.style.display === "block"){
        responsive_nav.style.display = 'none'

    }else{
        responsive_nav.style.display = 'block'

    }
    




 })




