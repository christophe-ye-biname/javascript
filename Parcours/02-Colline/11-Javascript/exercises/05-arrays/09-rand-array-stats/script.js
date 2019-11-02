/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            // your code here
            function rand ()
            {

            }
            let tab = [];
            for (let j = 0; j < 10; j++)
            {
                tab.push(Math.floor(Math.random() * 100));
            }
            const reducer = (accu, current) => accu + current;
            document.getElementById("min").innerHTML = Math.min(...tab);
            document.getElementById("max").innerHTML = Math.max(...tab);
            
            document.getElementById("sum").innerHTML = tab.reduce(reducer, tab[0]);
            document.getElementById("average").innerHTML = tab.reduce(reducer, tab[0])/10;
            //console.log(typeof(tab[4]));
            for (let i = 1; i < 11; i++)
            {
                let id = "n-";
                document.getElementById(id + i).innerHTML = tab[i-1];

            }
            
        });
    })();
})();
