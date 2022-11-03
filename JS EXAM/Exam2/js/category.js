import { displayMeals } from "./search.js";
export async function getCategory() {
  let category = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  category = await category.json();
  displayCategory(category.categories);
}
export function displayCategory(arr) {
  let meals = ``;
  for (let i = 0; i < arr.length; i++) {
    meals += ` 
                <div class="col-md-6 col-lg-3 my-3 shadow ">
                <div id="post" class="post" type= ${arr[i].strCategory}>
                    <img src='${
                      arr[i].strCategoryThumb
                    }' class="w-100 rounded" />
                    <div class="layer d-flex align-items-center rounded " >
                        <div class="info p-2">
                            <h2 class="h-25">${arr[i].strCategory}</h2>
                            <p class="overflow-hidden">${arr[
                              i
                            ].strCategoryDescription
                              .split(" ")
                              .slice(0, 12)
                              .join(" ")}</p>
                        </div>
                    </div>
                </div>
              </div>
        `;
  }

  document.getElementById("myId").innerHTML = meals;
  $(".post").on("click", (e) => {
    filterByCategory($(e.currentTarget).attr("type"));
  });
}

export async function filterByCategory(cat) {
  $(".loading-container").fadeIn(100)
  let category = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
  );
  category = await category.json();
  displayMeals(category.meals);
  $(".loading-container").fadeOut(100)
}
