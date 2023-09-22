export default function formattedDate(givenDate: Date) {
    // Convert the given date string to a Date object
    const date = new Date(givenDate);

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate.getTime() - date.getTime();

    // Convert milliseconds to seconds, minutes, hours, and days
    const seconds = Math.abs(Math.floor(timeDifference / 1000));
    const minutes = Math.abs(Math.floor(seconds / 60));
    const hours = Math.abs(Math.floor(minutes / 60));
    const days = Math.abs(Math.floor(hours / 24));


    // Determine the appropriate time ago format
    let timeAgo;
    if (days >= 1) {
        timeAgo = `${days}d ago`;
    } else if (hours >= 1) {
        timeAgo = `${hours}h ago`;
    } else if (minutes >= 1) {
        timeAgo = `${minutes}m ago`;
    } else {
        timeAgo = `${seconds}s ago`;
    }

    return timeAgo;
}

