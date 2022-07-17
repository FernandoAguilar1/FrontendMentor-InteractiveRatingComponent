let selectedRate = 0;

setRate = (value) => selectedRate = value;

submit = () => {
    document.getElementById('spnRate').innerHTML = selectedRate;

    document.getElementById('rateSection').style.display = 'none';
    document.getElementById('thankSection').style.display = 'block';
}