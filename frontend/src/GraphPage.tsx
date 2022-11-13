import CategoryButton from './components/CategoryButton';
import config from "./config"
import { useEffect, useState } from "react";
import { ICategory } from './common';
import RolesDialog from "./RolesDialog";

// need a list of categories that we will get from the request and pass a category to a custom button object

function GraphPage() {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)
    const [dialogContent, setDialogContent] = useState<ICategory>()
    const coordinates = [
        ["10%", "45%"], //small
        ["73%", "36%"], //small
        ["55%", "59%"], //medium
        ["24%", "15%"], //medium
        ["45%", "10%"], //large
        ["28%", "49%"]  //large
    ]
    let counter = 6

    useEffect(() => {
        fetch(config.BACKEND_BASE_URL + "/categories")
            .then(jsonData => jsonData.json())
            .then((data: ICategory[]) => {
                console.log(data)
                setCategories(data)
         })
     }, []);

    const handleDialogClose = ()=> {
        setDialogOpen(false)
    }

    return (
      <div>
        <h1>This is the graph page</h1>
        {categories.map(category => {
            counter -= 1;
            return (<CategoryButton
                name={category.name}
                roles={category.roles}
                rating={Math.floor(counter/2)}
                left={coordinates[counter][0]}
                top={coordinates[counter][1]}
                onClick={() => {
                    setDialogContent(category)
                    setDialogOpen(true)
                }}
                />
            );
        })}
         <RolesDialog category={dialogContent!} open={dialogOpen} onClose={handleDialogClose}/>
      </div>
    );
  }

  export default GraphPage;
