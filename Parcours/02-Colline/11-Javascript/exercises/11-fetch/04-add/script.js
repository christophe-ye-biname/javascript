/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
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
            console.log(data[2]["name"]);
            let info = document.querySelectorAll("#hero-name, #hero-alter-ego , #hero-powers");
                console.log(info.length);
            console.log(info);
            let tab = [];
            let dict = {nom: "1", "alter-ego": "2", pouvoir : "3"};
            console.log(dict);
            /*dict.set("nom" , tab[0]);
            dict.set("alter-ego" , tab[1]);
            dict.set("pouvoir" , tab[2]);*/
            dict.nom = tab[0];
            dict.alterego = tab[1];
            dict.pouvoirs = tab[2];
            console.log(dict);
            for (let i = 0;i < 3; i++)
            {
                tab.push(info[i].value);
            }
            console.log(tab);
            
            let templ = document.querySelector("template");
            let targ = document.getElementById("target");
            let clone = document.importNode(templ.content, true);
            for (let i = 0; i < data.length; i++)
            {
                templ = document.querySelector("template");
                targ = document.getElementById("target");
                let clone = document.importNode(templ.content, true);
                let name = clone.querySelector(".name").innerHTML = `${data[i]["name"]}`;
                targ.appendChild(clone);
            }
        })
    })
        
    });
})();

