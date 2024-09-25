import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useLanguage } from "../../../Components/LanguageContext";
const BarChartCatd = () => {
    const {language} = useLanguage();
    const data = [
        {
            "name": "2014/2015",
            "Export": 116000,
            "Import": 493
        },
        {
            "name": "2015/2016",
            "Export": 126000,
            "Import": 330
        },
        {
            "name": "2016/2017",
            "Export": 155000,
            "Import": 49
        },
        {
            "name": "2017/2018",
            "Export": 109000,
            "Import": 12
        },
        {
            "name": "2018/2019",
            "Export": 115000,
            "Import": 12
        },
        {
            "name": "2019/2020",
            "Export": 125000,
            "Import": 5
        },
        {
            "name": "2020/2021",
            "Export": 138000,
            "Import": 0
        }
    ]
    return (
        <>
            <div className="section-header">
                <h3>{language === "en" ? "Inland Terminal Statistics" : "إحصائيات العاشر من رمضان"}</h3>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="depth" orientation="left" dataKey="Export" label={{ value: 'TOTAL HANDLING', angle: -90, position: 'insideBottom' }}/>
                    <YAxis yAxisId="import" orientation="right" dataKey="Import" label={{ value: 'TEU', angle: -90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Import" fill="#004d7a" yAxisId="import" />
                    <Bar dataKey="Export" fill="#008793" yAxisId="depth"/>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default BarChartCatd;