function bloodCountDown(){
    var currentVal = document.getElementById("blood").innerHTML;
    var newVal = 0;
    if (currentVal > 0){
        newVal = currentVal - 1;
    }
    document.getElementById("blood").innerHTML = newVal;
}

