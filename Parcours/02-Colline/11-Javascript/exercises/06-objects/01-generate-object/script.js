/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            // your code here
            let personne = {
                lastname: ["ye", "biname"],
                firstname: "christophe",
                age: 25,
                city : "namur",
                country: "belgique",
                bio: function()
                {
                    console.log(this.lastname[0] + " " + this.lastname[1]+ " " + " " + this.firstname + " " + this.age + " ans" + " " + this.city + " " + this.country);
                }
            };
            personne.bio();
        });
    })();
})();
