document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const modal = document.getElementById('noteModal');
    const closeModal = document.getElementById('closeModal');
    const saveNoteBtn = document.getElementById('saveNote');
    const noteTitle = document.getElementById('noteTitle');
    const noteDescription = document.getElementById('noteDescription');
    
    let currentDay = null;
    let notes = JSON.parse(localStorage.getItem('notes')) || {};

    // Render the calendar
    function renderCalendar() {
        const daysInMonth = new Date(2024, 10, 0).getDate(); // October 2024
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = day;
            dayDiv.dataset.day = day;

            if (notes[day]) {
                const badge = document.createElement('div');
                badge.classList.add('note-badge');
                badge.textContent = '!';
                dayDiv.appendChild(badge);
            }

            dayDiv.addEventListener('click', () => openModal(day));
            calendar.appendChild(dayDiv);
        }
    }

    function openModal(day) {
        currentDay = day;
        noteTitle.value = notes[day]?.title || '';
        noteDescription.value = notes[day]?.description || '';
        modal.style.display = 'block';
    }

    function closeModalHandler() {
        modal.style.display = 'none';
    }

    function saveNote() {
        if (noteTitle.value && noteDescription.value) {
            notes[currentDay] = {
                title: noteTitle.value,
                description: noteDescription.value
            };
            localStorage.setItem('notes', JSON.stringify(notes));
            window.location.reload(); // Refresh the calendar to show the note badge
        }
        modal.style.display = 'none';
    }

    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', (event) => {
        if (event.target == modal) closeModalHandler();
    });
    saveNoteBtn.addEventListener('click', saveNote);

    renderCalendar();
});