

//}
export function displayDetails(meal) {
    document.getElementById("myId").innerHTML = "";
    let recipes = ""
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            recipes += `<li class="my-3 mx-1 p-1 alert-success rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    let tagsStr = ""
    for (let i = 0; i < tags?.length; i++) {
        tagsStr += `<li class="my-3 mx-1 p-1 alert-danger rounded">${tags[i]}</li>`
    }

    let meals = '';
    meals += `
        <div class="col-md-4 ps-1 text-white">
          <img src="${meal.strMealThumb}"  class="w-100" alt="" />
          <h2>${meal.strMeal}</h2>
        </div>
        <div class="ps-4 col-md-8 text-white">
          <h5 class="fs-4">Instructions</h5>
          <p class="py-2 lh-base">
           ${meal.strInstructions}
          </p>
          <p><b class="fw-bolder">Area :</b> ${meal.strArea}</p>
          <p><b class="fw-bolder">Category :</b> ${meal.strCategory}</p>
          <h5 class="fs-4 mb-4">Recipes :</h5>
          <span id="recipe" class=" text-black rounded-2 py-1 ">
          <ul class="d-flex " id="recipes">
          </span>
        </ul>
        <h3 class="my-2 mx-1 p-1 text-white">Tags :</h3>
        <ul class="d-flex " id="tags">
        </ul>
        <a class="btn btn-success " target="_blank" href="http://${meal.strSource}">Source</a>
		<a class="btn btn-danger  ms-1" target="_blank" href="http://${meal.strYoutube}">Youtub</a>
          </div>
        `
    document.getElementById("myId").innerHTML = meals;
    document.getElementById("recipes").innerHTML = recipes
    document.getElementById("tags").innerHTML = tagsStr
    $("html, body").animate({
        scrollTop: 0
    }, 200)


}
export async function getDetails(ID) {
    $(".loading-container").fadeIn(100)
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`);
    meal = await meal.json();
    console.log(meal.meals[0]);
    console.log("Kumpir");
    let data = meal.meals
    displayDetails(data[0]);
    $(".loading-container").fadeOut(500)

}
