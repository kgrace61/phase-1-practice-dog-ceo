console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgContainer = document.getElementById('dog-image-container');
const dogBreedContainer = document.getElementById('dog-breeds')

document.addEventListener('DOMContentLoaded', function () {
    fetch(imgUrl)
    .then (response => response.json())
    .then (data => {
        data.message.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgContainer.appendChild(imgElement);
        })
    })
        .catch (error => console.error('error fetching data', error));
})

document.addEventListener('DOMContentLoaded', function () {
    fetch(breedUrl)
    .then (response => response.json())
    .then (data => {
        Object.keys(data.message).forEach(breed => {
            const dogBreedElement = document.createElement('li');
            dogBreedElement.textContent = breed;
            dogBreedContainer.appendChild(dogBreedElement);

            dogBreedElement.addEventListener('click', function () {
                dogBreedElement.style.color = 'pink';
            })
        })
    })
    .catch(error => console.error('error fetching data', error));
})

document.addEventListener('DOMContentLoaded', function(){
    const breedDropdown = document.getElementById('breed-dropdown')
    
    function filterBreeds(letter) {
        dogBreedContainer.innerHTML = '';
    
    fetch(breedUrl)
    .then (response => response.json())
    .then (data => {
        Object.keys(data.message).forEach(breed => {
            if(breed.startsWith(letter)) {
                const dogBreedElement = document.createElement('li');
                dogBreedElement.textContent = breed; 
                dogBreedContainer.appendChild(dogBreedElement);
                }
            })
        })
        .catch(error => console.error('error fetching data', error));
    }
    breedDropdown.addEventListener('change', function () {
        const selectedLetter = breedDropdown.value;
        filterBreeds(selectedLetter);
    })
    filterBreeds('a');
})