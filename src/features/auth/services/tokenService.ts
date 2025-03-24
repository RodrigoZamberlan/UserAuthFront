export const tokenService = {
    setToken: (tokenValue: string): void => { 
        localStorage.setItem("jwtToken", tokenValue) 
    },
    getToken: (): string | null => {
        return localStorage.getItem("jwtToken");
    },
    removeToken: (): void => {
        localStorage.removeItem("jwtToken");
    }
}