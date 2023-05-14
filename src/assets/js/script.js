//contact-form kontrolü için 
function control() {
    var name = document.forms["contact-form"]["name"].value;
    if (name == "") {
      alert("İsim boş bırakılamaz");
      return false;
    }
  
    var email = document.forms["contact-form"]["email"].value;
    if (email == "") {
      alert("Mail Kısmı Boş bırakılamaz");
      return false;
    }
    var city = document.forms["contact-form"]["city"].value;
    if (city == "-----") {
      alert("Şehir Kısmı Boş bırakılamaz");
      return false;
    }
    var gender = document.forms["contact-form"]["gender"].value;
    if (gender == "-----") {
      alert("Cinsiyet Kısmı Boş bırakılamaz");
      return false;
    }
    var forMail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
    if (forMail.test(email) == false) {
      alert("Geçersiz Mail Adresi!!!");
      return false;
    }
    var message = document.forms["contact-form"]["message"].value;
    if (message == "") {
      alert("Mesaj Kısmı Boş bırakılamaz");
      return false;
    }
  
  }
  //mesajin karakter sayisini kontrol ettim
  function checkChar() {
    var allowedChar = 400;
    var content = document.getElementById("message");
    var contLength = content.value.length;
  
    if (contLength > allowedChar) {
      content.value = content.value.substring(0, allowedChar);
      document.getElementById("uyari").innerHTML = "<span style='color:red;'>UYARI: En fazla " + allowedChar + " karakter girebilirsiniz</span>";
    }
  }
  
  //contact-view.html
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