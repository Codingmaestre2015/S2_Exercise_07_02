/*

        * JavaScript: Exercise 07_02
        * Fan Trick Fine Art Photography
        * Digital 101 web page
        * Author:
        * Date:

         * Filename: ft.js
 */
// global variables
var photographerCost = 0;
var totalCost = 0;


 // sets all form field to defaults
function resetForm() {
        document.getElementById("photognum").value = 1;
        document.getElementById("photoghrs").value = 2;
        document.getElementById("membook").checked = false;
        document.getElementById("reprodrights").checked = false;
        document.getElementById("distance").value = 0;

}
// resets form when page is reloaded
window.addEventListener("load", resetForm, false);
