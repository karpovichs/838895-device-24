// Оживление попапа формы
var writeButton = document.querySelector(".write-us-button");
var writePopup = document.querySelector(".modal-write-us");
var writeClose = writePopup.querySelector(".close-button");

var form = writePopup.querySelector("form");
var user = writePopup.querySelector("[name=name]");
var email = writePopup.querySelector("[name=email]");
var text = writePopup.querySelector("[name=text]");

var isStorageSupport = true;
var storageUser = "";
try {
  storageUser = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

var isStorageEmailSupport = true;
var storageEmail = "";
try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageEmailSupport = false;
}

writeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");

  if (storageUser) {
    user.value = storageUser;
    email.focus();
    if (storageEmail) {
      email.value = storageEmail;
      text.focus();
    }
  } else {
    user.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!user.value || !email.value || !text.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
  } else {
    if (isStorageUserSupport) {
      localStorage.setItem("user", user.value);
    }
    if (isStorageEmailSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopup.classList.contains("modal-show")) {
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});


// Оживление попапа карты
var mapButton = document.querySelector(".map-button");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".close-button");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.remove("modal-error");
    }
  }
});
