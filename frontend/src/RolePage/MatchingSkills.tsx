import {FC} from "react";
import {Box, Typography} from "@mui/material";
import Chip from "@mui/material/Chip";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider'
// @ts-ignore
import { easeQuadInOut } from "d3-ease";
import config from "../config";

interface SkillChipProps {
    skill: string
    isMatched: boolean
}

const SkillChip: FC<SkillChipProps> = ({skill, isMatched}) => {
    const chipStyle = {
        backgroundColor: isMatched ? "#46DB18" : "#E60B0F",
        mb: "10px",
        minHeight: "32px",
        ml: "20px",
        minWidth: "85px",
    }

    return <Chip label={skill} sx={chipStyle}/>
}

interface SkillsColumnProps {
    requiredSkills: string[]
    selectedSkills: string[]
}

const SkillsColumn: FC<SkillsColumnProps> = ({requiredSkills, selectedSkills}) => {
    const columnStyle = {
        display: "flex",
        flexDirection: "column",
    }
    return <Box sx={columnStyle}>
        {
            requiredSkills.map(skill => <SkillChip skill={skill} isMatched={selectedSkills.includes(skill)}/>)
        }
    </Box>
}

interface MatchingSkillsProps {
    selectedSkills: string[]
    requiredSkills: string[]
}

const MatchingSkills: FC<MatchingSkillsProps> = ({selectedSkills, requiredSkills}) => {

    const skillsTableStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }

    const containerStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }

    const horContainerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }

    const headerStyle = {
        color: config.COLORS.TEXT,
        marginBottom: "20px",
    }

    const matchesNumber = requiredSkills.filter(skill => selectedSkills.includes(skill)).length
    const percentage = matchesNumber / requiredSkills.length * 100
    const getPercentageColor = (value: number) => (value > 25
                            ? value > 75
                            ? "green"
                            : "orange"
                            : "red")

    return <Box sx={containerStyle}>
        <Typography variant={"h3"} sx={headerStyle}>Required skills</Typography>
        <Box sx={horContainerStyle}>
            <Box sx={skillsTableStyle}>
                {
                    [0, 1, 2].map((idx: number) => <SkillsColumn requiredSkills={requiredSkills.filter((el: string, j: number) => j%3 === idx)} selectedSkills={selectedSkills}/>)
                }
            </Box>
            <Box>
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={percentage}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                >
                    {(value: number) => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles(
                                    { pathTransition: "none",
                                        textColor: config.COLORS.TEXT,
                                        pathColor: getPercentageColor(value)})}
                            />
                        );
                    }}
                </AnimatedProgressProvider>
            </Box>

        </Box>
    </Box>
}

export default MatchingSkills
