// Shared behaviour for GoAfrica staff-portal pages
// (initiatives.html, funds.html, verification.html, student_management_directory.html)
document.addEventListener("DOMContentLoaded", function () {
  wireModal();
  wireToastButtons();
});

function showToast(message) {
  var toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");
  setTimeout(function () {
    toast.classList.add("opacity-0", "pointer-events-none");
    toast.classList.remove("opacity-100");
  }, 2200);
}

function showModal(title, message) {
  var overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
}

function wireModal() {
  var closeBtn = document.getElementById("modal-close");
  var overlay = document.getElementById("modal-overlay");
  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", function () {
      overlay.classList.add("hidden");
      overlay.classList.remove("flex");
    });
  }
}

function wireToastButtons() {
  var newRecordBtn = document.getElementById("btn-new-record");
  if (newRecordBtn) {
    newRecordBtn.addEventListener("click", function () {
      showToast("New record form would open here. (Prototype)");
    });
  }

  var addInitiativeBtn = document.getElementById("btn-add-initiative");
  if (addInitiativeBtn) {
    addInitiativeBtn.addEventListener("click", function () {
      showModal("New Initiative", "This is where you'd create a new campaign initiative. (Prototype)");
    });
  }

  document.querySelectorAll('button[title="View Profile"]').forEach(function (btn) {
    btn.addEventListener("click", function () {
      showToast("Opening student profile... (Prototype)");
    });
  });

  document.querySelectorAll("button").forEach(function (btn) {
    if (btn.textContent.trim() === "Approve") {
      btn.addEventListener("click", function () {
        var row = btn.closest("div.p-margin_tablet");
        showToast("Document approved.");
        if (row) row.classList.add("opacity-40", "pointer-events-none");
      });
    }
    if (btn.textContent.trim() === "Reject") {
      btn.addEventListener("click", function () {
        var row = btn.closest("div.p-margin_tablet");
        showToast("Document rejected.");
        if (row) row.classList.add("opacity-40", "pointer-events-none");
      });
    }
    if (btn.textContent.trim() === "Verify") {
      btn.addEventListener("click", function () {
        showToast("Verification request sent.");
      });
    }
  });
}
