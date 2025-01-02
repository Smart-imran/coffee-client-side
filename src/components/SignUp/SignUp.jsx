import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const formSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log("User created successfully:", result.user);
                alert("User registered successfully!");
                form.reset();
            })
            .catch(error => {
                console.error("Error creating user:", error.message);
                alert(`Error: ${error.message}`);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={formSubmit} className="card-body">
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
