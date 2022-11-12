import { ListItem, ListSubheader } from '@mui/material';
import Button from '@mui/material/Button';
import { IRole } from '../common';
import "./CategoryButton.css"

interface ButtonProps{
    name: string,
    rating: number,
    roles: IRole[],
    left: string,
    top: string,
}

const CategoryButton = ({name, rating, roles, left, top} : ButtonProps) => {

    console.log(rating)

    return (
        <Button 
            className={ rating == 0 ? "btn-small" : (rating == 1 ? "btn-medium" : "btn-large")} 
            sx={{color: 'black', left: {left}, top: {top}}}
        >
            <ListSubheader>{name}</ListSubheader>
            {roles.map(role => 
                <ListItem>{role.name}</ListItem>
            )}
        </Button>
    );
  }
  
  export default CategoryButton;
  