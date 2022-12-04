export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    //Get JWT token
    
    fetch('https://genius-car-server-gold.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        localStorage.setItem('geniusToken', data.token);
    })
}