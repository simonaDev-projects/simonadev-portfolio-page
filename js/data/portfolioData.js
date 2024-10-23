/*
max-kiekis: 6;
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
      max: 6
   },
   rendering: {
      strategy: 'title',
      order: 'az'
   },

   content: [
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "First project",
         description: "This is first project",
         tag: ["Other"],
         linkToCode: "https://github.com/simonasablinaite/calculator-project",
         linkToProject: "https://simonasablinaite.github.io/calculator-project/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "Second project",
         description: "This is second project",
         tag: ["Logo"],
         linkToCode: "https://github.com/simonasablinaite/calculator-project",
         linkToProject: "https://simonasablinaite.github.io/calculator-project/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "Third project",
         description: "This is third project",
         tag: ["Web page"],
         linkToCode: "https://github.com/simonasablinaite/calculator-project",
         linkToProject: "https://simonasablinaite.github.io/calculator-project/"
      },
      {
         published: true,
         img: "./img/portfolio/portfolio-item.jpg",
         alt: "portfolio image",
         title: "Fourth project",
         description: "This is fourth project",
         tag: ["Other"],
         linkToCode: "https://github.com/simonasablinaite/calculator-project",
         linkToProject: "https://simonasablinaite.github.io/calculator-project/"
      },
   ],

};

export { portfilioData };