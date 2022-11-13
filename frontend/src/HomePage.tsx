import {FC, useEffect, useState} from "react";
import config from "./config"
import SkillsBlock from "./SkillsBlock";
import {Typography, OutlinedInput, Button, Box} from "@mui/material"
import "./HomePage.css"
import { Link } from "react-router-dom";
import { Page } from "./common";

interface SkillsFetch {
    top_skills: string[]
    skills: string[]
}

interface HomePageProps {
    selectedSkills: string[];
    setSelectedSkills: (newSkills: string[]) => void,
    setCurrentPage: (page: number) => void,
}

const HomePage: FC<HomePageProps> = ({selectedSkills, setSelectedSkills, setCurrentPage}) => {

    const [search, setSearch] = useState<string>('')
    const [skills, setSkills] = useState<string[]>([])

    const [shownSkills, setShownSkills] = useState<string[]>([])
    const [topSkills, setTopSkills] = useState<string[]>([])

    useEffect(() => {
        setCurrentPage(Page.HOME)
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
        width: "300px",
        backgroundColor: config.COLORS.SECONDARY,
        color: config.COLORS.PRIMARY,
        border: "none",
        
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "inherit",
        justifyContent: "flex-end",
    }

    return (
        <Box sx={containerStyle}>
            <Typography variant={"h1"} className="header-style" sx={{color: config.COLORS.PRIMARY}}>FIND YOUR CAREER</Typography>
            <OutlinedInput placeholder={"Search your skills"} value={search} onChange={handleSearch} sx={searchStyle}/>
            <Typography className="little-text" sx={{color: config.COLORS.PRIMARY}}>Top results:</Typography>
            <SkillsBlock skills={shownSkills} onSkillSelected={addSkill} defaultText={'No skill available'}/>
            <Typography className="little-text" sx={{color: config.COLORS.PRIMARY}}>Your skills:</Typography>
            <SkillsBlock skills={selectedSkills} onSkillSelected={removeSkill} defaultText={'Select some skills to start...'}/>
            <Box className="button-container"><Button variant={"contained"} component={Link} to={"/graph"} sx={buttonStyle}>Find out your career</Button></Box>
        </Box>)
}

export default HomePage;
