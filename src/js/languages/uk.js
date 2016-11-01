// Ukrainian
const messages = {
    default: 'Будь ласка, заповніть це поле.',
    required: 'Це поле обов\'зкове для заповнення.',
    prepositions: {
        and: ' і ',
        or: ' або '
    },

    // Numbers, Sizes
    less: 'Значення повинно бути менше ніж {val}.',
    less_equal: 'Значення повинно бути менше або рівне {val}.',
    bigger: 'начення повинно бути більше ніж {val}.',
    bigger_equal: 'Значення повинно бути більше або рівне {val}.',
    between: 'Значення повинно бути в проміжку {val}',
    number: 'Будь ласка, введіть коректне число.',


    // Strings
    exact: 'Повинно включати такі символи: {val}',
    extensions: 'Будь ласка, завантажте файл з таким розширенням: {val}.',
    contains: 'Повинно включати таке значення: {val}.',
    minlength: 'Повинно містити принаймі {val} символів.',
    maxlength: 'Повинно містити менше {val} символів.',
    starts: 'Повинно починатися з "{val}".',
    ends: 'Повинно закінчуватися з "{val}".',

    // Booleans
    boolean: 'Це поле повинно бути "true" або "false".',

    // Regex
    email: 'Будь ласка, введіть коректний емейл. (Наприклад: user@gmail.com)',
    url: 'Будь ласка, введіть коректний URL з http:// or https://',
    https: 'Ваш URL повинен починатися з https://',
    credit_card: 'Будь ласка, введіть коректний номер кредитної карти.',
    ip_v4: 'Будь ласка, введіть IPV4 адресу. (ex: 172.16.254.1)',
    ip_v6: 'Будь ласка, введіть IPV6 адресу. (ex: 3ffe:1900:4545:3:200:f8ff:fe21:67cf)',
    alpha: 'Лише букви дозволені.',
    alpha_numeric: 'Спеціальні символи не дозволені, вводьте лише букви і цифри.',
};

module.exports = messages;