
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlQExAfkJnTk7SdTUyCDIWDou_Sj3dE4c",
    authDomain: "complain2solution.firebaseapp.com",
    databaseURL: "https://complain2solution.firebaseio.com",
    projectId: "complain2solution",
    storageBucket: "",
    messagingSenderId: "712100308723",
    appId: "1:712100308723:web:51793883ca7760043eb986",
    measurementId: "G-6BB4MKMBNP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var UID = document.getElementById('UIDAI').value;
  var pass =document.getElementById('password').value;
  var pass1=document.getElementById('password_1').value;
  var pass2 =document.getElementById('comfirm_password').value;
  function signin() 
  {
    firebase.auth().signInWithEmailAndPassword(UID, pass1).catch(function(error) {});
  // Handle Errors here.
}
if (pass==pass2) 
{
    function logup()
    {
      firebase.auth().createUserWithEmailAndPassword(UID, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

    }
}
else
{
  var errorCode = error.code;
  var errorMessage = error.message;
}    





     <script src="https://cdn.firebase.com/libs/firebaseui/4.2.0/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/4.2.0/firebaseui.css" />
    <script type="text/javascript">
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          ],
       
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    </script>


  
  firebase.analytics();
