import jsArcadeImg from "../images/jsArcade.JPG";
import secretFamilyRecipesImg from "../images/secretFamilyRecipes.JPG";
import shopSmartImg from "../images/shopSmart.JPG";

const projects = [
  {
    name: "John's JavaScript Arcade",
    description:
      "This is my favorite project that I've done... so far ;). I built the frontend using React, and it contains components that access the backend API via HTTP calls through axios.  I restricted certain HTTP calls through server-side middleware that I created.  I built the backend API using Node.js and utilizing the Express.js framework. The Postgres database schema was made using knex.js, and has restricted access via middleware I made utilizing jsonwebtoken authentication.  Inappropriate public leaderboard posts are censored with the use of Michael Price's \"bad-words\" filter.",
    tools: {
      frontend: [
        "React.js",
        "JavaScript",
        "React-Router",
        "axios",
        "CSS",
        "Styled Components",
        "Vercel",
      ],
      backend: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "knex.js",
        "jsonwebtoken",
        "bcrypt",
        "bad-words",
        "Heroku",
      ],
    },
    live_link: "http://js-arcade.vercel.app/",
    github_link: "https://github.com/jmerz826/js-arcade",
    image: jsArcadeImg,
    time: "2/22",
  },
  {
    name: "Secret Family Recipes",
    description:
      "Secret Family Recipes is a group project completed for my final build week at BloomTech. I, personally, spearheaded the backend development. I built the API using Node.js and utilizing the Express.js framework.  The Postgres database schema was made using knex.js, and has restricted access via middleware I made utilizing jsonwebtoken authentication.  User passwords are hashed and then stored on the database through the use of bcrypt.",
    tools: {
      frontend: [],
      backend: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "knex.js",
        "jsonwebtoken",
        "bcrypt",
        "Heroku",
      ],
    },
    live_link: "http://secret-family-recipes-cookbook-8.vercel.app/",
    github_link: "https://github.com/secret-family-recipes-08",
    image: secretFamilyRecipesImg,
    time: "1/22-2/22",
  },
  {
    name: "Shop Smart",
    description:
      "Shop Smart is my first notable independent project. The project serves as a shopping companion app, implementing unique methods of creating and managing shopping lists. The project showcases material learned in the first half of BloomTech's full stack program.",
    tools: {
      frontend: [
        "React.js",
        "JavaScript",
        "React-Router",
        "React-Redux",
        "CSS",
        "Styled Components",
        "Vercel",
      ],
      backend: [],
    },
    live_link: "https://shop-smart.vercel.app/",
    github_link: "https://github.com/jmerz826/shop-smart",
    image: shopSmartImg,
    time: "12/21-1/22",
  },
];

export default projects;
