/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let rand = Math.floor(Math.random() * 100) + 1;
    let ask;

   

    do {
        ask = parseInt(prompt("entrez un nombre"));
        if (ask > rand)
    {
        alert("plus bas");
    }
    else if (ask < rand)
    {
        alert("plus haut");
    }
    else{
        alert("bravo");
    }
    } while(ask != rand);
})();
