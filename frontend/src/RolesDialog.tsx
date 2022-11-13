import {Box, Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {FC} from "react";
import {ICategory, IRole} from "./common";
import config from "./config";
import { useNavigate } from "react-router-dom";
import "./RolesDialog.css"
import WorkIcon from '@mui/icons-material/Work';

interface RoleCardProps {
    role: IRole
}

const RoleCard: FC<RoleCardProps> = ({role}) => {

    const navigate=useNavigate()
    
    return <Button sx={{backgroundColor: config.COLORS.SECONDARY}} component={"div"} className="container-style" onClick={() => navigate("/role/"+role.id)}>
        <Typography sx={{color: config.COLORS.PRIMARY}} className="nameBox"><WorkIcon sx={{fontSize: "1rem", padding: "0.35rem 0.5rem"}}/>{role.name}</Typography>
        <Box className="percentageBox">
            <Typography sx={{color: config.COLORS.PRIMARY, fontSize: "0.6rem"}}>Skills match:</Typography>
            <Typography sx={{color: config.COLORS.PRIMARY, fontSize: "1.2rem"}}>{role.percentage}%</Typography>
        </Box>
    </Button>
}


interface RolesDialogProps {
    open: boolean
    onClose: () => void
    category: ICategory | undefined
}

const RolesDialog: FC<RolesDialogProps> = ({open, onClose, category}) => {

    if(!category) {
        return <div></div>
    }

    const paperProps = {
        minWidth: "40rem", 
        height: "32rem", 
        backgroundColor: config.COLORS.BACKGROUND, 
        padding: "0.5rem", 
        borderRadius: "1rem"
    }

    return <Dialog open={open} onClose={onClose} sx={{"& .MuiDialog-paper": paperProps}}>
        <DialogTitle sx={{backgroundColor: config.COLORS.BACKGROUND}} className="role-title" color={config.COLORS.PRIMARY} align={"center"}>
            {category.name}
        </DialogTitle>
        <Typography sx={{color: config.COLORS.PRIMARY, padding: "0 0 0.5rem 0", margin: "0", fontSize: "0.8rem", width: "100%", letterSpacing: "0.1rem", textAlign: "center"}}>Click on a job to see the details...</Typography>
        <DialogContent sx={{backgroundColor: config.COLORS.BACKGROUND}} className="container">
            {category.roles.map(role => <RoleCard role={role}/>)}
        </DialogContent>
    </Dialog>
}

export default RolesDialog
