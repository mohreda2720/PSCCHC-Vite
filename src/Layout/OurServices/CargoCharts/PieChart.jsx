import { Bar, Cell, Label, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import './Chart.css'
import { useLanguage } from "../../../Components/LanguageContext";

const PieChartCard = () => {

    const {language} = useLanguage();
    // const colors = ["#EE4E4E", "#3d5c86","#3AA6B9"," #219C90", "#FFC700", "#748862"]
    const colors = ["#1d65a6","#72a2c0", "#192e5b"," #00743f",   "#f25117","#f2a104"]
    const data = [
        {
            "name": "New Local Yard",
            "value": 172000
        },
        {
            "name": "External Local Yard",
            "value": 112024
        },
        {
            "name": "Old Local yard",
            "value": 30185
        },
        {
            "name": "Ts Yard + Refeer",
            "value": 208917
        },
        {
            "name": "Empty Yard",
            "value": 30499
        },
        {
            "name": "LCL",
            "value": 13069
        }
    ]

    return (
        <>
            <div className="section-header">
                <h3>{language === "en" ? "Yard Storage" : "سعة الساحة التخزينية"}</h3>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" label>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))
                        }
                    </Pie>

                    <Legend />
                </PieChart>

            </ResponsiveContainer>

        </>
    );
}

export default PieChartCard;