document.addEventListener('DOMContentLoaded', function () {
    const qaForm = document.getElementById('qa-form');
    const qaContainer = document.getElementById('qa-container');

    if (qaForm) {
        qaForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const question = document.getElementById('question').value;

            if (question.trim()) {
                const newQuestion = document.createElement('div');
                newQuestion.classList.add('qa-item');
                newQuestion.innerHTML = `<strong>Pregunta:</strong> ${question}`;
                qaContainer.appendChild(newQuestion);

                // Limpiar el formulario
                document.getElementById('question').value = '';
            }
        });
    }
});
