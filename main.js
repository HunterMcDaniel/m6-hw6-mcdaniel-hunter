// button 2 hover when mouse enters
document.getElementById("box1").addEventListener("mouseenter",
function(){
  document.getElementById("box1").style.backgroundColor = "pink";
  document.getElementById("box1").style.color = "purple";
  document.getElementById("box2").style.backgroundColor = "pink";
  document.getElementById("box2").style.color = "purple";
  document.getElementById("box3").style.backgroundColor = "pink";
  document.getElementById("box3").style.color = "purple";
}, false
);

// change color backgroundColor back when mouse leaves button
document.getElementById("box1").addEventListener("mouseleave",
function(){
  document.getElementById("box1").style.backgroundColor = "yellow";
  document.getElementById("box1").style.color = "purple";
  document.getElementById("box2").style.backgroundColor = "lightblue";
  document.getElementById("box2").style.color = "purple";
  document.getElementById("box3").style.backgroundColor = "lightgreen";
  document.getElementById("box3").style.color = "purple";
}, false
);


document.getElementById("box1").addEventListener("click",
      function showMessage(){
        alert("Oooh, so close, but no cigar")
      }, false
      );

document.getElementById("box1").addEventListener("click",
      function myFunction() {
        document.getElementById("startover").style.display = "inline-block";
      }, false
      );

document.getElementById("box2").addEventListener("click",
        function showMessage2(){
          alert("DING DING DING - We have a winner!")
        }, false
        );

document.getElementById("box2").addEventListener("click",
        function myFunction() {
          document.getElementById("startover").style.display = "inline-block";
          }, false
          );

document.getElementById("box3").addEventListener("click",
        function showMessage2(){
          alert("Ooops, better luck next time")
        }, false
        );

document.getElementById("box2").addEventListener("click",
        function myFunction() {
          document.getElementById("startover").style.display = "inline-block";
        }, false
        );
