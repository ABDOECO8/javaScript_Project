window.onload = function() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = Submet; // 'onclick' doit être tout en minuscules
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'enter') {
        Submet();
    }
  });

function Submet(){
    const username = document.getElementById("name").value ;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    document.getElementById("userName").innerHTML = username ;
document.getElementById("userAge").innerHTML = age ;
document.getElementById("userEmail").innerHTML = email ;
document.getElementById("userJob").innerHTML = job ;
document.getElementById("userDesignation").innerHTML = designation ;
document.getElementById("userProductChoice").innerHTML = productType ;
document.getElementById("userFeedback").innerHTML = feedback ;
alert("thans for your infos");
}


const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 21000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];
function displayEmployees() {
  const totalEmployees = employees.map((item, index) => `<p>item ${index+1} = ${item.id}: ${item.name}: ${item.name} - ${item.department} - $${item.salary}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const T = employees.reduce((tot ,employee ) => tot + employee.salary , 0) ;
    alert(`totale des salaire est : ${T}`)
}

function displayHREmployees() {
    const HR = employees.find((e) => e.department === 'HR') ;
  alert(`${HR.name}`)
    const HRN = HR.map((t,i) => `<p>item ${i+1} : ${t.name}</p>`) ;
    document.getElementById('employeesDetails').innerHTML = HRN;
}
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}