import {FC} from "react";
import {Box, Typography} from "@mui/material";
import Chip from "@mui/material/Chip";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider'
// @ts-ignore
import { easeQuadInOut } from "d3-ease";
import config from "../config";
import "./MatchingSkills.css"

interface SkillChipProps {
    skill: string
    isMatched: boolean
}

const SkillChip: FC<SkillChipProps> = ({skill, isMatched}) => {

    return <Chip 
        label={skill} 
        sx={{backgroundColor: isMatched ? "#308a15" : "#9c1315" }} 
        className="skill-chip-style"/>
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

    const matchesNumber = requiredSkills.filter(skill => selectedSkills.includes(skill)).length
    const percentage = matchesNumber / requiredSkills.length * 100
    const getPercentageColor = (value: number) => (value > 25
                            ? value > 75
                            ? "green"
                            : "orange"
                            : "red")

    return <Box className="skills-page-container">
        <Box className="skills-and-graph-container">
            <Box className="skills-table-style" sx={{backgroundColor: config.COLORS.SECONDARY}}>
                <Typography className="skills-title" sx={{color: config.COLORS.PRIMARY, textTransform: "uppercase", textAlign: "center", padding: "0 0 0.5rem 1rem", letterSpacing: "0.1rem"}}>Required skills</Typography>
                <Box className="skills-columns-table-style" >
                    {
                        [0, 1, 2].map((idx: number) => <SkillsColumn requiredSkills={requiredSkills.filter((el: string, j: number) => j%3 === idx)} selectedSkills={selectedSkills}/>)
                    }
                </Box>
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
