var courseApi = "http://localhost:3000/course";

function start() {
  getCourse(renderCourse);
  handleCreateForm();
}

start();
// function
function getCourse(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function renderCourse(course) {
  var listCourseBlock = document.querySelector("#list-course");
  var html = course.map(function (item) {
    return `<li class="course-${item.id}">
    <span>id: ${item.id}</span>
<h4> ${item.name} </h4>
<p> ${item.description}</p>
<button onclick="deleteCourse(${item.id})"> delete </button>
  </li>
  <br>  <br>  <br>
  `;
  });
  listCourseBlock.innerHTML = html.join("");
}

function handleCreateForm() {
  var creatBtn = document.getElementById("create");
  creatBtn.onclick = function () {
    var nameCourse = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var data = {
      name: nameCourse,
      description: description,
    };
    creatCourse(data, function () {
      getCourse(renderCourse);
    });
  };
  var changeBtn = document.getElementById("change");
  changeBtn.onclick = function () {
    var idCourse = document.querySelector('input[name="idChange"]').value;
    var nameCourse = document.querySelector('input[name="nameChange"]').value;
    var description = document.querySelector('input[name="descriptionChange"]')
      .value;
    var data = {
      id: idCourse,
      name: nameCourse,
      description: description,
    };
    changeCourse(data, function () {
      // chinh sua dom
      var courseItem = document.querySelector(".course-" + data.id);
      if (courseItem) {
        courseItem.querySelector("h4").textContent = "";
        courseItem.querySelector("p").textContent = "";
        courseItem.querySelector("h4").textContent = data.name;
        courseItem.querySelector("p").textContent = data.description;
      }
    });
  };
}

function creatCourse(data, callback) {
  var option = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(courseApi, option)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function deleteCourse(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(courseApi + "/" + id, option)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}
// sua noi dung
function changeCourse(data, callback) {
  var option = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(courseApi + "/" + data.id, option)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
