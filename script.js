// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgEl = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msgEl.textContent = "Please fill in all fields.";
    msgEl.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    msgEl.textContent = "Enter a valid email.";
    msgEl.style.color = "red";
    return;
  }

  msgEl.textContent = "Form submitted successfully!";
  msgEl.style.color = "green";
  this.reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  const list = document.getElementById("taskList");

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();
  removeBtn.style.marginLeft = "10px";

  li.appendChild(removeBtn);
  list.appendChild(li);

  taskInput.value = "";
}
