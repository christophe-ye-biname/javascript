/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        // your code here
        document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
        .then(function (content)  {
            content.json().then(function(data)  {
                console.log(data);
                let answer = document.querySelector("input").value;
                console.log(answer);

                let templ = document.querySelector("template");
                let targ = document.getElementById("target");
                let clone = document.importNode(templ.content, true);
                let name = clone.querySelector(".name").innerHTML = `${data[answer]["name"]}`;
                targ.appendChild(clone);
            })
        })
            
        });
    })();
    
})();
