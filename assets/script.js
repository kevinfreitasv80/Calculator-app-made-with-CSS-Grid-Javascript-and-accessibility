let body = document.querySelector("body");
let numberSymbols = document.getElementById("screen");
let main = document.querySelector("main");
let articleScreen = document.getElementsByClassName("articleScreen")[0];
let buttonsGrid = document.getElementsByClassName("buttonsGrid")[0];
let resolve = document.getElementsByClassName("resolve")[0];

chooseTheme.addEventListener("change", function() {
    let chooseTheme = document.getElementById("chooseTheme");
    let root = document.documentElement;
    let val = parseInt(this.value);
    let buttons = document.getElementsByClassName("buttons");
    let resetAndDel = document.getElementsByClassName("resetAndDel");

    let color1 = '#252D44';
    switch (val) {
        case 0:
            body.style.transition = ".5s";
            body.style.background = "#3B4664";
            main.style.color = "white";
            main.style.transition = ".5s";
            chooseTheme.style.background = color1;
            buttonsGrid.style.background = color1;
            articleScreen.style.background = "#181F32";
            resolve.style.background = "#D13F30";
            resolve.style.boxShadow = "0 3px 0 #93261A";
            resolve.style.color = "white";
            /* Many buttons */
            for (let i = 0; i < resetAndDel.length; i++) {
                resetAndDel[i].addEventListener("mouseover", function() {
                    this.style.background = "#A2B2E2";
                });
                resetAndDel[i].addEventListener("mouseout", function() {
                    this.style.background = "#647299";
                });
                resetAndDel[i].style.background = "#647299";
                resetAndDel[i].style.boxShadow = "0 3px 0 #424E73";
            }
            resolve.addEventListener("mouseover", function() {
                this.style.background = "#F96C5B";
            });
            resolve.addEventListener("mouseout", function() {
                this.style.background = "#D13F30";
            });
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseover", function() {
                    this.style.background = "";
                });
                buttons[i].addEventListener("mouseout", function() {
                    this.style.background = "";
                });
                buttons[i].style.color = "#474E5C";
                buttons[i].style.background = "#EAE3DB";
                buttons[i].style.transition = '.3s';
                buttons[i].style.boxShadow = "0 3px 0 #B3A39D";
            }
            /* root */
            root.style.setProperty('--thumb-bg', '#D23C26');
            root.style.setProperty('--thumb-bg-hover', '#FC6A58');
            break;

        case 1:
            body.style.transition = ".5s";
            body.style.background = "#E6E6E6";
            main.style.color = "#33332A";
            chooseTheme.style.background = "#D3CDCE";
            articleScreen.style.background = "#EEEEEE";
            buttonsGrid.style.background = "#D3CDCD";
            resolve.style.background = "#C85401";
            resolve.style.boxShadow = "0 3px 0 #93261A";
            resolve.style.color = "white";
            /* Many buttons */
            for (let i = 0; i < resetAndDel.length; i++) {
                resetAndDel[i].addEventListener("mouseover", function() {
                    this.style.background = "#62B5BD";
                });
                resetAndDel[i].addEventListener("mouseout", function() {
                    this.style.background = "#388187";
                });
                resetAndDel[i].style.background = "#388187";
                resetAndDel[i].style.boxShadow = "0 3px 0 #1a6166";
            }
            resolve.addEventListener("mouseover", function() {
                this.style.background = "#F96C5B";
            });
            resolve.addEventListener("mouseout", function() {
                this.style.background = "#C85401";
            });
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseover", function() {
                    this.style.background = "";
                });
                buttons[i].addEventListener("mouseout", function() {
                    this.style.background = "";
                });
                buttons[i].style.color = "#474E5C";
                buttons[i].style.background = "#EAE3DB";
                buttons[i].style.transition = '.3s';
                buttons[i].style.boxShadow = "0 3px 0 #B3A39D";
            }
            /* root */
            root.style.setProperty('--thumb-bg', '#CA580A');
            root.style.setProperty('--thumb-bg-hover', '#FA8E3F');
            break;

        case 2:
            body.style.background = "#17062A";
            body.style.transition = ".5s";
            main.style.color = "#FFE64C";
            main.style.transition = ".5s";
            chooseTheme.style.background = "#1E0836";
            buttonsGrid.style.background = "#1E0836";
            articleScreen.style.background = "#1E0836";
            resolve.style.background = "#08DBD3";
            resolve.style.color = "black";
            resolve.style.boxShadow = "0 3px 0 #6DF7EF";
            /* Many buttons */
            for (let i = 0; i < resetAndDel.length; i++) {
                resetAndDel[i].addEventListener("mouseover", function() {
                    this.style.background = "#8730B2";
                });
                resetAndDel[i].addEventListener("mouseout", function() {
                    this.style.background = "#57077C";
                });
                resetAndDel[i].style.background = "#57077C";
                resetAndDel[i].style.boxShadow = "0 3px 0 #B61BE8";
            }
            resolve.addEventListener("mouseover", function() {
                this.style.background = "#94FFF9";
            });
            resolve.addEventListener("mouseout", function() {
                this.style.background = "#08DBD3";
            });
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseover", function() {
                    this.style.background = "#6B34AC";
                });
                buttons[i].addEventListener("mouseout", function() {
                    this.style.background = "#331B4D";
                });
                buttons[i].style.background = "#331B4D";
                buttons[i].style.transition = '.3s';
                buttons[i].style.color = "#FFE64C";
                buttons[i].style.boxShadow = "0 3px 0 #56077C";
            }
            /* root */
            root.style.setProperty('--thumb-bg', '#00DAD3');
            root.style.setProperty('--thumb-bg-hover', '#93FBF4');
            break;
    }
});

function math(symbols) {
    let num = numberSymbols.textContent;
    switch (symbols) {
        case 'del':
            numberSymbols.textContent = num.slice(0, -1);
            break;
        case 'reset':
            numberSymbols.textContent = '';
            break;
        case 'point':
            numberSymbols.textContent += ',';
            break;
        case 'plus':
            numberSymbols.textContent += '+';
            break;
        case 'minus':
            numberSymbols.textContent += '-';
            break;
        case 'divide':
            numberSymbols.textContent += '/';
            break;
        case 'multiply':
            numberSymbols.textContent += 'x';
            break;
        case 'equal':
            try {
                num = num.replace(/x/g, '*');
                num = num.replace(/,/g, '.');
                let result = eval(num);
                numberSymbols.textContent = result;
            } catch (error) {
                numberSymbols.textContent = 'Error';
            }
            break;
        default:
            numberSymbols.textContent += symbols;
            break;
    }
}