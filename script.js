const checkboxes = document.querySelectorAll('.product-checkbox');
const totalDisplay = document.getElementById('total');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    let total = 0;
    checkboxes.forEach(item => {
      if (item.checked) {
        total += parseFloat(item.dataset.price);
      }
    });
    totalDisplay.textContent = total;
  });
});
