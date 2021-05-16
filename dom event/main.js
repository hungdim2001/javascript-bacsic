var h1Element= document.querySelectorAll('h1');
var date = new Date();
// for(var i = 0; i<h1Element.length;i++){
//     h1Element[i].onclick=function(e){
//         console.log(e.target);
//         console.log(date.getSeconds());
//     }
// }

h1Element.forEach(function(h1Element){
    h1Element.onclick= function(e){
        console.log(e.target);
         console.log(date.getSeconds());
    }
})