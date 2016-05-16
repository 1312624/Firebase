(function() {
'use strict';

    angular
        .module('app-login')
        .controller('SignUpController', SignUpController);

    //ControllerController.$inject = [];
    function SignUpController() {
        var vm = this;
        var ref = new Firebase("https://mycvlinkedin.firebaseio.com");
        vm.SignUp = SignUp;

        activate();

        ////////////////

        function activate() { }
        
        function SignUp() {
            if(vm.password != vm.repeatpassword){
                AlertifyError('Repeat-password does not match');
                return;
            }
            
            ref.createUser({
                email: vm.email,
                password: vm.password
            }, function (error, userData) {  
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                    alertify.success("Successfully Created User!!");
                    window.setTimeout(function(){ window.location.reload(); }, 400);
                }
            });
        }
    }
})();