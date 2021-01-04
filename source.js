let display = document.getElementById("display");
let operation = "";
let num1 = 0;
let num2 = 0;
let charCount = 0;
var hasDecm = false;
let reset_display = false;

let spaceCheck = function(){
    if (charCount < 12){
        charCount++;
        return true;
    } else {
        return false;
    }
};

// MATH LOGIC

let doMath = function(num1, num2, op) {
    let n1 = num1;
    let n2 = num2;
    
    if (op === "+"){return n1 + n2;}
    if (op === "-"){return n1 - n2;}
    if (op === "*"){return n1 * n2;}
    if (op === "/"){return n1 / n2;}
}

// FUNCTIONALITY INPUTS

document.getElementById("sign").onclick = function() {
    if (charCount <= 12 && display.innerHTML.charAt(0) != "-"){
        display.insertAdjacentHTML("afterbegin", "-");
        
    } else {
        display.innerHTML = display.innerHTML.replace("-", "");
    }
};

document.getElementById("clear").onclick = function() {
    num1 = 0;
    num2 = 0;
    charCount = 0;
    operation = "";
    display.innerHTML = "";
    hasDecm = false;
};

document.getElementById("decm").onclick = function() {
    let isSpace = spaceCheck();
    
    if (isSpace && hasDecm == false){
        display.insertAdjacentHTML("beforeend", ".");
        hasDecm = true;
    }
};

document.getElementById("result").onclick = function() {
    num2 = parseFloat(display.innerHTML);
    console.log(num1, num2, operation);
    let final_answer = (doMath(num1, num2, operation)).toPrecision(11);
    final_answer = final_answer.toString();
    if (final_answer.length > 12) {
        final_answer = "OVERFLOW";
    }
    display.innerHTML = final_answer;
    var hasDecm = false;
    reset_display = true;
}

// OPERATION INPUTS

document.getElementById("add").onclick = function(){
    operation = "+";
    hasDecm = false;
    charCount = 0;
    
    if (num1 !== 0){
        num2 = parseFloat(display.innerHTML);
        num1 = doMath(num1, num2, operation);
        num2 = 0;
        
    } else {
        num1 = parseFloat(display.innerHTML);
        console.log(num1);
    }
    display.innerHTML = "";
};

document.getElementById("sub").onclick = function(){
    operation = "-";
    hasDecm = false;
    charCount = 0;
    
    if (num1 !== 0){
        num2 = parseFloat(display.innerHTML);
        num1 = doMath(num1, num2, operation);
        num2 = 0;
    } else {
        num1 = parseFloat(display.innerHTML);
        console.log(num1);
    }
    display.innerHTML = "";
};

document.getElementById("mult").onclick = function(){
    operation = "*";
    hasDecm = false;
    charCount = 0;
    
    if (num1 !== 0){
        num2 = parseFloat(display.innerHTML);
        num1 = doMath(num1, num2, operation);
        num2 = 0;
    } else {
        num1 = parseFloat(display.innerHTML);
        console.log(num1);
    }
    display.innerHTML = "";
};

document.getElementById("div").onclick = function(){
    operation = "/";
    hasDecm = false;
    charCount = 0;
    
    if (num1 !== 0){
        num2 = parseFloat(display.innerHTML);
        num1 = doMath(num1, num2, operation);
        num2 = 0;
    } else {
        num1 = parseFloat(display.innerHTML);
        console.log(num1);
    }
    display.innerHTML = "";
};

// NUMBER INPUTS

document.getElementById("num1").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "1");
    }
};

document.getElementById("num2").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "2");
        
    }
};

document.getElementById("num3").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "3");
        
    }
};

document.getElementById("num4").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "4");
        
    }
};

document.getElementById("num5").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "5");
        
    }
};

document.getElementById("num6").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "6");
        
    }
};

document.getElementById("num7").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "7");
        
    }
};

document.getElementById("num8").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "8");
        
    }
};

document.getElementById("num9").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "9");
        
    }
};

document.getElementById("num0").onclick = function() {
    let isSpace = spaceCheck();
    if (reset_display){
        display.innerHTML = "";
        charCount = 0;
        reset_display = false;
        num1 = 0;
        num2 = 0;
        operation = "";
    }
    if (isSpace){
        display.insertAdjacentHTML("beforeend", "0");
        
    }
};

document.getElementById("erase").onclick = function() {
    if (reset_display == false){
        let charLen = display.innerHTML.length - 1;
        display.innerHTML = display.innerHTML.slice(0, charLen);
        charCount--;
    }
}