// 27.05.2024

function main() {
    const form = document.querySelector(".leituras-form");
    const bookList = document.querySelector(".f-leituras");

    const title = document.querySelector(".in-title");
    const author = document.querySelector(".in-author");
    const pages = document.querySelector(".in-pages");
    const start = document.querySelector(".in-start");
    const end = document.querySelector(".in-end");


    if (localStorage.getItem("bookList")) {
        getTasksFromLocalStorage();
    }


    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const card = createCard([title, author, pages, start, end]);
        // console.log(card);
        bookList.appendChild(card);

        setTasksToLocalStorage();

    });

    function createCard(contentLst) {
        const newArticle = document.createElement("article");
        newArticle.classList.add("cartao-conteudo", "g-cartao-leituras")
                
        labelLst = ["Título", "Autor", "Qtd. Páginas", "Início", "Fim"]
        clsLst = ["livro-titulo", "livro-autor", "livro-qtdpgs", "livro-inicio", "livro-fim"]
        
        for (let i = 0; i < clsLst.length; i++) {
            let para = document.createElement("p");
            para.className = clsLst[i]
            para.innerText = `${labelLst[i]}: ${contentLst[i].value}`
            newArticle.appendChild(para);
        }

        return newArticle;
    }

    // GUARDAR **** arrumar isso
    function setTasksToLocalStorage() {
        const allTasks = bookList.querySelectorAll("article");
        let allTasksArr = [];
        
        for (let elem of allTasks) {
            allTasksArr.push(elem.childNodes[0].textContent);
        }
        
        // console.log(allTasks);
        // console.log(allTasksArr);

        const jsonTasks = JSON.stringify(allTasksArr);
        localStorage.setItem("bookList", jsonTasks);
        return;
    }

    function getTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem("bookList");
        const storedTasksArr = JSON.parse(storedTasks);

        for (let elem of storedTasksArr) {
            createCard(elem);
        }

        return;
    }

//     <article class="cartao-conteudo g-cartao-leituras">
//     <p class="livro-titulo">Título: Fahrenheit 451</p>
//     <p class="livro-autor">Autor: Ray Bradbury</p>
//     <p class="livro-qtdpag">Qtd. Páginas: 216</p>
//     <p class="livro-inicio">Início: 11/01/2024</p>
//     <p class="livro-fim">Fim: 05/02/2024</p>
//   </article>
}
main();