
// СЦЕНАРІЇ ДЕМОНСТРАЦІЇ ECOVOLT

const scenarios = {

    1: {
        icon: "📈",

        title: "Незвичне споживання електроенергії",

        description:
            "Eco Volt помітив зміну характеру споживання електроенергії порівняно зі звичайними показниками.",

        action:
            "Проаналізувати зміни та повідомити користувача про незвичне споживання.",

        badge: "Потребує уваги"
    },

    2: {
        icon: "⚡",

        title: "Підвищене навантаження",

        description:
            "Система зафіксувала підвищене навантаження на одну з груп електромережі.",

        action:
            "Надіслати користувачеві попередження про підвищене навантаження. Електричний захист має працювати незалежно від інтернету та ШІ.",

        badge: "Увага до навантаження"
    },

    3: {
        icon: "🛡️",

        title: "Незвична робота приладу",

        description:
            "Eco Volt помітив незвичні зміни в роботі підключеного пристрою. Це може бути пов'язано зі зміною його енергоспоживання.",

        action:
            "Надіслати користувачеві попередження: «Прилад працює незвично. Перевірте його стан та переконайтеся, що він працює належним чином».",

        badge: "Нове попередження"
    },

    4: {
        icon: "📅",

        title: "Планування роботи обладнання",

        description:
            "Користувач може налаштувати розклад роботи сумісних груп електроприладів.",

        action:
            "Надати можливість налаштовувати розклад та переглядати заплановану роботу обладнання.",

        badge: "Функція планування"
    }

};


// ЕЛЕМЕНТИ ІНТЕРАКТИВНОЇ ПАНЕЛІ

const buttons = document.querySelectorAll(".scenario-button");

const resultIcon = document.getElementById("resultIcon");

const resultTitle = document.getElementById("resultTitle");

const resultDescription = document.getElementById("resultDescription");

const resultAction = document.getElementById("resultAction");

const resultBadge = document.getElementById("resultBadge");


// ФУНКЦІЯ ПЕРЕМИКАННЯ СЦЕНАРІЇВ

function showScenario(number) {

    const scenario = scenarios[number];

    if (!scenario) return;

    // Змінюємо інформацію
    resultIcon.textContent = scenario.icon;

    resultTitle.textContent = scenario.title;

    resultDescription.textContent = scenario.description;

    resultAction.textContent = scenario.action;

    resultBadge.textContent = scenario.badge;


    // Підсвічуємо активну кнопку
    buttons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.scenario === String(number)
        );

    });

}


// ОБРОБКА НАТИСКАННЯ КНОПОК

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedScenario = button.dataset.scenario;

        showScenario(selectedScenario);

    });

});


// ПОЧАТКОВИЙ СЦЕНАРІЙ

showScenario(1);


// ПОВІДОМЛЕННЯ В КОНСОЛІ

console.log("Eco Volt успішно запущено!");
