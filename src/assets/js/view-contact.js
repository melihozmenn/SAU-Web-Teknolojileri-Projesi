function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  document.getElementById("contact-name").textContent = getParameterByName('name');
  document.getElementById("contact-email").textContent = getParameterByName('email');
  document.getElementById("contact-gender").textContent = getParameterByName('gender');
  document.getElementById("contact-city").textContent = getParameterByName('city');
  document.getElementById("contact-message").textContent = getParameterByName('message');