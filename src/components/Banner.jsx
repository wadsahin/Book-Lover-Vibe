import { Link } from "react-router-dom";
import banner_img from "../assets/banner.png"
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg py-5 md:px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner_img}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold leading-snug mb-7">Books to freshen up your bookshelf</h1>
                     <Link to="/list"><button className="btn bg-green-500 text-white">View the list</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;