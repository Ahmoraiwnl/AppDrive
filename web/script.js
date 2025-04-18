let currentLang = 'en';
let langData = {};

function changeLang(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            langData = data;
            currentLang = lang;
            updateTexts();
        });
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) el.textContent = langData[key];
    });
}

function authorize() {
    const code = document.getElementById('codeInput').value;
    alert(`Trying to log in with code: ${code}`);
}

changeLang(currentLang);
