function tinhBMI (height,weight) {
    let BMI = weight/(height * height);
    return BMI
}
function validateInput (weight, height) {
    let isValidate = true

    if(height === ''){
        document.getElementById('errorHeight').textContent = 'Vui lòng nhập chiều cao'
        isValidate = false
    }
    if(weight === ''){
        document.getElementById('errorWeight').textContent = 'Vui lòng nhập cân nặng'
        isValidate = false
    }
    if(height<0){
        document.getElementById('errorHeight').textContent = 'Chiều cao không được âm'
        isValidate = false
    }
    if(weight<0){
        document.getElementById('errorWeight').textContent = 'Cân nặng không được âm'
        isValidate = false
    }
    if(weight>300){
        document.getElementById('errorWeight').textContent = 'Cân nặng không được lớn hơn 300'
        isValidate = false
    }
    if(height>300){
        document.getElementById('errorHeight').textContent = 'Chiều cao không được lớn hơn 300'
        isValidate = false
    }
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('errorWeight').textContent = 'Cân nặng phải là số'
        document.getElementById('errorHeight').textContent = 'Chiều cao phải là số'
        isValidate = false
    }
    return isValidate
}
function getAdviceFromYouBMI(bmi) {
    let message = ' '
        if (bmi<18.5) {
            message= 'Thiếu cân'
        } else if (bmi>=18.5 && bmi <=24.9) {
            message = 'Bình thường'
        } else if (bmi>=25 && bmi <=29.9) {
            message = 'Thừa cân'
        }else if (bmi>=30) {
            message = 'Béo phì'
        }
    return message
}

let buttonBMI = document.getElementById('btnBMI')

buttonBMI.addEventListener('click' , () => {
    let heightElement = document.querySelector('#height')
    let weightElement = document.querySelector('#weight')
    
    let heightValue = heightElement.value
    let weightValue = weightElement.value

    document.getElementById('errorHeight').textContent = ''
    document.getElementById('errorWeight').textContent = ''
    if(validateInput(heightValue,weightValue) === false){
        return
    }

    let BMI = tinhBMI(heightValue,weightValue)

    let resultElement = document.getElementById('result')
    resultElement.textContent = BMI.toFixed(2)

    let message = getAdviceFromYouBMI(BMI)
    let adviceElement = document.getElementById ('advice')
    adviceElement.textContent = message
})

