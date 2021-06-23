class Project1 {

    numberofInputs: HTMLInputElement;


    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    inputs: HTMLInputElement[] = [];
    selectedInputs: string[] = [];


    constructor() {
        this.startApp();
    }

    startApp() {
        this.numberofInputs = document.querySelector('#numberofinputs');
        this.numberofInputs.addEventListener("change", () => {
            this.renderInput()
        });
        this.getInputs();
    }

    renderInput() {
        this.numberofInputs = document.querySelector('#numberofinputs');
        const value = this.numberofInputs.value;
        const inputContainer = document.getElementById("inputs-container");
        const removeButton = document.getElementById('remove-button') as HTMLButtonElement;
        removeButton.hidden = false;
        removeButton.addEventListener('click', () =>{
            removeButton.disabled = true;

            for (var selectedInput of this.selectedInputs) {
                const selectedDiv = document.getElementById(selectedInput);
                inputContainer.removeChild(selectedDiv);
            }

            const selectedCount = this.selectedInputs.length
            let inputCount = Number(this.numberofInputs.value);
            inputCount = inputCount - selectedCount;
            this.numberofInputs.value = inputCount + ''

            this.selectedInputs = [];
            removeButton.disabled = false;
        })
        while (inputContainer.firstChild) {
            inputContainer.firstChild.remove();
        }
        this.inputs = [];

        for (let i = 0; i < Number(value); i++) {

            const inputSelection = document.createElement('input');
            const inputSelectionId = "c" + i;
            inputSelection.setAttribute('type', "checkbox");
            inputSelection.setAttribute('id', "c" + i);

            const inputElement = document.createElement('input');
            const inputElementId = "i" + i;
            inputElement.setAttribute("id", inputElementId);
            inputElement.setAttribute("class", "inputs");

            const inputSpinner = document.createElement('div');
            inputSpinner.setAttribute("class", "spinner-border");
            const inputSpinnerId = "s"+i;
            inputSpinner.setAttribute("id", inputSpinnerId);
            inputSpinner.setAttribute("role", "status");
            inputSpinner.setAttribute("style", "width: 1rem; height: 1rem; margin-left: -50px;");
            inputSpinner.hidden = true;

            const deleteButton = document.createElement('button');
            deleteButton.setAttribute("id", "b" + i);
            deleteButton.innerText = 'X';



            deleteButton.addEventListener('click', () => {
                inputContainer.removeChild(inputDiv);

                let inputCount = Number(this.numberofInputs.value);
                inputCount = inputCount -1;
                this.numberofInputs.value = inputCount + ''

            })

            const inputDiv = document.createElement('div');
            const inputDivId = "div" + i;
            inputDiv.id = inputDivId;

            inputDiv.appendChild(inputSelection);
            inputDiv.appendChild(inputElement);
            inputDiv.appendChild(inputSpinner);
            inputDiv.appendChild(deleteButton);

            inputContainer.appendChild(inputDiv);
            this.inputs.push(<HTMLInputElement>inputElement);

            inputSelection.addEventListener('change', (event: Event) => {
                if(inputSelection.checked){
                    this.selectedInputs.push(inputDivId);
                }
                else {
                    this.selectedInputs.filter(function(value, index, arr){
                        return value != inputDivId;
                    });
                }
            })


            inputElement.addEventListener('input', () => this.computeData());
            inputElement.addEventListener('input', () => this.inputValidation(inputElementId,inputSpinnerId));
            inputElement.addEventListener('change', () => this.inputValidation(inputElementId, inputSpinnerId));

        }

    }

    inputValidation(inputElementId: string, inputSpinnerId: string) {
        var currentInput = <HTMLInputElement>document.getElementById(inputElementId);
        const inputSpinner = document.getElementById(inputSpinnerId);
        if (currentInput.value != '' && isNaN(currentInput.value as any)) {
            inputSpinner.hidden = false;
        }
        else{
            inputSpinner.hidden = true;
        }
    }


    getInputs() {
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    computeData() {
        let values: number[] = [];
        for (var input of this.inputs) {
            values.push(Number(input.value));
        }
        let sum = 0;
        for (var i in values) {
            sum += values[i];
        }

        const avg = sum / values.length;

        const min = Math.min.apply(Math, values);
        const max = Math.max.apply(Math, values);

        this.showStats(sum, avg, min, max);
    }

    showStats(sum: number, avg: number, min: number, max: number) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const project1 = new Project1();