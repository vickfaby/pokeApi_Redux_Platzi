import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ( { name } ) => {
  return (
    <Card
      style={{ width: 250 }}
      title={ name }
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt="Ditto"
        ></img>
      }
      extra= { <StarOutlined></StarOutlined> }
    >
      <Meta description={"fire, magic"}></Meta>
    </Card>
  );
};

export default PokemonCard;
