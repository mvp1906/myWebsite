// Name: Vijay Prakash Mudaliar
// Student Id: 8962818

"use strict";

$(document).ready(function(){ 
  $(".image-box").hover(function() {
      var imgWidth = $(this).find("img").width();
      var imgHeight = $(this).find("img").height();

      //overlay to match the image
      $(this).find(".text-overlay").css({
          width: imgWidth + "px",
          height: imgHeight + "px"
      }).stop().fadeIn();

      //to fade out the image
      $(this).find("img").stop().fadeOut();
  }, function() {
      //to fade out the text overlay
      $(this).find(".text-overlay").stop().fadeOut();

      //to fade in the image
      $(this).find("img").stop().fadeIn();
  });
});


let carousel = document.getElementById('img-items');
const slides = document.querySelectorAll('.slider');
const totalSlides = slides.length;
let currentIndex = 0;
let timer;

//to move next image carousel
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

//to move previous image carousel
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

//to update carousel position
function updateCarousel() {
  var offset = -currentIndex * 100;
  carousel.style.transform = 'translateX(' + offset + '%)';
}

//to set timer to 2 sec
function startAutoSlide() {
  timer = setInterval(nextSlide, 2000);
}

//to stop automatic slide change
function stopAutoSlide() {
  clearInterval(timer);
}

//creating event listener
document.getElementById('left-arrow').addEventListener('click', function(event) {
  prevSlide();
  stopAutoSlide();
});
document.getElementById('right-arrow').addEventListener('click', function(event) {
  nextSlide();
  stopAutoSlide();
});


function changeContent(course) {
  const contentBox = document.getElementById("content-box");
  
  // to Define content for each course
  var courseContent = {
      "Programming": `<div class="flex-container">
      <div class="flex-item">
      <h4>Below are the courses related to Programming:</h4>
          <ul>
              <li>HTML and CSS Fundamentals</li>
              <li>JavaScript Programming</li>
              <li>Responsive Web Design</li>
              <li>Frontend Development Frameworks</li>
              <li>Backend Development with Node.js</li>
              <li>Full-Stack Web Development</li>
              <li>Web Development with React.js</li>
              <li>Web Development with Angular</li>
              <li>Web Development with Vue.js</li>
              <li>Responsive Web Design with CSS Grid and Flexbox</li>
              <li>Web Accessibility and Inclusive Design</li>
              <li>Web Performance Optimization</li>
              <li>Web Security Fundamentals</li>
              <li>Web Development Tools and Workflow</li>
              <li>Progressive Web Apps (PWAs)</li>
          </ul>
      </div>
  </div>`,
  
      "Data Science": `<div class="flex-container">
      <div class="flex-item">
      <h4>Below are the courses related to Data Science:</h4>
      <ul>
      <li>Introduction to Data Science</li>
      <li>Python for Data Science</li>
      <li>R Programming for Data Science</li>
      <li>Data Analysis with Pandas</li>
      <li>Data Visualization with Matplotlib and Seaborn</li>
      <li>Machine Learning Fundamentals</li>
      <li>Deep Learning with TensorFlow and Keras</li>
      <li>Natural Language Processing (NLP)</li>
      <li>Big Data Analytics with Apache Spark</li>
      <li>Data Mining and Exploration</li>
      <li>Statistical Analysis with R</li>
      <li>Time Series Analysis and Forecasting</li>
      <li>Dimensionality Reduction and Feature Engineering</li>
      <li>Data Science Capstone Project</li>
      <li>Ethics and Privacy in Data Science</li>
          </ul>
      </div>
  </div>`,
      "Cloud Computing": `<div class="flex-container">
      <div class="flex-item">
      <h4>Below are the courses related to Cloud Computing:</h4>
      <ul>
      <li>Introduction to Cloud Computing</li>
      <li>Cloud Computing Fundamentals</li>
      <li>Amazon Web Services (AWS) Certification Prep</li>
      <li>Microsoft Azure Fundamentals</li>
      <li>Google Cloud Platform (GCP) Essentials</li>
      <li>Cloud Security Fundamentals</li>
      <li>Cloud DevOps Practices</li>
      <li>Serverless Computing with AWS Lambda</li>
      <li>Cloud Networking and Connectivity</li>
      <li>Containerization with Docker and Kubernetes</li>
      <li>Cloud Data Storage and Management</li>
      <li>Cloud Cost Management and Optimization</li>
      <li>Hybrid Cloud Integration</li>
      <li>Cloud Migration Planning and Execution</li>
      <li>Cloud Governance and Compliance</li>
  </ul>
      </div>
  </div>`

  };
  
  if (courseContent.hasOwnProperty(course)) {
    contentBox.innerHTML = courseContent[course];
    //to remove highlight
    document.querySelectorAll('.course-selector ul li a').forEach(link => {
        link.style.fontWeight = 'normal';
    });
    //to highlight the course
    document.querySelector(`.course-selector ul li a[href="#"][onclick="changeContent('${course}')"]`).style.fontWeight = 'bold';
} else {
    contentBox.innerHTML = "<p>No content available for this course.</p>";
}
event.preventDefault();
}
// to call the automatic slide
startAutoSlide();