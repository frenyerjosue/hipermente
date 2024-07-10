/*cambiar menú al hacer scroll*/
window.addEventListener("scroll", function(){
    /*cambiar menú version escritorio*/
			var header= document.querySelector("header");
			header.classList.remove('escritorio',window.scrollY>60);
			header.classList.toggle("down",window.scrollY>60);
			header.classList.toggle("escritorio",window.scrollY<60);

    /*Cambiar menú versión movil*/
			document.getElementById("movilID").classList.remove("movil",window.scrollY>60);
			document.getElementById("movilID").classList.toggle("movil-down",window.scrollY>60);
			document.getElementById("movilID").classList.toggle("movil",window.scrollY<60);

    /*cambiar colores de fondo*/
      var color= document.getElementById("color");

      color.classList.remove("one",window.scrollY>=700);
      color.classList.toggle("two",window.scrollY>=700);
      color.classList.toggle("one",window.scrollY<=700);

    /*cambiar color de menú*/
      var menu= document.getElementById("headerMenu");
      menu.classList.remove("pcolor1",window.scrollY>=700);
      menu.classList.toggle("pcolor2",window.scrollY>=700);
      menu.classList.toggle("pcolor1",window.scrollY<=700);

    /*Iniciar animación*/
      var aniframe= document.getElementsByClassName("pagina").contentWindow;
      var anitext= aniframe.document.getElementById("animScroll");
      anitext.classList.remove("h1-inactive",window.scrollY>=700);
      anitext.classList.toggle("h1-active",window.scrollY>=700);
      anitext.classList.toggle("h1-inactive",window.scrollY<=700);
})

/*Cuando se hace click en el botón, muestra el submenu (movil version)*/
function myFunction() {   
  //Añade una clase al elemento que tenga el id myDropdown
  document.getElementById("myDropdown").classList.toggle("show");
}

//Cierra el submenu si se clica fuera
window.onclick = function(event){
  if(!event.target.matches('.menu-movil')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-t");
    var i;
    for (i = 0;  i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      //Busca dentro de drop-content los elementos con la clase show
      if (openDropdown.classList.contains('show')){
        //elimina la clase show de los elementos dentro de drop-content
        openDropdown.classList.remove('show');
      }
    }
  }
}

function scrollTDA(){
  window.scroll(0, 95);
}
function scrollNOSOTROS(){
  window.scroll(0, 750);
}