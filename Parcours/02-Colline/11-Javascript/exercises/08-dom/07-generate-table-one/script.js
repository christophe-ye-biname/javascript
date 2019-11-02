/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let cible =document.getElementById("target");
    
    tab = document.createElement("TABLE");
    cible.appendChild(tab);
    
    for (let i = 0; i < 10;i++)
    {
        let Row = document.createElement("TR");
        Row.setAttribute("id", "n-" + i);
        tab.appendChild(Row);
    }
    for (let j = 0;j < 10;j++)
    {
        document.getElementById("n-" + j).innerHTML = j;
    }
    console.log(document.querySelectorAll("TR"));
})();
