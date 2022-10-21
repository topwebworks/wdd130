var modal = document.getElementById('myModal');
var btn = document.getElementById('modalBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
  var src = modal.querySelector('iframe').getAttribute('src');
  modal.querySelector('iframe').setAttribute('src', src);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    var src = modal.querySelector('iframe').getAttribute('src');
    modal.querySelector('iframe').setAttribute('src', src);
  }
};
