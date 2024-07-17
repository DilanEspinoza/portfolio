// import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/projects", element: <Projects /> },
	{ path: "/contact", element: <Contact /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
