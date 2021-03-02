class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = this.currentOperand-toString() + number.toString()
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updataDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = ducument.quarySelectorAll('[data-number]')
const opperationButtons = ducument.quarySelectorAll('[data-operation]')
const equalsButton = document.quearySelector('[data-equals]')
const deleteButton = document.quearySelector('[data-delete]')
const allClearButton = document.quearySelector('[data-all-clear]')
const previousOperandTextElement = document.quearySelector('[data-previous-operand]')
const currentOperandTextElement = document.quearySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updataDisplay()
    })
})