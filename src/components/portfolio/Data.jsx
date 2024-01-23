// import covid19TrackerImage from '../../assets/covid19TrackerImage.png';
// import smartWeatherAppImage from '../../assets/smartWeatherApp.png';
// import fureverPreciousImage from '../../assets/fureverPrecious.png';
// import theGoatImage from '../../assets/theGoat.png';
// import timesheetImage from '../../assets/timesheet.png';

// import covid19TrackerVideo from '../../assets/covid19Tracker.mp4';
// import smartWeatherAppVideo from '../../assets/smartWeatherApp.mp4';
// import fureverPreciousVideo from '../../assets/fureverPrecious.mp4';
// import theGoatVideo from '../../assets/theGoat.mp4';
// import timesheetVideo from '../../assets/timesheet.mp4';

const covid19TrackerImage = 'https://sangye-tenphel.s3.amazonaws.com/covid19TrackerImage.png';
const smartWeatherAppImage = 'https://sangye-tenphel.s3.amazonaws.com/smartWeatherApp.png';
const fureverPreciousImage = 'https://sangye-tenphel.s3.amazonaws.com/fureverPrecious.png';
const theGoatImage = 'https://sangye-tenphel.s3.amazonaws.com/theGoat.png';
const timesheetImage = 'https://sangye-tenphel.s3.amazonaws.com/timesheet.png';

const covid19TrackerVideo = 'https://sangye-tenphel.s3.amazonaws.com/covid19Tracker.mp4';
const smartWeatherAppVideo = 'https://sangye-tenphel.s3.amazonaws.com/smartWeatherApp.mp4';
const fureverPreciousVideo = 'https://sangye-tenphel.s3.amazonaws.com/fureverPrecious.mp4';
const theGoatVideo = 'https://sangye-tenphel.s3.amazonaws.com/theGoat.mp4';
const timesheetVideo = 'https://sangye-tenphel.s3.amazonaws.com/timesheet.mp4';

export const projectsData = [
  {
    id: 1,
    image: covid19TrackerImage,
    title: "COVID-19 Tracker",
    year: '2020',
    subtitle: 'Check the likelihood of your favorite Hollywood actor contracting COVID-19.',
    video: covid19TrackerVideo,
    project_overview : "The app connects two actors, one with COVID-19. Framed as an AI search, it seeks the shortest path using breadth-first search, treating individuals as states and movies as actions. Initial and goal states are set. Leveraging a database of 1,044,500 actors, it finds the concise path. Additionally, it provides U.S. Coronavirus cases using 'BeautifulSoup4' for web scraping. For engagement, the app dynamically generates refreshing virus facts on each HTTP request.",
    technologies: 'Python, Django, BeautifulSoup4, BFS Algorithm, JavaScript, HTML/CSS, Bootstrap',
    category: "front-end",
    github: 'https://github.com/sangyetenphel/covid-19-tracker',
  },
  {
    id: 2,
    image: smartWeatherAppImage,
    title: "Smart Weather App",
    year: '2020',
    subtitle: 'The app suggests clothing choices based on the current weather conditions.',
    video: smartWeatherAppVideo,
    project_overview : "The weather app provides clothing recommendations based on the current weather conditions, utilizing data from the OpenWeather API. Users can access the app without logging in, and upon the first use, they are prompted to enter a city. The app showcases weather-appropriate images. The project structure involves a dedicated folder for the app, with subfolders for static files, templates, and a clean JSON program aimed at optimizing the cities list file size.",
    technologies: 'Python, Django, JavaScript, HTML/CSS, Bootstrap, OpenWeather API, WorldTime API, SQLite3',
    category: "front-end",
    github: 'https://github.com/sangyetenphel/smart-weather-app',
  },
  {
    id: 3,
    image: fureverPreciousImage,
    title: "Furever Precious",
    year: '2022',
    subtitle: 'A Django ecommerce platform uniting secure authentication, intuitive browsing, and community engagement for pet enthusiasts',
    video: fureverPreciousVideo,
    project_overview: "Furever Precious, a Django-based ecommerce platform, serves as a haven for pet enthusiasts. Acting as a virtual marketplace, it seamlessly integrates user authentication, secure profiles, and efficient order tracking. The platform's intuitive design allows users to effortlessly explore a diverse array of pet products with straightforward cart management. Fostering community engagement, users can share their thoughts through reviews and comments. Personalized profiles enhance the user experience by facilitating seamless information management. The secure checkout process, powered by the Stripe payment system, ensures a smooth transaction experience.",
    technologies: 'Python, Django, JavaScript, HTML/CSS, Bootstrap, Django Authentication, Stripe Payment Integration',
    category: "back-end",
    github: "https://github.com/sangyetenphel/furever-precious",
  },
  {
    id: 4,
    image: theGoatImage,
    title: "The Goat",
    year: '2019',
    subtitle: 'A web development agency website with parallax effects and PHP for handling the backend services.',
    video: theGoatVideo,
    project_overview: "A sophisticated PHP backend website crafted by for an esteemed web development agency, showcasing advanced frontend proficiency in JavaScript and CSS techniques. Showcasing seamless animations, captivating parallax effects, elegant pop-up dialog boxes, and dynamic JavaScript countdowns tailored to elevate the users online presence.",
    technologies: 'PHP, JavaScript, HTML/CSS, CSS Animations, Parallax Effects',
    category: "front-end",
    github: "https://github.com/sangyetenphel/the-goat",
  },
  {
    id: 5,
    image: timesheetImage,
    title: "Timesheet",
    year: '2019',
    subtitle: 'A Flask application designed for the purpose of diligently monitoring and recording work hours.',
    video: timesheetVideo,
    project_overview: "A Flask application crafted to facilitate the meticulous tracking of work hours. Users can register and log in, enabling them to input essential details such as the company name and base pay. The application seamlessly presents the current date and time, allowing users to record their start and end times for each shift across the days of the week. Robust features include the ability to add multiple companies, filter data to assess weekly earnings, and leverage a database for secure storage. This application is developed using the Flask framework, ensuring a streamlined and efficient user experience.",
    technologies: 'Python, Flask, HTML/CSS, Bootstrap, DBMS, Date and Time Handling, Session Management',
    category: "back-end",
    github: "https://github.com/sangyetenphel/timesheet",
  },
];

export const projectsNav = [
    {
        name: 'full-stack',
    },
    {
        name: 'front-end',
    },
    {
        name: 'back-end',
    },
//     {
//         name: 'design',
//     },
]
