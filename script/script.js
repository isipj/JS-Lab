function addValue(){
    // get the operands value
    num1 = Number(document.getElementById('input_a').value)
    num2 = Number(document.getElementById('input_b').value)

    // parse to integer. You can use: parseInt(input, 10);
    parseInt(num1)
    parseInt(num2)

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        alert('Please enter a valid number.')
        location.reload()
    }
    else {

    // perform operation
    add = num1 + num2

    // creating the text output
    result = num1 + ' + ' + num2 + ' = ' + add

    // (if you want to check) print out in console
    // alert(result)

    // change the text area
    document.mycalculator.output.value = result;
    }
}


function mulValue(){
    // get the operands value
    num1 = Number(document.getElementById('input_a').value)
    num2 = Number(document.getElementById('input_b').value)

    // parse to integer. You can use: parseInt(input, 10);
    parseInt(num1)
    parseInt(num2)

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        alert('Please enter a valid number.')
        location.reload()
    }
    else {

    // perform operation
    mul  = num1 * num2

    // creating the text output
    result = num1 + ' * ' + num2 + ' = ' + mul

    // (if you want to check) print out in console
    // alert(result)

    // change the text area
    document.mycalculator.output.value = result;
    }
}

function divValue(){
    // get the operands value
    num1 = Number(document.getElementById('input_a').value)
    num2 = Number(document.getElementById('input_b').value)

    // parse to integer. You can use: parseInt(input, 10);
    parseInt(num1)
    parseInt(num2)

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        alert('Please enter a valid number.')
        location.reload()
    }
    else {

    // perform operation
    div = num1 / num2

    // creating the text output
    result = num1 + ' / ' + num2 + ' = ' + div

    // (if you want to check) print out in console
    // alert(result)

    // change the text area
    document.mycalculator.output.value = result;
    }
}
