async function fecthDB() {
  const renponseDB = await fetch("./db.json");
  const jsonDB = await renponseDB.json();
  const employeesJSON = jsonDB.employees;
  const rolesJSON = jsonDB.roles;
  renderDiv(employeesJSON, rolesJSON);
  showData();
  dealData();
}

function renderDiv(employees, roles) {
  let employeesInfo = employees.map((employee) => {
    const role = roles.find((role) => role.id === employee.role_id);
    return `${employee.name}<br data-salary='${employee.salary}'>${role.name}`;
  });
  employeesInfo =
    "<div class='employee'>" +
    employeesInfo.join("</div><div class='employee'>") +
    "</div>";
  document.querySelector(".employees").innerHTML = employeesInfo;
}

function showData() {
  const employeeDivs = document.querySelectorAll(".employee");
  const form = document.forms[0];

  function handleClick() {
    const [name, role] = this.innerText.split("\n");
    const salary = this.querySelector("br").dataset.salary;
    const nameInput = form.elements.name;
    const roleInput = form.elements.role;
    const salaryInput = form.elements.salary;

    nameInput.value = name;
    roleInput.value = role;
    salaryInput.value = salary;
  }

  employeeDivs.forEach((div) => {
    div.addEventListener("click", handleClick);
  });
}

function dealData() {
  const btns = document.querySelectorAll("button");

  function handleClick(e) {
    e.preventDefault();
    const btnName = this.innerText;
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });
}

fecthDB();
