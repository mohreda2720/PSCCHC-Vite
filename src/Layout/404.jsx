import Lottie from "lottie-react";
import NotFoundAnimation from "./../assets/404-5.json";

const NotFount404 = () => {
    return (
        <>
            <div>
                <div>
                    <Lottie
                        loop={true}
                        animationData={NotFoundAnimation}
                        autoPlay={true}
                        className="img-fluid"
                    />
                </div>
            </div>
        </>);
}

export default NotFount404;