//Function for the header so that in every page we could just insert the script myscript instead of copying the whole header again,
//makes the code cleaner and neater
includeHTML();
function includeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("myscript")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("myscript");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("myscript");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

function showFields(selected) {

  document.getElementById("coneFields").style.display = "none";
  document.getElementById("cupFields").style.display = "none";
  document.getElementById("popFields").style.display = "none";


  if (selected.value === "cone") {
    document.getElementById("coneFields").style.display = "block";
  } else if (selected.value === "cup") {
    document.getElementById("cupFields").style.display = "block";
  } else if (selected.value === "pop") {
    document.getElementById("popFields").style.display = "block";
  }
  
}

//Function used for the filter/search function
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}


