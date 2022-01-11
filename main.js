const posts = [
  {
    id: 1,
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];
// Variabile per selezionare il container
const container = document.getElementById("container");
// Ciclo For per inserire dinamicamente i post sulla pagina
for (let i = 0; i < posts.length; i++) {
  container.innerHTML += `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].author.image == null ? "https://unsplash.it/300/300?image=40" : posts[i].author.image}" alt="${posts[i].author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${reverseString(posts[i].created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
      
      `;
}
// Variabile per selezionare tutti i buttoni Like
const miPiace = document.querySelectorAll(".like-button");
// Array vuota dove andranno inseriti l'Id dei post con il mi piace
let idArray = [];
// Ciclo For per selezionare il buttone corrente a qui poi applicare la classe active + aumentare o dicrementare numero like
for (let i = 0; i < miPiace.length; i++) {
  miPiace[i].addEventListener("click", function (e) {
    e.preventDefault();

    const elementoDaCambiare = this.parentNode.parentNode.childNodes[3];

    if (!this.classList.contains("like-button--liked")) {
      this.classList.add("like-button--liked");
      idArray.push(posts[i].id);

      elementoDaCambiare.innerHTML = `
    Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes + 1}</b> persone
    `;
    } else {
      this.classList.remove("like-button--liked");
      // Ciclo for togliere da idArray l'id del post in caso sia presente
      for (let index = 0; index < idArray.length; index++) {
        if (idArray[index] == posts[i].id) {
          idArray.splice(index, 1);
        }
      }

      elementoDaCambiare.innerHTML = `
    Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
    `;
    }
    console.log(idArray);
  });
}

// Funzione per invertire le date
function reverseString(data) {
  let splitString = data.split("-");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("-");
  return joinArray;
}
