export const setReloadStatus = (status: boolean) => {
    localStorage.setItem('reload', status.toString());
}

export const getReloadStatus = () => {
    return localStorage.getItem('reload');
}