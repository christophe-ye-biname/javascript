/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
    fetch("http://localhost:3000/heroes")
    .then(function (content)  {
        content.json().then(function(data)  {
            console.log(data);
            let templ = document.querySelector("template");
            let targ = document.getElementById("target");
            let clone = document.importNode(templ.content, true);
            for (let i = 0; i < data.length; i++)
            {
                templ = document.querySelector("template");
                targ = document.getElementById("target");
                let clone = document.importNode(templ.content, true);
                let name = clone.querySelector(".name").innerHTML = `${data[i]["name"]}`;
                let alter = clone.querySelector(".alter-ego").innerHTML = `${data[i]["alterEgo"]}`;
                targ.appendChild(clone);
                
            }
        })
    })
        
    });
})();
