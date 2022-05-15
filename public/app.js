const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(json => { return json.json() }).then(res => {
            document.querySelector('.id').innerHTML = `advice #${res.slip.id}`;
            document.querySelector('.advice').innerHTML = `"${res.slip.advice}"`;
        }).catch(e => console.log(e));
});
window.onload = () => btn.click();