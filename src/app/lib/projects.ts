const CATEGORIES = [
  { name: "Personal", catslug: "personal" },
  { name: "Client", catslug: "client" },
];

const PROJECTS = [
  // existing projects...
  {
    title: "Math Dragons!",
    slug: "math-dragons",
    description:
      "Objective test \n\n" +
      "As part of my 12 week MERN coding bootcamp, we were tasked with creating apps for our mid-course group project. My team decided to make a Choose Your Own Adventure text game, the story being a fight a dragon/save a maiden trope, but with the added twist of having to solve maths questions to advance.\n\n" +
      "Objective \n\n" +
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
    title: "Dealio",
    slug: "dealio",
    description:
      "As part of my 12 week MERN coding bootcamp, we were tasked with creating apps for our final group projects. I had an idea of creating an app which will show users where they can get discounted meals and/or drinks in the location and time desired of the user. For example, say the user wants to see where they could get cheap food on a Friday night in Liverpool, they would just input that into our app and be provided with the results.\n\n" +
      "My team decided this was a good idea, and Dealio was born! Again there was some criteria we needed to meet for this project. Our React Express app had to be mobile-first, have at least three pages with clear navigation, and again one of those pages be an About Us page. It also had to have at least two pages which accepted and processed user input, feature a server, make use of a third party API, feature user authentication, and that the app makes at least one use of the four HTTP CRUD methods: GET, PUT, POST, and DELETE.\n\n" +
      "Quite a lot, right? Well I think we smashed it! We could not find an API which provided the information on the bars and restaurants that we wanted, so we seeded this information ourselves to a MongoDB database as our server element. We had user input in the form of filtered lists and buttons, and we used a third party location API to show the venues on a map.\n\n" +
      "We also decided that a venue should be able to add or edit the details of their offers. We made it so venues would need to go through user authentication to access this feature (using Auth0), and then they would be able to use a form to add, edit, or delete information on thier offers.\n\n" +
      "In this project, I focussed on the issue around our favourites page. I used local storage again to make it so users could favourite a deal they liked, and then go to a favourites page where they would all be stored. I also made sure there was a 'remove favourite' option on this page, and I had to disable the 'favourite' button after it had been clicked to prevent issues using local storage.\n\n" +
      "Again using my knowledge of Figma I again the wireframes for this project. I was responsible for the styling of the header, footer, and About Us page (but I cannot claim responsibility for that video!). I also fixed issues with our filters on the homepage, so results were only rendered once the search button had been pressed.",
    tagline: "A food and drink discount app",
    card_image: "/Dealio.PNG",
    main_image: "/IMAGE-COMING-SOON-1000.jpg",
    site_URL: "https://dealio-six.vercel.app/",
    repo_URL: "https://github.com/sushaz9/Dealio",
    category: "Personal",
  },
  {
    title: "Fatigue Management International",
    slug: "fmi",
    description: "FMI description",
    tagline: "Wellness and fitness services",
    card_image: "/FMI-full.PNG",
    main_image: "/FMI-full.PNG",
    site_URL: "https://fmiapplications.com/",
    category: "Client",
  },
  {
    title: "Portland Wine Cellars",
    slug: "portland-wine",
    description: "Portland Wine description",
    tagline: "Website for local wine shop",
    card_image: "/Portland.PNG",
    main_image: "/Portland-Full.PNG",
    site_URL: "https://portlandwines.com/",
    category: "Client",
  },
  {
    title: "Thornbury Ltd",
    slug: "thornbury",
    description: "Thornbury Ltd",
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
