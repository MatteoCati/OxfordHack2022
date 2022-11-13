import CategoryButton from './components/CategoryButton';
import config from "./config"
import RolesDialog from "./RolesDialog";
import { FC, useEffect, useState } from "react";
import { ICategory, Page } from './common';

interface GraphPageProps {
    setCurrentPage: (page: number) => void,
}

const GraphPage: FC<GraphPageProps> = ({setCurrentPage}) => {
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
        setCurrentPage(Page.GRAPH)
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
