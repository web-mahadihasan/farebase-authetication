import { signOut } from "firebase/auth";
import { UserLogInInfo } from "../layouts/MainLayout";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";

const UserDetails = () => {
    const [logInUser, setLogInUser] = useContext(UserLogInInfo)
    const navigate = useNavigate()
    
    const handleSingOut = () => {
       signOut(auth).then(() => {
        alert `Successfull log out`
        navigate("/login")
       }).catch(Error => {
        alert `An error happed`
       })
    }
    return (
        <div className="text-center">
            <h1>{logInUser.displayName}</h1>
            <p>{logInUser.email}</p>
            {
                logInUser.photoURL && <img src={logInUser.photoURL} alt="user photo" className=" mx-auto"/>
            }
            <div className="mt-5">
                <button onClick={handleSingOut} className="text-xl px-6 py-2 bg-purple-500 rounded-lg text-white">Sing out</button>
            </div>
        </div>
    );
};

export default UserDetails;