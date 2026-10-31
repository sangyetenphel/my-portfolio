const covid19TrackerImage = 'https://sangye-tenphel.s3.amazonaws.com/covid19TrackerImage.png';
const covid19TrackerVideo = 'https://sangye-tenphel.s3.amazonaws.com/covid19Tracker.mp4';
const HangmanWithFriendsImage = 'https://sangye-tenphel.s3.amazonaws.com/HangmanWithFriends.png';
const HangmanWithFriendsVideo = "https://sangye-tenphel.s3.amazonaws.com/HangmanWithFriends.mp4";

// Served from the public/ folder
const carolinaExplorerImage = '/projects/carolinaExplorer.jpg';
const carolinaExplorerVideo = '/projects/carolinaExplorer.mp4';
const ctrlExDeleteImage = '/projects/ctrlExDelete.jpg';

export const projectsData = [
  {
    id: 5,
    image: covid19TrackerImage,
    title: "COVID-19 Tracker",
    year: '2022',
    subtitle: 'Check the likelihood of your favorite Hollywood actor contracting COVID-19.',
    video: covid19TrackerVideo,
    project_overview : "The app connects two actors, one with COVID-19. Framed as an AI search, it seeks the shortest path using breadth-first search, treating individuals as states and movies as actions. Initial and goal states are set. Leveraging a database of 1,044,500 actors, it finds the concise path. Additionally, it provides U.S. Coronavirus cases using 'BeautifulSoup4' for web scraping. For engagement, the app dynamically generates refreshing virus facts on each HTTP request.",
    technologies: 'Python, Django, BeautifulSoup4, BFS Algorithm, JavaScript, HTML/CSS, Bootstrap',
    github: 'https://github.com/sangyetenphel/covid-19-tracker',
  },

  {
    id: 6,
    image: HangmanWithFriendsImage,
    title: "Hangman With Friends",
    year: '2024',
    subtitle: "It's a classic hangman game with a twist—you can play it online by creating a word and then sharing a link with your friends to join the game.",
    video: HangmanWithFriendsVideo,
    project_overview : "This project is an online version of the classic hangman game, featuring a React and TypeScript frontend integrated with a Django backend. The frontend communicates with the backend through a REST API, allowing players to create custom words or use predefined ones stored in the database. Players can generate a link to share the game with friends, making it an engaging and interactive experience.",
    technologies: 'React, TypeScript, Vite, Django, Django REST Framework, PostgreSQL, Axios',
    github: 'https://github.com/sangyetenphel/Hangman',
  },

  {
    id: 7,
    image: carolinaExplorerImage,
    title: "Carolina Explorer",
    year: '2026',
    subtitle: 'A tour-booking platform connecting tourists with local tour guides across North Carolina.',
    video: carolinaExplorerVideo,
    project_overview: "Carolina Explorer is a Spring Boot MVC application, built as a team project, that helps visitors discover and book guided tours across North Carolina. Tourists can search tours by city, group size and category, book a date, track pending and accepted trips, and leave reviews that feed each tour's rating. Tour guides publish tours with itineraries and photos, then accept or reject booking requests from a dashboard that tracks upcoming tours, earnings and average rating. The app uses a layered controller-service-repository architecture with Spring Data JPA on PostgreSQL, BCrypt password hashing, CSRF protection and ownership checks on every booking action, and ships as a Docker image.",
    technologies: 'Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, FreeMarker, Bootstrap, Docker, JUnit, Mockito',
    github: 'https://github.com/sangyetenphel/Carolina-Explorer',
  },

  {
    id: 8,
    image: ctrlExDeleteImage,
    title: "Ctrl + Ex + Delete",
    year: '2026',
    status: 'In progress',
    subtitle: 'An iOS breakup-recovery app with an AI healing companion, built as my senior capstone at UNC Greensboro.',
    project_overview: "Ctrl + Ex + Delete is an iOS app that helps people rebuild their everyday lives after a breakup through daily check-ins, psychology-informed activities, a memory scrapbook, progress insights and an AI companion named Ced. Users stay anonymous: there is no sign-up, and the backend identifies each install with an anonymous ID. It is a team senior capstone project; my work focuses on the FastAPI backend and Ced. I built Ced's chat on top of an LLM API with backend safety checks, rate limits and in-chat crisis resources, real-time voice calls with Ced relayed through the backend, activity recommendations, the progress and insights views, and photo storage for the scrapbook on AWS S3, along with the SwiftUI screens that connect to them.",
    technologies: 'Swift, SwiftUI, Python, FastAPI, PostgreSQL, AWS S3, Groq and Gemini Live APIs, Figma',
  },
];
