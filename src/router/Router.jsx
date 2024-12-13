import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homePage/Home";
import Register from "../pages/forms/Register";
import Login from "../pages/forms/Login";
import JobDetails from "../pages/insidePages/JobDetails";
import PrivetRouter from "./PrivetRouter";
import JobApply from "../pages/insidePages/JobApply";
import MyApplications from "../pages/insidePages/MyApplications";
import AddJob from "../pages/forms/AddJob";
import MyPostedJob from "../pages/insidePages/MyPostedJob";
import ViewApplication from "../pages/insidePages/ViewApplication";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/register',
            element: <Register></Register>,
           },
           {
            path: '/login',
            element: <Login></Login>,
           },
           {
            path: '/jobDetails/:id',
            element: <PrivetRouter> <JobDetails></JobDetails> </PrivetRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
           },
           {
            path: '/jobApply/:id',
            element: <PrivetRouter> <JobApply></JobApply> </PrivetRouter>,
           },
           {
            path: '/myApplications',
            element: <PrivetRouter> <MyApplications></MyApplications> </PrivetRouter>
           },
        //    Crud 
           {
            path: '/addJob',
            element: <PrivetRouter> <AddJob></AddJob> </PrivetRouter>
           },
           {
            path: '/myPostedJob',
            element: <PrivetRouter> <MyPostedJob></MyPostedJob> </PrivetRouter>
           },
           {
            path: '/viewApplications/:job_id',
            element: <PrivetRouter> <ViewApplication></ViewApplication> </PrivetRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
           }

        ]
    },
]);

export default router;