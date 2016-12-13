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


var imagecount = 1;
var total =  9;


function slide(x){
    var image = document.getElementById("image");
    imagecount = imagecount + x;
    image.src = "images/" + imagecount + ".jpg";
    if(imagecount == 9 ){
        imagecount = 1;
    }
    if(imagecount < 1){ imagecount = total; }
    console.log(image);
}