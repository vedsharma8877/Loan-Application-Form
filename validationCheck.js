function validateform() {
  var lamount = document.getElementById("lamount").value;

  var loanpurpose = document.getElementById("loanpurpose").value;
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;
  var regssn = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  regPass = /^[a-zA-Z\s]+$/;
  regName = /^[a-zA-Z]+$/;
  regPhoneno = regMphone = /^\d{10}$/;
  regzip = /^\d{6}$/;
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (!regPass.test(loanpurpose)) {
    document.getElementById("loanpurpose").style.border = "3px solid red";
    document.getElementById("loanpurposeError").innerHTML =
      "<span style='color: red;'>" + "Write a valid Reason";

    return false;
  } else if (!regName.test(fname)) {
    document.getElementById("fnameerror").innerHTML =
      "<span style='color: red;'>" + "Write name correctly";
    return false;
  } else if (!regName.test(lname)) {
    document.getElementById("lnameerror").innerHTML =
      "<span style='color: red;'>" + "Write name correctly";
    return false;
  }
  return true;
}

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumericzip(e) {
  document.getElementById("zip").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
  document.getElementById("ziperror").style.display = ret ? "none" : "inline";
  return ret;
}
var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumericssn(e) {
  document.getElementById("ssn").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
  document.getElementById("ssnerror").style.display = ret ? "none" : "inline";
  return ret;
}

function addHyphenssn() {
  let ele = document.getElementById("ssn");
  ele = ele.value.split("-").join(""); // Remove dash (-) if mistakenly entered.

  let finalVal = ele.replace(
    /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
    "$1$2$3-$4$5-$6$7$8$9"
  );
  document.getElementById("ssn").value = finalVal;
}

function addHyphenhphone() {
  let ele = document.getElementById("hphone");
  ele = ele.value.split("-").join("-");
  let finalVal = ele.replace(
    /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
    "($1$2$3)$4$5$6-$7$8$9$10"
  );
  document.getElementById("hphone").value = finalVal;
}

function addHyphenmphone() {
  let ele = document.getElementById("mphone");
  ele = ele.value.split("-").join("-");
  let finalVal = ele.replace(
    /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
    "($1$2$3)$4$5$6-$7$8$9$10"
  );
  document.getElementById("mphone").value = finalVal;
}

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function Isalphassnfname(e) {
  document.getElementById("firstname").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 65 && keyCode <= 90) ||
    (keyCode >= 95 && keyCode <= 122) ||
    specialKeys.indexOf(keyCode) != -1;
  document.getElementById("fnameerror").style.display = ret ? "none" : "inline";
  return ret;
}

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function Isalphassnlname(e) {
  document.getElementById("lastname").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 65 && keyCode <= 90) ||
    (keyCode >= 95 && keyCode <= 122) ||
    specialKeys.indexOf(keyCode) != -1;
  document.getElementById("lnameerror").style.display = ret ? "none" : "inline";
  return ret;
}

function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email = document.getElementById("email").value;
  var ret = mailformat.test(email);
  document.getElementById("emailerror").style.display = ret ? "none" : "inline";
  return ret;
}

function currency() {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  var currency = document.getElementById("lamount").value;

  var loanAmount1 = document.getElementById("lamount").value;
  let loanAmount2 = loanAmount1.replace("$", "");
  let loanAmount = loanAmount2.replace(",", "");
  document.getElementById("lamount").value = dollarUS.format(loanAmount);

  var ret = loanAmount < 2000 || loanAmount == "" || loanAmount > 20000;
  document.getElementById("lamounterror").style.display = ret
    ? "inline"
    : "none";
}
var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumerichphone(e) {
  document.getElementById("hphone").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
  document.getElementById("hphoneerror").style.display = ret
    ? "none"
    : "inline";
  return ret;
}

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumericphone(e) {
  document.getElementById("mphone").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
  document.getElementById("phoneerror").style.display = ret ? "none" : "inline";
  return ret;
}

function Today_date() {
  var today = new Date();

  today.setDate(today.getDate() - 18 * 365);

  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("inputdate").max = today;
}

function Islpurpose() {
  var regPass = /^[a-zA-Z\s]+$/;
  loanpurpose1 = document.getElementById("loanpurpose").value;
  var ret = regPass.test(loanpurpose1);
  document.getElementById("lpurposeerror").style.display = ret
    ? "none"
    : "inline";
  return ret;
}

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumericlamount(e) {
  document.getElementById("lamount").innerHTML = "";
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
  document.getElementById("lamounterror").style.display = ret
    ? "none"
    : "inline";
  return ret;
}
