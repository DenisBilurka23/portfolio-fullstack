import Chat from "../assets/images/chat.png";
import ClothesStore from "../assets/images/clothes-store.png";
import Table from "../assets/images/table.png";
import SoupBorscht from "../assets/images/soup-borscht.png";
import BakeryStore from "../assets/images/bakery-store.png";
import Courses from "../assets/images/courses.png";

export const projectsData = [{
    header: 'Online restaurant',
    sub: 'Soup & Borsch Online Restaurant',
    desc: 'An online restaurant built with Next.js and TypeScript, featuring a modern and interactive user interface. Explore a diverse menu, place orders, and experience a seamless online dining experience. Fully adaptive design ensures a smooth experience across all resolutions. Dive into the world of culinary delights with Soup & Borscht!',
    src: SoupBorscht,
    demoLink: 'https://soup-and-borsch.netlify.app/en',
    codeLink: 'https://github.com/DenisBilurka23/SoupAndBorsch',
    tech: 'Next.js, TypeScript, Tailwind, i18n, MongoDB',
    date: '2024'
}, {
    header: 'Online Courses',
    sub: 'Online IT Courses Application',
    desc: 'A dynamic React application designed for online IT courses. This application features a fully responsive design that adapts seamlessly to desktop, tablet, and mobile screens. Includes comprehensive form validation and submission handling for user interactions, ensuring a smooth and efficient user experience.',
    src: Courses,
    demoLink: 'https://courses-onine.netlify.app',
    codeLink: 'https://github.com/DenisBilurka23/courses-app',
    tech: 'React, React Hook Form',
    date: '2024'
}, {
    header: 'Bakery store',
    sub: 'Seamlessly responsive bakery store',
    desc: 'An online bakery store crafted with pure JavaScript and Web Components. The fully adaptive layout ensures a delightful browsing experience across desktop, tablet, and mobile devices.',
    src: BakeryStore,
    demoLink: 'https://bakery-store.netlify.app',
    codeLink: 'https://github.com/DenisBilurka23/Bakery',
    tech: 'HTML, CSS, JS, Web Components',
    date: '2024'
}, {
    header: 'Chat',
    sub: 'Full Stack Chat',
    desc: 'A Full Stack Chat application. The front-end is built using React, and the back-end is powered by Node.js with a MongoDB database. Real-time communication is made possible through WebSockets, ensuring instant message delivery. JWT is employed for secure user authentication, providing a seamless and protected chat experience.',
    src: Chat,
    codeLink: 'https://github.com/DenisBilurka23/fullstack-chat',
    tech: 'React.js, Node.js, Material UI, Express, MongoDB, WebSocket, JWT',
    date: '2023'
}, {
    header: 'Clothing Store',
    sub: 'Fully adaptive clothing store',
    desc: 'A Front-end clothing store employing SCSS, JS, and HTML, with a fully adaptive pixel-perfect layout ensuring a seamless user experience across diverse devices – including desktops, tablets, and mobile',
    src: ClothesStore,
    demoLink: 'https://denisbilurka23.github.io/CF-CLOTHING/',
    codeLink: 'https://github.com/DenisBilurka23/CF-CLOTHING',
    tech: 'SCSS, CSS, HTML, JS',
    date: '2021'
}, {
    header: 'Table',
    sub: 'Customize Table Application',
    desc: 'A React-powered table app with TypeScript support, highlighting seamless pagination, customizable page sizes, and easy row filtering through a simple search. Customize your view with column adjustments, sort fields effortlessly, and switch between light and dark themes for a tailored visual experience',
    src: Table,
    codeLink: 'https://github.com/DenisBilurka23/Table',
    tech: 'React, Material UI, TypeScript',
    date: '2023'
}]


export const experienceData = [{
    location: 'Toronto, ON',
    name: 'Vosyn',
    date: 'Jan 2024 - May 2024',
    projects: [{
        header: 'AI startup',
        desc: 'This Canadian AI startup, based in Toronto, ON, focuses on revolutionizing live translation for digital content. The React-based application integrates advanced AI features to deliver real-time translations across various platforms like YouTube and Netflix. The AI technology ensures that translations are not only accurate but also maintain the original voice quality and intonation, providing users with a seamless and natural viewing experience. The application caters to a global audience, enabling them to enjoy content in their preferred language without compromising the authenticity of the original material.',
        tech: 'React, React Router, Redux-Thunk, Redux-Toolkit, Material-UI, Git, ESLint',
    }]}, {
    name: 'Aimprosoft',
    date: 'Aug 2021 – Jul 2024',
    projects: [{
        header: 'IoT Smart Home',
        desc: 'The system that manages different user devices and connecting them into one ecosystem. The front-end UI to manage smart devices inside the house was implemented. A user can see how much energy was spent, set a timer for devices, etc. Platform provides users with advanced services for smart home appliances control and embedded software for the in-house manufactured device.',
        tech: 'React, Saga, React Router, Redux-Thunk, Redux-Toolkit, Material-UI, TypeScript, Lodash, Git, ESLint',
    }, {
        header: 'Fressnapf',
        desc: 'Europe\'s largest pet supply store with many related services such as pet supplies, a veterinary clinic, a pet care salon, pet adoption, and different suggestion services to help people find the perfect pet. Core technologies: SAP Hybris, WordPress, Vue.js with Nuxt.js. During the project a new Marketplace design was launched, the checkout flow was fully rebuilt, and the Pet Grooming Salon service was introduced. The new pet adoption service helps people to decide what kind of pet they want and find the nearest adoption center on the map',
        tech: 'Vue.js, Nuxt.js, Vuex, Axios, Swiper, ESLint, Git, Bitbucket, Jira, Swagger, Figma, Hybris',
    }, {
        header: 'Edge Server health monitoring portal for Tele2',
        desc: 'Server health monitoring portal with reporting and provisioning abilities narrowly focused on the telecom niche. It is rich in features and mobile adaptive. An admin panel for data tracking is anchored to time zones and gives the possibility to generate reports. Developed the solution that consists of several parts, where implemented UI and web service (WS) collaboration. The server healthcare monitoring system collects data from agents and sends it to the aggregation server, from where it is displayed in user-friendly charts, reports, events, etc., and puts it on a monitoring dashboard. The full scope of information is available on each server there.',
        tech: 'ES6, ECharts, jQuery',
    }, {
        header: 'Marketing platform',
        desc: 'The US platform provides financial data, articles, learning materials, notifications, charts, etc. to subscribed users. The app provides custom logic for subscriptions and users management. Partially uses a modular structure, where each module implements its functionality. Implements connections between multiple third-party services. It has a set of financial tools that helps users to better understand and make the right decisions while working in the financial markets',
        tech: ' React, Git',
    }]
}]