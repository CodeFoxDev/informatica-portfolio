export default {
  home: {
    titles: [
      "student",
      "full stack web developer",
      "android developer",
      "UI/UX designer",
      "open source enthousiast",
      "linux user"
    ]
  },
  skills: [
    {
      id: "Javascript",
      icon: "/src/icons/javascript.svg"
    },
    {
      id: "HTML",
      icon: "/src/icons/html.svg"
    },
    {
      id: "CSS",
      icon: "/src/icons/css.svg"
    },
    {
      name: "Node.js",
      id: "Nodejs",
      icon: "/src/icons/nodejs.svg"
    },
    {
      id: "Vite",
      icon: "/src/icons/vite.svg"
    },
    {
      name: "Solid.js",
      id: "Solidjs",
      icon: "/src/icons/solid.svg"
    },
    {
      id: "Flutter",
      icon: "/src/icons/flutter.svg"
    },
    {
      id: "Dart",
      icon: "/src/icons/dart.svg"
    },
    {
      id: "Linux",
      icon: "/src/icons/linux.svg"
    },
    {
      id: "Git",
      icon: "/src/icons/git.svg"
    },
    {
      id: "MongoDB",
      icon: "/src/icons/mongo.svg"
    },
    {
      id: "Vercel",
      icon: "/src/icons/vercel.svg"
    },
  ],
  projects: [
    {
      title: "Codefoxdev.com",
      id: "codefoxdev",
      description: "My personal portfolio, where I show off some projects and skills/technologies I am familiar with.",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "/src/projects/shot-codefoxdev.com.png",
      live: "https://codefoxdev.com",
      code: "https://github.com/codefoxdev/codefoxdev",
      featured: true,
    },
    {
      title: "@Honeyjs/core",
      id: "honeyjs-core",
      description: "Honey is a tool that helps to build (mobile) applications with vite and jsx. It requires no (except for vite) external dependencies and is incredibly fast. <br><br> I am still working on it and am concurrently testing it through building a custom android app",
      technologies: ["Javascript", "JSX", "Vite", "ESbuild", "NPM", "Framework"],
      image: "/src/projects/shot-honeyjs-core.png",
      package: "https://www.npmjs.com/package/@honeyjs/core",
      code: "https://github.com/codefoxdev/honeyjs-core",
      featured: true
    },
    {
      title: "Cym.center",
      id: "cym-center",
      description: "A website I build for Cym Crea Computer, where the members can show off some projects they've created. It was build last year and unfortunatly hasn't been updated in a while.",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "/src/projects/shot-cym.center.png",
      live: "https://cym.center",
      code: "https://github.com/codefoxdev/cym-center"
    },
    {
      title: "Technasium portfolio",
      id: "technasium-portfolio",
      description: "A portfolio for keeping track of the projects and workshops made in the past four yours at Technasium.",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "/src/projects/shot-technasium-portfolio.png",
      live: "https://technasium-portfolio.codefoxdev.com",
      code: "https://github.com/codefoxdev/technasium-portfolio"
    },
  ]
}