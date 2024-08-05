document.getElementById('causeEffectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputA = document.getElementById('inputA').checked;
    const inputB = document.getElementById('inputB').checked;
    const inputC = document.getElementById('inputC').checked;

    let result = '';

    // Cause-Effect Logic
    if (inputA && inputB && !inputC) {
        result = 'Effect 1: A and B are checked, but not C.';
    } else if (inputA && !inputB && inputC) {
        result = 'Effect 2: A and C are checked, but not B.';
    } else if (!inputA && inputB && inputC) {
        result = 'Effect 3: B and C are checked, but not A.';
    } else if (inputA && inputB && inputC) {
        result = 'Effect 4: All inputs are checked.';
    } else if (!inputA && !inputB && !inputC) {
        result = 'Effect 5: No inputs are checked.';
    } else {
        result = 'Effect 6: Any other combination of inputs.';
    }

    document.getElementById('resultContainer').innerText = result;
});
