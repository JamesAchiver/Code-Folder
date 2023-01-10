// Creating a class for calculator :
class Calculator {
    // Consturctor is going to take previous & current operand text ELement:
    // ---> for taking all the input as well as all the function for the Calculator:
     constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    } //--

    // Now we Will create a function for our Calculator:

    clear() {
        // To clear all the number & operation From Current as well as from previous operand in the whole output area ;
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        // TO Delete a number only single number from current operand ;
        //-- Now delete Button Works 100% Successfull :
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    chooseOperation(operation) {
        // To any time use an operation in the Calculator : ---> and inside this it take a operation "parameter"
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        // Below code repesent that we are done typing in currend operand ;
        this.previousOperand = this.currentOperand 
        this.currentOperand = ''
    }

    compute() {
        // To compute a single value that we need to display in the output area ;
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
                computation = prev + current 
                break
            case "-":
                computation = prev - current 
                break
            case "*":
                computation = prev * current 
                break
            case "÷":
                computation = prev / current
                break
            default:
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString() 
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay ;
        if(isNaN(integerDigits)){
            integerDisplay = '';
        }else {
            integerDisplay = integerDigits.toLocaleString('en' , {maximumFractionDigits : 0 })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    
    updateDisplay() {
        // TO update the alculator display after a perticular Calculation
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
}

 // They are the Offical Variables That are made from video:
 const numberButtons = document.querySelectorAll('[data-number]');
 const operationButtons = document.querySelectorAll('[data-operation]');
 const equalsButton = document.querySelector('[data-equals]');
 const deleteButton = document.querySelector('[data-delete]');
 const allClearButton = document.querySelector('[all-data-clear]');
 const previousOperandTextElement = document.querySelector('[data-previous-operand]');
 const currentOperandTextElement = document.querySelector('[data-current-operand]');
 // End here.

 // Create a new Calculator Const Variable with variable type object:
 const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement) 
  // Use of thhis const calculator :
  //--- Use of forEach to Loop over all difernt buttons :
 numberButtons.forEach(button => {
    // --> for Each of this button we want to add an Event Listener :
    // -----> And in this Event Listener We want when ever we cliack on this button we want to do something:
    button.addEventListener("click", () => {
        // What we wanna do we actually want to append this number on output :
        // ---> What ever inside that button we we erased;
        calculator.appendNumber(button.innerText)
        // After This we want to update our display in a Calculator :
        calculator.updateDisplay()
    })
 })

 operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
 })

equalsButton.addEventListener('click', button => {
    calculator.compute() 
    calculator.updateDisplay()
})

 allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
 })

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})