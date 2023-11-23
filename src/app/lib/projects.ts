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
    image: "/Maths-Dragons.PNG",
    site_URL: "https://math-dragons.github.io/cyos/",
    repo_URL: "https://github.com/math-dragons/cyos",
    category: "Personal",
  },
  {
    title: "Dealio",
    slug: "dealio",
    description: "Dealio description",
    tagline: "Dealio tagline",
    image: "/Dealio.PNG",
    site_URL: "https://dealio-six.vercel.app/",
    repo_URL: "https://github.com/sushaz9/Dealio",
    category: "Personal",
  },
  {
    title: "Tip Calculator",
    slug: "tip-calculator",
    description: "Tip Calculator description",
    tagline: "Tip Calculator tagline",
    image: "/TipCalc.PNG",
    site_URL: "https://codepen.io/fennand/pen/eYPGzKO",
    category: "Personal",
  },
  {
    title: "Portland Wine Cellars",
    slug: "portland-wine",
    description: "Portland Wine description",
    tagline: "Portland Wine tagline",
    image: "/Portland.PNG",
    site_URL: "https://portlandwines.com/",
    category: "Client",
  },
  {
    title: "Thornbury Ltd",
    slug: "thornbury",
    description: "Thornbury Ltd",
    tagline: "Thornbury Ltd tagline",
    image: "/Thornbury.PNG",
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
