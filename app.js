//length constants
const outputBox = document.querySelector('#output-box');
const inputBox = document.querySelector('#input-box');
const selection = document.querySelector('#selection');
const mainSelect = document.querySelector('#main-select');

//mass constants
const massOutputBox = document.querySelector('#mass-output-box');
const massInputBox = document.querySelector('#mass-input-box');
const massSelection = document.querySelector('#mass-selection');
const massMainSelect = document.querySelector('#mass-main-select');

//temp constants
const tempOutputBox = document.querySelector('#temp-output-box');
const tempInputBox = document.querySelector('#temp-input-box');
const tempSelection = document.querySelector('#temp-selection');
const tempMainSelect = document.querySelector('#temp-main-select');

// unit converters
const length = (input, mainSelect, selection) => {
    switch (mainSelect) {
        case "metre":
            switch (selection) {
                case "metre":
                    return input;
                    break;
                case "kilometre":
                    return input / 1000;
                    break;
                case "feet":
                    return input * 3.281;
                    break;
                case "inch":
                    return input * 39.37;
                    break;
                default:
                // code block
            }
            break;
        case "kilometre":
            switch (selection) {
                case "metre":
                    return input * 1000;
                    break;
                case "kilometre":
                    return input;
                    break;
                case "feet":
                    return input * 3281;
                    break;
                case "inch":
                    return input * 39370;
                    break;
                default:
                // code block
            }
            break;
        case "feet":
            switch (selection) {
                case "metre":
                    return input / 3.281;
                    break;
                case "kilometre":
                    return input / 3281;
                    break;
                case "feet":
                    return input;
                    break;
                case "inch":
                    return input * 12;
                    break;
                default:
                // code block
            }
            break;
        case "inch":
            switch (selection) {
                case "metre":
                    return input / 39.37;
                    break;
                case "kilometre":
                    return input / 39370;;
                    break;
                case "feet":
                    return input / 12;
                    break;
                case "inch":
                    return input;
                    break;
                default:
                // code block
            }
            break;
        default:
        // code block
    }

}

const mass = (input, mainSelect, selection) => {
    switch (mainSelect) {
        case "gram":
            switch (selection) {
                case "gram":
                    return input;
                    break;
                case "pound":
                    return input / 454;
                    break;
                case "kilogram":
                    return input / 1000;
                    break;
                case "ton":
                    return input / 1.016e+6;
                    break;
                default:
                // code block
            }
            break;
        case "pound":
            switch (selection) {
                case "gram":
                    return input * 454;
                    break;
                case "kilogram":
                    return input / 2.205;
                    break;
                case "pound":
                    return input;
                    break;
                case "ton":
                    return input / 2240;
                    break;
                default:
                // code block
            }
            break;
        case "kilogram":
            switch (selection) {
                case "gram":
                    return input * 1000;
                    break;
                case "kilogram":
                    return input;
                    break;
                case "pound":
                    return input * 2.205;
                    break;

                case "ton":
                    return input / 1016;
                    break;
                default:
                // code block
            }
            break;
        case "ton":
            switch (selection) {
                case "gram":
                    return input * 1.016e+6;
                    break;
                case "kilometre":
                    return input * 1016;
                    break;
                case "pound":
                    return input * 2240;
                    break;
                case "ton":
                    return input;
                    break;
                default:
                // code block
            }
            break;
        default:
        // code block
    }

}

const temp = (input, mainSelect, selection) => {
    switch (mainSelect) {
        case "kelvin":
            switch (selection) {
                case "kelvin":
                    return input;
                    break;
                case "celsius":
                    return input - 273.15;
                    break;
                case "farenheit":
                    return (input - 273.15) * 9 / 5 + 32;
                    break;
                default:
                // code block
            }
            break;
        case "celsius":
            switch (selection) {
                case "farenheit":
                    return (input * 9 / 5) + 32;
                    break;
                case "celsius":
                    return input;
                    break;
                case "kelvin":
                    return Number(input) + 273.15;
                    break;

                default:
                // code block
            }
            break;
        case "farenheit":
            switch (selection) {
                case "celsius":
                    return (input - 32) * 5 / 9;
                    break;
                case "kelvin":
                    return (input - 32) * 5 / 9 + 273.15;
                    break;
                case "farenheit":
                    return input;
                    break;
                default:
                // code block
            }
            break;
        default:
        // code block
    }

}

//length event listeners
inputBox.addEventListener('keyup', () => {
    const result = inputBox.value / 100;
    if (inputBox.value.length == 0) {
        outputBox.value = " ";
    } else if (isNaN(result)) {
        outputBox.value = " ";
    } else {
        outputBox.value = length(inputBox.value, mainSelect.value, selection.value);

    }
});

selection.addEventListener('change', () => {
    const result = inputBox.value / 100;
    if (inputBox.value.length == 0) {
        outputBox.value = " ";
    } else if (isNaN(result)) {
        outputBox.value = " ";
    } else {
        outputBox.value = length(inputBox.value, mainSelect.value, selection.value);

    }
});

mainSelect.addEventListener('change', () => {
    const result = inputBox.value / 100;
    if (inputBox.value.length == 0) {
        outputBox.value = " ";
    } else if (isNaN(result)) {
        outputBox.value = " ";
    } else {
        outputBox.value = length(inputBox.value, mainSelect.value, selection.value);

    }
});



//mass event listeners
massInputBox.addEventListener('keyup', () => {
    const result = massInputBox.value / 100;
    if (massInputBox.value.length == 0) {
        massOutputBox.value = " ";
    } else if (isNaN(result)) {
        massOutputBox.value = " ";
    } else {
        massOutputBox.value = mass(massInputBox.value, massMainSelect.value, massSelection.value);

    }
});

massSelection.addEventListener('change', () => {
    const result = massInputBox.value / 100;
    if (massInputBox.value.length == 0) {
        massOutputBox.value = " ";
    } else if (isNaN(result)) {
        massOutputBox.value = " ";
    } else {
        massOutputBox.value = mass(massInputBox.value, massMainSelect.value, massSelection.value);

    }
});

massMainSelect.addEventListener('change', () => {
    const result = massInputBox.value / 100;
    if (massInputBox.value.length == 0) {
        massOutputBox.value = " ";
    } else if (isNaN(result)) {
        massOutputBox.value = " ";
    } else {
        massOutputBox.value = mass(massInputBox.value, massMainSelect.value, massSelection.value);

    }
});

//temperature event listeners
tempInputBox.addEventListener('keyup', () => {
    const result = tempInputBox.value / 100;
    if (tempInputBox.value.length == 0) {
        tempOutputBox.value = " ";
    } else if (isNaN(result)) {
        tempOutputBox.value = " ";
    } else {
        tempOutputBox.value = temp(tempInputBox.value, tempMainSelect.value, tempSelection.value);

    }
});

tempSelection.addEventListener('change', () => {
    const result = tempInputBox.value / 100;
    if (tempInputBox.value.length == 0) {
        tempOutputBox.value = " ";
    } else if (isNaN(result)) {
        tempOutputBox.value = " ";
    } else {
        tempOutputBox.value = temp(tempInputBox.value, tempMainSelect.value, tempSelection.value);

    }
});

tempMainSelect.addEventListener('change', () => {
    const result = tempInputBox.value / 100;
    if (tempInputBox.value.length == 0) {
        tempOutputBox.value = " ";
    } else if (isNaN(result)) {
        tempOutputBox.value = " ";
    } else {
        tempOutputBox.value = temp(tempInputBox.value, tempMainSelect.value, tempSelection.value);

    }
});










