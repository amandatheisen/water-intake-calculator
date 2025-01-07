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

const maleFemale = document.getElementById("male-female-id")
const maleButton = document.getElementById("male-btn");
const femaleButton = document.getElementById("female-btn");
const ageInput = document.getElementById("a-input");
const heightInput = document.getElementById("h-input")
const weightInput = document.getElementById("w-input")
const weatherSelect = document.getElementById("weather-id")
const activityLevelSelect = document.getElementById("activity-level-id")
const mySubmit = document.getElementById("submit-form")

let userGenderFactor = 0;

maleFemale.addEventListener("click", (e) => {
    const userGender = e.target.value
    userGenderFactor;

    if (userGender === "male") {
        userGenderFactor = 500
    } else {
        userGenderFactor = 0
    }

    console.log(userGenderFactor)
})


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



// maleButton.addEventListener("click", maleBtnClickHandler)

// femaleButton.addEventListener("click", femaleBtnClickHandler)

// ageInput.addEventListener("input", (e) => console.log(e.target.value))


let userAge = 0;
let userAgeFactor = 0;

ageInput.addEventListener("input", (e) => { 
    userAge = e.target.value
    userAgeFactor = calculateAgeFactor(userAge)
    console.log(userAgeFactor)
})

function calculateAgeFactor(age) {
    if (age < 30) {
        return 0
    } 
    if (age <= 50) {
        return -200
    }
    return -500
}


// let userHeight = 0;
// let heightFactor = 0;

let userHeightFactor = 0;

heightInput.addEventListener("input", (e) => {
    userHeight = e.target.value;
    userHeightFactor;

    if (userHeight >= 180 && userHeight < 190) {
        userHeightFactor = 200
    } else if (userHeight >= 190 && userHeight <= 210) {
        userHeightFactor = 300
    } else {
        userHeightFactor = 0
    }
    
    console.log(userHeightFactor)
})

// function calculateHeightFactor(height) {
//     if(height >= 130 && height < 190) {
//         return 200
//     }
//     if (height > 190 && height <= 210)
//         return 300
// }

let userWeight = 0;
let userWeightFactor = 0;

weightInput.addEventListener("input", (e) => {
    userWeight = e.target.value;
    userWeightFactor = calculateWeightFactor(userWeight)
    console.log(userWeightFactor)
})

function calculateWeightFactor(weight) {
    let weightResult = weight * 35;
    return weightResult
}

let userWeatherFactor = 0;

weatherSelect.addEventListener("change", (e) => {
    const userWeather = e.target.value
    userWeatherFactor;

    if (userWeather === "cold") {
        userWeatherFactor = 200;
    } else if (userWeather === "normal") {
        userWeatherFactor = 0;
    } else { 
        userWeatherFactor = 500;
    }

    console.log(userWeatherFactor) 
})

let userActivityLevelFactor = 0;

activityLevelSelect.addEventListener("change", (e) => {
    const userActivityLevel = e.target.value
    userActivityLevelFactor;

    if (userActivityLevel === "sedentary") {
        userActivityLevelFactor = 0
    } else if (userActivityLevel === "moderate") {
        userActivityLevelFactor = 400
    } else {
        userActivityLevelFactor = 700
    }

    console.log(userActivityLevelFactor)
})

let userSubmitResult = 0;

mySubmit.addEventListener("click", (e) => {
    e.preventDefault();

        userSubmitResult = 
        userWeightFactor +
        userGenderFactor +
        userHeightFactor +
        userAgeFactor +
        userWeatherFactor +
        userActivityLevelFactor

    console.log("Water intake result:", userSubmitResult)
})
