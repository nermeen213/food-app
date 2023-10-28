let searchcontainer=document.getElementById('searchContainer');
let mainContainer=document.getElementById('demo');
console.log(searchcontainer);
$('.open-close-icon ').on('click',function(){
  $('#home .nav-side').animate({left:'-250px'},1000);
  $('.open-close-icon').addClass('d-none')
  $('#home .fa-bars').removeClass('d-none')
 $('.ul li').animate({top:300},1000)
   
});
$('#home .fa-bars').on('click',function(){
  $('#home .nav-side').animate({left:'0'},1000);
  $('.open-close-icon').removeClass('d-none')
  $('#home .fa-bars').addClass('d-none')
 
  $('.ul li').eq(0).animate({top:0},500)
  $('.ul li').eq(1).animate({top:0},600)
  $('.ul li').eq(2).animate({top:0},700)
  $('.ul li').eq(3).animate({top:0},800)
  $('.ul li').eq(4).animate({top:0},900)

   
});
function closenav(){
  $('.nav-side').animate({left:'-250px'},1000)
  $('.open-close-icon').addClass('d-none')
  $('#home .fa-bars').removeClass('d-none')
  $('.ul li').animate({top:300},500)
}
$(document).ready(function(){
  getData("").then(()=>{
   
      $('.loading').fadeOut(500)
        $('body').css('overflow','visible')
        $('.inner-loading').fadeOut(500)
      
  
    

  })
 

})







let colum =document.getElementById('col');
console.log(searchcontainer);

// *********************************

async function getData(meal){
 
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
  response =await response.json();
  
 
  displayData(response.meals)
 
}

getData("")



function displayData(arr){
  let box='';
 for(let i=0 ; i<arr.length ;i++){
  box+=`
  <div class="col-md-3 colum">
                    <div class="image" onclick="getMealByDetails('${arr[i].idMeal}')">
                        <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3 id="photo" >
                        <div class="layer d-flex justify-content-center align-items-center">
                            <h3 class="text-dark">${arr[i].strMeal}</h3>
                        </div>

                    </div>
                   
                </div>
  `


 }
 mainContainer.innerHTML=box; 


  
  


  
  


}

// let element=document.querySelectorAll('.container .colum');
 
// for(let i=0 ; i<element.length;i++){
//   element[i].addEventListener('click',function(e){
//     let find =e.target
   
//     let parent =$(find).parents('.row');
//     log

    



//   })
 

// }





// ****************************************************

// search


let searchUl =document.getElementById('search');

let name=document.getElementById("nameInput")
let letterInput=document.getElementById("firstLetter")


function showSearchInput(){
  
  searchcontainer.innerHTML=`
  <div class="row py-2 ">
  <div class="col-md-6">
      <input type="text" onkeyup="searchByName(this.value)" placeholder="search By Name" class="control-form w-100 py-2 rounded-3" id="nameInput">
      </div>
      <div class="col-md-6">
      <input type="text" onkeyup="searchByLetter(this.value)" placeholder="search By First Letter" class="control-form w-100 py-2 rounded-3">
      </div>

</div>


`
mainContainer.innerHTML=""

}

async function searchByName(term){
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  response=await response.json()
  console.log(response?.meals);

  response.meals?displayData(response.meals):displayData([])
}


async function searchByLetter(term){
  let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)

 respone= await respone.json();
 respone.meals?displayData(respone.meals):displayData([])
}


// **********************category************************





async function getcategory(){
  $('.inner-loading').fadeIn(500)
  let respons = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  respons = await respons.json();
  displaycategoryData(respons?.categories)
  $('.inner-loading').fadeOut(500)


}

function displaycategoryData(arra){
  let box='';
 for(let i=0 ; i<arra.length ;i++){
  box+=`
  <div class="col-md-3" onclick="showCategory('${arra[i].strCategory}')">
                    <div class="image">
                        <img src="${arra[i].strCategoryThumb}" alt="" class="w-100 rounded-3" disabled>
                        <div class="layer text-center">
                            <h4 class="text-dark">${arra[i].strCategory}</h4>
                            <p class="fs-6 text-dark" >${arra[i].strCategoryDescription.split("").slice(0,40).join("")}</p>
                        </div>

                    </div>
                   
                </div>
  `

 }
 mainContainer.innerHTML=box;

}



async function showCategory(meal){
  $('.inner-loading').fadeIn(500)
  let respons =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
  respons = await respons.json();
  displaycategorys(respons?.meals)
  $('.inner-loading').fadeOut(500)
  
}

