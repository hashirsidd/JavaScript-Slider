var intervalId;

function startSlideShow(){
    intervalId = setInterval(changeImage , 2000);
}

 function stopSlideShow(){
     clearInterval(intervalId);
 }


function changeImage(){
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.indexOf("/") + 1 , imageSrc.indexOf("/") + 2);
    if(currentImageNumber == 9){
        currentImageNumber = 0;
    }  
    var newImage = "images/" + ++currentImageNumber + ".jpg";
        // document.getElementById("result").innerHTML = currentImageNumber;
        document.getElementById("image").setAttribute("src" , "images/" + (currentImageNumber++ ) + ".jpg");
      console.log(image);
}


