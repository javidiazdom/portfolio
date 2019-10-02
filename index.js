var color = ['#ffff5c','#fffb03'];
var r = true;

var m = document.getElementById("main");

m.onmouseover = function () {
   console.log("yea");
   r = !r;
   anime({
      targets: '.main .logo',
      backgroundColor: r ? color[0] : color[1],
      duration: 500,
   });
}