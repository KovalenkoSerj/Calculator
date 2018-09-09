let input = document.getElementById('output');

const btnValueToInput = value => input.value += value;
const reset = () => input.value = '';   
const sqrt = () => input.value = (Math.sqrt(input.value).toFixed(4));
const equal = () => input.value = eval(input.value);
const change = () => input.value = input.value.substring(0,input.value.length-1)

