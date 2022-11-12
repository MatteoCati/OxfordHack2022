import {FC} from "react";
import {Box, Typography} from "@mui/material";
import {Line} from "react-chartjs-2"
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler } from 'chart.js';
import config from "../config";


interface HiringGraphProps {
    graphX: string[]
    graphY: number[]
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const HiringGraph: FC<HiringGraphProps> = ({graphX, graphY }) => {

    const containerStyle = {
        width: "100%",
        marginTop: "50px",
    }

    const data = {
        labels: graphX,
        datasets:
            [
                {
                    fill: true,
                    label: 'Hiring',
                    data: graphY,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
        },
    };

    return <Box sx={containerStyle}>
        <Typography variant={"h5"} sx={{color: config.COLORS.TEXT, marginBottom: "20px"}}>See how many people are being hired</Typography>
        <Line options={options} data={data} />
    </Box>
}

export default HiringGraph
