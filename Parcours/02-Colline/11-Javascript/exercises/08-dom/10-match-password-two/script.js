/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
            let pass1 = document.getElementById("pass-one").value;
            let pass2 = document.getElementById("pass-two").value;
            if (pass1 == pass2)
            {
                document.getElementById("pass-one").style.border = "solid 1px red";
            }
            else
            {
                alert("no");
                document.getElementById("pass-one").classList.add("error");
                document.getElementById("pass-one").classList.add("error");
                console.log(document.querySelectorAll("error"));
            }
        });
    })();
})();
