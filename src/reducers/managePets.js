export let state;

export function managePets(state = {pets: []},action){
  switch(action.type){
    case 'ADD_PET':
      let myPets = state.pets
      let newPet = action.pet
      myPets.push(newPet)
      return {pets: myPets }
    case 'REMOVE_PET':
      let myPets2 = state.pets
      let filtPets = myPets2.filter( (pet) =>
       pet.id !== action.id )
      return {pets: filtPets}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
  let names = state.pets.map((pet)=> {return `<li>${pet.name}</li>`}).join(' ');
  let container = document.getElementById('container')
  container.innerHTML = `<ul>${names}</ul>`
}
