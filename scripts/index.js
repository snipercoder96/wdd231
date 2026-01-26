const hamButton = document.getElementById("ham-btn");
const navBar = document.getElementById("nav-bar");
const courseButtons = document.querySelectorAll("#all, #cse, #wdd");
const courseList = document.getElementById("course-list");
const year = document.getElementById("year");
const lastModified = document.getElementById("LastModified");
const totalCredits = document.getElementById("total-credits");
const modal = document.getElementById("courseModal");
const closeBtn = document.getElementById("closeModal");

const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.', technology: ['C#'], completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

function toggleNav() {
    navBar.classList.toggle("show");
    hamButton.textContent = navBar.classList.contains("show") ? "\u00D7" : "\u2630";
}

function setDate() {
    year.textContent = new Date().getFullYear();
    lastModified.textContent = new Date().toLocaleDateString();
}

function renderCourses(filteredCourses, className) {
  courseList.textContent = "";
  const credits = filteredCourses.reduce((acc, c) => acc + c.credits, 0);
  totalCredits.textContent = credits;

  filteredCourses.forEach(course => {
    const displayCourse = `${course.subject} ${course.number}`;
    const button = document.createElement("button");
    button.classList.add(className);
    button.textContent = displayCourse;
    button.classList.add(course.completed ? "completed" : "incomplete");

    button.addEventListener("click", () => {
      document.getElementById("modalTitle").textContent = course.title;
      document.getElementById("modalDescription").textContent = course.description;
      document.getElementById("modalCredits").textContent = course.credits;
      document.getElementById("modalCertificate").textContent = course.certificate;
      document.getElementById("modalTech").textContent = course.technology.join(", ");
      modal.showModal();
    });

    courseList.appendChild(button);
  });
}

function showAllCourses() {
    renderCourses(courses, "all-courses");
}

function showCseCourses() {
    const cseCourse = courses.filter(course => course.subject.startsWith("C"));
    renderCourses(cseCourse, "cse-courses");
}

function showWddCourses() {
    const wddCourse = courses.filter(course => course.subject.startsWith("W"));
    renderCourses(wddCourse, "wdd-courses");
}

hamButton.addEventListener("click", toggleNav);
setDate();
courseButtons[0].addEventListener("click", showAllCourses);
courseButtons[1].addEventListener("click", showCseCourses);
courseButtons[2].addEventListener("click", showWddCourses);

closeBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    modal.close();
  }
});


showAllCourses();
