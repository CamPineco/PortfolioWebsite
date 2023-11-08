//aca va el javascript//

        //para la parte de about me
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link"); //remove the active classname//
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab"); 
            }
            event.currentTarget.classList.add("active-link"); //despliega el color del titulo en donde des click//
            document.getElementById(tabname).classList.add("active-tab"); //despliega el contenido dentro del titulo donde le des click//
        }
        /*recibe un argumento, en el momento que haga click en cualquier
        tabname, supongamos que en skills, va a esconder la barrita de color y el contenido*/

        //js for sidemenu, menu hamburguesa//

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0"; //visible
        }

        function closemenu(){
            sidemenu.style.right = "-200px"; //hidden
        }
