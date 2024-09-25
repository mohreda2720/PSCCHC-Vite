import Lottie from "lottie-react";
import loaderAnimationData from "../../assets/Loader2.json";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <Lottie
                    loop={true}
                    animationData={loaderAnimationData}
                    autoPlay={true}
                    className="w-100 h-100"
                />
            </div>
        </div>
    );
}

export default Loader;
