// Each meal is an object. The meals array stores all available recipes.
const meals = [
  {
    id: 1, name: "Creamy Spaghetti Carbonara", emoji: "🍝", image: "https://www.beefbandits.de/media/69/b1/39/1741004099/spaghetti%20carbonara.jpeg?ts=1741004099", category: "Italian",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
    prepTime: 15, cookTime: 20, servings: 4, difficulty: "Easy", rating: 4.8, reviews: 234,
    ingredients: ["400g spaghetti pasta", "2 large eggs", "100g grated parmesan cheese", "150g pancetta", "2 cloves garlic", "Salt and black pepper"],
    instructions: ["Cook the spaghetti in salted boiling water until al dente.", "Cook the turkey bacon in a pan until golden, then add the garlic.", "Whisk the eggs with parmesan and black pepper in a bowl.", "Toss the hot pasta with the bacon, then remove the pan from the heat.", "Stir in the egg mixture until creamy. Serve immediately."],
    nutrition: { Calories: "520 kcal", Protein: "28g", Carbohydrates: "62g", Fat: "18g", Fiber: "3g", Sodium: "680mg" },
    tips: ["Save a cup of pasta water to loosen the sauce if needed.", "Take the pan off the heat before adding the eggs.", "Finish with extra parmesan and freshly ground pepper."]
  },
  {
    id: 2, name: "Chicken Shawarma Wrap", emoji: "🌯", image: "https://i.etsystatic.com/59588906/r/il/807580/6916968343/il_fullxfull.6916968343_n4to.jpg", category: "Middle Eastern",
    description: "Juicy spiced chicken wrapped with fresh vegetables and a tangy garlic sauce.",
    prepTime: 20, cookTime: 25, servings: 3, difficulty: "Easy", rating: 4.9, reviews: 186,
    ingredients: ["500g chicken breast strips", "3 pita breads", "2 tbsp yogurt", "1 tsp paprika", "1 tsp cumin", "1 cucumber, sliced", "1 tomato, sliced", "Garlic sauce"],
    instructions: ["Mix the chicken with yogurt, paprika, cumin, salt, and pepper.", "Let the chicken marinate for at least 15 minutes.", "Cook in a hot pan until fully cooked and lightly golden.", "Warm the pita breads and spread garlic sauce over each one.", "Add chicken and vegetables, roll up, and serve."],
    nutrition: { Calories: "430 kcal", Protein: "35g", Carbs: "42g", Fat: "13g", Fiber: "4g", Sodium: "590mg" },
    tips: ["Cut the chicken into similar-sized strips for even cooking.", "Add a squeeze of lemon for extra freshness.", "Warm the bread briefly so it folds without tearing."]
  },
  {
    id: 3, name: "Classic Margherita Pizza", emoji: "🍕", image: "https://www.cokespizza.com/assets/images/margherita-full.webp", category: "Italian",
    description: "A simple favorite topped with tomato, mozzarella, and fragrant fresh basil.",
    prepTime: 30, cookTime: 15, servings: 2, difficulty: "Medium", rating: 4.7, reviews: 312,
    ingredients: ["1 prepared pizza dough", "½ cup tomato sauce", "150g mozzarella", "Fresh basil leaves", "1 tbsp olive oil", "A pinch of oregano"],
    instructions: ["Preheat the oven to its highest temperature.", "Stretch the dough onto a lightly floured baking tray.", "Spread a thin layer of tomato sauce over the dough.", "Add mozzarella and a little oregano.", "Bake until the crust is golden, then top with basil and olive oil."],
    nutrition: { Calories: "610 kcal", Protein: "24g", Carbs: "73g", Fat: "24g", Fiber: "4g", Sodium: "790mg" },
    tips: ["Avoid adding too much sauce so the base stays crisp.", "Tear the basil by hand just before serving.", "Preheat the baking tray for a crispier bottom."]
  },
  {
    id: 4, name: "Egyptian Koshari", emoji: "🥘", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/d4/85/02.jpg", category: "Egyptian",
    description: "A beloved Egyptian comfort food with rice, lentils, pasta, chickpeas, and tangy tomato sauce.",
    prepTime: 25, cookTime: 40, servings: 5, difficulty: "Medium", rating: 4.9, reviews: 421,
    ingredients: ["1 cup rice", "1 cup brown lentils", "1 cup small pasta", "1 cup cooked chickpeas", "2 onions, thinly sliced", "2 cups tomato sauce", "Garlic, vinegar, and cumin"],
    instructions: ["Rinse the lentils and simmer until nearly tender.", "Cook the rice, pasta, and lentils separately until ready.", "Fry the sliced onions until crisp and golden.", "Prepare the tomato sauce with garlic, vinegar, and cumin.", "Layer rice, lentils, pasta, and chickpeas. Top with sauce and crispy onions."],
    nutrition: { Calories: "560 kcal", Protein: "19g", Carbs: "96g", Fat: "11g", Fiber: "15g", Sodium: "620mg" },
    tips: ["Keep the crispy onions aside until serving.", "Offer daqqa (garlic-vinegar sauce) for extra flavor.", "Prepare the lentils and sauce ahead to save time."]
  },
  {
    id: 5, name: "Grilled Chicken Salad", emoji: "🥗", image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chiken_salad.jpg", category: "Healthy",
    description: "A fresh and colorful bowl with grilled chicken, crunchy vegetables, and lemon dressing.",
    prepTime: 15, cookTime: 18, servings: 2, difficulty: "Easy", rating: 4.6, reviews: 158,
    ingredients: ["2 chicken breasts", "3 cups lettuce", "1 cucumber", "1 tomato", "½ red onion", "2 tbsp olive oil", "1 lemon", "Salt and black pepper"],
    instructions: ["Season the chicken with salt, pepper, and a little olive oil.", "Grill in a pan until fully cooked, then rest briefly.", "Chop the lettuce, cucumber, tomato, and onion.", "Whisk olive oil with lemon juice for the dressing.", "Slice the chicken and arrange everything in a bowl."],
    nutrition: { Calories: "360 kcal", Protein: "38g", Carbs: "18g", Fat: "15g", Fiber: "5g", Sodium: "410mg" },
    tips: ["Let the chicken rest before slicing to keep it juicy.", "Add the dressing just before serving.", "Try fresh parsley or mint for extra flavor."]
  }
];

