function getDayforWeek(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1); // 0 表示 1 月
    const dayOfYear = Math.ceil((date - startOfYear) / (1000 * 60 * 60 * 24));
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${dayOfYear}(${dayOfWeek})`
}

console.log(getDayforWeek('2018-10-01'));