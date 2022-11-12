import {FC} from "react";
import {Box, Link, Typography} from "@mui/material";

export interface CompanyType {
    name: string
    link: string
}

const CompanyCard: FC<{ company: CompanyType}> = ({company}) => {

    const containerStyle = {
        border: "1px solid black",
        borderRadius: "10px",
        marginBottom: "10px",
        width: "100%",
        padding: "10px"
    }

    return <Box sx={containerStyle}>
        <Typography>{company.name}</Typography>
        <Link href={company.link}>Click here to apply</Link>
    </Box>
}


interface CompaniesListProps {
    companies: CompanyType[]
}

const CompaniesList: FC<CompaniesListProps> = ({companies}) => {
    return (
        <Box>
            <Typography variant={"h3"}>Some companies you can apply to:</Typography>
            {
                companies.map((company: CompanyType, idx: number) => <CompanyCard company={company} key={idx}/>)
            }
        </Box>
    )
}

export default CompaniesList
