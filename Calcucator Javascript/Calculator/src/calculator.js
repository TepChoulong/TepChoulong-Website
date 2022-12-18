var OutputScreen = document.getElementById("outputscreen");

function display(value) {
    OutputScreen.value += value;
}

function calculate() {
    try {
        OutputScreen.value = eval(OutputScreen.value);
    }
    catch(err) {
        alert("Invalid");
    }
}

function Clear() {
    OutputScreen.value = '';
}

function del() {
    OutputScreen.value = OutputScreen.value.slice(0, -1);
}
