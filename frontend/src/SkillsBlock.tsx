import {FC} from "react";
import Chip from "@mui/material/Chip"

import "./SkillsBlock.css"


interface SkillsBlockProps {
    skills: string[],
    onSkillSelected: (skill: string) => void;
}

const SkillsBlock: FC<SkillsBlockProps> = ({skills, onSkillSelected}) => {
    return <div className={"block"}>
        {
            skills.map(skill => (<Chip label={skill} sx={{ml: "2px", mr: "2px"}} onClick={() => onSkillSelected(skill)}/>))
        }
    </div>
}

export default SkillsBlock
