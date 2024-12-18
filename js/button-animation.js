document.addEventListener('DOMContentLoaded', () => {
    function animateSgv (id, delay, delayIncrement){
        const logo = document.getElementById(id);
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for(let i = 0; i < logoPaths.length;i++){
            logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
            delay+=delayIncrement;
            console.log(delay)
        }
        logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
    }
// Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateSgv('learn-more', 0, 0.4) 
}, false);

function buttonResize() {
    const buttonBorder = document.querySelector(".btn-container");
    var buttonWidth = getComputedStyle(buttonBorder).width;
    var buttonHeight = getComputedStyle(buttonBorder).height;
    const pnt1 = document.querySelector(".bg-line");
    const pnt2 = document.querySelector(".hl-line");
    var svgWidth = buttonWidth.substring(0,3) - 1;
    var svgHeight = buttonHeight.substring(0,2) - 1;

    pnt1.setAttribute("points", `${svgWidth},1 ${svgWidth},${svgHeight} 1,${svgHeight} 1,1 ${svgWidth},1`);
    pnt2.setAttribute("points", `${svgWidth},1 ${svgWidth},${svgHeight} 1,${svgHeight} 1,1 ${svgWidth},1`);
}


document.addEventListener('DOMContentLoaded', () => {
    const buttonBorder = document.querySelector(".btn-container");
    var buttonWidth = getComputedStyle(buttonBorder).width;
    var buttonHeight = getComputedStyle(buttonBorder).height;
    const pnt1 = document.querySelector(".bg-line");
    const pnt2 = document.querySelector(".hl-line");
    var svgWidth = buttonWidth.substring(0,3) - 1;
    var svgHeight = buttonHeight.substring(0,2) - 1;
    pnt1.setAttribute("points", `${svgWidth},1 ${svgWidth},${svgHeight} 1,${svgHeight} 1,1 ${svgWidth},1`);
    pnt2.setAttribute("points", `${svgWidth},1 ${svgWidth},${svgHeight} 1,${svgHeight} 1,1 ${svgWidth},1`);
});


