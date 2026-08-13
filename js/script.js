// GoAfrica Staff Portal - JavaScript

document.addEventListener("DOMContentLoaded", function () {
  setupModals();
  setupVerification();
  setupSearch();
  setupProfile();
});

// Modal helpers

function showModal(title, message) {
  var overlay = document.getElementById("modal-overlay");
  var modalTitle = document.getElementById("modal-title");
  var modalMessage = document.getElementById("modal-message");

  if (overlay && modalTitle && modalMessage) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    overlay.classList.add("show");
  }
}

function hideModal() {
  var overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("show");
  }
}

function showToast(message, isError) {
  var toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.className = "toast show";
  if (isError) {
    toast.classList.add("error");
  }

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.remove("error");
  }, 3000);
}

function setupModals() {
  var newRecordBtn = document.getElementById("btn-new-record");
  var addInitiativeBtn = document.getElementById("btn-add-initiative");
  var modalClose = document.getElementById("modal-close");
  var overlay = document.getElementById("modal-overlay");

  if (newRecordBtn) {
    newRecordBtn.addEventListener("click", function () {
      showModal("New Record", "This feature will allow staff to create a new student or fund record. (Prototype)");
    });
  }

  if (addInitiativeBtn) {
    addInitiativeBtn.addEventListener("click", function () {
      showModal("Add New Initiative", "This feature will open a form to create a new campaign initiative. (Prototype)");
    });
  }

  if (modalClose) {
    modalClose.addEventListener("click", hideModal);
  }

  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        hideModal();
      }
    });
  }
}

// Verification page

var students = [
  {
    id: "ST-9021",
    name: "Amara Diop",
    course: "Computer Science BSc.",
    email: "a.diop@example.edu",
    dob: "12 May 1999",
    location: "Dakar, Senegal"
  },
  {
    id: "ST-8843",
    name: "Kwame Osei",
    course: "Civil Engineering BEng.",
    email: "k.osei@example.edu",
    dob: "3 Feb 2000",
    location: "Accra, Ghana"
  },
  {
    id: "ST-8710",
    name: "Fatima Al-Fayed",
    course: "Medicine MBBS",
    email: "f.alfayed@example.edu",
    dob: "18 Sep 1998",
    location: "Cairo, Egypt"
  }
];

function setupVerification() {
  var studentItems = document.querySelectorAll(".student-item");
  var approveBtn = document.getElementById("btn-approve");
  var rejectBtn = document.getElementById("btn-reject");
  var notesField = document.getElementById("review-notes");

  studentItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var index = parseInt(item.getAttribute("data-index"), 10);
      selectStudent(index);
    });
  });

  if (approveBtn) {
    approveBtn.addEventListener("click", function () {
      var selected = getSelectedStudent();
      showToast("Verification approved for " + selected.name + ". (Prototype)");
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      var notes = notesField ? notesField.value.trim() : "";
      if (notes === "") {
        showToast("Please enter rejection notes before rejecting.", true);
        return;
      }
      var selected = getSelectedStudent();
      showToast("Documents rejected for " + selected.name + ". (Prototype)");
    });
  }
}

function getSelectedStudent() {
  var selectedItem = document.querySelector(".student-item.selected");
  if (selectedItem) {
    var index = parseInt(selectedItem.getAttribute("data-index"), 10);
    return students[index];
  }
  return students[0];
}

function selectStudent(index) {
  var student = students[index];
  if (!student) return;

  var items = document.querySelectorAll(".student-item");
  items.forEach(function (item) {
    item.classList.remove("selected");
  });

  var selectedItem = document.querySelector('.student-item[data-index="' + index + '"]');
  if (selectedItem) {
    selectedItem.classList.add("selected");
  }

  var detailName = document.getElementById("detail-name");
  var detailEmail = document.getElementById("detail-email");
  var detailDob = document.getElementById("detail-dob");
  var detailLocation = document.getElementById("detail-location");

  if (detailName) detailName.textContent = student.name;
  if (detailEmail) detailEmail.textContent = student.email;
  if (detailDob) detailDob.textContent = student.dob;
  if (detailLocation) detailLocation.textContent = student.location;

  var notesField = document.getElementById("review-notes");
  if (notesField) notesField.value = "";
}

// Search fields (simple filter on verification queue)

function setupSearch() {
  var searchInputs = document.querySelectorAll(".search-filter");

  searchInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var query = input.value.toLowerCase();
      var targetSelector = input.getAttribute("data-target");
      var items = document.querySelectorAll(targetSelector);

      items.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        if (text.indexOf(query) !== -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// Profile click

function setupProfile() {
  var profile = document.getElementById("topbar-profile");
  if (profile) {
    profile.addEventListener("click", function () {
      showModal("Profile", "Staff profile settings would open here. (Prototype)");
    });
  }
}
