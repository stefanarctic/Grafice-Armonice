
let isDialogOpen = false;
const popup = document.getElementById('create-point-popup');
const overlay = document.getElementById('overlay');
const showPopupButton = document.getElementById('show-popup-button');
const closePopupButton = document.getElementById('close-popup-btn');
const createPointButton = document.getElementById('create-point-btn');
const omega1Input = document.getElementById('omega1Input');
const omega2Input = document.getElementById('omega2Input');
const amplitudine = document.getElementById('amplitudineInput');
const letterInput = document.getElementById('letterInput');
const timeInput = document.getElementById('timeInput');
const colorInput = document.getElementById('colorInput');

const openDialog = () => {
    isDialogOpen = true;
    console.log('opened popup');
    popup.style.display = 'flex';
    letterInput.focus();
    overlay.style.display = 'block';
}

const hideDialog = () => {
    isDialogOpen = false;
    console.log('closed popup');
    popup.style.display = 'none';
    overlay.style.display = 'none';
    resetValues();
}

const resetValues = () => {
    letterInput.value = '';
    timeInput.value = '';
    colorInput.value = '#000000';
}

/*
    𝛚1 = 3;
    𝛚2 = 6;
    φ0 = 90;
*/

const createPoint = () => {
    const letter = letterInput.value;
    const time = timeInput.value;
    const omega1 = omega1Input.value;
    const omega2 = omega2Input.value;
    const amplitudine = amplitudineInput.value;
    const color = colorInput.value;
    hideDialog();

    //const A = 10;
    //const w1 = 3;
    //const w2 = 6;
    const f0 = 90;
    const t = time;
    const w1 = omega1;
    const w2 = omega2;
    const A = amplitudine;
    const x = A * Math.sin(w1 * t);
    const y = A * Math.sin(w2 * t + f0);
    gridGroup.append("circle")
        .attr("cx", x * minorSpacing)
        .attr("cy", -y * minorSpacing)
        .attr("r", 4)
        .style("fill", color);
    
    gridGroup.append("text")
        .attr("x", x * minorSpacing - 10) // Lângă punct pe axa X
        .attr("y", -y * minorSpacing -10 ) // Deasupra punctului pe axa Y
        .text(`D (${x.toFixed(2)}, ${y.toFixed(2)})`) // Numele punctului cu coordonate formatate
        .style("font-size", "12px")
        .style("fill", color);

    // const lastPoint = points[points.length - 1];
    // gridGroup.append("line")
    //     .attr("x1", lastPoint.x * minorSpacing) // Coordonata X a punctului A
    //     .attr("y1", -lastPoint.y * minorSpacing) // Coordonata Y a punctului A
    //     .attr("x2", x * minorSpacing) // Coordonata X a punctului B
    //     .attr("y2", -y * minorSpacing) // Coordonata Y a punctului B
    //     .attr("stroke", color) // Culoarea liniei
    //     .attr("stroke-width", 2); // Grosimea liniei
}

showPopupButton.onclick = openDialog;
closePopupButton.onclick = hideDialog;
createPointButton.onclick = createPoint;

window.onload = () => {
    hideDialog();
}

overlay.onclick = e => {
    hideDialog();
}

document.addEventListener('keydown', e => {
    if(isDialogOpen && e.key === 'Escape')
        hideDialog();
})

// document.addEventListener('click', e => {
//     alert('Clicked on body');
//     alert(`Dialog open: ${isDialogOpen}`);
//     if(isDialogOpen === true && e.target !== createPointButton && !createPointButton.contains(e.target))
//     {
//         alert('Checking if clicked inside');
//         const clickedInside = popup === e.target || popup.contains(e.target);
//         if(!clickedInside)
//         {
//             alert('Clicked inside');
//             hideDialog();
//         }
//     }
// })