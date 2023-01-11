function checkCookie() {
  let passcode = getCookie("passcode");
  if (passcode === "") {
    passcode = prompt("Please enter passcode:","");
    if (passcode !== "" && passcode != null) {
      setCookie("passcode", passcode, 365);
    }
  }
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function addPass() {
  document.forms["myForm"]["pass"].value = "4321";
}

function resetPass(){
  document.cookie = "passcode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
