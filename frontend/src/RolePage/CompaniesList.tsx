import {FC} from "react";
import {Box, Link, Typography} from "@mui/material";
import config from "../config";

export interface CompanyType {
    name: string
    link: string
}

const CompanyCard: FC<{ company: CompanyType}> = ({company}) => {

    const containerStyle = {
        border: "1px solid black",
        borderRadius: "10px",
        marginBottom: "10px",
        minWidth: "250px",
        padding: "10px"
    }

    return <Box sx={containerStyle}>
        <Typography >{company.name}</Typography>
        <Link href={company.link}>Click here to apply</Link>
    </Box>
}


interface CompaniesListProps {
    companies: CompanyType[]
}

const CompaniesList: FC<CompaniesListProps> = ({companies}) => {

    const containerStyle = {
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const companiesListStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    }

    return (
        <Box sx={containerStyle}>
            <Typography className="side-bar-header">Some companies you can apply to:</Typography>
            <Box sx={companiesListStyle}>
                {
                    companies.map((company: CompanyType, idx: number) => <CompanyCard company={company} key={idx}/>)
                }
            </Box>

        </Box>
    )
}

export default CompaniesList
