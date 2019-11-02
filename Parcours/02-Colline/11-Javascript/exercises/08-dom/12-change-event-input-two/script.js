/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let validities = document.getElementById("validity");
    //validities.textContent = "non";
let mini = document.getElementsByTagName("input")[0];
//mini.setAttribute("minLength", 8);
console.log(mini.value);

(() => {
    document.getElementById("pass-one").addEventListener("input", () => {
        // your code here
        let tab = [];
        for (let i = 0;i < mini.value.length; i++){
            if (mini.value[i] == parseInt(mini.value[i])){
                tab.push("i");
                console.log(tab);
            }
        }
        if((mini.value.length >= 8) && (tab.length == 2))
        {
            validities.textContent = "ok";
            console.log("1");
        }
        else 
        {
            validities.textContent = "pas ok";
            console.log("2");
        }
    });
})();

})();
