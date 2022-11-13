import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {FC} from "react";
import {ICategory, IRole} from "./common";
import config from "./config";
import { useNavigate } from "react-router-dom";

//import CloseIcon from '@mui/icons-material/Close';


interface RoleCardProps {
    role: IRole
}

const RoleCard: FC<RoleCardProps> = ({role}) => {

    const navigate=useNavigate()
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        border: "1px solid black",
        borderRadius: "10px",
        marginBottom: "5px",
        width: "400px",
        textDecoration: "none",
        color: config.COLORS.TEXT
    }
    return <Button sx={containerStyle} component={"div"} onClick={() => navigate("/role/"+role.id)}>
        <Typography variant={"h5"}>{role.name}</Typography>
        <Typography variant={"h6"}>Compatibility: {role.percentage}%</Typography>
    </Button>
}


interface RolesDialogProps {
    open: boolean
    onClose: () => void
    category: ICategory | undefined
}

const RolesDialog: FC<RolesDialogProps> = ({open, onClose, category}) => {

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
    }

    if(!category) {
        return <div></div>
    }

    return <Dialog open={open} onClose={onClose}>
        <DialogTitle variant={"h3"} color={config.COLORS.TEXT} align={"center"}>
            {category.name}
            </DialogTitle>
        <DialogContent sx={containerStyle}>
            {category.roles.map(role => <RoleCard role={role}/>)}
        </DialogContent>
    </Dialog>
}

export default RolesDialog