// showCategory('${arr[i].strCategory}')
function displaycategorys(arr){
  
  let cartona='';
  for(let i=0 ; i<arr.length ;i++){
    cartona+=
    `
    <div class="col-md-3">
                    <div class="image" onclick="getMealByDetails('${arr[i].idMeal}')">
                        <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3 ">
                        <div class="layer text-center d-flex align-items-center justify-content-center">
                            
                            <p class="fs-4 text-dark">${arr[i].strMeal}</p>
                        </div>

                    </div>
                   
                </div>
    `
  }
  mainContainer.innerHTML=cartona;
}


















// *************************area***************************



let section2 =document.getElementById('boop');
let balad = document.getElementById('country');
  let areaData=[]

 async function getArea(){
  $('.inner-loading').fadeIn(500)
  let httpArea= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  respons= await httpArea.json()
  // areaData=respons.meals;
  displayArea(respons.meals)
  $('.inner-loading').fadeOut(500)
 }

// )


 function displayArea(arr){

  mainContainer.innerHTML="";
  cartona='';
  for(let i=0 ;i<arr.length ;i++){
    cartona+=

    `<div class="col-md-3"  onclick="showMeal('${arr[i].strArea}')" >
    <div class="">
        
       <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>${arr[i].strArea}</h3>
        
  
    </div>
   
  </div>
  `
   
  }
  document.getElementById('demo').innerHTML=cartona;
  
  // btn.addEventListener("click", showMeals);
 }

 
// 
 async function showMeal(country){
  $('.inner-loading').fadeIn(500)
  let responsShow= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  let httpShow = await responsShow.json()
  // areaCONTAINER=httpShow.meals;
  displayShowArea(httpShow.meals)
  $('.inner-loading').fadeOut(500)



}


function displayShowArea(arr){
  
box='';
for(let i=0 ;i<arr.length ;i++){
  box+=
  `<div class="col-md-3">
  <div class="image" onclick="getMealByDetails('${arr[i].idMeal}')">
      <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3 id="photo">
      <div class="layer d-flex justify-content-center align-items-center">
          <h3 class="text-white">${arr[i].strMeal}</h3>
      </div>

  </div>
 
</div>
`
  
}
mainContainer.innerHTML=box;



}


//===================================
async function getgradient(){
  $('.inner-loading').fadeIn(500)
  mainContainer.innerHTML="";
  let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
 let  respos = await res.json();
 
 
 displaygradient(respos.meals.slice(0, 20))
 $('.inner-loading').fadeOut(500)
}


function displaygradient(arr){
  mainContainer.innerHTML = "";
  box='';
  

  for(let i= 0 ;i<arr.length ;i++){       
    box+=`
    <div class="col-md-3 d-flex align-items-center justify-content-center text-center">
    <div class=" " onclick="getfoodbyingradient('${arr[i].strIngredient}')">
       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        
            <h3 class="">${arr[i].strIngredient}</h3>
            <p class="fs-6 text-center ">${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
       
    </div>
   
  </div>

    `

  }
  document.getElementById('demo').innerHTML=box;
  

}


async function getfoodbyingradient(ingredients){
  mainContainer.innerHTML="";
  let httpsresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
   let response = await httpsresponse.json()
    
    displayShowArea(response.meals.slice(0, 20))
}



async function getMealByDetails(mealID){
  mainContainer.innerHTML = ""

  let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
  respone = await respone.json();

  displayDetails(respone.meals[0])
  

  
}
function displayDetails(meal){
  mainContainer.innerHTML = "";


    let box = ``;

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            box += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
   
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }



    let cartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${box}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

    mainContainer.innerHTML = cartoona
}

// / **********************contact us***********************

let contactUl =document.getElementById('contactUs');
let userName =document.getElementById("userNAME");
let alertMessage= document.getElementById('alert1');
 

