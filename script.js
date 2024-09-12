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