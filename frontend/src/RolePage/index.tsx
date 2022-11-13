import {FC, useEffect, useState} from "react"
import {Box, Drawer, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import config from "../config";
import MatchingSkills from "./MatchingSkills"
import HiringGraph from "./HiringGraph";
import CompaniesList, {CompanyType} from "./CompaniesList";
import { Page } from "../common";
import "./Role.css"

interface RoleType {
    id: number
    name: string,
    skills: string[]
    graphX: string[]
    graphY: number []
    companies: CompanyType[]
    gender: number[]
    avgSalary: number
}

interface RolePageProps {
    selectedSkills: string[],
    setCurrentPage: (page: number) => void,
}

const  RolePage: FC<RolePageProps> = ({ selectedSkills, setCurrentPage }) => {
    const [role, setRole] = useState<RoleType | null>(null)
    const {roleId} = useParams();
    useEffect(() => {
        setCurrentPage(Page.ROLE)
        fetch(config.BACKEND_BASE_URL+"/role/"+roleId)
            .then(val => val.json())
            .then((data: RoleType) => {
                setRole(data)
            })
    }, [])

    const drawerWidth = "300px"
    

    if(role === null){
        return <div></div>
    }

    return (
        <Box className="role-container">
            <Box className="main-box">
                <Typography className="role-header" sx={{color: config.COLORS.PRIMARY}}>{role.name}</Typography>
                <MatchingSkills selectedSkills={selectedSkills} requiredSkills={role.skills}/>
                <HiringGraph graphX={role.graphX} graphY={role.graphY}/>
            </Box>
            <Box className="side-bar" sx={{backgroundColor: config.COLORS.PRIMARY, color: config.COLORS.BACKGROUND}}>
                <CompaniesList companies={role.companies}/>
            </Box>
        </Box>
    );
}

export default RolePage;
