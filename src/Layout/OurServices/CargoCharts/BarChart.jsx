import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useLanguage } from "../../../Components/LanguageContext";
const BarChartCatd = () => {
    const { language } = useLanguage();
    const data = [
        {
            "name": "2014/2015",
            "General Cargo": 319000,
            "Bulk Grains": 66300
        },
        {
            "name": "2015/2016",
            "General Cargo": 168000,
            "Bulk Grains": 210000
        },
        {
            "name": "2016/2017",
            "General Cargo": 156000,
            "Bulk Grains": 279000
        },
        {
            "name": "2017/2018",
            "General Cargo": 76100,
            "Bulk Grains": 170000
        },
        {
            "name": "2018/2019",
            "General Cargo": 31900,
            "Bulk Grains": 366000
        },
        {
            "name": "2019/2020",
            "General Cargo": 21700,
            "Bulk Grains": 551000
        },
        {
            "name": "2020/2021",
            "General Cargo": 527,
            "Bulk Grains": 355000
        }
    ]
    return (
        <>
            <div className="section-header">
                <h3>{language === "en" ? "Cargo Statistics" : "إحصائيات تداول البضائع"}</h3>
            </div>
            {/* <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Bulk Grains" fill="#082653" />
                    <Bar dataKey="General Cargo" fill="#00bf72" />
                </BarChart>
            </ResponsiveContainer> */}

            <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Bulk Grains" stroke="#2a324a" />
                <Line type="monotone" dataKey="General Cargo" stroke="#008793" />
            </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default BarChartCatd;