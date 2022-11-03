import { displayMeals } from "./search.js";
export async function getIngredient() {
    let ingred = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    ingred = await ingred.json();
    displayIngredient(ingred.meals || []);
}
export function displayIngredient(arr) {
    let meals = ``;
    for (let i = 0; i < 20; i++) {
        let decrip = []
        decrip = arr[i].strDescription || '';
        let c = decrip.split(" ").splice(0, 20).join(" ")
        meals += ` 
                <div class="col-md-6 col-lg-3 my-3 shadow text-center ">
                <div class="post" type= ${arr[i].strIngredient}>
                <i class="fa-solid fa-bowl-food fa-3x"></i>
                <h4 class="text-white">${arr[i].strIngredient}</h4>
                <p  class="fs-6 text-white">${c}</p>
                </div>
                </div>
              </div>
        `;
    }

    document.getElementById("myId").innerHTML = meals;
    $(".post").on("click", (e) => {
        filterByIngredient($(e.currentTarget).attr('type'))
    })
}

export async function filterByIngredient(ingred) {
    $(".loading-container").fadeIn(100)
    ingred = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`)
    ingred = await ingred.json();
    displayMeals(ingred.meals);
    $(".loading-container").fadeOut(100)

}
