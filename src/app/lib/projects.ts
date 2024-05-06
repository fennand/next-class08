const CATEGORIES = [
  { name: "Personal", catslug: "personal" },
  { name: "Client", catslug: "client" },
];

const PROJECTS = [
  // existing projects...
  {
    skills: "Javascript, Figma, HTML, CSS",
    title: "Math Dragons!",
    slug: "math-dragons",
    description:
      "Overview\n\n" +
      "As part of my 12 week MERN coding bootcamp, we were tasked with creating apps for our mid-course group project. My team decided to make a Choose Your Own Adventure text game, the story being a fight a dragon/save a maiden trope, but with the added twist of having to solve maths questions to advance.\n\n" +
      "Aims\n\n" +
      "The criteria for our project was that the app had at least three pages (one of which being an 'About Us' page), and that there were CSS animations on the app. The app also had to accept some sort of user input, and with using local storage this input persists from one page to at least one other.\n\n" +
      "To meet this criteria, we decided the user should input their name in the first screen, and then that name would be used throughout the text of the game. We also used local storage to take the score from the Game page and present this on the Leaderboard page.\n\n" +
      "Where have you used CSS animations, I hear you ask? Hover over our heads on the About Us page, I think you will see we become quite animated . . . !\n\n" +
      "My main input on this project was creating the main Javascript structure of our game text. I lead the design and planning using Figma, and was reponsible for a lot of the styling. We had some issues getting the data persistence to work, which I found a solution for. And the CSS animations were all mine!",
    tagline: "A Choose-Your-Own-Adventure game",
    card_image: "/Maths-Dragons.PNG",
    main_image: "/Maths-Dragons-Full.PNG",
    site_URL: "https://math-dragons.github.io/cyos/",
    repo_URL: "https://github.com/math-dragons/cyos",
    category: "Personal",
  },
  {
    skills: "Javascript, Figma, HTML, CSS, APIs, MongoDB, React, Express",
    title: "Dealio",
    slug: "dealio",
    description:
      "Overview\n\n" +
      "As part of my 12 week MERN coding bootcamp, we were tasked with creating apps for our final group projects. I had an idea of creating an app which will show users where they can get discounted meals and/or drinks in the location and time desired of the user. For example, say the user wants to see where they could get cheap food on a Friday night in Liverpool, they would just input that into our app and be provided with the results.\n\n" +
      "Aims\n\n" +
      "My team decided this was a good idea, and Dealio was born! Again there was some criteria we needed to meet for this project. Our React Express app had to be mobile-first, have at least three pages with clear navigation, and again one of those pages be an About Us page. It also had to have at least two pages which accepted and processed user input, feature a server, make use of a third party API, feature user authentication, and that the app makes at least one use of the four HTTP CRUD methods: GET, PUT, POST, and DELETE.\n\n" +
      "Quite a lot, right? Well I think we smashed it! We could not find an API which provided the information on the bars and restaurants that we wanted, so we seeded this information ourselves to a MongoDB database as our server element. We had user input in the form of filtered lists and buttons, and we used a third party location API to show the venues on a map.\n\n" +
      "We also decided that a venue should be able to add or edit the details of their offers. We made it so venues would need to go through user authentication to access this feature (using Auth0), and then they would be able to use a form to add, edit, or delete information on thier offers.\n\n" +
      "In this project, I focussed on the issue around our favourites page. I used local storage again to make it so users could favourite a deal they liked, and then go to a favourites page where they would all be stored. I also made sure there was a 'remove favourite' option on this page, and I had to disable the 'favourite' button after it had been clicked to prevent issues using local storage.\n\n" +
      "Again using my knowledge of Figma I created the wireframes for this project. I was responsible for the styling of the header, footer, and About Us page (but I cannot claim responsibility for that video!). I also fixed issues with our filters on the homepage, so results were only rendered once the search button had been pressed.",
    tagline: "A food and drink discount app",
    card_image: "/Dealio.PNG",
    main_image: "/IMAGE-COMING-SOON-1000.jpg",
    repo_URL: "https://github.com/sushaz9/Dealio",
    category: "Personal",
  },
  {
    skills: "Javascript, Figma, HTML, CSS, APIs, Eleventy",
    title: "Fatigue Management International",
    slug: "fmi",
    description:
      "Our client Fatigue Management International (FMI) wanted to revamp their outdated website. After working with the design team, this is the design and content they came up with. I had some input in the desgning process, including one-on-one video chats with the Managing Director. When it was all signed off, I got to work.\n\n" +
      "I was provided with the Figma designs and was to follow these explicitly. Using HTML, CSS, Eleventy, and Javascript, I was able to achieve these goals. A restful API was used for the contact forms on two seperate pages, and media queries were used to achieve a page layout change when switching between desktop and mobile views on the 'Driver ai App' page.",
    tagline: "Wellness and fitness services",
    card_image: "/FMI-full.PNG",
    main_image: "/FMI-full.PNG",
    site_URL: "https://fmiapplications.com/",
    category: "Client",
  },
  {
    skills: "Javascript, Figma, HTML, CSS, Eleventy",
    title: "Portland Wine Cellars",
    slug: "portland-wine",
    description:
      "Our client Portland Wines based in Southport also wanted a revamp of their tired old website. Included in this revamp they wanted to integrate their social media posts on their homepage, and add usability to update their events page when needed.\n\n" +
      "Again I was provided with the Figma designs from the design team, so I followed them as instructed. I used HTML, CSS, Eleventy, and Javascript to complete the site, using Javascript and typescipt to enable the client to update the events easily when needed.",
    tagline: "Website for local wine shop",
    card_image: "/Portland.PNG",
    main_image: "/Portland-Full.PNG",
    site_URL: "https://portlandwines.com/",
    category: "Client",
  },
  {
    skills: "HTML, CSS",
    title: "Thornbury Ltd",
    slug: "thornbury",
    description:
      "A  client contacted in need of a full website from scratch for their company. They had nothing in place at present so it was a blank canvas. After some initial planning sessions, I got a clear idea of what the client needed. They were after a simple static site, which would showcase their team and a few of the products/services they provide.\n\n" +
      "They provided a few images, videos, and PDF's they would like on the site, and their contact details. I was given full carte blanche in terms of the look and style of the site, so went with the green and blue colours to match their logo. Just simple HTML and CSS was used to achieve the finished site.",
    tagline: "Website for Thornbury Ltd, a holding company",
    card_image: "/Thornbury.PNG",
    main_image: "/Thornbury-Full.PNG",
    site_URL: "https://thornburyltd.co.uk/",
    repo_URL: "https://github.com/fennand/thornbury",
    category: "Client",
  },
];

export function getProjects() {
  return PROJECTS;
}

export function getProjectsBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getProjectsByCategory(catslug: string) {
  return PROJECTS.filter((project) => project.category === catslug);
}
