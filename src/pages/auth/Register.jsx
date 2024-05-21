import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {


	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/user/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, name, email, password }),
			});

			if (!response.ok) {
				throw new Error("Registration failed");
			}

			// Registration successful
			setUsername("");
			setName("");
			setEmail("");
			setPassword("");
			setError("");

			// Redirect to login page
			history.push("/login");

		} catch (error) {
			setError("Registration failed. Please check your details and try again.");
			console.error("Registration error:", error);
		}
	};

	return (
		<div
			className="min-h-screen h-screen w-full flex items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
			style={{
				backgroundImage:
					"url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
			}}
		>
			<div className="w-full max-w-md rounded-xl bg-gray-800 bg-opacity-50 px-8 py-10 shadow-lg backdrop-blur-md">
				<div className="text-white">
					<div className="mb-8 flex flex-col items-center">
						<h1 className="mb-2 text-2xl">Register</h1>
						<span className="text-gray-300">Create an Account</span>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="mb-4 text-lg flex items-center justify-center">
							<input
								className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
								type="text"
								name="username"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>

						<div className="mb-4 text-lg flex justify-center items-center">
							<input
								className=" rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
								type="text"
								name="name"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>

						<div className="mb-4 text-lg flex justify-center items-center">
							<input
								className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
								type="email"
								name="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div className="mb-4 text-lg flex justify-center items-center">
							<input
								className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
								type="password"
								name="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						{error && <div className="text-red-500 mb-4">{error}</div>}
						<div className="mt-8 flex justify-center text-lg text-black">
							<button
								type="submit"
								className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
							>
								Register
							</button>
						</div>
					</form>
					
                <div className="mt-4 text-center">
                <span className="text-gray-300">Already a member?</span>
                <Link
                to="/login"
                className="ml-2 text-blue-400 hover:underline"
                >
                Login
                </Link>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Register;
