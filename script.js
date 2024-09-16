let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
/*function openProject(projectName) {
    var i;
    var x = document.getElementsByClassName("project");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(projectName).style.display = "block";
  }
*/
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const tabButtons = document.querySelectorAll('.tab-list button');
    tabButtons.forEach(button => button.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    const activeButton = document.getElementById(tabId + '-button');

    if (activeTab) {
        activeTab.classList.add('active');
    }

    if (activeButton) {
        activeButton.classList.add('active');
    }
}

window.onload = function() {
    const tab = getQueryParam('tab');
    if (tab) {
        switchTab(tab);
    } else {
        switchTab('tab1');
    }
};
(function() {
  emailjs.init("kfghvGYR6O-IblvHM"); // Replace with your EmailJS user ID
})();

// Handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = this; // Store the form element

  // Send the form data using EmailJS
  emailjs.sendForm('service_3xn8wps', 'template_2h7khec', form)
    .then(function() {
      alert('Message sent successfully!');
      form.reset(); // Clear the form fields
    })
    .catch(function(error) {
      alert('Failed to send the message, please try again.');
      console.error('Error:', error);
    });
});
const article = document.querySelector('.text-animation .article');
const role = document.querySelector('.text-animation .role');

const words = [
  "Full-stack Developer",
  "Web Designer",
  "Database Developer",
  "AI Developer",
  "Software Tester"
];

function updateArticle(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  article.textContent = vowels.includes(word.trim().charAt(0).toUpperCase()) ? 'an' : 'a';
}

let index = 0;
let isFirstAnimation = true;

function setWord() {
  const currentWord = words[index];
  role.textContent = currentWord;
  updateArticle(currentWord);
  role.classList.add('animate');

  if (isFirstAnimation) {
    isFirstAnimation = false;
    setTimeout(() => {
      index = (index + 1) % words.length;
      setWord();
    }, 4000);
  } else {
    index = (index + 1) % words.length;
  }
}

// Initial setup
setWord();

// Set interval for subsequent changes
setInterval(setWord, 4000);