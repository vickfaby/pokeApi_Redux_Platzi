import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";
import StartButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlices";

const PokemonCard = ({ name, image, type, id, favorite }) => {
  const dispatch = useDispatch();

  const tipos = type.map((objetoTipo) => objetoTipo.type.name).join(", ");
  //join vuelve al respuesta un string y los une por un separador
  //console.log(tipos);

const handleOnFavourite = () => {
  dispatch(setFavorite({pokemonId: id}))
}
  return (
    <Card
      style={{ width: 250 }}
      title={name}
      cover={<img src={image} alt={name}></img>}
      extra={
        <StartButton
          isFavorite={favorite}
          onClick={handleOnFavourite}
        ></StartButton>
      }
    >
      <Meta description={tipos}></Meta>
    </Card>
  );
};

export default PokemonCard;
