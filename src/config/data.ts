export const db = [
  {
    id: 1,
    name: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
    instructor: "Jonas Schmedtmann",
    description:
      "Modern JavaScript from the beginining - all the way up to JavaScript expert. The Must have JavaScript course",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701473848/js_axmirm.jpg",
    duration: "3 weeks",
    schedule: "Mondays and Fridays, 9:00 AM - 2:00 PM",
    location: "Online",
    prerequisites: [
      "NO prior JavaScript knowledge is required",
      "Basic web development knowledge is recommended",
      "Basic understanding of HTML and CSS helps but is NOT required",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction To Javascript",
        content: [
          "Welcome to the course, amazing to have you on board of this JavaScript course!",
          "Let me walk you through the content of this complete JavaScript course and explain what you're going to learn!",
        ],
      },
      {
        week: 2,
        topic: "How JavaScript Is Executed",
        content: [
          "Let's have a look at how JavaScript is executed",
          "what the browser's role is and how all these pieces fit together!",
        ],
      },
      {
        week: 3,
        topic: "Javascript Executes In A Hosted Environmnet",
        content: [
          "JavaScript is a versatile language. That's awesome - but what does it mean?",
          "Let's explore the concept of host environments and see how JavaScript fits into that picture!",
        ],
      },
    ],
    students: [],
  },
  {
    id: 2, // Unique identifier for the course
    name: "Python for Absolute Beginners",
    instructor: "Green Charles", // Name of the course instructor
    description:
      "Learn Python programming from scratch with hands-on exercises in this Python course!",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701473849/py_hhygoa.jpg", //Link to the course thumbnail
    duration: "1 week", // Duration of the course
    schedule: "Mondays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "A computer",
      "Access to the internet",
      "High level of proficiency in English because of the technical language used in some of the lecture videos",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction",
        content: ["Brief of Python. Installation of Python"],
      },
      {
        week: 2,
        topic: "Python Basis",
        content: [
          "Let's have a look at how Python is executed, also how strings and functions works",
        ],
      },
    ],
    students: [],
  },
  {
    id: 3,
    name: "The Complete Java Certification Course",
    instructor: "Nick Pope", // Name of the course instructor
    description:
      "Become a confident industry ready core Java developer and get certified as a Java professional!",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701475739/java_rxfil9.jpg", //Link to the course thumbnail
    duration: "4 week", // Duration of the course
    schedule: "Mondays and Wednesday, 1:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "Access to the internet",
      "The desire to learn the most popular programming language in the world - Java",
      "A computer with Windows or Mac operating system (I provide instructions on how to setup the dev environment for each)",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction",
        content: ["Brief of Java", "Installation of Java"],
      },
      {
        week: 2,
        topic: "Java Basis",
        content: [
          "Lecture 4: More on Data Types",
          "Working with Arrays",
          "Control Flow using if-else and switch statements",
        ],
      },
      {
        week: 3,
        topic: "Understanding Object Orientation",
        content: [
          "Class and Object",
          "Program Flow",
          "Program Structure and Application Runtime",
          "Java Stack + Heap with Reference Variables",
        ],
      },
      {
        week: 4,
        topic: "Understanding Method",
        content: [
          "Methods in Java",
          "Method Visibility",
          "Static vs. Instance",
        ],
      },
    ],
    students: [],
  },
  {
    id: 4,
    name: "Complete C# Masterclass",
    instructor: "Denis Panjuta",
    description:
      "Learn C# Programming - WPF, Databases, Linq, Collections, Game Development with Unity. Unit Testing TDD",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701476560/C_jdemuw.jpg",
    duration: "1 week",
    schedule: "Mondays and Wednesday, 1:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "Access to the internet",
      "The desire to learn the most popular programming language in the world - Java",
      "A computer with Windows or Mac operating system (I provide instructions on how to setup the dev environment for each)",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Your First C# Program and Overview of Visual Studio",
        content: ["Introduction of C#. Installation of C#"],
      },
    ],
    students: [],
  },
  {
    id: 5,
    name: "React 18 Tutorial and Projects Course",
    instructor: "John Smilga",
    description:
      "Hands-on React: Create 25+ Projects. Includes Axios, Router 6, Query 4, Redux Toolkit",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701476903/reactlol_lbovdd.jpg",
    duration: "5 weeks",
    schedule: "Tuesdays and Saturdays, 2:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Strong Knowledge of HTML, CSS, JS is Required. ES6 is optional.",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction",
        content: ["Dive into React. Set up Development Environment"],
      },
      {
        week: 2,
        topic: "React Fundamentals",
        content: [
          "JSX Rules, Nest Components",
          "React Developer Tools",
          "Props, States",
        ],
      },
      {
        week: 3,
        topic: "React Hooks",
        content: ["UseState, UseEffect, and others"],
      },
      {
        week: 4,
        topic: "Axios HTTP Library",
        content: ["Get Request", "Setup Headers"],
      },
      {
        week: 5,
        topic: "React Query",
        content: ["React Query Info", "Thunder Client", "HTTP Methods"],
      },
    ],
    students: [],
  },
  {
    id: 6,
    name: "Understanding Typescript",
    instructor: "Maximilian Schwarzmuller",
    description:
      "Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701477678/ts_snljgz.jpg",
    duration: "2 weeks",
    schedule: "Mondays and Tuesdays, 1:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: [
      "JavaScript knowledge is required, though you don't need to be an Expert",
      "NO prior TypeScript experience is required",
      "ES6 Knowledge is a plus but not required",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started",
        content: [
          "Welcome to the Course!",
          "What is the TypeScript & Why should you use it",
          "TypeScript Basis & Basis Types",
        ],
      },
      {
        week: 2,
        topic: "TypeScript Complier and (it's configuration)",
        content: [
          "Using Watch Mode",
          "Compiling the Entire Project / Multiple Files",
          "Including & Excluding Files",
          "Setting a Compilation Target",
          "Understanding TypeScript Core Libs",
          "More Configuration & Compilation Options",
          "Working with Source Maps",
          "rootDir and outDir",
          "Stop Emitting Files on Compilation Errors",
          "Strict Compilation",
        ],
      },
    ],
    students: [],
  },
  {
    id: 7,
    name: "Rust Crash Course",
    instructor: "Nathan Stocks",
    description: "Rust Programming Fundamentals",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701479550/rust_d2pequ.jpg",
    duration: "2 weeks",
    schedule: "Mondays and Tuesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "A basic understanding of general programming concepts",
      "Familiarity with other programming languages such as Python, C, etc. is helpful, but not required.",
      "Rust installed and ready to use - you'll learn more by doing the exercises!",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started",
        content: ["Primitive Types", "Control Flow"],
      },
      {
        week: 2,
        topic: "Primitive Types & Control Flow",
        content: [
          "Scalar Types",
          "Compound Types",
          "Simple Types",
          "Control Flow",
        ],
      },
    ],
    students: [],
  },
  {
    id: 8,
    name: "Vue - The Complete Guide (incl. Router & Composition API)",
    instructor: "Maximillian Schwarzmuller",
    description:
      "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701480926/vue_vjmrsj.jpg",
    duration: "3 weeks",
    schedule: "Fridays and Tuesdays, 1:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: [
      " Basic JavaScript Knowledge is Required",
      "ES6 Knowledge is a Plus but not a Must",
      "Basic HTML and CSS Knowledge is assumed throughout the Course",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Basis & Core Concepts - DOM Interaction with Vue",
        content: [
          "Creating and Connecting Vue App Instances",
          "Interpolation and Data Binding",
          "Binding Attributes with the v-bind Directive",
          "Understanding methods in Vue Apps",
          "Working with Data inside of a Vue App",
          "Outputting Raw HTML Content with v-html",
        ],
      },
      {
        week: 2,
        topic: "Rendering Conditional Content & List",
        content: [
          "Understanding the Problem",
          "Rendering Content Conditionally",
          "v-if, v-else and v-else-if",
          "Using v-show Instead Of v-if",
          "Rendering Lists of Data",
          "Diving Deeper Into v-for",
          "Removing List Items",
        ],
      },
      {
        week: 3,
        topic: "vue: Behind the Scenes",
        content:
          "An Introduction to Vue's Reactivity, Vue Reactivity: A Deep Dive, One App vs Multiple Apps, Understanding Templates, Working with Refs, How Vue Updates the DOM, Vue App Lifecycle - Theory",
      },
    ],
    students: [],
  },
  {
    id: 9,
    name: "Complete Kotlin development masterclass",
    instructor: "Catalin Stefan",
    description:
      "Master the fundamentals and advanced features of Kotlin development",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701480927/kotlin_e7izaf.jpg",
    duration: "1 week",
    schedule: "Fridays and Tuesdays, 1:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Mac or PC", "Interest in software development"],
    syllabus: [
      {
        week: 1,
        topic: "Variable and Strings",
        content: [
          "Strings, Chars",
          "Nullability",
          "User Input, Type Conversion",
        ],
      },
    ],
    students: [],
  },
  {
    id: 10,
    name: "The HTML & CSS Bootcamp",
    instructor: "Colt Steele",
    description:
      "Brand New Course! Covers Flexbox, CSS Grid, Animations, Responsive Design and More! Tons of Exercises & Projects.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701481717/html_wxeukt.jpg",
    duration: "4 weeks",
    schedule: "Fridays and Tuesdays, 1:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: [
      "No previous coding experience needed",
      "Any computer will work: Mac, Windows, or Linux",
      "All you need is a web browser and code editor (we download a free editor together",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction",
        content:
          "A First Taste of HTML & CSS, How The Web Works, The Roles of HTML, CSS, and JS, Quick Quiz On The Roles of HTML & CSS",
      },
      {
        week: 2,
        topic: "HTML Basics",
        content: [
          "Introducing HTML",
          "The Basic HTML Workflow, The Paragraph Element",
          "Mozilla Developer Network, Chrome Developer Tools",
          "Document Structure, Creating HTML Comments",
        ],
      },
      {
        week: 3,
        topic: "Working With Forms",
        content: [
          "Creating Text Inputs and Buttons",
          "The Form Element",
          "Name and Placeholder Attributes",
          "Properly Labelling Form Controls",
          "Other Types of Inputs",
          "Checkboxes, Textareas, and Range Inputs",
        ],
      },
      {
        week: 4,
        topic: "CSS Basics",
        content: [
          "Getting Our Starter Code",
          "Working Within Inline Styles",
          "Writing Internal Styles",
          "External Styles: The Best Way To Write Styles",
          "Quick Note on Codepen Anatomy of CSS",
        ],
      },
    ],
    students: [],
  },
];
