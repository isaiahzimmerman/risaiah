function pollDOM() {
  const el = document.getElementById('header_container');
  const el2 = document.getElementById('header_back_button');
  if (el != null && el2 == null) {
    header_draw_back()
  } else {
    setTimeout(pollDOM, 300); // try again in 300 milliseconds
  }
}

function includeHTML() {
  pollDOM()
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
};

function header_draw_back(){
  if(window.location.pathname.split('/').length > 3){
    document.getElementById('header_container').innerHTML+=
    `
    <div class="header_element">
      <a href="../" id="header_back_button">Back</a>
    </div>
    `
  }
}

function header_reveal_menu(){
  document.getElementById("header_container").style.top = "0"
  document.getElementById("header_container").style.opacity = 1
  document.getElementById("header_reveal_button").setAttribute("onclick", "header_hide_menu()")
  for(i=1;i<=3;i++){
    document.getElementById(`header_menu_line${i}`).innerHTML = `<div></div>`
  }
}

function header_hide_menu(){
  document.getElementById("header_container").style.top = "calc(var(--header-scale)*-6)"
  document.getElementById("header_container").style.opacity = 0
  document.getElementById("header_reveal_button").setAttribute("onclick", "header_reveal_menu()")
  for(i=1;i<=3;i++){
    document.getElementById(`header_menu_line${i}`).innerHTML = ``
  }
}

function header_draw_additional_button(text, action){
  clickAction = ""
  if(action.type == "href"){
    clickAction = `href="${action.href}"`
  }else if(action.type == "onclick"){
    clickAction = `onclick="${action.onclick}"`
  }

  document.getElementById('header_container').innerHTML+=
    `<div class="header_element">
      <a ${clickAction}>${text}</a>
    </div>`
}