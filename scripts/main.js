const changeBurgerButton = () => {
  document.querySelector("#b-button").classList.toggle("change");
  document.querySelector(".nav-burger").classList.toggle("visible");
};

const btnTop = document.querySelector("#backToTop");
$("#backToTop").on("click", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll", () => {
  if (this.scrollY <= 10) {
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "flex";
  }
});

$("#curriculo").on("click", (ev) => {
  var dialog = bootbox.dialog({
    title:
      "Currículo Eduardo - <span class='small text-muted'>Clique para fazer o Download</span>",
    message: `<div class="spinner-border text-primary" role="status" aria-hidden="true"></div>
    <span class="text-primary">Carregando...</span>
              `,
  });

  dialog.init(function () {
    setTimeout(function () {
      dialog
        .find(".bootbox-body")
        .html(
          "<a href='./extras/Eduardo - Desenvolvedor.pdf' download><img src='./images/curriculum.jpg' alt='Currículo' style='width:100%; max-width:500px' /></a>"
        );
    }, 3000);
  });
});

const urlImages =
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/";

const tools = [
  {
    id: "EBR-HTML",
    image: urlImages + "html5/html5-original.svg",
    name: "HTML",
  },
  {
    id: "EBR-CSS",
    image: urlImages + "css3/css3-original.svg",
    name: "CSS",
  },
  {
    id: "EBR-JS",
    image: urlImages + "javascript/javascript-plain.svg",
    name: "JavaScript",
  },
  {
    id: "EBR-TS",
    image: urlImages + "typescript/typescript-plain.svg",
    name: "TypeScript",
  },
  {
    id: "EBR-React",
    image: urlImages + "react/react-original.svg",
    name: "ReactJS",
  },
  {
    id: "EBR-Bootstrap",
    image: urlImages + "bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    id: "EBR-SQL",
    image: urlImages + "mysql/mysql-original.svg",
    name: "SQL",
  },
  {
    id: "EBR-Java",
    image: urlImages + "java/java-original.svg",
    name: "Java",
  },
  {
    id: "EBR-Python",
    image: urlImages + "python/python-original.svg",
    name: "Python",
  },
  {
    id: "EBR-CSharp",
    image: urlImages + "csharp/csharp-original.svg",
    name: "C#",
  },
];

tools.forEach((tool) => {
  $(".tools").append(
    `<li id="${tool.id}"><img src="${tool.image}" alt="${tool.name}">${tool.name}</li>`
  );
  $(`#${tool.id}`).on("click", () => {
    Swal.fire({
      title: tool.name,
      imageUrl: tool.image,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: tool.name,
    });
  });
});

const projects = [
  {
    id: "NWgYPez",
    title: "Conversor de Moedas",
    icon: "💵",
    target: "One",
  },
  {
    id: "GREXMzN",
    title: "TesteFlix",
    icon: "🎥",
    target: "Two",
  },
  {
    id: "vYZaQqr",
    title: "Super Trunfo",
    icon: "🎴",
    target: "Three",
  },
  {
    id: "RwgBJrP",
    title: "Tabela de Classificação",
    icon: "🧾",
    target: "Four",
  },
  {
    id: "oNwMdgq",
    title: "Calculadora de Média",
    icon: "📊",
    target: "Five",
  },
];

projects.forEach((project) => {
  $("#accordionProjects").append(`
  <div class="projetos-item card">
    <div id="codigo${project.target}" class="card-header">
      <h5 class="text-center text-primary" data-toggle="collapse" data-target="#codePen${project.target}"  aria-expanded="true" aria-controls="codePen${project.target}">
        ${project.icon} ${project.title}
      </h5>
    </div>
    <div id="codePen${project.target}" class="collapse" aria-labelledby="heading${project.target}" data-parent="#accordionProjects">
      <div class="codepen card-body" data-height="300" data-default-tab="html,result" data-slug-hash="${project.id}" data-user="ebrauta">
        <span>Veja o código em 
          <a href="https://codepen.io/ebrauta/pen/${project.id}">
            ${project.title}
          </a>
          por Eduardo Rauta (
            <a href="https://codepen.io/ebrauta">
              @ebrauta
            </a>
          ) em 
            <a href="https://codepen.io">
              CodePen
            </a>
          .
        </span>
      </div>
    </div>
    <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
  `);
});
