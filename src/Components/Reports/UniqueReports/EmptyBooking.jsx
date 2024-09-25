import { useLanguage } from "../../LanguageContext";
import DiscoverHeader from "../../DiscoverMorePage/DiscoverHeader";
import { GiNotebook } from "react-icons/gi";
import { Navigate } from "react-router-dom";
import './EmptyBooking.css'

const EmptyBooking = () => {
    const { language } = useLanguage();

    const userName = sessionStorage.getItem("userId");

    if (!userName) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <DiscoverHeader
                title={language === 'en' ? "Empty Booking" : "حجز الفارغ"}
                img=".\images\containers-header.jpg"
                current="booking"
            />

            <div className="container">
                {language === "en" ? (
                    <h1 className="my-5 BerthTitle display-4 d-flex align-items-center justify-content-start">
                        <span className="me-4">
                            <GiNotebook size={70} />
                        </span>
                        Booking
                    </h1>
                ) : (
                    <h1 className="my-5 BerthTitle display-4 d-flex align-items-center justify-content-end">
                        الحجز
                        <span className="ms-4">
                            <GiNotebook size={70} />
                        </span>
                    </h1>
                )}
            </div>
            <div className="container w-50 mb-5 ">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter Serial or the Booking number" aria-label="Search"/>
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                        <button class="btn btn-outline-secondary" type="button">New Booking</button>
                        <button class="btn btn-outline-secondary" type="button">Clear</button>
                </div>
            </div>
            <div className="container table-responsive EmptyBookingTableView">
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Booking NO</th>
                            <th>SHIPPER</th>
                            <th>ValidTo</th>
                            <th>Count</th>
                            <th>Size</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1645</td>
                            <td>BK12345</td>
                            <td>ABC Shipping Co.</td>
                            <td>2024-12-31</td>
                            <td>10</td>
                            <td>20</td>
                            <td>Dry</td>
                        </tr>
                        <tr>
                            <td>1667</td>
                            <td>BK67890</td>
                            <td>XYZ Logistics</td>
                            <td>2024-11-15</td>
                            <td>5</td>
                            <td>20</td>
                            <td>H.C</td>
                        </tr>
                        <tr>
                            <td>1987</td>
                            <td>BK54321</td>
                            <td>FastShip Ltd.</td>
                            <td>2024-10-30</td>
                            <td>20</td>
                            <td>20</td>
                            <td>H.C</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>BK98765</td>
                            <td>Global Freight</td>
                            <td>2024-09-25</td>
                            <td>8</td>
                            <td>40</td>
                            <td>Dry</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>);
}

export default EmptyBooking;