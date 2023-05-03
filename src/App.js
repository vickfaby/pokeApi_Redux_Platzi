import { useEffect, useState } from "react";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "../src/statics/logo.svg";
import "antd/dist/reset.css";
import "./App.css";
import getPokemon from "./api";

function App() {
  const [pokemons, setPokemons ] = useState(["mentiras"]);



  useEffect(() => {
    const fetchPokemons = async () => { 
      const pokemonsRes =  await  getPokemon(); 
     setPokemons(pokemonsRes)
    };
    fetchPokemons();
  },[]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt=" Pokedux"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col>
      <PokemonList pokemons={pokemons} ></PokemonList>
    </div>
  );
}

export default App;
