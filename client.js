$(document).ready(onReady);

let totalSalary =0;

function onReady() {
    console.log('onReady works');

    $('#submitButton').on('click', showingInput);

};

function showingInput() {
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleInput').val();
    let annualSalaryInput = $('#annualSalaryInput').val();

    $('#tableBody').append(`            
                <tr class='newTableRow'>
                <td class='firstNameData'>${firstNameInput}</td>
                <td class='lastNameData'>${lastNameInput}</td>
                <td class='idData'>${idInput}</td>
                <td class='titleData'>${titleInput}</td>
                <td class='annualSalaryData'>${annualSalaryInput}</td>
                </tr>`);
    $('input').val(null);
    addingSalary(annualSalaryInput);
};

function addingSalary(annualSalaryInput) {

    totalSalary = Number(annualSalaryInput)  + totalSalary

    $('#totalSalaryAtP').replaceWith(`<p id='totalSalaryAtP'>Total Salary:${totalSalary}</p>`)

    if(totalSalary > 20000) {
        $('#totalSalaryAtP').css('color','red')
    }
}




