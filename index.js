
const Pages = document.getElementsByTagName("body")[0];
const page = document.getElementById("mode");
var ModeTrue = false;

function ScreenMode() {
    if (!ModeTrue) {
        Pages.classList.add("Light");
        Pages.classList.remove("Night");
        page.innerText = "Light mode";
    }
    else {
        Pages.classList.add("Night");
        Pages.classList.remove("Light");
        page.innerText = "Night mode";
    }
    ModeTrue = !ModeTrue;

}


const current = document.getElementById("current-operand");
const previous = document.getElementById("previous-operand");

var TockaTrue = false;
var ToplaTrue = false;
var CixTrue = false;
var VurTrue = false;
var BolTrue = false;
var FaizTrue = false;

function operatorIsTrue(isTrue) {
    ToplaTrue = isTrue;
    CixTrue = isTrue;
    VurTrue = isTrue;
    BolTrue = isTrue;
    FaizTrue = isTrue;
}
function b1() {
    current.innerText += "1";
    operatorIsTrue(false);
}
function b2() {
    current.innerText += "2";
    operatorIsTrue(false);
}
function b3() {
    current.innerText += "3";
    operatorIsTrue(false);
}
function b4() {
    current.innerText += "4";
    operatorIsTrue(false);
}
function b5() {
    current.innerText += "5";
    operatorIsTrue(false);
}
function b6() {
    current.innerText += "6";
    operatorIsTrue(false);
}
function b7() {
    current.innerText += "7";
    operatorIsTrue(false);
}
function b8() {
    current.innerText += "8";
    operatorIsTrue(false);
}
function b9() {
    current.innerText += "9";
    operatorIsTrue(false);
}
function b0() {
    current.innerText += "0";
    operatorIsTrue(false);
}
function b00() {
    current.innerText += "00";
    operatorIsTrue(false);
}

function bTam() {
    if (!TockaTrue) {

        if (current.innerText === "" || "+-*/".includes(current.innerText.slice(-1))) {
            current.innerText += "0.";
        } else {
            current.innerText += ".";
        }
        TockaTrue = true;
    }
}

function bTop() {
    let sonSimvol = current.innerText.slice(-1);

    if (sonSimvol == "*" || sonSimvol == "-" || sonSimvol == "%" || sonSimvol == "/") {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1);
        current.innerText += "+";
        operatorIsTrue(true);
        TockaTrue = false;
    }

    if (!ToplaTrue && current.innerText !== "") {
        current.innerText += "+";
        operatorIsTrue(true);
        TockaTrue = false;
    }
}

function bCix() {
    let sonSimvol = current.innerText.slice(-1);

    if (sonSimvol == "+" || sonSimvol == "*" || sonSimvol == "%" || sonSimvol == "/") {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1);
        current.innerText += "-";
        operatorIsTrue(true);
        TockaTrue = false;
    }

    if (!CixTrue) {
        current.innerText += "-";
        operatorIsTrue(true);
        TockaTrue = false;
    }
}

function bVur() {
    let sonSimvol = current.innerText.slice(-1);

    if (sonSimvol == "+" || sonSimvol == "-" || sonSimvol == "%" || sonSimvol == "/") {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1);
        current.innerText += "*";
        operatorIsTrue(true);
        TockaTrue = false;
    }

    if (!VurTrue && current.innerText !== "") {
        current.innerText += "*";
        operatorIsTrue(true);
        TockaTrue = false;
    }
}

function bBol() {
    let sonSimvol = current.innerText.slice(-1);

    if (sonSimvol == "+" || sonSimvol == "-" || sonSimvol == "%" || sonSimvol == "*") {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1);
        current.innerText += "/";
        operatorIsTrue(true);
        TockaTrue = false;
    }

    if (!BolTrue && current.innerText !== "") {
        current.innerText += "/";
        operatorIsTrue(true);
        TockaTrue = false;
    }
}

function bFaiz() {
    let sonSimvol = current.innerText.slice(-1);

    if (sonSimvol == "+" || sonSimvol == "-" || sonSimvol == "*" || sonSimvol == "/") {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1);
        current.innerText += "%";
        operatorIsTrue(true);
        TockaTrue = false;
    }

    if (!FaizTrue && current.innerText !== "") {
        current.innerText += "%";
        operatorIsTrue(true);
        TockaTrue = false;
    }
}

function bSifirla() {
    current.innerText = "";
    previous.innerText = "";
    operatorIsTrue(false);
    TockaTrue = false;
}



function bSil() {
    if (current.innerText.length > 0) {
        let sonSimvol = current.innerText.slice(-1);

        if (sonSimvol === ".") {
            TockaTrue = false;
        }

        current.innerText = current.innerText.substring(0, current.innerText.length - 1);

        let sonSimvol2 = current.innerText.slice(-1);

        if (sonSimvol2 !== "+" && sonSimvol2 !== "-" && sonSimvol2 !== "*" && sonSimvol2 !== "/" && sonSimvol2 !== "%") {
            operatorIsTrue(false);
        }

        let ededTockaVar = false;
        for (let i = current.innerText.length - 1; i >= 0; i--) {
            let simvol = current.innerText[i];

            if (simvol === "+" || simvol === "-" || simvol === "*" || simvol === "/" || simvol === "%") {
                break;
            }

            if (simvol === ".") {
                ededTockaVar = true;
                break;
            }
        }

        if (!ededTockaVar) {
            TockaTrue = false;
        }
        let sonSimvol3 = current.innerText.slice(-1);
        if (sonSimvol3 == "+" || sonSimvol3 == "-" || sonSimvol3 == "*" || sonSimvol3 == "/" || sonSimvol3 == "%") {
            operatorIsTrue(true);
        }
    }

}

function bHesabla() {
    if (current.innerText.includes("%")) {
        let SplitCurrent = current.innerText.split("%");
        for (let index = 0; index < SplitCurrent.length - 1; index++) {
            SplitCurrent[index] += "/100*";
        }
        let TotalCurrent = "";
        for (let index = 0; index < SplitCurrent.length; index++) {
            TotalCurrent += SplitCurrent[index];
        }

        previous.innerText = eval(TotalCurrent);
        TockaTrue = false;
    }
    else {
        previous.innerText = eval(current.innerText);
        TockaTrue = false;
    }

}