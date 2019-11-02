/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    console.log(document.querySelector("img").getAttribute("data-hover"));
    let old = document.querySelector("img").src;
    console.log(old);
    let photo = document.querySelector("img");
    (() => {
        document.querySelector("IMG").addEventListener("mouseover", () => {
            // your code here
            let prop = document.querySelector("img");
            let hov = document.querySelector("img").getAttribute("data-hover");
            photo.setAttribute("src",hov );
        });
        document.querySelector("IMG").addEventListener("mouseout", () => {
            // your code here
            photo.setAttribute("src", old);
        });
    })();
})();
