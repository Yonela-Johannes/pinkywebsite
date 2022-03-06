export const userAccesToken = () => {
    const accessToken = localStorage.getItem('accesToken') !== "undefined" ? JSON.parse(localStorage.getItem('accesToken')) : localStorage.clear()
    return accessToken;
}
export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    return userInfo;
}