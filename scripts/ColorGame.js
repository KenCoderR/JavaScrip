var colors = [];
var squares = document.querySelectorAll(".square");
var pickedcolor ;
var rgbdisplaycolor = document.getElementById("rgbdisplay");
var messagedisplay = document.querySelector("#message");
var h1background = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyDiff");
var hardBtn = document.querySelector("#hardDiff");
var colorBlocks = 6;
var squareBackGround = "#232323";
var headerBackGround = "steelblue";

setsquares();

hardBtn.addEventListener("click",function(){
hardBtn.classList.add("difficulty");
easyBtn.classList.remove("difficulty");
colorBlocks = 6;
setsquares();
h1background.style.backgroundColor = headerBackGround;
messagedisplay.textContent = "";
})

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("difficulty");
    hardBtn.classList.remove("difficulty");
    colorBlocks = 3;
    setsquares();
    h1background.style.backgroundColor = headerBackGround;
    messagedisplay.textContent = "";
    })



resetbutton.addEventListener("click", function(){
    setsquares();
    h1background.style.backgroundColor = headerBackGround;
    messagedisplay.textContent = "";
    resetbutton.textContent = "New Colors";
    messagedisplay.textContent = "";
  })



function setsquares(){
    colors = generateRandomColors(colorBlocks);
    pickedcolor = colors[Math.floor(Math.random() * colorBlocks)];
    rgbdisplaycolor.textContent = pickedcolor;
    for(i = 0; i < colorBlocks/*squares.length*/; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor ;
            if(clickedcolor === pickedcolor)
            {
                
                for(i = 0; i < colorBlocks; i++)
                {
                    squares[i].style.backgroundColor = pickedcolor;
                }
                messagedisplay.textContent = "Correct";
                h1background.style.background = clickedcolor;
                resetbutton.textContent = "Play Again";
            }
            else{
                this.style.backgroundColor = squareBackGround;
                messagedisplay.textContent = "Try again";
            }
        });
    }
    for(i = colorBlocks; i < squares.length; i++)
    {
        squares[i].style.background = "none"
    }
}

function pickcolor(){

      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
       return "rgb("+r+", "+g+", "+b+")";
}

function generateRandomColors(num){
    var colorarr = [];
    for(i=0; i<num; i++)
    {
        colorarr.push(pickcolor())
    }
    return colorarr;
}