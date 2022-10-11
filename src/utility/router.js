import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topic from "../components/Topic";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/topic', element: <Topic /> },
            { path: '/statistics', element: <Statistics /> },
            { path: '/about', element: <About /> },
            { path: '/blog', element: <Blog /> },
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                },
                element: <Quiz />
            },
        ]
    }
])

export default router