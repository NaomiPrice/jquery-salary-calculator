
$(document).ready(onReady);

function onReady(){
    $('#submitBtn').on('click', addEmployee);
}

let employeeList = [];

function addEmployee(){
    console.log('button clicked');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id= $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    console.log(firstName);
}