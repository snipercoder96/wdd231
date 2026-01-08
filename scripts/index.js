const hamButton = document.getElementById("ham-btn");
const navBar = document.getElementById("nav-bar");

// Course listing
const courseButtons = document.querySelectorAll("#all, #cse, #wdd");
const courseList = document.getElementById("course-list");

hamButton.addEventListener("click", () => {
    navBar.classList.toggle("show");

    if (navBar.classList.contains("show")) {
        hamButton.textContent = "\u00D7";
    } else {
        hamButton.textContent = "\u2630";
    }
});

/******** Date **********/
const year = document.getElementById("year");
const lastModified = document.getElementById("LastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = new Date().toLocaleDateString();


/****** Courses *******/

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const totalCredits = document.getElementById("total-credits");

/* All courses button */
courseButtons[0].addEventListener("click", () => {

    if (courseList.innerHTML === "") {
        courses.forEach(course => {
            const displayCourse = `${course.subject} ${course.number}`;

            const div = document.createElement("div");
            div.classList.add("all-courses");
            div.textContent = displayCourse;

            const credits = courses.reduce((accumulator, course) => { return accumulator + course.credits; }, 0);
            totalCredits.textContent = credits;

            if (course.completed === true) {
                div.classList.add("completed");
            } else {
                div.classList.add("incomplete");
            }
            courseList.appendChild(div);
        });
    } else {
        courseList.textContent = "";
    }
});

courseButtons[1].addEventListener("click", () => {
    if (courseList.innerHTML === "") {
        const cseCourse = courses.filter(course => course.subject.startsWith("C"));

        cseCourse.forEach(course => {
            const displayCourse = `${course.subject} ${course.number}`;

            const div = document.createElement("div");
            div.classList.add("cse-courses")
            div.textContent = displayCourse;

            const credits = cseCourse.reduce((accumulator, course) => { return accumulator + course.credits; }, 0);
            totalCredits.textContent = credits;

            if (course.completed === true) {
                div.classList.add("completed");
            } else {
                div.classList.add("incomplete");
            }
            courseList.appendChild(div);

        });
    } else {
        courseList.textContent = "";
    }
});


courseButtons[2].addEventListener("click", () => {
    if (courseList.innerHTML === "") {
        const wddCourse = courses.filter(course => course.subject.startsWith("W"));

        wddCourse.forEach(course => {
            const displayCourse = `${course.subject} ${course.number}`;

            const div = document.createElement("div");
            div.classList.add("wdd-courses");
            div.textContent = displayCourse;

            const credits = wddCourse.reduce((accumulator, course) => { return accumulator + course.credits; }, 0);
            totalCredits.textContent = credits;

            if (course.completed === true) {
                div.classList.add("completed");
            } else {
                div.classList.add("incomplete");
            }
            courseList.appendChild(div);
        });
    } else {
        courseList.textContent = "";
    }
});


