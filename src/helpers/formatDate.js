export const formatDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        dat: 'numeric'
}


    return date.toLocaleDateString('en-US', options)
}