let myRespose = [];
let Meals = [];
let arr = [];
import { slider } from "./slider.js";
import { searchName , displayMeals} from "./search.js";
import { getCategory ,filterByCategory ,displayCategory} from "./category.js";
import { displayDetails  ,getDetails } from "./details.js";
import { getArea } from "./area.js";
import { getIngredient } from "./ingredients.js";
slider()
searchName("pi")
function searchStyle() {

        if ($(".search ").css("display") == "none") {
            $(".search ").css({ display: "block" })
        }
        else if ($(".search ").css("display") == "block") {
            $(".search ").css({ display: "none" })
        }

}
function filterList() {
    let x = $("ul li").click((e) => {
        let selectedLi = e.target.classList[0];
        if (selectedLi == "li_1") {
            $(".loading-container").fadeIn(100)

            document.getElementById("myId").innerHTML = "";
            searchStyle()
            searchName();
            $(".loading-container").fadeOut(100)
        }
        else if (selectedLi == "li_2") {
            $(".search ").css({ display: "none" })
            $(".loading-container").fadeIn(100)
            document.getElementById("myId").innerHTML = "";
            getCategory()
            $(".loading-container").fadeOut(100)

        }
        else if (selectedLi == "li_3") {
            $(".search ").css({ display: "none" })
            $(".loading-container").fadeIn(100)
            document.getElementById("myId").innerHTML = "";
            getArea()
            $(".loading-container").fadeOut(100)

        }
        else if (selectedLi == "li_4") {
            $(".search ").css({ display: "none" })
            $(".loading-container").fadeIn(100)
            document.getElementById("myId").innerHTML = "";
            getIngredient()
            $(".loading-container").fadeIn(100)

        }
        else if (selectedLi == "li_5") {
            $(".search ").css({ display: "none" })
            document.getElementById("myId").innerHTML = `
              <section id="contact" class="container myM w-75 mx-auto mb-5 ">
		<div class="p-2">
			<h2 class="text-light mb-5">ContacUs...</h2>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group ">
						<input class="form-control shadow-lg" onkeyup="validationOne()" id="name"
							placeholder="Enter Your Name">
						<div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
							Special Characters and Numbers not allowed
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validationTow()" class="form-control" id="email" placeholder="Enter Email">
						<div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
							Enter valid email. *Ex: xxx@yyy.zzz
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validationThree()" class="form-control" id="phone" placeholder="Enter phone">
						<div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
							Enter valid Phone Number
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validationFour()" class="form-control" id="age" placeholder="Enter Age">
						<div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
							Enter valid Age
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validationFive()" class="form-control" type="password" id="password"
							placeholder="Enter Password">
						<div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
							Enter valid password *Minimum eight characters, at least one letter and one number:*
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validationSix()" class="form-control" type="password" id="rePassword"
							placeholder="Enter RePassword">
						<div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
							Enter valid Repassword
						</div>
					</div>
				</div>


			</div>

			<button type="submit" disabled id="submitBtn" class="btn btn-outline-danger mt-3">Submit</button>
		</div>

	</section>
            
            `;
            
        }
        
        
    }
    )
}
filterList()

//validation *************-------------------------------------------//
let userName,
    userEmail,
    userPhone,
    userAge,
    userPassword,
    userRePassword,
    userNameAlert,
    userEmailAlert,
    userPhoneAlert,
    userAgeAlert,
    userpasswordAlert,
    userRepasswordAlert;



function validationOne() {
    let userName = document.getElementById("name")
    let namealert = document.getElementById("namealert")
    // console.log(userName.value);
    var regexName = /^[a-zA-Z ]+$/
    console.log(regexName.test(userName.value));
    if (regexName.test(userName.value) == true) {
        userName.classList.add("is-valid")
        namealert.classList.replace('d-block', 'd-none')
        userName.classList.remove("is-invalid")
    }
    else {
        userName.classList.add("is-invalid")
        namealert.classList.replace('d-none', 'd-block')
        userName.classList.remove("is-valid")
    }
}
function validationTow() {
    let userEmail = document.getElementById("email");
    let emailalert = document.getElementById("emailalert");
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(regexEmail.test(userEmail.value));
    if (regexEmail.test(userEmail.value) == true) {
        userEmail.classList.add("is-valid")
        emailalert.classList.replace('d-block', 'd-none')
        userEmail.classList.remove("is-invalid")
    }
    else {
        userEmail.classList.add("is-invalid")
        emailalert.classList.replace('d-none', 'd-block')
        userEmail.classList.remove("is-valid")
    }
    // console.log('hi');
}
function validationThree() {
    let userPhone = document.getElementById("phone")
    let phonealert = document.getElementById("phonealert");
    var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (regexPhone.test(userPhone.value) == true) {
        userPhone.classList.add("is-valid")
        phonealert.classList.replace('d-block', 'd-none')
        userPhone.classList.remove("is-invalid")
    }
    else {
        userPhone.classList.add("is-invalid")
        userPhone.classList.remove("is-valid")
        phonealert.classList.replace('d-none', 'd-block')

    }
}
function validationFour() {
    let userAge = document.getElementById("age")
    let agealert = document.getElementById('agealert');
    var regexAge = /^[1-9][0-9]?$|^100$/
    if (regexAge.test(userAge.value) == true) {
        userAge.classList.add("is-valid")
        agealert.classList.replace('d-block', 'd-none')
        userAge.classList.remove("is-invalid")
    }
    else {
        userAge.classList.add("is-invalid")
        agealert.classList.replace('d-none', 'd-block')
        userAge.classList.remove("is-valid")
    }
}
function validationFive() {
    let userPassword = document.getElementById("password")
    let passwordalert = document.getElementById("passwordalert")
    var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regexPassword.test(userPassword.value) == true) {
        userPassword.classList.add("is-valid")
        passwordalert.classList.replace('d-block', 'd-none')
        userPassword.classList.remove("is-invalid")
    }
    else {
        userPassword.classList.add("is-invalid")
        passwordalert.classList.replace('d-none', 'd-block')
        userPassword.classList.remove("is-valid")
    }
}
function validationSix() {
    let userRePassword = document.getElementById("rePassword");
    let userPassword = document.getElementById("password")
    let repasswordalert = document.getElementById("repasswordalert")
    if (userPassword.value == userRePassword.value) {
        userRePassword.classList.add("is-valid")
        repasswordalert.classList.replace('d-block', 'd-none')
        userRePassword.classList.remove("is-invalid")
    }
    else {
        userRePassword.classList.add("is-invalid")
        repasswordalert.classList.replace('d-none', 'd-block')
        userRePassword.classList.remove("is-valid")
    }
}