const mealName = document.getElementById("mealName");
const description = document.getElementById("description");
const mealImage = document.getElementById("mealImage");
const photoTitle = document.getElementById("photoTitle");
const prepTime = document.getElementById("prepTime");
const cookTime = document.getElementById("cookTime");
const servings = document.getElementById("servings");
const difficulty = document.getElementById("difficulty");
const category = document.getElementById("category");
const rating = document.getElementById("rating");
const reviews = document.getElementById("reviews");
const timeNotice = document.getElementById("timeNotice");
const tabContent = document.getElementById("tabContent");
const randomButton = document.getElementById("randomButton");

let currentMeal = null;
let activeTab = "ingredients";

// Returns a random meal from the meals array.
function getRandomMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

// Displays the selected meal information in the page.
function displayMeal(meal) {
  currentMeal = meal;
  mealName.textContent = meal.name;
  description.textContent = meal.description;
  mealImage.src = meal.image;
  mealImage.alt = meal.name;
  photoTitle.textContent = meal.name;
  prepTime.textContent = `${meal.prepTime} min`;
  cookTime.textContent = `${meal.cookTime} min`;
  servings.textContent = `${meal.servings} people`;
  difficulty.textContent = meal.difficulty.toUpperCase();
  category.textContent = meal.category.toUpperCase();
  rating.textContent = meal.rating;
  reviews.textContent = `(${meal.reviews} reviews)`;

  // Show the notice when total preparation and cooking time exceeds 45 minutes.
  timeNotice.hidden = meal.prepTime + meal.cookTime <= 45;
  displayTab(activeTab);
}

// Displays the content of the selected tab.
function displayTab(tabName) {
  activeTab = tabName;
  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  if (tabName === "ingredients") {
    tabContent.innerHTML = `<ul class="ingredient-list">${currentMeal.ingredients
      .map(function (ingredient) { return `<li>${ingredient}</li>`; }).join("")}</ul>`;
  } else if (tabName === "instructions") {
    tabContent.innerHTML = `<ol class="steps">${currentMeal.instructions
      .map(function (step) { return `<li>${step}</li>`; }).join("")}</ol>`;
  } else if (tabName === "nutrition") {
    tabContent.innerHTML = `<div class="nutrition-grid">${Object.entries(currentMeal.nutrition)
      .map(function (item) {
        return `<div class="nutrition-item"><span>${item[0]}</span><strong>${item[1]}</strong></div>`;
      }).join("")}</div>`;
  } else if (tabName === "tips") {
    tabContent.innerHTML = `<ul class="tips-list">${currentMeal.tips
      .map(function (tip) { return `<li>${tip}</li>`; }).join("")}</ul>`;
  }
}

// Event listeners for recipe tabs.
document.querySelectorAll(".tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    displayTab(tab.dataset.tab);
  });
});

// Select and display another random recipe.
randomButton.addEventListener("click", function () {
  let nextMeal = getRandomMeal();

  // Avoid showing the same meal twice in a row when there is more than one option.
  while (meals.length > 1 && nextMeal.id === currentMeal.id) {
    nextMeal = getRandomMeal();
  }

  displayMeal(nextMeal);
});

// Show a random recipe when the application first loads.
displayMeal(getRandomMeal());
