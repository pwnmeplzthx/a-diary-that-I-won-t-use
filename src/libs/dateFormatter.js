export function dateFormatter(date) {
    if (date === '') return '';
    const dateItem = new Date(date);
    const dateTimeOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('ru-RU', dateTimeOptions).format(dateItem);
}
