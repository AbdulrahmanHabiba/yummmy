import { displayMeals } from "./search.js";
export async function getArea() {
    let area = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    area = await area.json();
    displayArea(area.meals);
}
export function displayArea(arr) {
    let meals = ``;
    for (let i = 0; i < arr.length; i++) {
        meals += ` 
                <div class="col-md-6 col-lg-3 my-3 shadow text-center ">
                <div  class="area" type= ${arr[i].strArea}>
                        <div class="p-2">
                        <i class="fa-solid fa-city fa-3x"></i>
                        <h4 class="h-25 text-white my-2">${arr[i].strArea}</h4>
                    </div>
                </div>
              </div>
        `;
    }

    document.getElementById("myId").innerHTML = meals;
    $(".area").on("click", (e) => {
        filterByArea($(e.currentTarget).attr('type'))
    })
}

export async function filterByArea(area) {
    $(".loading-container").fadeIn(100)
    let category = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    area = await category.json();
    displayMeals(area.meals.slice(0, 20));
    $(".loading-container").fadeOut(100)

}
