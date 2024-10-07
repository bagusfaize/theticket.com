
export const getTickets = async () => {
    // simulate mock loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = await fetch('/mockData.json');
    return response.json();
};  