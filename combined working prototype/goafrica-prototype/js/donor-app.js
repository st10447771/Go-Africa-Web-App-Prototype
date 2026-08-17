// Shared behaviour for GoAfrica donor/student mobile pages
// (donation-list.html, settings.html, campaign.html, student-profile.html, donation-success.html)
document.addEventListener("DOMContentLoaded", function () {
  setupNeedCheckboxes();
  setupDonationList();
  setupSettingsPage();
  setupShareButton();
  setupGenericButtons();
});

<!-- Code Attribution -->
<!-- This method was taken from Medium -->
<!-- Link: https://medium.com/@manuisthegiggachad101/a-very-satisfying-clicking-simulator-that-i-made-45bac04e80b6 -->
<!-- Author Name: Edit King -->
<!-- Profile Link: https://medium.com/@manuisthegiggachad101 -->
  
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
  }, 2500);
}

function setupNeedCheckboxes() {
  var checkboxes = document.querySelectorAll(".need-check");
  var totalEl = document.getElementById("total-selected");
  var addBtn = document.getElementById("btn-add-to-list");

  if (!totalEl) return;

  function updateTotal() {
    var total = 0;
    checkboxes.forEach(function (cb) {
      if (cb.checked) {
        total += parseFloat(cb.getAttribute("data-amount"));
      }
    });
    totalEl.textContent = "R " + total.toFixed(2);
  }

  checkboxes.forEach(function (cb) {
    cb.addEventListener("change", updateTotal);
  });

  updateTotal();

  if (addBtn) {
    addBtn.addEventListener("click", function () {
      var total = totalEl.textContent;
      if (total === "R 0.00") {
        showToast("Please select at least one need.", true);
        return;
      }
      showToast("Added to donation list! (" + total + ")");
      setTimeout(function () {
        window.location.href = "donation-list.html";
      }, 1200);
    });
  }
}

<!-- Code Attribution -->
<!-- This method was taken from stackoverflow -->
<!-- Link: https://stackoverflow.com/questions/66085176/add-remove-class-on-click-in-pure-js -->
<!-- Author Name: Naren -->
<!-- Profile Link: https://stackoverflow.com/users/6516699/naren -->

function setupDonationList() {
  var removeBtns = document.querySelectorAll(".remove-btn");
  var completeBtn = document.getElementById("btn-complete-donation");

  removeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".donation-card");
      if (card) {
        card.remove();
        updateDonationSummary();
        showToast("Item removed from list.");
      }
    });
  });

  if (completeBtn) {
    completeBtn.addEventListener("click", function () {
      var cards = document.querySelectorAll(".donation-card");
      if (cards.length === 0) {
        showToast("Your donation list is empty.", true);
        return;
      }
      var total = document.getElementById("summary-total");
      var amount = total ? total.textContent : "R 0.00";
      sessionStorage.setItem("donationTotal", amount);
      window.location.href = "donation-success.html";
    });
  }
}

function updateDonationSummary() {
  var cards = document.querySelectorAll(".donation-card");
  var subtotal = 0;

  cards.forEach(function (card) {
    var amountText = card.querySelector(".donation-amount");
    if (amountText) {
      var val = parseFloat(amountText.textContent.replace("R ", "").replace(",", ""));
      subtotal += val;
    }
  });

  var fee = subtotal * 0.025;
  var total = subtotal + fee;

  var subEl = document.getElementById("summary-subtotal");
  var feeEl = document.getElementById("summary-fee");
  var totalEl = document.getElementById("summary-total");

  if (subEl) subEl.textContent = "R " + subtotal.toFixed(2);
  if (feeEl) feeEl.textContent = "R " + fee.toFixed(2);
  if (totalEl) totalEl.textContent = "R " + total.toFixed(2);

  var successAmount = document.getElementById("success-amount");
  if (successAmount) {
    successAmount.textContent = "R " + total.toFixed(2);
  }
}

function setupSettingsPage() {
  var uploadBtns = document.querySelectorAll(".btn-upload");
  uploadBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showToast("Upload feature coming soon. (Prototype)");
    });
  });

  var addNeedBtn = document.getElementById("btn-add-need");
  if (addNeedBtn) {
    addNeedBtn.addEventListener("click", function () {
      showToast("Add New Need form would open here. (Prototype)");
    });
  }

  var signOutBtn = document.getElementById("btn-sign-out");
  if (signOutBtn) {
    signOutBtn.addEventListener("click", function () {
      showToast("You have been signed out. (Prototype)");
      setTimeout(function () {
        window.location.href = "role_selection_portal_style.html";
      }, 900);
    });
  }

  var editBtns = document.querySelectorAll(".icon-btn.edit");
  editBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showToast("Edit need details. (Prototype)");
    });
  });

  var deleteBtns = document.querySelectorAll(".icon-btn.delete");
  deleteBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".need-item");
      if (item) {
        item.remove();
        showToast("Need removed.");
      }
    });
  });
}

function setupShareButton() {
  var shareBtn = document.getElementById("btn-share-link");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      showToast("Link copied to clipboard! (Prototype)");
    });
  }

  var shareCampaign = document.getElementById("btn-share-campaign");
  if (shareCampaign) {
    shareCampaign.addEventListener("click", function () {
      showToast("Campaign link copied! (Prototype)");
    });
  }
}

function setupGenericButtons() {
  var donateBtns = document.querySelectorAll(".btn-donate-sm");
  donateBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showToast("Thank you for your donation! (Prototype)");
    });
  });

  var learnBtns = document.querySelectorAll(".btn-learn-sm");
  learnBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showToast("Learn more about this initiative. (Prototype)");
    });
  });

  var readAll = document.getElementById("btn-read-all");
  if (readAll) {
    readAll.addEventListener("click", function () {
      showToast("All donor messages would appear here. (Prototype)");
    });
  }

  var storedTotal = sessionStorage.getItem("donationTotal");
  var successAmount = document.getElementById("success-amount");
  if (successAmount && storedTotal) {
    successAmount.textContent = storedTotal;
  }
}
