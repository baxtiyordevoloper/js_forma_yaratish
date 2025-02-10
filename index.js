const formArr = [
  {
    id: 1,
    name: "Baxtiyor",
    age: "21",
    email: "baxtiyor@gmail.com",
    password: "123456"
  },
];

const tbody = document.getElementById("tbody");
function getForms(forms){
  tbody.innerHTML = "";
  for(let i = 0; i < formArr.length; i++){
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row">${formArr[i].id}</th>
           <td>${forms[i].name}</td>
           <td>${forms[i].age}</td>
           <td>${forms[i].email}</td>
          <td>${forms[i].password}</td>`;
    
    tbody.appendChild(tr); 
  }
}
getForms(formArr); 

const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

form.addEventListener("submit", addForms);

function addForms(e){
  e.preventDefault();
  
  const newobj = {
    id: formArr[formArr.length -1].id + 1,
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  formArr.push(newobj);
  getForms(formArr); 
  
   
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
