import react from "react"
import {useLocalStorage} from "react-use"

const SignIn = ()  =>{
    const [registeredUsers]=useLocalStorage("users",[])
    console.log(registeredUsers)
    return(
        <p>Karlo Login</p>
    )
}

export default SignIn