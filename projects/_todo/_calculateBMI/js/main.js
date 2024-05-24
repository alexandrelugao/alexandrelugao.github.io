// 10.03.2022

function main() {

    const formBMI = document.querySelector('.container__form');
    formBMI.addEventListener('submit', calculateBMI);

    // The handler function, by default, when executed is passed the event object (that was created when the event/action you are interested in happened) as an argument.
    function calculateBMI(e) {
        e.preventDefault();

        let weight = document.querySelector('#weight-input').value;
        let height = document.querySelector('#height-input').value;

        if (isNaN(weight) || isNaN(height)) {
            return;
        }

        if (weight == 0 || height == 0) {
            alert("Invalid input")
            return;
        }

        weight = Number(weight);
        height = Number(height) / 100;

        let bmiResult = getBMI(weight, height);
        let bmiClass = getClass(bmiResult);

        let resTitle = `Your BMI is ${bmiResult} - ${bmiClass.class}`;
        let resDescr = bmiClass.description;

        // add new data to html
        let resultDiv = document.querySelector('.result');

        let newh2 = newElem('h2', resTitle);
        let newpara = newElem('p', resDescr);

        resultDiv.textContent = '';
        resultDiv.appendChild(newh2);
        resultDiv.appendChild(newpara);

        return;
    }

    function getBMI(weight, height) {
        return (weight / (height ** 2)).toFixed(1);
    }

    function getClass(bmi) {
        const bmiClassification = {
            "class_1": {
                "class": "Underweight",
                "description": "Being underweight could be a sign you're not eating enough or you may be ill. If you're underweight, a GP can help."
            },
            
            "class_2": {
                "class": "Normal Weight",
                "description": "Keep up the good work! For tips on maintaining a healthy weight, check out the food and diet and fitness sections.",
            },
        
            "class_3": {
                "class": "Overweight",
                "description": "The best way to lose weight if you're overweight is through a combination of diet and exercise. The BMI calculator will give you a personal calorie allowance to help you achieve a healthy weight safely.",
            },
        
            "class_4": {
                "class": "Obese",
                "description": "The best way to lose weight if you're overweight is through a combination of diet and exercise. The BMI calculator will give you a personal calorie allowance to help you achieve a healthy weight safely.",
            },
        }

        if (bmi >= 30) return bmiClassification.class_4;
        
        if (bmi >= 25) return bmiClassification.class_3;            
        
        if (bmi >= 18.5) return bmiClassification.class_2;
                
        if (bmi < 18.5) return bmiClassification.class_1;
        
    }

    function newElem(elem, txt) {
        let el = document.createElement(elem);
        el.innerText = txt;

        return el;
    }
    
}
main();
