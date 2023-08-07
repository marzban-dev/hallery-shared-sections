const timeDifference = (startDate: Date, endDate?: Date) => {
    const currentDate = new Date();

    const timeDiff = (endDate ?? currentDate).getTime() - startDate.getTime();

    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysPassed;
};

export default timeDifference;
