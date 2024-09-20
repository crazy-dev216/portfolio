import Img from '../utils/images'

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: Img.web,
  },
  {
    title: "Frontend Developer",
    icon: Img.frontend,
  },
  {
    title: "Backend Developer",
    icon: Img.backend,
  },
  {
    title: "Full Stack Developer",
    icon: Img.fullstack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: Img.html,
  },
  {
    name: "CSS 3",
    icon: Img.css,
  },
  {
    name: "JavaScript",
    icon: Img.javascript,
  },
  {
    name: "TypeScript",
    icon: Img.typescript,
  },
  {
    name: "SCSS",
    icon: Img.scss,
  },
  {
    name: "Tailwind CSS",
    icon: Img.tailwind,
  },
  {
    name: "Material UI",
    icon: Img.mui,
  },
  {
    name: "Ant Design",
    icon: Img.antdesign,
  },
  {
    name: "Bootstrap",
    icon: Img.bootstrap,
  },
  {
    name: "React",
    icon: Img.reactjs,
  },
  {
    name: "Angular",
    icon: Img.angular,
  },
  {
    name: "Vue",
    icon: Img.vue,
  },
  {
    name: "React Native",
    icon: Img.reactnative,
  },
  {
    name: "Next JS",
    icon: Img.nextjs,
  },
  {
    name: "Redux",
    icon: Img.redux,
  },
  {
    name: "JQuery",
    icon: Img.jquery,
  },
  {
    name: "Formik",
    icon: Img.formik,
  },
  {
    name: "Node JS",
    icon: Img.nodejs,
  },
  {
    name: "Express JS",
    icon: Img.expressjs,
  },
  {
    name: "ASP.NET",
    icon: Img.asp,
  },
  {
    name: "MongoDB",
    icon: Img.mongodb,
  },
  {
    name: "Mongoose",
    icon: Img.mongoose,
  },
  {
    name: "MySQL",
    icon: Img.mysql,
  },
  {
    name: "PostgreSQL",
    icon: Img.postgresql,
  },
  {
    name: "GraphQL",
    icon: Img.graphql,
  },
  {
    name: "RESTful APIs",
    icon: Img.restapi,
  },
  {
    name: "React Testing Library",
    icon: Img.reacttest,
  },
  {
    name: "Jest",
    icon: Img.jest,
  },
  {
    name: "Cypress",
    icon: Img.cypress,
  },
  {
    name: "GitHub",
    icon: Img.github,
  },
];

