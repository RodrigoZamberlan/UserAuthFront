export const tokenService = {
    setToken: (tokenValue: string) => { 
        localStorage.setItem("jwtToken", tokenValue) 
    },
    getToken: () => {
        localStorage.getItem("jwtToken");
    },
    removeToken: () => {
        localStorage.removeItem("jwtToken");
    }
}