import {FC} from "react";
import Chip from "@mui/material/Chip"

import "./SkillsBlock.css"
import {Box, Typography} from "@mui/material";
import config from "./config";


interface SkillsBlockProps {
    skills: string[],
    onSkillSelected: (skill: string) => void;
    defaultText: string;
}

const SkillsBlock: FC<SkillsBlockProps> = ({skills, onSkillSelected, defaultText=''}) => {

    const buttonStyle = {
        '&:hover': {
            backgroundColor: config.COLORS.ACCENT,
        },
        backgroundColor: config.COLORS.PRIMARY,
        ml: "2px", 
        mr: "2px",  
        opacity: "90%"
    }


    return <Box className="container" sx={{ backgroundColor: config.COLORS.SECONDARY}}>
        { skills.length > 0 ?
            skills.map(skill => (<Chip label={skill} sx={buttonStyle} onClick={() => onSkillSelected(skill)}/>))
            :
            <Typography sx={{color: config.COLORS.BACKGROUND}}>{defaultText}</Typography>
        }
    </Box>
}

export default SkillsBlock
