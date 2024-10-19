const facultyProfilesSection = document.getElementById('faculty-profiles');
const bookingForm = document.getElementById('booking-form');
const chatWindow = document.querySelector('chat-window');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');


const facultyData = [
  { id: 1, name: 'Faculty 1', expertise: 'AI', availability: ['Monday 10-11 AM', 'Wednesday 2-3 PM'] },
  { id: 2, name: 'Faculty 2', expertise: 'DBMS', availability: ['Tuesday 10-11 AM', 'Friday 2-3 PM'] },
  { id: 3, name: 'Faculty 3', expertise: 'OS', availability: ['Wednesday 10-11 AM', 'Thursday 2-3 PM'] },
  { id: 4, name: 'Faculty 4', expertise: 'ROBOTICS', availability: ['Thursday 10-11 AM', 'Tuesday 2-3 PM'] },
  { id: 5, name: 'Faculty 5', expertise: 'DSA', availability: ['Friday 10-11 AM', 'Monday 2-3 PM'] },
];


function renderFacultyProfiles() {
  facultyData.forEach(faculty => {
    const facultyElement = document.createElement('li');
    facultyElement.innerHTML = `
      <h3>${faculty.name}</h3>
      <p>Area of Expertise: ${faculty.expertise}</p>
      <p>Available Time Slots: ${faculty.availability.join(', ')}</p>
      <button class="book-button" data-faculty-id="${faculty.id}">Book Session</button>
    `;
    facultyProfilesSection.appendChild(facultyElement);
  });
}


function handleBookingFormSubmit(event) {
  event.preventDefault();
  const selectedMentorId = document.getElementById('mentor-select').value;
  const selectedDate = document.getElementById('date-select').value;
  console.log('Booking submitted for mentor ID:', selectedMentorId, 'and date:', selectedDate);
}

function handleMessageFormSubmit(event) {
  event.preventDefault();
  const message = messageInput.value;
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    messageInput.value = '';
  }
}

renderFacultyProfiles();
bookingForm.addEventListener('submit', handleBookingFormSubmit);
messageForm.addEventListener('submit', handleMessageFormSubmit);

facultyProfilesSection.addEventListener('click', event => {
  if (event.target.classList.contains('book-button')) {
    const facultyId = event.target.dataset.facultyId;
    console.log('Booking requested for faculty ID:', facultyId);
  }
});