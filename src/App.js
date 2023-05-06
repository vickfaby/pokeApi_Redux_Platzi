import { Col } from "antd";
import { useEffect } from "react";
import logo from "../src/statics/logo.svg";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { get, getIn } from "immutable";
import { fetchPokemonsWithDetails } from "./slices/dataSlices";
import "antd/dist/reset.css";
import "./App.css";
import { setLoading } from "./slices/uiSlices";

function App() {
  // REDUX
  //Como funciona Redux con su toolkit?
  //Primero tenemos el estado centralizado que al parecer lo selecciona el useSelector()
  //Luego para modificar dicho estado, necesitamos un objeto llamado "action", el cual contiene dos propiedades: type y payload
  // type funciona como un identificador : type: SET_POKEMON
  // payload contiene el valor que tendra el nuevo estado.
  // por otra parte el dispatch()  es quien toma este objeto action y lo ejecuta
  // sin embargo, dispatch() no decide como ejecutar dicha action, aquí es donde entra en reducer.
  // el reducer tiene dos parametros, el stado inicial y el action, este reducer basado en la informacion del action ejecutará cierto código retornando un objeto que seráel nuevo estado de toda la aplicación

  // hooks API de Redux
  const pokemons = useSelector((state) =>  state.data.pokemons, shallowEqual)
  //getIn(state,['data','pokemons'], shallowEqual)).toJS();  //usdamos el get por el "immutable", toJS() convierte la estrucutra de datos en objeto plano nuevamente
  //shallowequal compara lso valores y no las referencias
  
  const  loading = useSelector((state) =>  state.ui.loading);
  //get(state,['ui','loading']));
  console.log("🚀 ~ file: App.js:28 ~ App ~ loading:", loading)
  // el estado centralizado es el estado inicial en el reducer
  //const loading = false;

  const dispatch = useDispatch();
  //dispatch()es la función que ejecuta el action

  console.log("🚀 ~ file: App.js:12 ~ App ~ pokemons:", pokemons); //ctrl + alt + L

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt=" Pokedux"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large"></Spin>
        </Col>
      ) : (
        <PokemonList pokemons={pokemons}></PokemonList>
      )}
    </div>
  );
}

export default App;
