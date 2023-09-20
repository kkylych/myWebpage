let mainImg = document.querySelectorAll('.header-img')[0];
mainImg.addEventListener("click", function () {
    if(mainImg.getAttribute("src") == "img/greenimg.jpg"){
        mainImg.setAttribute("src", "img/green1.jpg")
    }else{
        mainImg.setAttribute("src", "img/greenimg.jpg")
    }
});