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
const ageInput = document.getElementById("a-input");
const heightInput = document.getElementById("h-input")
const weightInput = document.getElementById("w-input")
const weatherSelect = document.getElementById("weather-id")
const activityLevelSelect = document.getElementById("activity-level-id")
const mySubmit = document.getElementById("button-submit")
const ageError = document.getElementById("age-input-error")
const heightError = document.getElementById("height-input-error")
const weightError = document.getElementById("weight-input-error")
const weatherError = document.getElementById("weather-select-error")
const weatherDefaltOption = document.getElementById("weather-select-option")
const activityLevelError = document.getElementById("activity-level-select-error")
const minWaterfinalResultMessage = document.getElementById("min-water-intake-final-message")
const idealWaterFinalResultMessage = document.getElementById("ideal-water-intake-final-message")
const resetBtn = document.getElementById("button-reset")

// * GENDER * //

const validFields = {
    gender: false,
    age: false,
    height: false,
    weight: false,
}

let userGenderFactor = 0;

maleFemale.addEventListener("click", (e) => {
    const userGender = e.target.value
    
    if(["male", "female"].includes(userGender)){
        validFields.gender = true;
    }

    if (userGender === "male") {
        userGenderFactor = 500
    } else {
        userGenderFactor = 0
    }

    console.log({userGenderFactor})
})

// * AGE * //

let userAge = 0;
let userAgeFactor = 0;

ageInput.addEventListener("input", (e) => { 
    userAge = e.target.value
    const isValidAge = minMaxAge(userAge)

    if(isValidAge) {
        ageError.style.display = "none";
        validFields.age = true;
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

// * HEIGHT * //

let userHeight = 0;

let userHeightFactor = 0;

heightInput.addEventListener("input", (e) => {
    userHeight = e.target.value;
    const isValidHeight = minMaxHeight(userHeight);

    if (isValidHeight) {
        heightError.style.display = "none";
        validFields.height = true;
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

// * WEIGHT * //

let userWeight = 0;
let userWeightFactor = 0;


weightInput.addEventListener("input", (e) => {
    userWeight = e.target.value
    const isValidWeight = minMaxWeight(userWeight)

    if (isValidWeight) {
        weightError.style.display = "none";
        validFields.weight = true;
    } else {
        weightError.style.display = "flex";

        return
    }
    userWeightFactor = calculateWeightFactor(userWeight, userHeight)
    console.log({userWeightFactor})
})


function calculateWeightFactor(userWeight, userHeight) {

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


function calculateMinWaterIntakeFactor(userWeight) {
    const minWaterIntakeMath = userWeight * 35;
    console.log(minWaterIntakeMath)
    return minWaterIntakeMath
}

function minMaxWeight(weight) {

    if (weight < 40 || weight > 150) {
        return false
    } else {
        return true
    }
}

// * WEATHER * //

let userWeatherFactor = 0;

weatherSelect.addEventListener("change", (e) => {
    const userWeather = e.target.value
   
    if (userWeather === "cold") {
        userWeatherFactor = -200;
    } else if (userWeather === "normal") {
        userWeatherFactor = 0;
    } else { 
        userWeatherFactor = 300;
    }

    console.log({userWeatherFactor}) 
})


// * ACTIVITY LEVEL * //

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

// * RESULT * //

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

    for(const fieldName in validFields){
        const isValid = validFields[fieldName];

        if(!isValid) {
            idealWaterFinalResultMessage.textContent = '** Make sure you fill the following fields before you click "Calculate Intake": gender, age, height and weight. **' 
            idealWaterFinalResultMessage.style.color = "#FF4B2B";
            return;
        }

        if(idealWaterFinalResultMessage.style.color === "rgb(255, 75, 43)"){
            idealWaterFinalResultMessage.style.color = "#f2e9e1";
        }
    }
    
    const factorSum = 
        userWeightFactor +
        userGenderFactor +
        userHeightFactor +
        userAgeFactor +
        userWeatherFactor +
        userActivityLevelFactor

        console.log({factorSum})

        userSubmitResult = 
        Math.min(factorSum, 3900)

        console.log("Ideal Water intake result:", userSubmitResult)
        idealWaterFinalResultMessage.textContent = 
        `Ideal: ${userSubmitResult}ml`

        const minWaterIntakeMath = calculateMinWaterIntakeFactor(userWeight)

        console.log("Minimum Water intake result:", minWaterIntakeMath)
        minWaterfinalResultMessage.textContent = 
        `Minimum recommended: ${minWaterIntakeMath}ml`
    
});

resetBtn.addEventListener("click", () => {
    idealWaterFinalResultMessage.textContent = "";
    minWaterfinalResultMessage.textContent = "";

    userWeightFactor  = 0
    userGenderFactor  = 0
    userHeightFactor  = 0
    userAgeFactor  = 0
    userWeatherFactor  = 0
    userActivityLevelFactor = 0

    for(const fieldName in validFields) {
        validFields[fieldName] = false
    }
})