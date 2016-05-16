(function() {
'use strict';

    angular
        .module('app-login')
        .controller('LoginController', LoginController);

    LoginController.$inject = [];
    function LoginController() {
        var vm = this;
        vm.Login = Login;
        var ref = new Firebase("https://mycvlinkedin.firebaseio.com");
        

        activate();

        ////////////////

        function activate() { }
        
        function Login() {
            ref.authWithPassword({
                email: vm.email,
                password: vm.password
            }, function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                    AlertifyError('Incorrect Password!');
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    window.isLogin = true;
                    alertify.success("Authenticated successfully");
                    window.setTimeout(function(){ window.location.href = "main.html"; }, 500);
                }
            });
        }
    }
})();