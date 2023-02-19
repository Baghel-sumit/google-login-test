const client_id = "299371230166-84u5qlbm0j2fkntbm8vouqj5nc250k4q.apps.googleusercontent.com";

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}


function handleCredentialResponse(response) {
    const token =  response.credential;
    console.log("Encoded JWT ID token: " + token);
    console.log("response from google:", parseJwt(token))
}
window.onload = function () {
    console.log("hey i am here");
  google.accounts.id.initialize({
    client_id,
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}
