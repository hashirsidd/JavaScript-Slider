var imagecount = 1;
var total =  9;


function slide(x){
    var image = document.getElementById("img");
    imagecount = imagecount + x;
    image.src = "images/" + imagecount + ".jpg";
    if(imagecount == 9 ){
        imagecount = 1;
    }
    if(imagecount < 1){ imagecount = total; }
    console.log(image);
}
// window.setInterval(function slideA(){
//     var image = document.getElementById("img");
//     imagecount = imagecount + 1;
//     image.src = "img/" + imagecount + ".jpg";
//     if(imagecount > total ){
//         imagecount = 1;
//     }
//     if(imagecount < 1){ imagecount = total; }
// },5000
// )   
