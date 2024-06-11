// GLOBAL VARIABLES
// This array will have all the values in it 
const equationArray = [];

// This is the number of elements currently in the array 
let equationLength = equationArray.length; 

var num1 = 0; 
var additionPress = false; 
var result; 
// OPERATION SYMBOLS

function addSymbol() { 
    // may need to edit this 
    num1 = Number(document.getElementById("display").textContent); 
    additionPress = true; 
};
function subtractSymbol() { 
    console.log("Subtract symbol clicked!");
};
function multiplySymbol() { 
    console.log("Multiply symbol clicked!");
};
function divideSymbol() { 
    console.log("Divide symbol clicked!");
};
function equalSymbol() { 
    // FIXME: Change to case/switch statements? or leave as if statements?
    if (additionPress == true) {
        document.getElementById("display").textContent = num1 + Number(document.getElementById("display").textContent); 
    }
    additionPress = false; 
};

// NUMBER SYMBOLS 

function numberOne() { 
    console.log(1); 
    document.getElementById("display").textContent = "1";
}
function numberTwo() { 
    console.log(2);
    document.getElementById("display").textContent = "2";
}
function numberThree() { 
    console.log(3);
    document.getElementById("display").textContent = "3";
}
function numberFour() { 
    console.log(4);
    document.getElementById("display").textContent = "4";
}
function numberFive() { 
    console.log(5);
    document.getElementById("display").textContent = "5";
}
function numberSix() { 
    console.log(6);
    document.getElementById("display").textContent = "6";
}
function numberSeven() { 
    console.log(7);
    document.getElementById("display").textContent = "7";
}
function numberEight() { 
    console.log(8);
    document.getElementById("display").textContent = "8";
}
function numberNine() { 
    console.log(9);
    document.getElementById("display").textContent = "9";
}
function numberZero(){
    console.log(0); 
    addNumToDisplay(0);
    // document.getElementById("display").textContent = s;
}
function decimalPoint() { 
    console.log(".");
    //FIX ME: add logic for if the number in the display is already a decimal value. 

    var s = document.getElementById("display").textContent;
    const regDot = /[.]/;
    if (s.search(regDot) != -1) {
        decimalClear(); 
    }
    else {
        console.log(". not found!");
        s = s + "."+ 0; 
        document.getElementById("display").textContent = s;
    }


}


/* SPECIAL BEHAVIOR */ 

function allClear() { 
    // should remove all history 
    var s = 0; 
    document.getElementById("display").textContent = 0; 
}

function decimalClear() { 
    //clears display for input of new decimals, if the number in the display is already a decimal 
    var s = document.getElementById("display").textContent;
    s = "0.0"; 
    document.getElementById("display").textContent = s; 
}

function addNumToDisplay(x) {
    // adds the clicked number onto the current display when clicked. 
    var s = document.getElementById("display").textContent;
    s = s + x; 
    document.getElementById("display").textContent = s;
}

