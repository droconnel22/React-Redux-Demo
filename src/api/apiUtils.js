export async function handleResponse(response) {     
    if(response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }    
    return response.json();
};

export function handleError(error) {
    console.log("API call failed." + error);
    throw error;
};