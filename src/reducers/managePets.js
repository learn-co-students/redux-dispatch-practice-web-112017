export let state;


export function managePets(state = { pets: [], }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]};
      break;
    case 'REMOVE_PET':
      let petToRemove = state.pets.findIndex(p => p.id === action.id);
      return {...state, pets: [...state.pets.slice(0, petToRemove), ...state.pets.slice(petToRemove + 1)]};
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let container = document.getElementById('container')
  let list = state.pets.map((p) => {
    return `<li>${p.name}</li>`;
  }).join(' ')
  container.innerHTML = `<ul>${list}</ul>`
}
