
// They are the Offical Variables That are made Raw:
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
// End here.

// Creating a class for calculator :
class Calculator {
    // Consturctor is going to take previous & current operand text ELement:
    // ---> for taking all the input as well as all the function for the Calculator:
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    // Now we Will create a function for our Calculator:
    clear() {
        // To clear all the number & operation From Current as well as from previous operand in the whole output area ;
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete(){
        // TO Delete a number only single number from current operand ;

    }

    appendNumber(number) {
        // To Add a number every time we click on a number text into the output > current operand area: ---> inside this it take a number "parameter" to make the user to select the number before append ;
        this.currentOperand = number
    }

    chooseOperation(operation) {
        // To any time use an operation in the Calculator : ---> and inside this it take a operation "parameter"
    }

    compute() {
        // To compute a single value that we need to display in the output area ;
    }

    updateDisplay() {
        // TO update the alculator display after a perticular Calculation;
        this.currentOperandTextElement.innerText = this.currentOperand
    }
  }



  // Create a new Calculator Const Variable with variable type object:
  const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

  // Use of thhis const calculator :
  //--- Use of forEach to Loop over all difernt buttons :
  numberButtons.forEach(button => {
    // --> for Each of this button we want to add an Event Listener :
    // -----> And in this Event Listener We want when ever we cliack on this button we want to do something:

    button.addEventListener('click', () => {
        // What we wanna do we actually want to append this number on output :
        // ---> What ever inside that button we we erased;
        calculator.appendNumber(button.innerText)
        // After This we want to update our display in a Calculator :
        calculator.updateDisplay()
    })
  } )
