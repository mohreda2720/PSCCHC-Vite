import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ContainerChart = () => {
    const data = [
        {
            "name": "2014/2015",
            "Vessel": 823,
            "Local": 335000,
            "Transet": 117000
        },
        {
            "name": "2016/2017",
            "Vessel": 766,
            "Local": 277000,
            "Transet": 226000
        },
        {
            "name": "2017/2018",
            "Vessel": 830,
            "Local": 310000,
            "Transet": 196000
        },
        {
            "name": "2018/2019",
            "Vessel": 719,
            "Local": 395000,
            "Transet": 318000
        },
        {
            "name": "2019/2020",
            "Vessel": 615,
            "Local": 343000,
            "Transet": 280000
        },
        {
            "name": "2020/2021",
            "Vessel": 489,
            "Local": 294000,
            "Transet": 200000
        },
        {
            "name": "2021/2022",
            "Vessel": 445,
            "Local": 225000,
            "Transet": 242000
        }
    ];

    return (
        <>
            {/* <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="vessel" orientation="right" dataKey="Vessel" label={{ value: 'BOX/VESSEL', angle: -90, position: 'insideRight' }} />
                    <YAxis yAxisId="depth" orientation="left" label={{ value: 'TOTAL HANDLING', angle: -90, position: 'insideBottom' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Vessel" fill="#082653" yAxisId="vessel" />
                    <Bar dataKey="Local" fill="#004d7a" yAxisId="depth" />
                    <Bar dataKey="Transet" fill="#00bf72" yAxisId="depth" />
                </BarChart>
            </ResponsiveContainer> */}

            <ResponsiveContainer width="100%" height={450} >
                <ComposedChart data={data}>
                    <XAxis dataKey="name" tick={{ fontSize: 14 }}/>
                    <YAxis yAxisId="vessel" orientation="left" tick={{ fontSize: 14 }} dataKey="Vessel" label={{ value: 'BOX/VESSEL', angle: -90, position: 'insideLeft' }}/>
                    <YAxis yAxisId="depth" orientation="right" tick={{ fontSize: 14 }} label={{ value: 'Total Handling', angle: -90, position: 'insideBottom', offset: 25 }} />
                    <Tooltip />
                    <Legend />
                        
                    <CartesianGrid
                    // stroke="#f5f5f5"
                    />
                    <Area dataKey="Transet" fill="#219C90 " stroke="#219C90" yAxisId="depth"/>
                    {/* <Bar dataKey="Local" barSize={50} fill="#008793" yAxisId="depth"/> */}
                    <Bar dataKey="Local" barSize={50} fill="#3d5c86" yAxisId="depth"/>
                    <Line dataKey="Vessel" stroke="#EE4E4E" yAxisId="vessel"/>
                </ComposedChart>
            </ResponsiveContainer>
        </>

    );
}

export default ContainerChart;
