$('.open-close-icon ').on('click',function(){
  $('#home .nav-side').animate({left:'-250px'},1000);
  $('.open-close-icon').addClass('d-none')
  $('#home .fa-bars').removeClass('d-none')
 
   
});
$('#home .fa-bars').on('click',function(){
  $('#home .nav-side').animate({left:'0'},1000);
  $('.open-close-icon').removeClass('d-none')
  $('#home .fa-bars').addClass('d-none')
 
   
});
$(document).ready(function(){
  $('.loader').fadeOut(2000 ,function(){
    $('.loading').slideUp(1500 ,function(){
      $('body').css('overflow','auto')
    })

  });

})

// $( function(){
 
// } )


let mainContainer=document.getElementById('demo');
let colum =document.getElementById('col');

// *********************************
let data=[]
async function getData(meal){
 
  let http = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
  let response =await http.json();
  data= response.meals
 
  displayData()
 
}

getData("")



function displayData(){
  let box='';
 for(let i=0 ; i<data.length ;i++){
  box+=`
  <div class="col-md-3 colum">
                    <div class="image" onclick="getMealByDetails('${data[i].idMeal}')">
                        <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded-3 id="photo" >
                        <div class="layer d-flex justify-content-center align-items-center">
                            <h3>${data[i].strMeal}</h3>
                        </div>

                    </div>
                   
                </div>
  `


 }
 document.getElementById('demo').innerHTML=box; 


  
  


  
  


}

let element=document.querySelectorAll('.container .colum');
 
for(let i=0 ; i<element.length;i++){
  element[i].addEventListener('click',function(e){
    let find =e.target
   
    let parent =$(find).parents('.row');
    log

    



  })
 

}





// ****************************************************

// search

let container = document.getElementById('demo')
let searchUl =document.getElementById('search');

let name=document.getElementById("nameInput")
let letterInput=document.getElementById("firstLetter")


function displaysearch(){
container.innerHTML=`
<div class="col-md-6">
<input type="text"  onkeyup="searchByName(this.value)" placeholder="search By Name" class="control-form w-100 py-2 rounded-3" id="nameInput">
</div>
<div class="col-md-6">
<input type="text" placeholder="search By First Letter" class="control-form w-100 py-2 rounded-3">
</div>
`

}
searchUl.addEventListener('click',displaysearch)


// **********************category************************




// let categoriesData =[]
async function getcategory(){
  let httpCategory = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  let responseCategoary = await httpCategory.json();
  displaycategoryData(responseCategoary.categories)
  


}

function displaycategoryData(arra){
  let box='';
 for(let i=0 ; i<arra.length ;i++){
  box+=`
  <div class="col-md-3" onclick="showCategory('${arra[i].strCategory}')">
                    <div class="image">
                        <img src="${arra[i].strCategoryThumb}" alt="" class="w-100 rounded-3" disabled>
                        <div class="layer text-center">
                            <h4>${arra[i].strCategory}</h4>
                            <p class="fs-6" >${arra[i].strCategoryDescription.split("").slice(0,50).join("")}</p>
                        </div>

                    </div>
                   
                </div>
  `

 }
 document.getElementById('demo').innerHTML=box;
}


// let categorycontainer = [];
async function showCategory(meal){
  let httpgategory =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
  httpgategory = await httpgategory.json();
  displaycategorys(httpgategory.meals)
  
}

getCategoryMeals('${arr[i].strCategory}')
function displaycategorys(arr){
  let cartona='';
  for(let i=0 ; i<arr.length ;i++){
    cartona+=
    `
    <div class="col-md-3">
                    <div class="image" onclick="getMealByDetails('${data[i].idMeal}')">
                        <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3 ">
                        <div class="layer text-center d-flex align-items-center justify-content-center">
                            
                            <p class="fs-3">${arr[i].strMeal}</p>
                        </div>

                    </div>
                   
                </div>
    `
  }
  document.getElementById('demo').innerHTML=cartona;
}


















// *************************area***************************

// let button =document.getElementById('btn');
  // console.log(button);

let section2 =document.getElementById('boop');
let balad = document.getElementById('country');
  let areaData=[]

 async function getArea(){
  let httpArea= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  respons= await httpArea.json()
  // areaData=respons.meals;
  displayArea(respons.meals)
  
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
  let responsShow= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  let httpShow = await responsShow.json()
  // areaCONTAINER=httpShow.meals;
  displayShowArea(httpShow.meals)



}


