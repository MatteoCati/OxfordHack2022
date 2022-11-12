import {FC, useEffect, useState} from "react"
import {Box, Drawer, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import config from "../config";
import MatchingSkills from "./MatchingSkills"
import HiringGraph from "./HiringGraph";
import CompaniesList, {CompanyType} from "./CompaniesList";

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
    selectedSkills: string[]
}

const  RolePage: FC<RolePageProps> = ({ selectedSkills }) => {
    const [role, setRole] = useState<RoleType | null>(null)
    const {roleId} = useParams();
    useEffect(() => {
        fetch(config.BACKEND_BASE_URL+"/role/"+roleId)
            .then(val => val.json())
            .then((data: RoleType) => {
                setRole(data)
            })
    }, [])

    const drawerWidth = "300px"
    const boxStyle= {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1000px",
        marginLeft: "50px",
        marginRight: drawerWidth,
    }

    if(role === null){
        return <div></div>
    }



    const headerStyle = {
        color: config.COLORS.TEXT,
        marginBottom: "40px",
    }

    return (
        <>
            <Box
                component="nav"
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    anchor="right"
                    open
                >
                    <CompaniesList companies={role.companies}/>
                </Drawer>
            </Box>
          <Box sx={boxStyle}>
                <Typography variant={"h1"} sx={headerStyle}>{role.name}</Typography>
                <MatchingSkills selectedSkills={selectedSkills} requiredSkills={role.skills}/>
                <HiringGraph graphX={role.graphX} graphY={role.graphY}/>

          </Box>
        </>
    );
}

export default RolePage;
