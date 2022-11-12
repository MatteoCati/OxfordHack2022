import {FC, useEffect, useState} from "react";
import config from "./config"
import SkillsBlock from "./SkillsBlock";
import {Typography, OutlinedInput, Button} from "@mui/material"
import "./HomePage.css"
import { Link } from "react-router-dom";

interface SkillsFetch {
    top_skills: string[]
    skills: string[]
}

const HomePage: FC = () => {
    const [search, setSearch] = useState<string>('')
    const [skills, setSkills] = useState<string[]>([])
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])
    const [shownSkills, setShownSkills] = useState<string[]>([])
    const [topSkills, setTopSkills] = useState<string[]>([])

    useEffect(() => {
       fetch(config.BACKEND_BASE_URL + "/skills")
           .then(jsonData => jsonData.json())
           .then((data: SkillsFetch) => {
               console.log(data)
               setSkills(data.skills)
               setTopSkills(data.top_skills)
               setShownSkills(data.top_skills)
        })
    }, []);

    const handleSearch = (ev: any) => {
        const newValue = ev.target.value ?? '';
        setSearch(newValue);
        updateShownSkills(selectedSkills)
    }

    const updateShownSkills = (selected: string[]) => {
        if(search === ''){
            setShownSkills(topSkills.filter(skill => !selected.includes(skill)))
        }else{
            const lowerValue = search.toLowerCase()
            const matchingSkills = skills.filter(skill => skill.toLowerCase().includes(lowerValue) && !selected.includes(skill))
            setShownSkills(matchingSkills)
        }
    }

    const addSkill = (skill: string) => {
        const selected = [...selectedSkills, skill]
        setSelectedSkills(selected)
        updateShownSkills(selected)
    }
    const removeSkill = (skill: string) => {
        const selected = selectedSkills.filter(s => s !== skill)
        setSelectedSkills(selected)
        updateShownSkills(selected)
    }

    return (
        <div className="background">
            <Typography variant={"h1"} >Find your Career</Typography>
            <OutlinedInput placeholder={"Search your skills"} value={search} onChange={handleSearch}/>
            <SkillsBlock skills={shownSkills} onSkillSelected={addSkill} />
            <SkillsBlock skills={selectedSkills} onSkillSelected={removeSkill} />
            <Button variant={"contained"}>
                <Link to="graph">Find out your career</Link>
            </Button>
        </div>)
}

export default HomePage;
