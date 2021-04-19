function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var La = document.getElementById('lat').value;
  var Lo = document.getElementById('lon').value;
  var ok = true;

  if(!(La >= -90 && La <= 90) && !(Lo >= -90 && Lo <= 90)) 
  {
    document.getElementById("check-La").style.display="inline";
    document.getElementById("check-Lo").style.display="inline";
    ok = false;
  }

  else if(!(La >= -90 && La <= 90)) 
  {
    document.getElementById("check-La").style.display="inline";
    document.getElementById("check-Lo").style.display="none";
    ok = false;
  }

  else if(!(Lo >= -90 && Lo <= 90)) 
  {
    document.getElementById("check-Lo").style.display="inline";
    document.getElementById("check-La").style.display="none";
    ok = false;
  }

  return ok;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
