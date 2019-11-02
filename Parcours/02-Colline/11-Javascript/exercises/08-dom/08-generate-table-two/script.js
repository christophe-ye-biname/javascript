/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
    for (let j = 0; j < 10; j++)
    {
        let Row = document.createElement("TD");
        Row.setAttribute("id", "n-" + j);
        tab.appendChild(Row);
        for (let i = 0; i < 10;i++)
        {
            let col = document.createElement("TR");
            col.setAttribute("id", "c-" + i);
            document.getElementById("n-" + j).appendChild(col).innerHTML = i+1;
            document.getElementById("n-" + j).appendChild(col).innerHTML = (i+1)* (j+1);
        }
    }
    
    /*for (let a = 0;a < 10;a++)
    {
        document.getElementById("n-1").childNodes.innerHTML = "g";

        for (let b = 0;b < 10;b++)
        {
        document.querySelectorAll("n-1").children.innerHTML = "b";
        }
    }*/
    console.log(document.querySelectorAll("TR"));
})();
