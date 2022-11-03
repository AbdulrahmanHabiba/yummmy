import { displayDetails ,getDetails  } from "./details.js";
export async function searchName(key) {
        $(".loading-container").fadeIn(100)
        let meals = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`
        );
        meals = await meals.json();
        let data = meals.meals;
    displayMeals(data);
    $(".loading-container").fadeOut(100)

}
export function displayMeals(arr) {
    
    let meals = ``;
    for (let i = 0; i < arr.length; i++) {
        //onclick = "${getDetails(52772)}" 
        meals += `
                <div class="col-md-6 col-lg-3 my-3 shadow postParent ">
                <div class="post" type=${arr[i].idMeal} >
                    <img src='${arr[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer d-flex align-items-center rounded " >
                        <div class="info p-2">
                            <h2>${arr[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
              </div>
        `;
    }
    document.getElementById("myId").innerHTML = meals;
    $(".post").on("click", (e) => {
        getDetails($(e.currentTarget).attr('type'))
    })
}


$("#searchName").keyup((e) => {
    searchName(e.target.value);
});
$("#searchLetter").keyup((e) => {
    getByLetter(e.target.value)
})
$('#searchLetter').on("input", function () {
    if (this.value.length > 1)
        this.value = this.value.slice(0, 1);
});

async function getByLetter(letter) {
    if (letter) {
        $(".loading-container").fadeIn(100)
        let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        meals = await meals.json()
        if (meals.meals) {
            displayMeals(meals.meals)
        }
        $(".loading-container").fadeOut(100)
    }
}