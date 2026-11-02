
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

var operatorIsTrue = false;


function number(number){
    current.innerText += number;
    operatorIsTrue=false;
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



function operator(operator) {
    let sonSimvol = current.innerText.slice(-1);

    if (sonSimvol == "-" || sonSimvol == "+" || sonSimvol == "*" || sonSimvol == "%" || sonSimvol == "/") {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1);
        current.innerText += operator;
        operatorIsTrue=true;
        TockaTrue = false;
    }

    if (!operatorIsTrue) {
        current.innerText += operator;
        operatorIsTruetrue=true;
        TockaTrue = false;
    }
}



function bSifirla() {
    current.innerText = "";
    previous.innerText = "";
    operatorIsTrue=false;
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
            operatorIsTrue=false;
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
            operatorIsTrue=true;
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