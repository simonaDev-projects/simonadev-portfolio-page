/*
max-kiekis: 10;
min-kiekis: 3;
*/

/*
Eiliskumas:
nuo a-z;
nuo z-a;
*/

const portfilioData = {
   size: {
      min: 3,
      max: 10
   },
   rendering: {
      strategy: 'title',
      order: 'az'
   },

   content: [
      {
         published: true,
         img: "img/portfolio/music-player.jpg",
         alt: "Music player",
         title: 'Music player with JS',
         description: "It is a multi-song music player with essential functionalities",
         tag: ["Other"],
         linkToCode: "#",
         linkToProject: "#"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfoli img",
         title: "Calculator project",
         description: "This is calculator project. I learned how the onclick method works",
         tag: ["Other"],
         linkToCode: "https://github.com/simonasablinaite/music-player-js",
         linkToProject: "https://simonasablinaite.github.io/music-player-js/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "Find system",
         description: "I learned the functionality of paging, filtering & saving in a list",
         tag: ["Other"],
         linkToCode: "https://github.com/simonasablinaite/rmtDev-search-project",
         linkToProject: "https://simonasablinaite.github.io/rmtDev-search-project/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "FeedBack",
         description: "I learned how to add comments to a list and filter them by keyword",
         tag: ["Other"],
         linkToCode: "https://github.com/simonasablinaite/feedback-project",
         linkToProject: "https://simonasablinaite.github.io/feedback-project/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "SimonaDev portfolio page",
         description: "This is my portfolio page",
         tag: ["Web page"],
         linkToCode: "https://github.com/simonaDev-projects/simonadev-portfolio-page",
         linkToProject: "https://simonadev-projects.github.io/simonadev-portfolio-page/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "E-shop",
         description: "This is full-stack web page with react, next.js & mongo DB",
         tag: ["Web page"],
         linkToCode: "https://github.com/simonasablinaite/mr-ecommerce-website",
         linkToProject: ""
      },
      {
         published: true,
         img: "./img/portfolio/Gaivita vizualas-3.jpg",
         alt: "gaivita logotipo vizualas",
         title: '"Gaivita" logo redrawing',
         description: "According to the requirements and the photo on the left, the logo was redrawn",
         tag: ["Logo"],
         linkToCode: "",
         linkToProject: ""
      },
      {
         published: true,
         img: "./img/portfolio/Logo-14.jpg",
         alt: "gaivita logotipo vizualas",
         title: '"MinėMi fotografija" logo design',
         description: "Logo design created for a photographer",
         tag: ["Logo"],
         linkToCode: "#",
         linkToProject: "#"
      },

   ],

};

export { portfilioData };