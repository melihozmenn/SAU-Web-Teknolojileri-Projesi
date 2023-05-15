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
angular.module('myApp', []).controller('FormController', function ($scope) {

    $scope.isEmailValid = function () {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test($scope.email);
    };
  
    $scope.$watch('email', function (newValue, oldValue) {
        $scope.showEmailError = !$scope.isEmailValid();
    });
  
    $scope.isFormValid = function () {
        return $scope.name && $scope.message
        $scope.email && $scope.isEmailValid() &&
            $scope.gender && $scope.gender != "-----" &&
            $scope.city && $scope.city != "-----";
    };
  
    $scope.$watchGroup(['name', 'email', 'gender', 'city', 'message'], function (newValues, oldValues) {
        $scope.isFormValid();
    });
  });