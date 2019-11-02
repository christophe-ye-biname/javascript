/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)];
    }
    
    const sizet = ["xx-small","small","large","xx-large","250%"];
    let phrase = document.getElementById("target");
    let sentence = phrase.innerText;
    console.log(sentence);
    sentence = sentence.split(" ");
    for (let i = 0; i < sentence.length; i++)
    {
        phrase.style.fontSize = sizet.sample();
        console.log(sizet.sample());
    }
    sentence = sentence.join();
    console.log(sentence);
    phrase.innerHTML = sentence;    
})();
