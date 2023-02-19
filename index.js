const client_id = "299371230166-ptm5cgi39v9r1dpjt53gia0uom8mq4tp.apps.googleusercontent.com";

function handleCredentialResponse(response) {
    console.log("hey i am executed");
    console.log("Encoded JWT ID token: " + response.credential);
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
