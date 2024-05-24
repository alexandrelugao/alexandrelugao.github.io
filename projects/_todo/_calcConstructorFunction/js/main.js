// 30.03.2022

function Calculator() {
    this.display = document.querySelector(".display");

    this.init = () => {
        this.getClicks();
    }

    this.getClicks = () => {
        document.addEventListener("click", e => {
            const elem = e.target;
            const elemCL = elem.classList;

            if (elemCL.contains("btn-num") || elemCL.contains("btn-op")) this.addToDisplay(elem);
            if (elemCL.contains("btn-clear")) this.clear();
            if (elemCL.contains("btn-bksp")) this.backspace();
            if (elemCL.contains("btn-equal")) this.getResult(elem);
            
        })
    }

    this.addToDisplay = (elem) => {
        this.display.value += elem.textContent;
        console.log(elem.textContent);
        return 1;
    }

    this.clear = () => this.display.value = "";

    this.backspace = () => this.display.value = this.display.value.slice(0, -1);

    this.getResult = (elem) => {
        console.log(elem.textContent.prototype.fromHtmlEntities());
    }


    const dict = {
        "&#247;": "/",
        "&#215;": "*",
        "&#8722;": "-",
        "&#43;": "+",
        
        "&#33;": "!",
        "&#37;": "/100",
        "&#8730;": "sqrt",

    }
}
const calculator = new Calculator();
calculator.init();

// function createCalculator() {
//     return {
//         /* ATTRIBUTES */
//         display: document.querySelector(".display"),
//         clear: document.querySelector(".btn-clear"),

//         btns: document.querySelector(".btn-area"),
//         divide: document.querySelector(".divide"),
//         times: document.querySelector(".times"),

//         // let stringInput = '';
//         realExpr: '',
        
//         /* METHODS */

//         init() {
//             this.blockKeyboard();
//             this.btnClick();
//         },

//         blockKeyboard() {
//             document.addEventListener("keydown", function(e) {
//                 const acceptedKeys = ["Enter", "F5", "Delete", "Backspace"]
//                 if (acceptedKeys.includes(e.key)) {
//                     console.log(e.key);
//                     return
//                 }
//                 e.preventDefault()
//             })
//         },

//         evalExpr() {
//             let res = String(this.realExpr);
//             if (!res) return;

//             try {
//                 res = eval(res);
//             } catch(e) {
//                 alert("Invalid Expression");
//             }

//             this.display.value = res;
//             this.realExpr = res;

//             console.log(res);
//         },


//         btnClick() {
//             document.addEventListener("click", (e) => {
//             const elem = e.target;
//             const elemCL = elem.classList;
                
//             if (!this.isButton(elem)) return;

//             if (elemCL.contains('btn-num') || elemCL.contains('btn-op')) {
//                 this.displayInput(elem.textContent);
//                 this.realExpr += elem.name;
//             }

//             if (elemCL.contains('btn-clear')) {
//                 this.clearDisplay();
//             }
            
//             if (elemCL.contains('btn-bksp')) {
//                 this.backspaceDisplay();
//             }

//             if (elemCL.contains('btn-equal')) {
//                 this.evalExpr();
//             }

//             console.log(elem);

            
//             this.display.focus();

//             });  //.bind(this)
//         },

//         displayInput(stdin) {
//             this.display.value += stdin
//             console.log(this.display.value);
//             console.log(this.realExpr);
//         },

//         clearDisplay() {
//             this.display.value = '';
//             this.realExpr = '';
//         },

//         backspaceDisplay() {
//             const val = this.display.value;
//             this.display.value = this.display.value.slice(0, -1);
            
//             console.log(typeof this.realExpr);
//             this.realExpr = Str(this.realExpr).slice(0, -1);
//         },

//         isButton(elem) {
//             return elem.classList.contains("btn");
//         },

//     }
// }

// const myCalc = createCalculator();
// myCalc.init();