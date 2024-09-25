import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { format } from 'date-fns';
import { FaRegUser } from "react-icons/fa";
import { fetchUserPage } from "../Store/Reducers/UserPageReducer";
import { fetchDyRep } from "../Store/Reducers/DyRepReducer";
import { useLanguage } from '../LanguageContext';
import Loader from "../Loader/Loader";
import { create } from 'xmlbuilder2';
import "./Reports.css";
import * as XLSX from 'xlsx';

const Reports = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    // const { userId } = location.state || {};
    const userId = sessionStorage.getItem("userId");
    const { language } = useLanguage();
    const { UserPage, UserPageLoading } = useSelector((state) => state.UserPage);
    const navigate = useNavigate();
    const [dynamicReports, setDynamicReports] = useState([]);
    const [showFields, setShowFields] = useState({
        fromDate: false,
        toDate: false,
        vesselCode: false,
        voyageNo: false,
        transCode: false,
        cntSts: false,
        cntTyp: false,
    });

    const [selectedReportPageId, setSelectedReportPageId] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(1);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [containerStatus, setContainerStatus] = useState('Empty');
    const [containerStatusABB, setContainerStatusABB] = useState("*");
    const [containerType, setContainerType] = useState('0');
    const [transactionCode, setTransactionCode] = useState('IN');
    const [transactionCodeABB, setTransactionCodeABB] = useState('*');
    const [vesselNo, setVesselNo] = useState('');
    const [voyageNo, setVoyageNo] = useState('');
    const [reportData, setReportData] = useState([]);
    const [sessionTimeout, setSessionTimeout] = useState(30 * 60 * 1000);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [loadingData, setLoadingData] = useState(false);


    const [itemsPerPage, setItemsPerPage] = useState(10)

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reportData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Memoized status mappings useEffect
    useEffect(() => {
        const statusMappings = {
            "Empty": "E",
            "Transit Empty": "TE",
            "Transit": "T",
            "FCL": "F",
            "All": "*"
        };
        setContainerStatusABB(statusMappings[containerStatus] || "*");
    }, [containerStatus]);

    // Memoized code mappings useEffect
    useEffect(() => {
        const codeMappings = {
            "IN": "I",
            "OUT": "O",
            "STUFFING": "S",
            "UNSTUFFING": "F",
            "All": "*"
        };
        setTransactionCodeABB(codeMappings[transactionCode] || "*");
    }, [transactionCode]);

    // Fetch UserPage on userId change
    useEffect(() => {
        if (userId) {
            dispatch(fetchUserPage(userId));
        }
    }, [dispatch, userId]);

    const handleChange = (e) => {
        setItemsPerPage(parseInt(e.target.value)); // Convert value to integer
        // You can perform additional actions based on the selected value if needed
        setCurrentPage(1)
    };

    const handleMenuItem = useCallback((item) => {
        setSelectedReportPageId(item.pid);
        setSelectedItemId(item.menuSerial);
        setShowFields({
            fromDate: item.fromDt === 'Y',
            toDate: item.toDt === 'Y',
            vesselCode: item.vesCd === 'Y',
            voyageNo: item.voyNo === 'Y',
            transCode: item.transCd !== 'N' && item.transCd !== null,
            cntSts: item.cntSts === 'Y',
            cntTyp: item.cntTyp === 'Y',
        });
        setReportData([]);
        setCurrentPage(1)
        window.scrollTo(0, 0);

        if (item.menuNmEn === "Berth Status") {
            navigate('/berthstatus')
        }
        if (item.menuNmEn === "Empty Booking") {
            navigate('/booking')
        }
    }, [navigate]);

    // Fetch dynamic reports on UserPage change
    // useEffect(() => {
    //     if (UserPage.length > 0) {
    //         const menuSerial = UserPage.map((item) => item.menuSerial);
    //         const dyRepPromises = menuSerial.map((item) => dispatch(fetchDyRep(item)));

    //         Promise.all(dyRepPromises)
    //             .then((results) => {
    //                 const extractedPayloads = results.flatMap((item) => item.payload);
    //                 setDynamicReports(extractedPayloads);

    //                 if (extractedPayloads.length > 0) {
    //                     // setSelectedItemId(extractedPayloads[0].menuSerial);
    //                     handleMenuItem(extractedPayloads[0]);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error fetching DyRep:", error);
    //             });
    //     }
    // }, [UserPage, dispatch, handleMenuItem]);

    const isInitialRender = useRef(true);

    useEffect(() => {
        if (UserPage.length > 0) {
            const menuSerial = UserPage.map((item) => item.menuSerial);
            const dyRepPromises = menuSerial.map((item) => dispatch(fetchDyRep(item)));

            Promise.all(dyRepPromises)
                .then((results) => {
                    const extractedPayloads = results.flatMap((item) => item.payload);
                    setDynamicReports(extractedPayloads);

                    // Run handleMenuItem only on initial render after data is fetched
                    if (isInitialRender.current && extractedPayloads.length > 0) {
                        handleMenuItem(extractedPayloads[0]);
                        isInitialRender.current = false; // Set to false to prevent further calls
                    }
                })
                .catch((error) => {
                    console.error("Error fetching DyRep:", error);
                });
        }
    }, [UserPage, dispatch, handleMenuItem]);

    // Timeout alert on session expiration
    useEffect(() => {
        const timeout = setTimeout(() => {
            alert("Your Session Expired");
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("isLoggedIn");
            window.location.href = "/login";
        }, sessionTimeout);

        return () => clearTimeout(timeout);
    }, [sessionTimeout]);

    // Memoized handleMenuItem function


    // Memoized handleSubmit function
    // const handleSubmit = useCallback(async (e) => {
    //     e.preventDefault(); // Prevent default form submission
    //     try {
    //         setLoadingData(true);
    //         let endpoint = "http://10.0.1.118/pup/api/values";
    //         const params = {
    //             lin: userId,
    //             rep: selectedReportPageId,
    //             d1: fromDate ? format(new Date(fromDate), 'd-MMM-yyyy') : '1-jan-2024',
    //             d2: toDate ? format(new Date(toDate), 'd-MMM-yyyy') : '2-jan-2024',
    //             sts: containerStatusABB || '*',
    //             io: transactionCodeABB || '*',
    //             pvs: vesselNo || "ABC",
    //             pvoy: voyageNo || "ABC"
    //         };

    //         const response = await axios.get(endpoint, {
    //             params,
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         console.log("Final URL:", `${endpoint}?${new URLSearchParams(params).toString()}`);

    //         setReportData(response.data);
    //         setSubmitClicked(true);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    //     finally {
    //         setLoadingData(false);
    //     }
    //     setCurrentPage(1)

    // }, [userId, selectedReportPageId, fromDate, toDate, containerStatusABB, transactionCodeABB, vesselNo, voyageNo]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            setLoadingData(true);
            let endpoint = "http://10.0.1.118/pup/api/values";
            const params = {
                lin: userId,
                rep: selectedReportPageId,
                d1: fromDate ? format(new Date(fromDate), 'd-MMM-yyyy') : '1-jan-2024',
                d2: toDate ? format(new Date(toDate), 'd-MMM-yyyy') : '2-jan-2024',
                sts: containerStatusABB || '*',
                io: transactionCodeABB || '*',
                pvs: vesselNo || "ABC",
                pvoy: voyageNo || "ABC"
            };

            const url = `${endpoint}?${new URLSearchParams(params).toString()}`;

            const response = await fetch(url, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("Final URL:", url);

            setReportData(data);
            setSubmitClicked(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoadingData(false);
        }
        setCurrentPage(1);
    }, [userId, selectedReportPageId, fromDate, toDate, containerStatusABB, transactionCodeABB, vesselNo, voyageNo]);



    // Memoized handleDownloadXml function
    const handleDownloadXml = useCallback(() => {
        const dataToConvert = reportData.map(item => {
            // Extract keys and values dynamically
            const entry = {};
            Object.keys(item).forEach(key => {
                entry[key] = item[key];
            });
            return entry;
        });

        const xmlData = create({
            reports: {
                report: dataToConvert.map(item => ({
                    entry: item
                }))
            }
        }).end({ prettyPrint: true });

        const blob = new Blob([xmlData], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, [reportData]);

    // Memoized handleDownloadExcel function
    const handleDownloadExcel = useCallback(() => {
        const dataForExcel = reportData.map(item => {
            // Extract keys and values dynamically
            const entry = {};
            Object.keys(item).forEach(key => {
                entry[key] = item[key];
            });
            return entry;
        });

        const worksheet = XLSX.utils.json_to_sheet(dataForExcel);

        // Calculate column widths dynamically based on content length
        const columnWidths = [];
        dataForExcel.forEach(row => {
            Object.values(row).forEach((value, columnIndex) => {
                const cellLength = (String(value).length) + 5;
                if (!columnWidths[columnIndex] || cellLength > columnWidths[columnIndex].wch) {
                    columnWidths[columnIndex] = { wch: cellLength };
                }
            });
        });

        // Apply column widths to the worksheet
        worksheet['!cols'] = columnWidths;

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Report Data');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.xlsx';
        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
    }, [reportData]);


    // Memoized handleDownloadTxt function
    const handleDownloadTxt = useCallback(() => {
        const txtData = reportData.map(item => {
            // Extract values and join with tab (\t) separator
            const values = Object.values(item).join('\t');
            return values;
        }).join('\n');

        const blob = new Blob([txtData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.txt';

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, [reportData]);


    const userName = sessionStorage.getItem("userId");

    if (!userName) {
        return <Navigate to="/login" />;
    }

    if (UserPageLoading) {
        return <Loader />;
    }

    return (
        <>
            {dynamicReports.length === 0 && <Loader />}
            <div className="container-fluid d-flex flex-wrap">
                <section className="ReportsSideMenu py-3 col-12 col-md-3">
                    <div className="d-flex align-items-start  ps-4">
                        <FaRegUser size={32} />
                        <h3 className="mb-4 ms-2">Hello {userName}!</h3>
                    </div>
                    <aside>
                        <ul className="uListReports ">
                            {dynamicReports.map((item, index) => (
                                <li
                                    key={index}
                                    className={`ReportsListItems ${selectedItemId === item.menuSerial ? 'selected' : ''}`}
                                    onClick={() => handleMenuItem(item)}
                                >
                                    {language === 'en' ? item.menuNmEn : item.menuNmAr}
                                </li>
                            ))}

                        </ul>
                    </aside>
                </section>

                <div className="col-12 col-md-9 my-2">
                    <section className="d-flex justify-content-center align-items-center align-content-center">
                        <Row className="reportsOptionsRow p-3">
                            <Col md={6} className={!showFields.fromDate ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="fromDate" className="form-label me-2  w-25" style={{ whiteSpace: 'nowrap' }}>From Date:</label>
                                    <input type="date" id="fromDate" className="form-control w-75 fs-5" value={fromDate} onChange={(e) => setFromDate(e.target.value)} max={new Date().toISOString().split('T')[0]} />
                                </div>
                            </Col>

                            <Col md={6} className={!showFields.toDate ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="toDate" className="form-label me-2 w-25" style={{ whiteSpace: 'nowrap' }}>To Date:</label>
                                    <input type="date" id="toDate" className="form-control w-75 fs-5" value={toDate} onChange={(e) => setToDate(e.target.value)} max={new Date().toISOString().split('T')[0]} />
                                </div>
                            </Col>

                            <Col md={6} className={!showFields.cntSts ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="containerStatus" className="form-label me-2" style={{ whiteSpace: 'nowrap' }}>Container Status:</label>
                                    <select id="containerStatus" className="form-select" value={containerStatus} onChange={(e) => setContainerStatus(e.target.value)}>
                                        <option value="Empty">Empty</option>
                                        <option value="Transit Empty">Transit Empty</option>
                                        <option value="Transit">Transit</option>
                                        <option value="FCL">FCL</option>
                                        <option value="All">All</option>
                                    </select>
                                </div>
                            </Col>

                            <Col md={6} className={!showFields.cntTyp ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="containerType" className="form-label me-2" style={{ whiteSpace: 'nowrap' }}>Container Type:</label>
                                    <select id="containerType" className="form-select" value={containerType} onChange={(e) => setContainerType(e.target.value)}>
                                        <option value="0">IMO Container</option>
                                        <option value="1">REF Container</option>
                                        <option value="2">OOG Container</option>
                                    </select>
                                </div>
                            </Col>

                            <Col md={6} className={!showFields.transCode ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="transactionCode" className="form-label me-2" style={{ whiteSpace: 'nowrap' }}>Transaction Code:</label>
                                    <select id="transactionCode" className="form-select" value={transactionCode} onChange={(e) => setTransactionCode(e.target.value)}>
                                        <option value="IN">IN</option>
                                        <option value="OUT">OUT</option>
                                        <option value="STUFFING">STUFFING</option>
                                        <option value="UNSTUFFING">UNSTUFFING</option>
                                        <option value="All">All</option>
                                    </select>
                                </div>
                            </Col>

                            <Col md={6} className={!showFields.vesselCode ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="vesselNo" className="form-label me-2" style={{ whiteSpace: 'nowrap' }}>Vessel Code:</label>
                                    <input type="text" id="vesselNo" className="form-control" placeholder="Enter Vessel Code" value={vesselNo} onChange={(e) => setVesselNo(e.target.value)} />
                                </div>
                            </Col>

                            <Col md={6} className={!showFields.voyageNo ? 'd-none' : ''}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="voyageNo" className="form-label me-2" style={{ whiteSpace: 'nowrap' }}>Voyage No:</label>
                                    <input type="text" id="voyageNo" className="form-control" placeholder="Enter Voyage Number" value={voyageNo} onChange={(e) => setVoyageNo(e.target.value)} />
                                </div>
                            </Col>

                            {selectedItemId !== null && (
                                <Col md={12} className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-danger mt-3 me-3" onClick={handleSubmit}>Submit</button>
                                </Col>
                            )}

                            {submitClicked && reportData.length > 0 && (
                                <>
                                    <Col md={12} className="d-flex justify-content-center">
                                        <button className="btn btn-primary mt-3 me-3" onClick={handleDownloadXml}>Download XML</button>
                                        <button className="btn btn-success mt-3 me-3" onClick={handleDownloadExcel}>Download Excel Sheet</button>
                                        <button className="btn btn-warning mt-3 me-3" onClick={handleDownloadTxt}>Download Text</button>
                                    </Col>

                                    <Col md={12}>
                                        <div className="table-responsive mt-5">
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        {Object.keys(reportData[0]).map((key, index) => (
                                                            <th key={index}>{key.toUpperCase()}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentItems.map((item, rowIndex) => (
                                                        <tr key={rowIndex} >
                                                            {Object.keys(item).map((key, cellIndex) => (
                                                                <td key={cellIndex} style={{ whiteSpace: "nowrap" }}>{item[key]}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>

                                    {/* Pagination Controls */}
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between align-items-md-baseline mt-3">

                                                <div className="d-flex justify-content-center  mb-md-0">
                                                    <nav>
                                                        <ul className="pagination">
                                                            {/* Previous Button */}
                                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                                <button
                                                                    className="page-link"
                                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                                    disabled={currentPage === 1}
                                                                >
                                                                    Previous
                                                                </button>
                                                            </li>
                                                            {/* Current Page */}
                                                            <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                                                                <button onClick={() => paginate(1)} className="page-link">
                                                                    1
                                                                </button>
                                                            </li>
                                                            {/* Ellipsis if there are more than 2 pages */}
                                                            {Math.ceil(reportData.length / itemsPerPage) > 2 && (
                                                                <li className="page-item disabled">
                                                                    <span className="page-link">{currentPage}</span>
                                                                </li>
                                                            )}
                                                            {/* Last Page */}
                                                            {Math.ceil(reportData.length / itemsPerPage) > 1 && (
                                                                <li className={`page-item ${currentPage === Math.ceil(reportData.length / itemsPerPage) ? 'active' : ''}`}>
                                                                    <button onClick={() => paginate(Math.ceil(reportData.length / itemsPerPage))} className="page-link">
                                                                        {Math.ceil(reportData.length / itemsPerPage)}
                                                                    </button>
                                                                </li>
                                                            )}
                                                            {/* Next Button */}
                                                            <li className={`page-item ${currentPage === Math.ceil(reportData.length / itemsPerPage) ? 'disabled' : ''}`}>
                                                                <button
                                                                    className="page-link"
                                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                                    disabled={currentPage === Math.ceil(reportData.length / itemsPerPage)}
                                                                >
                                                                    Next
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>

                                                <div className="text-center text-md-left mb-3 mb-md-0">
                                                    Total records: {reportData.length}
                                                </div>
                                                <div className="text-center text-md-right">
                                                    <select value={itemsPerPage} onChange={handleChange} className="rounded">
                                                        <option value={10}>10</option>
                                                        <option value={25}>25</option>
                                                        <option value={50}>50</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {submitClicked && reportData.length === 0 && (
                                <Col md={12} className="text-center mt-3">
                                    No data available.
                                </Col>
                            )}

                            {loadingData && (
                                <Col md={12} className="text-center mt-5">
                                    <Spinner />
                                </Col>
                            )}
                        </Row>
                    </section>
                </div>
            </div>
        </>
    );
}
export default Reports;