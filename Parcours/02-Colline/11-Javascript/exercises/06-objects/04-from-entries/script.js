/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            // your code here
            tablist = [];
            const list_list = new Map([[keys[0],values[0]],[keys[1],values[1]],[keys[2],values[2]],[keys[3],values[3]],[keys[4],values[4]]]);
            const dict = Object.fromEntries(list_list);
            console.log(dict);
        });
    })();
})();
