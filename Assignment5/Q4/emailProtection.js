let protect_email = (email) => {
    var parts = email.split("@");
    var username = parts[0];
    var hiddenUsername = username.substring(0, Math.floor(username.length / 2)) + "...";
    var protectedEmail = hiddenUsername + "@" + parts[1];
    console.log(protectedEmail);
  }
  
  console.log("");
  email = prompt("Enter your email address");
  protect_email(email);
  