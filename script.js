function computerPlay(){
    let a=Math.ceil(3*Math.random());
    switch(a){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
function playerInput(){
    let a=prompt("your turn for rock-> r, for paper ->p, for scissors ->s")
    switch(a){
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Scissors";
    }
}
function game(){
    const p=playerInput();
    const c=computerPlay();
    if(p==c)
    console.log("draw");
    else if((p=="Rock"&&c=="Scissors")||(p=="Paper"&&c=="Rock")||(p=="Scissors"&&c=="Paper"))
    console.log("you win");
    else 
    console.log("You Lost");
}
game();
