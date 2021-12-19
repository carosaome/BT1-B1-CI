const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator(options) {
    // Function handle validate
    function validate(inputElement, rule) {
        let errMessage = rule.test(inputElement.value)
        let errElement = inputElement.parentElement.querySelector(options.errSelector);

        if (errMessage) {
            errElement.innerText = errMessage;
        }
        else {
            errElement.innerText = '';

        }
    }


    //Get Element from for Validate
    let formElement = $(options.form);
    console.log(formElement)



    if (formElement) {
        options.rules.forEach((rule) => {
            let inputElement = document.getElementById(rule.selector);
            console.log(inputElement)

            if (inputElement) {
                // Handle when user blur
                inputElement.addEventListener('blur', () => {
                    validate(inputElement, rule)

                })
                
                //Hanlde when user typying
                inputElement.oninput = function () {
                    let errElement = inputElement.parentElement.querySelector(options.errSelector);
                    errElement.innerText = ''
                }
            }
        })
    }
}

// rules
Validator.isNum = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            let iValue = parseInt(value);
            return  iValue >=0 ? undefined : 'This page need a number'
        }
    }

}