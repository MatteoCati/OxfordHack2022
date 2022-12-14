import { Box, List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import { IRole } from '../common';
import "./CategoryButton.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ButtonProps{
    name: string,
    rating: number,
    roles: IRole[],
    left: string,
    top: string,
    onClick: () => void
}

const CategoryButton = ({name, rating, roles, left, top, onClick} : ButtonProps) => {


    let counter = rating == 0 ? 1 : (rating == 1 ? 3 : 2)

    return (
        <Button
            className={ "btn-expandable " + (rating == 0 ? "btn-small" : (rating == 1 ? "btn-medium" : "btn-large"))}
            sx={{color: 'black', left: {left}, top: {top}}}
            onClick={onClick}
            aria-label={name}
        >
            <List className="role-list">
                <ListItem className={ rating == 0 ? "list-item-small" : (rating == 1 ? "list-item-medium" : "list-item-large")}>
                    <h2>{name}</h2>
                </ListItem>
                {roles.map(role => {
                    counter -= 1
                    return(
                        counter >= 0 ? <ListItem className={ rating == 0 ? "list-item-small" : (rating == 1 ? "list-item-medium" : "list-item-large")} sx={{textAlign: "center"}}>{role.name}</ListItem> : <Box />
                    );
                })}
                <ListItem className={ rating == 0 ? "list-item-small" : (rating == 1 ? "list-item-medium" : "list-item-large")}><MoreHorizIcon/></ListItem>
            </List>
        </Button>
    );
  }

  export default CategoryButton;
