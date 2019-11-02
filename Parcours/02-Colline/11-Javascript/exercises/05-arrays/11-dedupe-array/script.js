/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            // your code here
            alert(fruits);
            for (let i = 0; i < fruits.length; i++)
            {
                for (let j = 0; j < fruits.length; j++)
                {
                    if (i == j)
                    {
                        fruits[i] = fruits[j];
                    }
                    else if ((i != j) && (fruits[i] == fruits[j]))
                    {
                        fruits[j] = "1";
                    }
                }
            }
            tab = [];
            for (let item = 0;item < fruits.length; item++)
            {
                if (fruits[item] != "1")
                {
                    tab.push(fruits[item]);
                }
            }
            console.log(tab);
        });
    })();
})();
