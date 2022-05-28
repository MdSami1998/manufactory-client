import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const userName = user?.user?.displayName;
        // console.log(userName)
        const currentUser = { email: email, name: userName };
        // console.log(currentUser)
        if (email) {
            fetch(`https://whispering-escarpment-42526.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });

        }
    }, [user])
    return [token];
}

export default useToken;