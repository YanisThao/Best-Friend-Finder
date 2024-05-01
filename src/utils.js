
export const adoptPet = (pet) => {
    let userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData.adoptedPets) {
      userData.adoptedPets = [];
    }
    userData.adoptedPets.push(pet);
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Pet adopted successfully!');
  };
  