
export const loginData = (userName:string) =>
{
    return{
    type: 'LOGIN',
    payload: {userName: userName}
    }
}

export const logoutData = () =>
{
    return{
    type: 'LOGOUT',
    payload: {username: ''}
    }
}