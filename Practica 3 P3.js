const form = document.getElementById('quizForm');
const submitBtn = document.getElementById('submitBtn');
const scoreBox = document.getElementById('score');
const chartCanvas = document.getElementById('resultChart');
const downloadBtn = document.getElementById('downloadPDF');
const pdfContainer = document.getElementById('pdfContainer');
const pdfFrame = document.getElementById('pdfFrame');

let chartInstance;

submitBtn.addEventListener('click', () => {
  const formData = new FormData(form);
  const scores = [];
  let total = 0;

  for (let [_, value] of formData.entries()) {
    const pts = parseInt(value) || 0;
    scores.push(pts);
    total += pts;
  }

  scoreBox.textContent = `Tu puntaje: ${total} / ${scores.length}`;

  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(chartCanvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: scores.map((_, i) => `P${i+1}`),
      datasets: [{ label: 'Puntos por pregunta', data: scores }]
    },
    options: { scales: { y: { beginAtZero: true, max: 1 } } }
  });
});

downloadBtn.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('Reporte de Diagnóstico - IA', 10, 20);

  doc.setFontSize(14);
  doc.text(scoreBox.textContent, 10, 30);

  const imgData = chartCanvas.toDataURL('image/png');
  doc.addImage(imgData, 'PNG', 10, 40, 180, 80);

  const pdfBlob = doc.output('blob');
  const url = URL.createObjectURL(pdfBlob);
  pdfFrame.src = url;
  pdfContainer.style.display = 'block'; 
});