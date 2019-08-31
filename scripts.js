
$(document).ready(onReady);

function onReady(){
    $('#submitBtn').on('click', addEmployee);
    calculateTotal();
}

let employeeList = [];

function addEmployee(){
    //get user input
    console.log('button clicked');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id= $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    //create opject from user input
    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary,
    };
    //push object to array
    employeeList.push(newEmployee);
    //clear inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    displayEmployee();

    calculateTotal();
}

function displayEmployee(){
    //loop through employee list  - append each employee to DOM 
    $('#empIn').empty();
    for (employee of employeeList){
        $('#empIn').append(
            `<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button>Delete</button></td>
            </tr>`
        );
    }// end for loop
}// end displayEmployee function

function calculateTotal (){
    //use totals from annual salaries to calculate a total monthly costs
    let totalAnnualCosts = 0; 
    employeeList.forEach( function(employee){
        totalAnnualCosts += Number(employee.annualSalary);
    });
    const monthlyCosts = Number(totalAnnualCosts / 12);
    const monthlyCostsRound = Number.parseFloat(monthlyCosts).toFixed(2);
    $('#totalMonthlyOut').empty();
    $('#totalMonthlyOut').append(monthlyCostsRound);

}

//add delete button
//remove a line when delete button is used
//