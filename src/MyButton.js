import { Link } from "react-router-dom";

const MyButton = ({ to }) => {

    return (
        <Link to={`/${to}`}>
            <button className="my-button">
                {to === '' ? "home" : to} Page
            </button>
        </Link>
    )
}

export default MyButton;