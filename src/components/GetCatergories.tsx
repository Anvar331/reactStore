import { useEffect, useState } from 'react';

function GetCategories() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        categories()
    },[])

    const categories = async () => {
        const response = await fetch ('https://dummyjson.com/products/category-list');
        setCategory(await response.json())
    }

    return (
        <div>
          <h1> Here I am showing all categories</h1>
          <ol className="list of categories">

            {category.map((data) => {
             return(
                <li className="list group-item" key={data.id}> {data.title} </li>
             )
        })}

        </ol>
        </div>
    )

 }

 export default GetCategories;


 //fetch('https://dummyjson.com/products/category-list')
 //.then(res => res.json())
 //.then(data => console.log(data));