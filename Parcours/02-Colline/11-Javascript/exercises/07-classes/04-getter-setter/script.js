/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person 
    {
        constructor(firstname, lastname)
        {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name()
        {
            return firstname + " " + lastname;
        }
        set name(firstname)
        {
            return firstname;
        }
    }
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            // your code here
            class Person 
    {
        constructor(firstname, lastname)
        {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get namee()
        {
            return this.firstname + " " + this.lastname;
        }
        set name(firstname)
        {
            return this.firstname;
        }
    }
            let christ = new Person("chris", "ye");
            console.log(christ.namee);
            
        });
    })();
})();
