const getDateRangeObject = (start, end) => {
    let result = []
    const startDate = new Date(start);
    const endDate = new Date(end);
    while (startDate <= endDate) {
        result = [...result, { date: new Date(startDate), count: 0}]
        startDate.setDate(startDate.getDate() + 1);
    }
    return result;

}

export {getDateRangeObject}