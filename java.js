function selectOption(option) {
    // Clear previous selections
    document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));

    // Highlight selected option
    const selectedOption = document.querySelector(`.option:nth-child(${option === 'A' ? 1 : option === 'B' ? 2 : option === 'C' ? 3 : 4})`);
    selectedOption.classList.add('selected');
}