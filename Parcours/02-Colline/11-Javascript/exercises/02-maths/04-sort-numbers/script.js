/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let num = document.getElementById("numbers").value;
        num = num.split(" ").join("").split(",");
        
        for (let i = 0;i<num.length; i++)
        {
            num[i] = parseInt(num[i]);
        }
        console.log(typeof(num));
        
        num = num.sort((a, b) => a - b);
        let nb = num;
        document.getElementById("numbers").innerHTML = nb;
        console.log(nb);
    });
})();