function displayShowArea(arr){
  
box='';
for(let i=0 ;i<arr.length ;i++){
  box+=
  `<div class="col-md-3">
  <div class="image" onclick="getMealByDetails('${arr[i].idMeal}')">
      <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3 id="photo">
      <div class="layer d-flex justify-content-center align-items-center">
          <h3>${arr[i].strMeal}</h3>
      </div>

  </div>
 
</div>
`
  
}
mainContainer.innerHTML=box;



}


//===================================
async function getgradient(){
  mainContainer.innerHTML="";
  let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
 let  respos = await res.json();
 
 
 displaygradient(respos.meals.slice(0, 20))

}


function displaygradient(arr){
  mainContainer.innerHTML = "";
  box='';
  

  for(let i= 0 ;i<arr.length ;i++){       
    box+=`
    <div class="col-md-3 d-flex align-items-center justify-content-center text-center">
    <div class=" " onclick="getfoodbyingradient('${arr[i].strIngredient}')">
       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        
            <h3>${arr[i].strIngredient}</h3>
            <p class="fs-6">${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
       
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




// async function searchByName(name) {
 
//   mainContainer.innerHTML = ""
  

//   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//   response = await response.json()
//   // response=response.meals

  
//   displayname(response.meals)

// }




// function displayname(arr){
  
//   box='';
//   for(let i=0 ;i<arr.length ;i++){
//     box+=
//     `<div class="col-md-3">
//     <div class="image" onclick="getMealByDetails('${arr[i].idMeal}')">
//         <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-3 id="photo">
//         <div class="layer d-flex justify-content-center align-items-center">
//             <h3>${arr[i].strMeal}</h3>
//         </div>
  
//     </div>
   
//   </div>
//   `
    
//   }
//   mainContainer.innerHTML+=box;



// }










  
 
// / **********************contact us***********************

let contactUl =document.getElementById('contactUs');
let userName =document.getElementById("userNAME");
let alertMessage= document.getElementById('alert1');
 

function displaycontact(){
  container.innerHTML=`
  
  <div class="w-75 m-auto">
            
                <div class="row text-center">
                    <div class="col-md-6">
                        <input type="text" placeholder="enter your name" class="control-form w-100 rounded-3 py-2 my-2" id="userNAME" oninput="validationName()">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none " id="alert1">Special characters and numbers not allowed</p>

                        <input type="tel" placeholder="enter your phone" class="control-form w-100 rounded-3 py-2 my-2 ">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none">Enter valid Phone Number</p>

                        <input type="password" placeholder="enter your password" class="control-form w-100 rounded-3 py-2 my-2 ">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none">Enter valid password *Minimum eight characters, at least one letter and one number</p>


                        
                    </div>
                    <div class="col-md-6">
                        <input type="email" placeholder="enter your email" class="control-form w-100 rounded-3 py-2 my-2 ">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none">Email not valid *exemple@yyy.zzz</p>

                        <input type="number" placeholder="enter your age" class="control-form w-100 rounded-3 py-2 my-2 ">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none" >Enter valid age</p>

                        <input type="password" placeholder="repassword" class="control-form w-100 rounded-3 py-2 my-2 ">
                        <p class="alert alert-danger w-100 form-control text-center fs-6 d-none">Enter valid repassword</p>


                        
                    </div>
                   
                </div>
              <div class="m-auto fit-content">
              <button type="submit" class="btn btn-outline-danger px-5" disabled >submit</button>

              </div>
                
          
        </div>
       
    
  `
  }
 

  
  // function validationName(){
  //   // displaycontact()
 
  //   // console.log(userName);


  //   let regex = /^[a-zA-Z]{3}$/
  //   let text =userName.value;
    
   

  //   console.log(text);
  //   if(regex.test(text)==true){
  //     // userName.classList.add('is-valid')
  //     // return true ;


  //   }else{
  //     userName.classList.add('is-invalid')
  //     alertMessage.classList.remove("d-none")
      


  //     return false;


  //   }

  // }
  
  function closenav(){
    $('.nav-side').animate({left:'-250px'},1000)
    $('.open-close-icon').addClass('d-none')
    $('#home .fa-bars').removeClass('d-none')
  
  }