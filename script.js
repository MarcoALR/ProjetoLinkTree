function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "img/Avatar2.png");
  } else {
    img.setAttribute("src", "img/Avatar.png");
  }
}

/*  
    if(body.classList.contains('light')){
    html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }
}
*/
