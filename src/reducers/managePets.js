export let state;


export function managePets(state={ pets:[] }, action){
  switch(action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let newPets = state.pets.filter(p => p.id !== action.id)
      return { pets: newPets }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let main = document.getElementById('container')
  let lis = state.pets.map(p => `<li>${p.name}</li>`)
  main.innerHTML = "<ul>" + lis + "</ul>"
}
