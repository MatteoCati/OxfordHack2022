import { Box, List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import { IRole } from '../common';
import "./CategoryButton.css";

interface ButtonProps{
    name: string,
    rating: number,
    roles: IRole[],
    left: string,
    top: string,
}

const CategoryButton = ({name, rating, roles, left, top} : ButtonProps) => {


    let counter = rating == 0 ? 3 : (rating == 1 ? 4 : 4)

    return (
        <Button 
            className={ rating == 0 ? "btn-small" : (rating == 1 ? "btn-medium" : "btn-large")} 
            sx={{color: 'black', left: {left}, top: {top}}}
        >
            <List className="role-list">
                <ListItem className={ rating == 0 ? "list-item-small" : (rating == 1 ? "list-item-medium" : "list-item-large")}>
                    <h2>{name}</h2>
                </ListItem>
                {roles.map(role => {
                    counter -= 1
                    return(
                        counter >= 0 ? <ListItem className={ rating == 0 ? "list-item-small" : (rating == 1 ? "list-item-medium" : "list-item-large")}>{role.name}</ListItem> : <Box />
                    );
                })}
            </List>
        </Button>
    );
  }
  
  export default CategoryButton;
  