/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
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
            class Person {
                constructor(lastname, firstname)
                {
                    this.lastname = lastname;
                    this.firstname = firstname;
                }
                sayHello(lastname, firstname)
                {
                    return (
                        "Hello" + " " + lastname + " " + firstname
                    );
                }
            }
            let moi = new Person("ye biname" , "christophe");
            console.log(moi.sayHello("ye biname", "christophe"));
        });
    })();
})();
