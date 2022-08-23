// Change form div to thank you div
function change() {
  setTimeout(myFunc, 1000);
  function myFunc() {
    document.getElementById("form").style.display = "none";
    document.getElementById("thankYouForm").style.display = "flex";
    return true;
  }
}

// Validation
function isValid() {
  if (
    nameKeyPress() &&
    cardNumberOnChange() &&
    cvcFunc() &&
    yearFunc() &&
    monthFunc()
  ) {
    document.getElementById("error").innerHTML = "";
    document.getElementById("e").innerHTML = "";
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("cvcError").innerHTML = "";
    change();
  } else {
    if (document.getElementById("name").value == "") {
      document.getElementById("errorName").innerHTML =
        "please fill out this field";
    }
    if (document.getElementById("cardNumber").value == "") {
      document.getElementById("error").innerHTML = "please fill out this field";
    }
    if (document.getElementById("Month").value == "") {
      document.getElementById("e").innerHTML = "please fill out this field";
    }
    if (document.getElementById("Year").value == "") {
      document.getElementById("e").innerHTML = "please fill out this field";
    }
    if (document.getElementById("cvc").value == "") {
      document.getElementById("cvcError").innerHTML =
        "please fill out this field";
    }
  }
}
// Thank you form
function homePage() {
  setTimeout(myFunc, 1000);
  function myFunc() {
    document.getElementById("thankYouForm").style.display = "none";
    document.getElementById("form").style.display = "flex";
    document.location.reload();
  }
}
//Card number input field
function cardNumberOnChange() {
  var cardNumber = document.getElementById("cardNumber").value;
  var text;
  for (var i = 0; i < cardNumber.length; i++) {
    if (cardNumber.charCodeAt(i) >= 48 && cardNumber.charCodeAt(i) <= 57) {
      document.getElementById("CN").innerHTML = cardNumber;
      document.getElementById("error").innerHTML = "";
      if (cardNumber.length < 16) {
        document.getElementById("error").innerHTML =
          "too short (min/max length:16)";
        text = false;
      } else {
        text = true;
      }
    } else {
      document.getElementById("error").innerHTML = "Wrong Format, only number";
      text = false;
    }
  }

  return text;
}

// Name input field
function nameKeyPress() {
  var name = document.getElementById("name").value;
  var txt = "";
  for (var i = 0; i < name.length; i++) {
    if (
      (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 122) ||
      name.charCodeAt(i) == 32
    ) {
      document.getElementById("CardName").innerHTML = name;
      document.getElementById("errorName").innerHTML = "";
      txt = true;
    } else {
      document.getElementById("CardName").innerHTML = name;
      document.getElementById("errorName").innerHTML = "Wrong Format";
      txt = false;
    }
  }
  return txt;
}
function monthFunc() {
  var month = document.getElementById("Month").value;
  var text;
  if (month <= 12) {
    document.getElementById("e").innerHTML = "";
    if (month < 10) {
      document.getElementById("M").innerHTML = "0" + month;
      text = true;
    } else {
      document.getElementById("M").innerHTML = month;
      text = true;
    }
  } else {
    text = false;
    document.getElementById("e").innerHTML = "Month must be 12 or lower";
  }
  return text;
}
function yearFunc() {
  var year = document.getElementById("Year").value;
  var text;
  if (year >= 22) {
    text = true;
    document.getElementById("Y").innerHTML = "/" + year;
    document.getElementById("e").innerHTML = "";
  } else {
    text = false;
    document.getElementById("e").innerHTML =
      "Date Expired. Year:" + new Date().getFullYear();
  }
  return text;
}

function cvcFunc() {
  var cvc = document.getElementById("cvc").value;
  var text;
  if (cvc.length > 2 && cvc.length <= 4 && !isNaN(cvc)) {
    document.getElementById("cv").innerHTML = cvc;
    document.getElementById("cvcError").innerHTML = "";
    text = true;
  } else {
    document.getElementById("cvcError").innerHTML =
      "Only Number(min-length:2,max-length:4)";
    text = false;
  }
  return text;
}

function TimeDate() {
  var date = new Date().toLocaleDateString();
  document.getElementById("date").innerHTML = "Date: " + date;
  var x = setInterval(timeFunc, 1000);
  function timeFunc() {
    var time = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = "Time: " + time;
  }
}
