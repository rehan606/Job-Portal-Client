import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleSignin = () => {
        signInWithGoogle()
        .then(result => {
            alert("Google login Successfully")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            {/* Divider */}
            <div className="mt-6 flex items-center justify-center">
                <span className="border-t border-gray-300 flex-grow"></span>
                <span className="mx-4 text-gray-500">Or</span>
                <span className="border-t border-gray-300 flex-grow"></span>
            </div>

            {/* Social Login */}
            <div className="mt-6 text-center">
                <button onClick={handleGoogleSignin} className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    Sign In with Google
                </button>
                <button className="w-full bg-blue-700 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-800 transition">
                    Sign In with Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;