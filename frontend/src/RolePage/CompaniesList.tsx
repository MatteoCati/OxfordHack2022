import {FC} from "react";
import {Box, Drawer, Link, Typography} from "@mui/material";
import config from "../config";
import "./CompaniesList.css"

export interface CompanyType {
    name: string
    link: string
}

const CompanyCard: FC<{ company: CompanyType}> = ({company}) => {


    return <Box className="company-card-container">
        <Typography sx={{fontSize: "1rem"}}>{company.name}</Typography>
        <Link 
            target="_blank"
            href={company.link} 
            sx={{fontSize: "0.8rem", color: config.COLORS.LINK, textDecorationColor: config.COLORS.LINK}}>
                Click here to apply
        </Link>
    </Box>
}

interface CompaniesListProps {
    companies: CompanyType[]
}

const CompaniesList: FC<CompaniesListProps> = ({companies}) => {

    const drawerWidth = "20rem"

    return (
        <Drawer
                sx={{
                    color: config.COLORS.BACKGROUND,
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: config.COLORS.PRIMARY,
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    },
                }}
                variant="permanent"
                anchor="right"
                aria-label="Suggestions of companies to apply to"
            >
            <Typography className="side-bar-header">Some companies you can apply to:</Typography>
            <Box className="companies-list-style">
                {
                    companies.map((company: CompanyType, idx: number) => <CompanyCard company={company} key={idx}/>)
                }
            </Box>
        </Drawer>
    )
}

export default CompaniesList
