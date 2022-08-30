    let picture = 0;
    showImage()
    function showImage(){
    let i;
    let auto = document.getElementsByClassName("imageSlider");
    let dots = document.getElementsByClassName("point");
    for(i = 0; i < auto.length; i++){
        auto[i].style.display = "none";
    }
    picture++;
    if (picture > auto.length){picture = 1}
    for (i = 0; i < dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    auto[picture-1].style.display = "block";  
        dots[picture-1].className += " active";
        setTimeout(showImage, 3000);
    }