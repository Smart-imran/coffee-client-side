import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

// Create AuthContext
export const AuthContext = createContext();

// Initialize Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User Function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user); // Set user state
                setLoading(false); // Stop loading
                return userCredential.user; // Return user for further processing
            })
            .catch((error) => {
                setLoading(false); // Stop loading on error
                throw error; // Rethrow error for handling in SignUp
            });
    };

    const userInfo = {
        user,
        loading,
        createUser
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
