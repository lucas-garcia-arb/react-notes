export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/${endpoint}`
        );
        const responseJSON = await response.json();
        return {
            data: responseJSON,
            isLoading: false
        }
    } catch (error) {
        console.error(error);
    }
};