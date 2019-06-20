/*eslint-env browser*/
var num = 6;
var colors = generateColor(num);
var picked = pickColor();
var squares = document.querySelectorAll(".square");
var msg = document.querySelector("#msg");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var display = document.getElementById("rgb");

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    num = 3
    colors = generateColor(num);
    picked = pickColor();
    display.textContent = picked;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none"; 
        }
    }
});
hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    num = 6;
    colors = generateColor(num);
    picked = pickColor();
    display.textContent = picked;
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block"; 
    }
});
reset.addEventListener("click", function(){
    colors = generateColor(num); //generate 6 random colors
    picked = pickColor();  //pick a color from the list
    document.getElementById("rgb").textContent = picked;
    for (var i=0;i<squares.length;i++){
    squares[i].style.background = colors[i];
    }
    document.querySelector("h1").style.background = "steelblue";
    msg.textContent = "";
    reset.textContent = "New Color";
    
})

document.getElementById("rgb").textContent = picked;

for (var i=0;i<squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
        var clicked = this.style.background;
        
        if(clicked === picked){
            msg.textContent = "Correct";
            reset.textContent = "Play Again";
            for (var i=0;i<squares.length;i++){
                squares[i].style.background = picked;
            }
            document.querySelector("h1").style.background = picked;
        } else {
            this.style.background = "#232323";
            msg.textContent = "Try Again";
        }
    });
}

function pickColor(){    //function to pick color
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num){         //function for adding random colors to array
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){       // function for generating random colors
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";    
}
