export const verifyResponse = async (response: Response, failDefaultMessage: string): Promise<void> => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error  || failDefaultMessage);
    }
    return;
}