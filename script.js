// Agua Total=
// (Peso (kg)×35)+
// Ajuste Genero+
// juste Altura+
// Ajuste Idade+
// Ajuste Clima+
// Ajuste Atividade

const buttonsState = {
    male: false, 
    female: false
};

const PALETTE = {
    DISABLED_BTN: "grey",
    ACTIVE_BTN: "white",
};

const maleButton = document.getElementById("male-btn");
const femaleButton = document.getElementById("female-btn");
const ageInput = document.getElementById("age-input");

function maleBtnClickHandler() {
    buttonsState.male = !buttonsState.male;

    if (buttonsState.male) maleButton.style.background = PALETTE.ACTIVE_BTN;
    else maleButton.style.background = PALETTE.DISABLED_BTN;

    swicthBtnState("male")
}

function femaleBtnClickHandler() {
    buttonsState.female = !buttonsState.female;

    if (buttonsState.female) femaleButton.style.background = "white";
    else femaleButton.style.background = "grey"

    swicthBtnState("female")
}

function swicthBtnState(btnType) {
    if (btnType === "male" && buttonsState.male === true && buttonsState.female === true) {
        buttonsState.female = false;
        femaleButton.style.background = "grey"
    }
    else if (btnType === "female" && buttonsState.female === true && buttonsState.male === true) {
        buttonsState.male = false;
        maleButton.style.background = "grey"
    }
}

let genderFactor = 0;

maleButton.addEventListener("click", maleBtnClickHandler)

femaleButton.addEventListener("click", femaleBtnClickHandler)

ageInput.addEventListener("input", (e) => console.log(e.target.value))
