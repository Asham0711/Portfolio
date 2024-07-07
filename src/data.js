import ashcode from './assets/ashcode.jpg'
import ashchat from './assets/ashchat.jpg';
import language from './assets/lang.jpg';
import portfolio from './assets/portfolio.jpg'

const projects = [
    {
        id: 1,
        name: "Ash Code",
        desc: "Full Stack EdTech Application",
        image: `${ashcode}`,
        text: "Developed a full-stack educational platform using the MERN stack, facilitating interactive learning. Engineered features such as user authentication, OTP generation, and a CMS, ensuring a secure and streamlined user experience. Integrated Razorpay for secure payments, efficiently handling over 20 concurrent users. Successfully deployed on Render, enhancing scalability and reducing load times by 40%. Designed a responsive UI with Tailwind CSS, ensuring accessibility across devices. Demonstrated proficiency in network programming, database management with MongoDB, and version control with Git.",
        gitlink: "https://github.com/Asham0711/Ash-Code",
        livelink: "https://ash-code.onrender.com",
    },
    {
        id: 2,
        name: "Ash Chat",
        desc: "Real-Time Chat Application",
        image: `${ashchat}`,
        text: "Developed a real-time chat application using the MERN stack, enabling instant communication between users with Socket.IO. Integrated secure user authentication and authorization using JWT and bcrypt, and managed data with MongoDB for efficient storage and retrieval. Designed a modern, fully responsive user interface using Chakra UI. Employed Redux for state management and implemented robust error handling on both client and server sides. Successfully deployed the application on Render, ensuring high availability and performance while maintaining a clean and organized codebase with Git.",
        gitlink: "https://github.com/Asham0711/Ash-Chat",
        livelink: "https://ash-chat.onrender.com",
    },
    {
        id: 3,
        name: "Md Asham Imad",
        desc: "My Portfolio Application",
        image: `${portfolio}`,
        text: "Developed a portfolio website using React and Tailwind CSS, showcasing personal projects and professional experience in a visually appealing and responsive design. Implemented smooth navigation and interactive elements to enhance user experience. Leveraged Tailwind CSS for efficient styling and maintaining a consistent look across all devices. Ensured optimal performance and accessibility, demonstrating proficiency in modern web development practices. Deployed the website on Netlify, achieving fast load times and high availability. Maintained a clean and modular codebase with Git for version control.",
        gitlink: "https://github.com/Asham0711/Portfolio",
        livelink: "https://cheerful-elf-a8f497.netlify.app/",
    },
    {
        id: 4,
        name: "Translate It",
        desc: "Live Language Translator",
        image: `${language}`,
        text: "Developed a web application that allows users to enter text in desired language and translate it into French, German, Hindi etc. Implemented the translation functionality using free translation APIs and JavaScript. Users can select their desired target language and receive instant translations.",
        gitlink: "https://github.com/Asham0711/live-language-translator",
        livelink: "https://asham0711.github.io/live-language-translator/",
    },
];

export default projects;