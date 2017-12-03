
const host = 'https://baas.kinvey.com/user';
const appId = 'kid_r1TO3BDyM';
const appKey = '79b0f17f1d994d6fbf15953483892606';


async function register(username, email, password) {
    const res = await fetch(host + '/' + appId , {
        method: 'POST',
        headers: {
            Authorization: 'Basic '+ btoa(appId + ':' + appKey),
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    return await res.json();
    
}

async function login(username, password) {
    const res = await fetch(host + '/' + appId + '/login' , {
        method: 'POST',
        headers: {
            Authorization: 'Basic '+ btoa(appId + ':' + appKey),
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            username,
            password
        })
    });
    return await res.json();
}


export { register , login};