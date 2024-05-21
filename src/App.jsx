import { Route, Routes } from "react-router-dom";
// Layout
import AuthLayout from "./layouts/auth/AuthLayout";
// Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainMenu from "./pages/home/MainMenu";

function App() {
	console.log("App component rendered");

	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
                <Route index element={<MainMenu />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default App;
