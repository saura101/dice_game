let randomNumber1=1+Math.floor(Math.random()*6);
console.log(randomNumber1);
let randomNumber2=1+Math.floor(Math.random()*6);
console.log(randomNumber2);
//let s1=document.querySelector(".img1").getAttribute("src");
let s1="./images/dice"+randomNumber1+".png";
let s2="./images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);
//p1 wins
if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
//p2 wins
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
//draw
else
    document.querySelector("h1").innerHTML="Draw!";