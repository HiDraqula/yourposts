import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Loader from "./components/Loader";
import Api from "./Api";
import { Provider } from "react-redux";
import { store } from "./app/store";
// Api
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        // children: [
        //   {
        //     path: "post",
        //     children: [
        //       {
        //         path: "edit/:postId",
        //         element: <EditPost />,
        //       },
        //     ],
        //   },
        // ],
      },
      {
        path: "post",
        children: [
          {
            path: "edit/:postId",
            element: <EditPost />,
          },
          {
            path: "add",
            element: <AddPost />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
        {/* <Loader /> */}
      </div>
    </Provider>
  );
}

export default App;
