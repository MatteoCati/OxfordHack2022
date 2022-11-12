import {FC, useEffect, useState} from "react";
import config from "./config"
import SkillsBlock from "./SkillsBlock";
import {Typography, OutlinedInput, Button} from "@mui/material"
import "./HomePage.css"
import {Link} from "react-router-dom";

interface SkillsFetch {
    top_skills: string[]
    skills: string[]
}

interface HomePageProps {
    selectedSkills: string[];
    setSelectedSkills: (newSkills: string[]) => void,
}

const HomePage: FC<HomePageProps> = ({selectedSkills, setSelectedSkills}) => {
    const [search, setSearch] = useState<string>('')
    const [skills, setSkills] = useState<string[]>([])

    const [shownSkills, setShownSkills] = useState<string[]>([])
    const [topSkills, setTopSkills] = useState<string[]>([])

    useEffect(() => {
       fetch(config.BACKEND_BASE_URL + "/skills")
           .then(jsonData => jsonData.json())
           .then((data: SkillsFetch) => {
               setSkills(data.skills)
               setTopSkills(data.top_skills)
               setShownSkills(data.top_skills)
        })
    }, []);

    const handleSearch = (ev: any) => {
        const newValue = ev.target.value ?? '';
        console.log(newValue)
        setSearch(newValue);
        updateShownSkills(selectedSkills, newValue)
    }

    const updateShownSkills = (selected: string[], searchText: string) => {
        if(searchText === ''){
            setShownSkills(topSkills.filter(skill => !selected.includes(skill)))
        }else{
            const lowerValue = searchText.toLowerCase()
            const matchingSkills = skills.filter(skill => skill.toLowerCase().includes(lowerValue) && !selected.includes(skill))
            setShownSkills(matchingSkills)
        }
    }

    const addSkill = (skill: string) => {
        const selected = [...selectedSkills, skill]
        setSelectedSkills(selected)
        updateShownSkills(selected, search)
    }
    const removeSkill = (skill: string) => {
        const selected = selectedSkills.filter(s => s !== skill)
        setSelectedSkills(selected)
        updateShownSkills(selected, search)
    }

    const buttonStyle = {
        backgroundColor: config.COLORS.SECONDARY,
        '&:hover': {
            backgroundColor: config.COLORS.ACCENT,
        },
        '&:active': {
            backgroundColor: config.COLORS.ACCENT,
        },
    }

    const searchStyle = {
        marginTop: "20px",
        height: "50px",
        marginBottom: "10px",
    }

    const headerStyle  = {
        color: config.COLORS.TEXT
    }
    return (
        <div className="background">
            <Typography variant={"h1"} sx={headerStyle}>Find your Career</Typography>
            <OutlinedInput placeholder={"Search your skills"} value={search} onChange={handleSearch} sx={searchStyle}/>
            <SkillsBlock skills={shownSkills} onSkillSelected={addSkill} defaultText={'No skill available'}/>
            <SkillsBlock skills={selectedSkills} onSkillSelected={removeSkill} defaultText={'Select some skills to start...'}/>
            <Button variant={"contained"} component={Link} to={"/graph"} sx={buttonStyle}>Find out your career</Button>
        </div>)
}

export default HomePage;
