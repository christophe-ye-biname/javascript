/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /*async function ft()
    {
        const tab = await lib.getPosts();
        console.log(tab);

    }
    ft();


    lib.getPosts().then((content) => {
        console.log(content)
        for (let i = 0;i < content.length; i++)
        {
            let comId = content[i].id;
            lib.getComments(comId).then((comment) => {
                content[i].comments = comment;
            })
        }
    });*/
    async function ft()
    {
        const tab = await lib.getPosts();
        for (let i = 0; i < tab.length; i++)
        {
            let comId = content[i].id;
            lib.getComments(comId).then((comment) => {
                content[i].comments = comment;
        }
        console.log(tab);
    }
    }
})();
