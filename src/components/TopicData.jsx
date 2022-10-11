import { Link } from "react-router-dom";

export const TopicData = ({ topic }) => {
    const { id, logo, name, total } = topic
    return (
        <div className="max-w-xs rounded-xl dark:bg-gray-800 hover:shadow-md hover:shadow-gray-500 dark:text-gray-100">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 hover:bg-yellow-300 p-8 lg:p-0" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">Total: {total}</p>
                </div>
                <Link to={`/quiz/${id}`}>
                    <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-purple-600 dark:text-gray-200">Quiz</button>
                </Link>
            </div>
        </div>
    );
};