function displaycontact(){

  mainContainer.innerHTML=`
  
  <div class="w-75 m-auto">
            
                <div class="row text-center">
                    <div class="col-md-6">
                        <input type="text" onkeyup="validation()" placeholder="enter your name" class="control-form w-100 rounded-3 py-2 my-2" id="userNAME">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none " id="alertname">Special characters and numbers not allowed</p>

                        <input type="tel" placeholder="enter your phone" class="control-form w-100 rounded-3 py-2 my-2 " id="phoneNumber" onkeyup="validation()">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none" id="alertphone" >Enter valid Phone Number</p>

                        <input type="password" id="passwordInput" placeholder="enter your password" class="control-form w-100 rounded-3 py-2 my-2 " onkeyup="validation()">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none" id="alertpassword">Enter valid password *Minimum eight characters, at least one letter and one number</p>


                        
                    </div>
                    <div class="col-md-6">
                        <input type="email" id="emailInput" placeholder="enter your email" class="control-form w-100 rounded-3 py-2 my-2 " onkeyup="validation()">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none" id="alertemail">Email not valid *exemple@yyy.zzz</p>

                        <input type="number" placeholder="enter your age" id="ageInput" class="control-form w-100 rounded-3 py-2 my-2 " onkeyup="validation()" >
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none" id="alertage">age is invalid</p>

                        <input type="password"id="repasswordInput" placeholder="repassword" id="alertrepassword" class="control-form w-100 rounded-3 py-2 my-2 " onkeyup="validation()">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none" id="alertrepassword">password and repassword not match</p>


                        
                    </div>
                   
                </div>
              <div class="m-auto fit-content">
              <button id="submitBtn" type="submit" class="btn btn-outline-danger px-5" disabled >submit</button>

              </div>
                
          
        </div>
       
    
  `
 searchcontainer.innerHTML="",

  document.getElementById('userNAME').addEventListener('focus',()=>{
    nameInputTouched=true;
  })
  document.getElementById('phoneNumber').addEventListener('focus',()=>{
    phoneInputTouched=true;
  })
  document.getElementById('passwordInput').addEventListener('focus',()=>{
    passwordInputTouched=true;
  })
  document.getElementById('emailInput').addEventListener('focus',()=>{
    emailInputTouched=true;
  })
  document.getElementById('ageInput').addEventListener('focus',()=>{
    ageInputTouched=true;
  })
  document.getElementById('repasswordInput').addEventListener('focus',()=>{
    repasswordInputTouched=true;
  })
  }
 

  //????????????????????????????????????????????????????????????????
 


let nameInputTouched =false;
let emailInputTouched =false;
let ageInputTouched =false;
let phoneInputTouched =false;
let passwordInputTouched =false;
let repasswordInputTouched =false;



function validation(){
  if(nameInputTouched){
    if(nameValid()){
      document.getElementById('alertname').classList.replace('d-block','d-none')
    }else{
      document.getElementById('alertname').classList.replace('d-none','d-block',)
    }
  }

  if(ageInputTouched){
    if(ageValid()){
      document.getElementById('alertage').classList.replace('d-block','d-none')
    }else{
      document.getElementById('alertage').classList.replace('d-none','d-block',)
    }
  }
if(phoneInputTouched){
  if(phoneValid()){
    document.getElementById('alertphone').classList.replace('d-block','d-none')
  }else{
    document.getElementById('alertphone').classList.replace('d-none','d-block',)
  }

}
if(emailInputTouched){
  if(emailValid()){
    document.getElementById('alertemail').classList.replace('d-block','d-none')
  }else{
    document.getElementById('alertemail').classList.replace('d-none','d-block',)
  }
}


if(passwordInputTouched){
  if(passwordValid()){
    document.getElementById('alertpassword').classList.replace('d-block','d-none')
  }else{
    document.getElementById('alertpassword').classList.replace('d-none','d-block',)
  }
}
if(repasswordInputTouched){
  if(repasswordValid()){
    document.getElementById('alertrepassword').classList.replace('d-block','d-none')
  }else{
    document.getElementById('alertrepassword').classList.replace('d-none','d-block',)
  }

}





  if(
    nameValid()&&
    ageValid()&&
    emailValid()&&
    phoneValid()&&
    passwordValid()&&
    repasswordValid()
  ){
    document.getElementById('submitBtn').removeAttribute('disabled')


  }else{
    document.getElementById('submitBtn').setAttribute('disabled',true)

  }
  

}

function nameValid(){
  return(/^[a-zA-Z]{2,12}/.test(document.getElementById('userNAME').value))

}
function emailValid(){
  return (/.*@[a-z0-9.-]*/i.test(document.getElementById('emailInput').value))
}
function phoneValid(){
  return(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(document.getElementById('phoneNumber').value))

}


function ageValid(){
  return(/^\S[0-9]{0,3}$/.test(document.getElementById('ageInput').value))


}
function passwordValid(){
  return(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.getElementById('passwordInput').value))

}
function repasswordValid(){
  return(document.getElementById('repasswordInput').value ==document.getElementById('passwordInput').value)

}





