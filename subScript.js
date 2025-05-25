function changeDescription(serviceType) {
    const title = document.getElementById('description-title');
    const text = document.getElementById('description-text');

    document.querySelectorAll('.image-box').forEach(box => box.classList.remove('active'));

    document.querySelector(`.image-box[data-service="${serviceType}"]`).classList.add('active');


    // Update title and description based on clicked image
    if (serviceType === 'premium') {
        title.innerText = 'Премиум качествени панели';
        text.innerText = 'Ние използваме само най-качествените слънчеви панели, проектирани за оптимална ефективност и дълготрайна работа. Всички наши продукти са подкрепени от 25-годишна гаранция, което гарантира надеждност и спокойствие за нашите клиенти.';
    } else if (serviceType === 'install') {
        title.innerText = 'Експертни инсталации';
        text.innerText = 'Нашият сертифициран екип от специалисти осигурява прецизен и безопасен монтаж на всяка соларна система. Ние използваме най-съвременни технологии и спазваме най-високите индустриални стандарти, за да гарантираме дълготрайна и безпроблемна работа на инсталациите. От първоначалната оценка до окончателното включване в мрежата — ние се грижим за всеки етап от процеса, за да получите максимална стойност и ефективност.';
    } else if (serviceType === 'monitor') {
        title.innerText = 'Интелигентно наблюдение';
        text.innerText = 'Проследявайте производството на енергия в реално време с нашата интелигентна система, която предоставя детайлни анализи, персонализирани отчети и прогнози. Лесно наблюдавайте ефективността на вашата соларна инсталация и оптимизирайте използването на енергия за по-ниски разходи и по- висока ефективност.';
    }
}

