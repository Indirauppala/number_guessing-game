// // alert("welcome")
// document.write("javascript")
// console.log("hi")
// function display(){
//     // alert("button clicked")
//     let data=document.getElementById("user").value;
//     console.log(data);
//     document.write(data);
// }
function checknumber()
{
    guesses=0
    let number=Math.floor((Math.random() * 100) +1)
    let data = parseInt(document.getElementById("val").value);
    if (number==data){
        document.getElementById("output").innerHTML="congratulations..! you guessed in "+guesses+"attempts"


    }
    while(number!=data){
    if(data>number){
        document.getElementById("output").innerHTML="oops..!your guess was wrong,guessed number was big"
        guesses+=1
    }
    else{
        document.getElementById("output").innerHTML="oops..!your guess was wrong,guessed number was small"
        guesses+=1
    }
    break;
}
}