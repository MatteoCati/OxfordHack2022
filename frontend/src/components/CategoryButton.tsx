import Button from '@mui/material/Button';
import "./CategoryButton.css"

interface ButtonProps{
    name: string
}

const CategoryButton = ({name} : ButtonProps) => {

    return (
        <Button className="btn-medium" sx={{color: 'black'}}>{name}</Button>
    );
  }
  
  export default CategoryButton;