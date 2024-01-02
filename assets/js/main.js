// ======================================================================
// writing in calculator
// ======================================================================
const writeInCalc = (parameter) => {
    document.body.querySelector("#resultOutput").textContent += parameter;
}

// ======================================================================
// deleting last input in calculator
// ======================================================================
const eraseInCalcField = () => {
    const calcOutput = document.body.querySelector("#resultOutput").textContent;
    const newCalcOutput = calcOutput.slice(0, -1);
    document.body.querySelector("#resultOutput").textContent = newCalcOutput;
}

// ======================================================================
// clearing whole row in calculator
// ======================================================================
const DeleteAll = () => {
    document.body.querySelector("#resultOutput").textContent = "";
    // document.body.querySelector("#outputLineTop").textContent = "";
    // document.body.querySelector("#outputLineMiddle").textContent = "";
    // document.body.querySelector("#outputLineBottom").textContent = "";
}

// ======================================================================
// calculating with error handling
// ======================================================================
const calculateResult = () => {
    const calcOutput = document.body.querySelector("#resultOutput").textContent;
    try {
        let result = eval(calcOutput);
        if (typeof result === 'number' && !isNaN(result)) {
            document.body.querySelector("#outputLineTop").textContent = document.body.querySelector("#outputLineMiddle").textContent;
            document.body.querySelector("#outputLineMiddle").textContent = document.body.querySelector("#outputLineBottom").textContent;
            const newCalcOutput = eval(calcOutput);
            document.body.querySelector("#resultOutput").textContent = newCalcOutput;
            document.body.querySelector("#outputLineBottom").textContent = calcOutput + ' = ' + newCalcOutput;
        }
    }
    catch (error) {
        document.body.querySelector("#resultOutput").textContent = error;
    }
}

// ======================================================================
// switching buttons by pressing Mem/Calc
// ======================================================================

const switchToMem = () => {
    document.body.querySelector(".firstPageCalc").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.remove("switch");
};
const switchToCalc = () => {
    document.body.querySelector(".firstPageCalc").classList.remove("switch");
    document.body.querySelector(".secondPageCalc").classList.add("switch");
    document.body.querySelector(".thirdPageSave").classList.add("switch");
    document.body.querySelector(".fourthPageRename").classList.add("switch");
};
const setPageThree = () => {
    document.body.querySelector(".thirdPageSave").classList.remove("switch");
    document.body.querySelector(".fourthPageRename").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.add("switch");
};
const setPageFour = () => {
    document.body.querySelector(".fourthPageRename").classList.remove("switch");
    document.body.querySelector(".thirdPageSave").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.add("switch");
};

// ======================================================================
// change name of button
// ======================================================================

let buttonIdent = 0;

const changeName = (num) => {
    document.body.querySelector(".wholescreenModal").classList.remove("switch");
    buttonIdent = num;
}

const saveChangeName = () => {
    document.body.querySelector(".wholescreenModal").classList.add("switch");
    document.body.querySelector(".fourthPageRename").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.remove("switch");
    document.body.querySelector(`.changerOne > button:nth-of-type(${buttonIdent})`).textContent = document.body.querySelector("#inputNewName").value;
    document.body.querySelector(`.changerTwo > button:nth-of-type(${buttonIdent})`).textContent = document.body.querySelector("#inputNewName").value;
    document.body.querySelector(`.changerThree > button:nth-of-type(${buttonIdent})`).textContent = document.body.querySelector("#inputNewName").value;
}

// ======================================================================
// change value of button
// ======================================================================

let buttonValue1 = "?";
let buttonValue2 = "?";
let buttonValue3 = "?";
let buttonValue4 = "?";

const changeValue1 = () => {
    buttonValue1 = document.body.querySelector(`#resultOutput`).textContent;
    document.body.querySelector(".thirdPageSave").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.remove("switch");
}
const changeValue2 = () => {
    buttonValue2 = document.body.querySelector(`#resultOutput`).textContent;
    document.body.querySelector(".thirdPageSave").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.remove("switch");
}
const changeValue3 = () => {
    buttonValue3 = document.body.querySelector(`#resultOutput`).textContent;
    document.body.querySelector(".thirdPageSave").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.remove("switch");
}
const changeValue4 = () => {
    buttonValue4 = document.body.querySelector(`#resultOutput`).textContent;
    document.body.querySelector(".thirdPageSave").classList.add("switch");
    document.body.querySelector(".secondPageCalc").classList.remove("switch");
}

// ======================================================================
// Memory buttons use
// ======================================================================

const writeValue1 = () => {
    document.body.querySelector("#resultOutput").textContent += buttonValue1;    
}
const writeValue2 = () => {
    document.body.querySelector("#resultOutput").textContent += buttonValue2;    
}
const writeValue3 = () => {
    document.body.querySelector("#resultOutput").textContent += buttonValue3;    
}
const writeValue4 = () => {
    document.body.querySelector("#resultOutput").textContent += buttonValue4;    
}