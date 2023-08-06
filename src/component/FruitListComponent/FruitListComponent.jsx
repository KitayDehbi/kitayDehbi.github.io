import { FruitComponent } from "../FruitComponent/FruitComponent";
import "./FruitListComponent.css";
import { useEffect, useState } from "react";
import { getFruitListService } from "../../service/fruitService/FruitService";

export const FruitListComponent = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseList = await getFruitListService();
      setList(responseList);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {list
        .filter((element) => element.roman_name !== "")
        .sort((a, b) => a.filename > b.filename)
        .map((element) => (
          <FruitComponent
          key={element.id}
          id={element.id}
            image={element.filename}
            category={element.type}
            name={element.roman_name}
            description={element.description}
          />
        ))}
    </div>
  );
};
