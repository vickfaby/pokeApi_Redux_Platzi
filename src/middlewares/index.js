export const logger = (store) => (next) => (action) => {
  console.log('Este es el objetoData-action')
  console.log(action);
  next(action);
}; // funcion q retorna otra funcion
// 1ero recibe el store de la aplicacion, el next es la funcion q llamaremos cuando el middlewear termine su trabajo, y esta funcion manda el action al reducer.

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [  //se unen el nuevo pokemons y los 151 pokemons anteriores
    {
      name: "eddie",    // nuevo pokemon
    },
    ...actionInfo.action.payload, // 151 pokemons
  ];

  const updateActionInfo = {
    ...actionInfo, // copia el action anterior
    action: { // modifica el accion
      ...actionInfo.action, // conpia la info del action anterior
      payload: featured, // incluye el nuevo payload con el nuevo pokemon
    },
  };
  next(updateActionInfo); // envia el updateActionInfo al reducer
};


export const  firstLastPokemon = ( store ) => (next) => (objetoData) => {

  const compañia = [ // crea el nuevo Array
    {name: 'primero'}, // pokemon añadido
    ...objetoData.action.payload, // trae los 151 pokemons
    {name: 'ultimo'} // pokemon añadido
  ];

  const actualizarInfo = { // envia estado y action.
    ...objetoData, //trae el objeto Data
    action: { // modifica en action!
      ...objetoData.action,
      payload: compañia,
    },
  };
   next( actualizarInfo );

}