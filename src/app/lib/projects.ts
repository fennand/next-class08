const CATEGORIES = [
  { name: "Personal", catslug: "personal" },
  { name: "Client", catslug: "client" },
];

const PROJECTS = [
  // existing projects...
  {
    title: "Math Dragons!",
    slug: "math-dragons",
    description: "Math Dragons description",
    tagline: "Math Dragons tagline",
    card_image: "/Maths-Dragons.PNG",
    main_image: "/Maths-Dragons-Full.PNG",
    site_URL: "https://math-dragons.github.io/cyos/",
    repo_URL: "https://github.com/math-dragons/cyos",
    category: "Personal",
  },
  {
    title: "Dealio",
    slug: "dealio",
    description: "Dealio description",
    tagline: "Dealio tagline",
    card_image: "/Dealio.PNG",
    main_image: "/IMAGE-COMING-SOON-1000.jpg",
    site_URL: "https://dealio-six.vercel.app/",
    repo_URL: "https://github.com/sushaz9/Dealio",
    category: "Personal",
  },
  {
    title: "Tip Calculator",
    slug: "tip-calculator",
    description: "Tip Calculator description",
    tagline: "Tip Calculator tagline",
    card_image: "/TipCalc.PNG",
    main_image: "/TipCalc-Full.PNG",
    site_URL: "https://codepen.io/fennand/pen/eYPGzKO",
    category: "Personal",
  },
  {
    title: "Portland Wine Cellars",
    slug: "portland-wine",
    description: "Portland Wine description",
    tagline: "Portland Wine tagline",
    card_image: "/Portland.PNG",
    main_image: "/Portland-Full.PNG",
    site_URL: "https://portlandwines.com/",
    category: "Client",
  },
  {
    title: "Thornbury Ltd",
    slug: "thornbury",
    description: "Thornbury Ltd",
    tagline: "Thornbury Ltd tagline",
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
