var names = ['Software Engineer', 'Full Stack Developer', 'Student'];

setInterval(function() {
  var rand = Math.floor(Math.random() * 3);
  document.getElementById("switch-title").innerHTML = names[rand];
}, 1000);