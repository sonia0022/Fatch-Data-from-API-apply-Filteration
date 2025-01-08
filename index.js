
const output = document.querySelector('#output')
const search = document.querySelector('#search')
const dropdown1 = document.querySelector('#level');
const dropdown2 = document.querySelector('#meal');
const dropdown3 = document.querySelector('#cuisine');

let currentRecipy;


let fetchRecipiesApi = async () => {
    try {
        let recipies = await fetch('https://dummyjson.com/recipes');
        let recipiesData = await recipies.json();
        console.log(recipiesData);
        return recipiesData;
    } catch (error) {
        console.error('Error fetching data:', error);
        output.innerHTML = 'Error fetching data. Please try again later.';
    }
}

fetchRecipiesApi().then((recipiesData) => {
    currentRecipy = recipiesData.recipes;
    generateProductCard(currentRecipy);
});

let generateProductCard = (recipyCard) => {
    output.innerHTML = '';
    recipyCard.forEach((recipy) => {
        const cardHtml = `
        <div class="card" style="width: 18rem;">
        <img src="${recipy.image}" class="card-img-top" alt="Product Image">
        <div class="card-body">
            <h3 class="card-title">${recipy.name}</h3>
            <h4 class="card-subTitle">${recipy.mealType}</h4>
            <div class="col-1">
                <h5 class="card-dep">prepTimeMinutes:</h5>
                <h5 class="card-dep">${recipy.prepTimeMinutes}</h5>
            </div>
            <div class="col-1">
                <h5 class="card-dep">cookTimeMinutes:</h5>
                <h5 class="card-dep">${recipy.cookTimeMinutes}</h5>
            </div>
            <div class="col-1">
                <h5 class="card-dep">Cuisine:</h5>
                <h5 class="card-dep">${recipy.cuisine}</h5>
            </div>
            <div class="col-1">
                <h5 class="card-dep">Level</h5>
                <h5 class="card-dep">${recipy.difficulty}</h5>
            </div>
            <div class="col-1">
                <h5 class="card-dep"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </h5>
                <h5 class="card-dep">${recipy.rating}</h5>
            </div>
        </div>
        <div class="footer">
            <a href="#" class="btn btn-primary">read more</a>
        </div>
    </div>
    `;
        output.innerHTML += cardHtml;
    });
};


let searchTerm = (recipies, itemToSearch) => {
    let item = itemToSearch.toLowerCase();
    let result = recipies.filter((recipy) => {
        let recipyTitle = recipy.name.toLowerCase();
        return recipyTitle.includes(item);
    });
    return result;
};

function handleSearch(userSearch) {
    if (userSearch.trim() === '') {
        generateProductCard(currentRecipy);
    } else {
        let searchResult = searchTerm(currentRecipy, userSearch);
        generateProductCard(searchResult);
        if (searchResult.length === 0) {
            output.innerHTML = `<div>No match found</div>`;
        }
    }
}

let searchLevel = (recipes, level) => {
    let result = recipes.filter((recipe) => {
        let recipeLevel = recipe.difficulty;
        return recipeLevel === level;
    });
    return result;
};

let mealType = (recipes, type) => {
    let result = recipes.filter((recipe) => {
        let recipeLevel = recipe.mealType;
        return recipeLevel.includes(type);
    });
    return result;
};

let cuisine = (recipes, cuisine)=>{
    let result = recipes.filter((recipe)=>{
        let recipeCuisine = recipe.cuisine
        return recipeCuisine === cuisine
    })
    return result
}

dropdown1.addEventListener('change', () => {
    const selectedOption = dropdown1.options[dropdown1.selectedIndex].value;
    if (selectedOption === 'easy') {
        let result = searchLevel(currentRecipy, 'Easy');
        generateProductCard(result);
    } else if (selectedOption === 'medium') {
        let result = searchLevel(currentRecipy, 'Medium');
        generateProductCard(result);
    } else {
        generateProductCard(result);
    }
});

dropdown2.addEventListener('change', () => {
    const selectedOption = dropdown2.options[dropdown2.selectedIndex].value;
    if (selectedOption === 'breakfast') {
        let result = mealType(currentRecipy, 'Breakfast');
        generateProductCard(result);
    } else if (selectedOption === 'lunch') {
        let result = mealType(currentRecipy, 'Lunch');
        generateProductCard(result);
    } else if (selectedOption === 'dinner') {
        let result = mealType(currentRecipy, 'Dinner');
        generateProductCard(result);
    } else if (selectedOption === 'dessert') {
        let result = mealType(currentRecipy, 'Dessert');
        generateProductCard(result);
    } else if (selectedOption === 'snack') {
        let result = mealType(currentRecipy, 'Snack');
        generateProductCard(result);
    } else if (selectedOption === 'appetizer') {
        let result = mealType(currentRecipy, 'Appetizer');
        generateProductCard(result);
    } else if (selectedOption === 'beverage') {
        let result = mealType(currentRecipy, 'Beverage');
        generateProductCard(result);
    } else {
        output.innerHTML = 'Select other options.';
    }
})

dropdown3.addEventListener('change' , ()=>{
    const selectedOption = dropdown3.options[dropdown3.selectedIndex].value;
    if(selectedOption === 'american'){
        let result =  cuisine(currentRecipy , 'American')
        generateProductCard(result)
    }
    else if(selectedOption === 'italian'){
        let result =  cuisine(currentRecipy , 'Italian')
        generateProductCard(result)
    }
    else if(selectedOption === 'asian'){
        let result =  cuisine(currentRecipy , 'Asian')
        generateProductCard(result)
    }
    else if(selectedOption === 'mediterranean'){
        let result =  cuisine(currentRecipy , 'Mediterranean')
        generateProductCard(result)
    }
    else if(selectedOption === 'mexican'){
        let result =  cuisine(currentRecipy , 'Mexican')
        generateProductCard(result)
    }
    else if(selectedOption === 'pakistani'){
        let result =  cuisine(currentRecipy , 'Pakistani')
        generateProductCard(result)
    }
    else if(selectedOption === 'japanese'){
        let result =  cuisine(currentRecipy , 'Japanese')
        generateProductCard(result)
    }
    else if(selectedOption === 'greek'){
        let result =  cuisine(currentRecipy , 'Greek')
        generateProductCard(result)
    }
    else if(selectedOption === 'korean'){
        let result =  cuisine(currentRecipy , 'Korean')
        generateProductCard(result)
    }
    else if(selectedOption === 'moroccan'){
        let result =  cuisine(currentRecipy , 'Moroccan')
        generateProductCard(result)
    }
    else if(selectedOption === 'turkish'){
        let result =  cuisine(currentRecipy , 'Turkish')
        generateProductCard(result)
    }
    else if(selectedOption === 'indian'){
        let result =  cuisine(currentRecipy , 'Indian')
        generateProductCard(result)
    }
    else if(selectedOption === 'thai'){
        let result =  cuisine(currentRecipy , 'Thai')
        generateProductCard(result)
    }
    else if(selectedOption === 'russian'){
        let result =  cuisine(currentRecipy , 'Russian')
        generateProductCard(result)
    }
    else if(selectedOption === 'brazilian'){
        let result =  cuisine(currentRecipy , 'Brazilian')
        generateProductCard(result)
    }
    else if(selectedOption === 'lebanese'){
        let result =  cuisine(currentRecipy , 'Lebanese')
        generateProductCard(result)
    }
    else{
        generateProductCard(result);
    }
})