const tools = [
  {
    name: "VS Code",
    icon: Img.vscode,
  },
  {
    name: "ChatGPT",
    icon: Img.chatgpt,
  },
  {
    name: "Mongodb Compass",
    icon: Img.mongodbcompass,
  },
  {
    name: "Postman",
    icon: Img.postman,
  },
  {
    name: "AWS Lambda",
    icon: Img.lambda,
  },
  {
    name: "AWS EC2",
    icon: Img.ec2,
  },
  {
    name: "AWS S3",
    icon: Img.s3,
  },
  {
    name: "Docker",
    icon: Img.docker,
  },
  {
    name: "Kubernetes",
    icon: Img.kubernetes,
  },
  {
    name: "Jenkins",
    icon: Img.jenkins,
  },
  {
    name: "Git",
    icon: Img.git,
  },
  {
    name: "Jira",
    icon: Img.jira,
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Salesforce",
    icon: Img.salesforce,
    iconBg: "white",
    date: "May 2022 - Present",
    points: [
      "Collaborated closely with cross-functional teams to conceptualize, design, and develop web applications utilizing a fullstack approach.",
      "Crafted user-friendly and responsive front-end interfaces using a combination of React, MUI, Typescript, Next.js, and Styled Components, ensuring seamless cross-browser compatibility and optimal performance.",
      "Utilized React to create dynamic, reusable and interactive user interfaces.",
      "Implemented backend functionality using Node.js and Express.js, writing RESTful and GraphQL queries to interact with the PostgreSQL database and external services.",
      "Integrated with PostgreSQL to store and retrieve data for the web application, leveraging the capabilities of Node.js to efficiently handle database operations.",
      "Implemented RESTful APIs and GraphQL to facilitate communication between frontend and backend components, ensuring efficient data exchange and seamless integration of features.",
      "Gained extensive experience in Test-Driven Development (TDD), Continuous Integration and Continuous Deployment (CI/CD), Authentication & Authorization with JWT and OAuth, Docker, and AWS, leveraging Node.js ecosystem tools and libraries to enhance development workflows and deployment processes.",
      "Worked closely with customers to understand requirements and deliver customized solutions, utilizing Node.js capabilities to implement tailored backend functionality and ensure alignment with customer needs.",
      "Used effective communication and negotiation skills to manage expectations, collaborate with stakeholders, and build trust throughout the development process.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Ultimate Software",
    icon: Img.ukg,
    iconBg: "white",
    date: "October 2016 - May 2022",
    points: [
      "Acted as feature lead in an Agile environment using Kanban. Ran standups, performed feature planning/analysis, worked with BA and UX to define user stories. Provided estimates on story counts and timeline for features.",
      "Prototyped and Developed a Form Builder with E-signature capabilities",
      "Implemented backend functionality using Node.js, leveraging its asynchronous nature and event-driven architecture to build scalable and performant server-side applications.",
      "Maintained CI/CD pipelines using TeamCity, incorporating Node.js builds and deployments for seamless integration with frontend changes.",
      "Mentored junior developers technically and guide them to have the positive attitude on the project.",
      "Implemented the state management system by utilizing Redux Thunk and React Context for frontend components, and Node.js-based solutions for backend state management.",
      "Introduced Custom React Hook functions to improve reusability and readability, complemented by Node.js middleware for backend logic encapsulation.",
      "Implemented Sass for styling, utilizing features like variables, mixins, and nesting to improve code maintainability and reusability.",
      "Leveraged Emotion to manage component-specific styles within JavaScript for frontend components, while ensuring compatibility with Node.js-based server-side rendering.",
      "Enhanced the server-side rendering approach to optimize performance by leveraging Next.js for server-side rendered React applications with Node.js backend support.",
      "Collaborated with Backend Engineers to define and implement API designing and visioning.",
      "Supported production processes and managing cloud infrastructure in collaboration with the DevOps team on AWS platform, incorporating Node.js applications into the infrastructure stack for seamless deployment and scalability.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "AutoNation",
    icon: Img.autonation,
    iconBg: "white",
    date: "June 2015 - September 2016",
    points: [
      "Developed and shipped a self-service loan approval application with .Net & AngularJS.",
      "Designed and implemented REST API to replace Legacy SOAP services.",
      "Collaborated with UI/UX designers to deliver the pixel perfect & seamless user interface.",
      "Continuously enhanced new features and debugged & troubleshooted bugs arising while running the project by utilizing HTML, CSS, JavaScript and AngularJS under Agile/Scrum team based on 2 weeks sprints.",
      "Developed the responsive design using Flex & Grid CSS for web and mobile to build User-Friendly page(Ant-Design).",
      "Built reusable and scalable components using AngularJS that can be shared across parts of the application.",
      "Wrote Unit tests using React Testing Library and Enzyme to cover every component at over 90%.",
      "Worked on CI/CD pipelines and followed best practices on Project Tracking(Jira) & Version Control(Bitbucket - Git actions) & Automated Testing(Jenkins).",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "International Education Corporation",
    icon: Img.iec,
    iconBg: "white",
    date: "June 2014 - May 2015",
    points: [
      "Modernized UI of legacy applications using MVC5 Bootstrap CSS and HTML5.",
      "Modernized Web application security by implementing ASP.NET Identity 2.0.",
      "Created mobile friendly web applications using Mobile First Development.",
      "Created new Web API platform using the latest ASP.NET Web API 2.0.",
      "Re-branded company's SharePoint Website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Richard proved me wrong.",
    name: "Daniel Ekwevi",
    designation: "CEO",
    company: "Curbco",
    image: Img.daniel,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Richard does.",
    name: "Justin",
    designation: "Client",
    company: "U.S",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Richard optimized our booking app, our traffic increased by 50%. We can't thank them enough!",
    name: "John Butler",
    designation: "CFO",
    company: "UKG",
    image: Img.john,
  },
];

const projects = [
  {
    name: "CRM System",
    description:
      "Customer Relationship Management System is a software system that helps companies manage and analyze their interactions with customers to improve relationships and grow their business.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image:
      Img.crm,
    alt: "CRM System",
  },
  {
    name: "HR Management System",
    description:
      "An essential tool for businesses looking to enhance their HR operations. It automates tasks like payroll, attendance tracking, employee performance reviews, and recruitment.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image:
      Img.hrms,
    alt: "HR Management System",
  },
  {
    name: "Data Visualization",
    description:
      "Graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "REST Api",
        color: "pink-text-gradient",
      },
    ],
    image:
      Img.dvs,
    alt: "Data Visualization System",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
