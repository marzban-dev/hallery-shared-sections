const timeDifference = (startDate: Date, endDate?: Date, humanReadable?: boolean) => {
    const currentDate = new Date();

    const timeDiff = (endDate ?? currentDate).getTime() - startDate.getTime();

    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (humanReadable) {
        return daysPassed === 0 ? "Today" : `${daysPassed} days ago`;
    } else return daysPassed;
};

export default timeDifference;
