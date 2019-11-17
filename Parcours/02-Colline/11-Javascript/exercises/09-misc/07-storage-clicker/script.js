/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const save = () => {
        let store = localStorage.getItem("cl");
        if (store === null)
        {
            store = 0;
        }
        store++;
        localStorage.setItem("cl", store);
        document.getElementById("target").innerHTML = store;
    }
    document.getElementById("increment").addEventListener("click", save);
})();
