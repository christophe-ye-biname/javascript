

/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    
    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            // your code here
            Set.prototype.getByIndex = function(index) { return [...this][index]; }
            let final_name = "";
            let rajout = [];
            let rand;
            function randnum(val)
            {
                rand = Math.floor(Math.random() * val);
                return rand;
            }
            let bird = birds[randnum(Object.keys(birds).length)]["name"];
            switch (Object.keys(birds[rand]).length)
            {
                case 2:
                    rajout.push("la", "e");
                    break;
                case 1:
                    rajout.push("le");
            }
            
            let adj = adjectives.getByIndex(randnum(adjectives.size));
            
            
            if (rajout.length == 1)
            {
                final_name = rajout[0] + " " + bird + " " + adj;
                let item = document.getElementById("target").innerHTML = final_name;
            }
            else if (rajout.length == 2)
            {
                final_name = rajout[0] + " " + bird + " " + adj + "" + rajout[1];
                let item = document.getElementById("target").innerHTML = final_name;
            }
            
        });
    })();
})();
