var Lab1 = /** @class */ (function () {
    function Lab1() {
        this.inputs = [];
        this.selectedInputs = [];
        this.startApp();
    }
    Lab1.prototype.startApp = function () {
        var _this = this;
        this.numberofInputs = document.querySelector('#numberofinputs');
        this.numberofInputs.addEventListener("change", function () {
            _this.renderInput();
        });
        this.getInputs();
    };
    Lab1.prototype.renderInput = function () {
        var _this = this;
        this.numberofInputs = document.querySelector('#numberofinputs');
        var value = this.numberofInputs.value;
        var inputContainer = document.getElementById("inputs-container");
        var removeButton = document.getElementById('remove-button');
        removeButton.hidden = false;
        removeButton.addEventListener('click', function () {
            removeButton.disabled = true;
            for (var _i = 0, _a = _this.selectedInputs; _i < _a.length; _i++) {
                var selectedInput = _a[_i];
                var selectedDiv = document.getElementById(selectedInput);
                inputContainer.removeChild(selectedDiv);
            }
            var selectedCount = _this.selectedInputs.length;
            var inputCount = Number(_this.numberofInputs.value);
            inputCount = inputCount - selectedCount;
            _this.numberofInputs.value = inputCount + '';
            _this.selectedInputs = [];
            removeButton.disabled = false;
        });
        while (inputContainer.firstChild) {
            inputContainer.firstChild.remove();
        }
        this.inputs = [];
        var _loop_1 = function (i) {
            var inputSelection = document.createElement('input');
            var inputSelectionId = "c" + i;
            inputSelection.setAttribute('type', "checkbox");
            inputSelection.setAttribute('id', "c" + i);
            var inputElement = document.createElement('input');
            var inputElementId = "i" + i;
            inputElement.setAttribute("id", inputElementId);
            inputElement.setAttribute("class", "inputs");
            var inputSpinner = document.createElement('div');
            inputSpinner.setAttribute("class", "spinner-border");
            var inputSpinnerId = "s" + i;
            inputSpinner.setAttribute("id", inputSpinnerId);
            inputSpinner.setAttribute("role", "status");
            inputSpinner.setAttribute("style", "width: 1rem; height: 1rem; margin-left: -50px;");
            inputSpinner.hidden = true;
            var deleteButton = document.createElement('button');
            deleteButton.setAttribute("id", "b" + i);
            deleteButton.innerText = 'X';
            deleteButton.addEventListener('click', function () {
                inputContainer.removeChild(inputDiv);
                var inputCount = Number(_this.numberofInputs.value);
                inputCount = inputCount - 1;
                _this.numberofInputs.value = inputCount + '';
            });
            var inputDiv = document.createElement('div');
            var inputDivId = "div" + i;
            inputDiv.id = inputDivId;
            inputDiv.appendChild(inputSelection);
            inputDiv.appendChild(inputElement);
            inputDiv.appendChild(inputSpinner);
            inputDiv.appendChild(deleteButton);
            inputContainer.appendChild(inputDiv);
            this_1.inputs.push(inputElement);
            inputSelection.addEventListener('change', function (event) {
                if (inputSelection.checked) {
                    _this.selectedInputs.push(inputDivId);
                }
                else {
                    _this.selectedInputs.filter(function (value, index, arr) {
                        return value != inputDivId;
                    });
                }
            });
            inputElement.addEventListener('input', function () { return _this.computeData(); });
            inputElement.addEventListener('input', function () { return _this.inputValidation(inputElementId, inputSpinnerId); });
            inputElement.addEventListener('change', function () { return _this.inputValidation(inputElementId, inputSpinnerId); });
        };
        var this_1 = this;
        for (var i = 0; i < Number(value); i++) {
            _loop_1(i);
        }
    };
    Lab1.prototype.inputValidation = function (inputElementId, inputSpinnerId) {
        var currentInput = document.getElementById(inputElementId);
        var inputSpinner = document.getElementById(inputSpinnerId);
        if (currentInput.value != '' && isNaN(currentInput.value)) {
            inputSpinner.hidden = false;
        }
        else {
            inputSpinner.hidden = true;
        }
    };
    Lab1.prototype.getInputs = function () {
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    Lab1.prototype.computeData = function () {
        var values = [];
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            values.push(Number(input.value));
        }
        var sum = 0;
        for (var i in values) {
            sum += values[i];
        }
        var avg = sum / values.length;
        var min = Math.min.apply(Math, values);
        var max = Math.max.apply(Math, values);
        this.showStats(sum, avg, min, max);
    };
    Lab1.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return Lab1;
}());
var project1 = new Lab1();
