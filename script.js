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
const ageError = document.getElementById("age-input-error")
const heightError = document.getElementById("height-input-error")
const weightError = document.getElementById("weight-input-error")
const weatherError = document.getElementById("weather-select-error")
const weatherDefaltOption = document.getElementById("weather-select-option")
const activityLevelError = document.getElementById("activity-level-select-error")


let userGenderFactor = 0;

maleFemale.addEventListener("click", (e) => {
    const userGender = e.target.value
    userGenderFactor;

    if (userGender === "male") {
        userGenderFactor = 500
    } else {
        userGenderFactor = 0
    }

    console.log({userGenderFactor})
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
    const isValidAge = minMaxAge(userAge)

    if(isValidAge) {
        ageError.style.display = "none";
    } else {
        ageError.style.display = "flex";
        
        return;
    }

    userAgeFactor = calculateAgeFactor(userAge)
    console.log({userAgeFactor})
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

function minMaxAge(age) {

    if (age < 18 || age > 100) return false;

    return true;    
}


let userHeight = 0;
// let heightFactor = 0;

let userHeightFactor = 0;

heightInput.addEventListener("input", (e) => {
    userHeight = e.target.value;
    const isValidHeight = minMaxHeight(userHeight);

    if (isValidHeight) {
        heightError.style.display = "none";
    } else {
        heightError.style.display = "flex";
    }

    if (userHeight >= 180 && userHeight < 190) {
        userHeightFactor = 200
    } else if (userHeight >= 190 && userHeight <= 210) {
        userHeightFactor = 300
    } else {
        userHeightFactor = 0
    }
    
    console.log({userHeightFactor})
})

function minMaxHeight(height) {
    if (height < 130 || height > 210) {
        return false
    } else {
        return true
    }
}

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
    userWeight = e.target.value
    const isValidWeight = minMaxWeight(userWeight)

    if (isValidWeight) {
        weightError.style.display = "none";
    } else {
        weightError.style.display = "flex";

        return
    }
    userWeightFactor = calculateWeightFactor(userWeight, userHeight)
    console.log({userWeightFactor})
})

function calculateWeightFactor(userWeight, userHeight) {
    // let weightResult = weight * 35;
    // return weightResult\

    // if (typeof userWeight !== "number" || userHeight !== "number" || userWeight === 0 || userHeight === 0) {
    //     return 0
    // }

    const imc = userWeight / (userHeight ** 2)


    if (imc < 18.5) {
        return userWeight * 40; // Abaixo do peso
    } else if (imc >= 18.5 && imc <= 24.9) {
        return userWeight * 35; // Peso normal
    } else if (imc >= 25 && imc <= 29.9) {
        return userWeight * 30; // Sobrepeso
    } else if (imc >= 30 && imc <= 34.9) {
        return userWeight * 25; // Obesidade grau 1
    } else if (imc >= 35 && imc <= 39.9) {
        return userWeight * 20; // Obesidade grau 2
    } else {
        return userWeight * 15; // Obesidade grau 3
    }
}

function minMaxWeight(weight) {

    if (weight < 40 || weight > 150) {
        return false
    } else {
        return true
    }
}


let userWeatherFactor = 0;

weatherSelect.addEventListener("change", (e) => {
    const userWeather = e.target.value
    // const isValidWeather = selectedWeather(userWeather);

    // if (isValidWeather) {
    //     weatherError.style.display = "none";
    // } else {
    //     weatherError.style.display = "flex";
    // }

    if (userWeather === "cold") {
        userWeatherFactor = -200;
    } else if (userWeather === "normal") {
        userWeatherFactor = 0;
    } else { 
        userWeatherFactor = 300;
    }

    console.log({userWeatherFactor}) 
})

// function selectedWeather(weather) {
//     if (weather === "weatherDefaltOption") {
//         return false 
//     } else {
//         return true
//     }
// }

let userActivityLevelFactor = 0;

activityLevelSelect.addEventListener("change", (e) => {
    const userActivityLevel = e.target.value
    userActivityLevelFactor;

    if (userActivityLevel === "sedentary") {
        userActivityLevelFactor = 0
    } else if (userActivityLevel === "moderate") {
        userActivityLevelFactor = 200
    } else {
        userActivityLevelFactor = 500
    }

    console.log({userActivityLevelFactor})
})

let userSubmitResult = 0;


mySubmit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("submit click", {
        userWeightFactor,
        userGenderFactor,
        userHeightFactor,
        userAgeFactor,
        userWeatherFactor,
        userActivityLevelFactor
    });
    
    const factorSum = userWeightFactor +
        userGenderFactor +
        userHeightFactor +
        userAgeFactor +
        userWeatherFactor +
        userActivityLevelFactor

        console.log({factorSum})

        userSubmitResult = 
        Math.min(factorSum, 3900)

    console.log("Water intake result:", userSubmitResult)
})
