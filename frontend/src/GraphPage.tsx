import CategoryButton from './components/CategoryButton';
import config from "./config"
import { useEffect, useState } from "react";
import { ICategory } from './common';
import ReactWordcloud from 'react-wordcloud';

// need a list of categories that we will get from the request and pass a category to a custom button object

function GraphPage() {
    const [categories, setCategories] = useState<ICategory[]>([])
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

    const words = [
    {
        text: 'told',
        value: 64,
    },
    {
        text: 'mistake',
        value: 11,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
    ]


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
                />
            );
        })}
        <ReactWordcloud words={words} />
      </div>
    );
  }

  export default GraphPage;
