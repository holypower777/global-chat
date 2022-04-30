const getDefaultLanguage = () => {
    let defaultLanguage;
    switch (navigator.language) {
        case 'ru':
            defaultLanguage = 'ru-RU';
            break;
        case 'ru-RU':
            defaultLanguage = 'ru-RU';
            break;
        case 'RU':
            defaultLanguage = 'ru-RU';
            break;
        default:
            defaultLanguage = 'en-US';
            break;
    }

    return defaultLanguage;
};

export default getDefaultLanguage;
