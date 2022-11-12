import {FC} from "react";
import Chip from "@mui/material/Chip"

import "./SkillsBlock.css"
import {Box, Typography} from "@mui/material";


interface SkillsBlockProps {
    skills: string[],
    onSkillSelected: (skill: string) => void;
    defaultText: string;
}

const SkillsBlock: FC<SkillsBlockProps> = ({skills, onSkillSelected, defaultText=''}) => {
    const containerStyle = {
        border: "1px solid black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px",
        width: "500px",
        marginBottom: "10px",
        justifyContent: "center",
    }

    const defTextStyle = {
        color: "#d4c8c7"
    }

    return <Box sx={containerStyle}>
        { skills.length > 0 ?
            skills.map(skill => (<Chip label={skill} sx={{ml: "2px", mr: "2px"}} onClick={() => onSkillSelected(skill)}/>))
            :
            <Typography sx={defTextStyle}>{defaultText}</Typography>
        }
    </Box>
}

export default SkillsBlock
