export function dateFormatter(date) {
    const dateTimeOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    };
    return new Intl.DateTimeFormat('ru-RU', dateTimeOptions).format(date);
}
