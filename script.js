// Change form div to thank you div
function change() {
  setTimeout(myFunc, 1000);
  function myFunc() {
    document.getElementById("form").style.display = "none";
    document.getElementById("thankYouForm").style.display = "flex";
    return true;
  }
}
window.addEventListener("resize", function() {
  console.log("size:" + window.innerWidth);
});
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

    var cardNumber = document.getElementById("cardNumber").value;
    var parts = [];
    for (var i = 0; i < cardNumber.length; i += 4) {
      parts.push(cardNumber.substring(i, i + 4));
    }
    document.getElementById("CN").innerHTML = "";
    for (var i = 0; i < parts.length; i++) {
      if (i == 3) {
        document.getElementById("CN").innerHTML += parts[i];
        continue;
      }
      document.getElementById("CN").innerHTML += parts[i] + "-";
    }
    console.log(parts);
    window.top;
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
function writeCardNO() {
  var cardNumber = document.getElementById("cardNumber").value;
  document.getElementById("CN").innerHTML = cardNumber;
}

//Card number input field validation
function cardNumberOnChange() {
  var cardNumber = document.getElementById("cardNumber").value;
  for (var i = 0; i < cardNumber.length; i++) {
    if (cardNumber.charCodeAt(i) >= 48 && cardNumber.charCodeAt(i) <= 57) {
      document.getElementById("error").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "Wrong Format,only number";
      return false;
    }
  }
  if (cardNumber.length < 16) {
    document.getElementById("error").innerHTML = "Card NO. too short";
    return false;
  }

  return true;
}

function writeNameOnCard() {
  var name = document.getElementById("name").value;
  document.getElementById("CardName").innerHTML = name;
}

// Name input field validation
function nameKeyPress() {
  var text = false;
  var name = document.getElementById("name").value;
  for (var i = 0; i < name.length; i++) {
    // confirm(name.charCodeAt(i));
    if (
      (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) ||
      (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) ||
      name.charCodeAt(i) == 32
    ) {
      document.getElementById("errorName").innerHTML = "";
    } else {
      document.getElementById("errorName").innerHTML = "Wrong Format";
      return false;
    }
  }
  return true;
}
function monthFunc() {
  var month = document.getElementById("Month").value;
  var text;
  if (month <= 12) {
    document.getElementById("e").innerHTML = "";
    if (month == 0) {
      text = false;
      document.getElementById("e").innerHTML = "Month can not be Zero";
    } else if (month < 10) {
      document.getElementById("M").innerHTML = "0" + month + "/";
      text = true;
    } else {
      document.getElementById("M").innerHTML = month + "/";
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
    document.getElementById("Y").innerHTML = " " + year;
    document.getElementById("e").innerHTML = "";
  } else {
    text = false;
    document.getElementById("e").innerHTML = "Date Expired";
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
    document.getElementById("cvcError").innerHTML = "Only Number(min:2,max:4)";
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
