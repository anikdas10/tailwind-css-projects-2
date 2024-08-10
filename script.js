
const hamburger=document.getElementById('hamburger');
const navmenu=document.getElementById('nav-menu');
const closeicon=document.getElementById('nav-close');
const navlink=document.querySelectorAll(".nav_link");

navlink.forEach(link =>
   link.addEventListener("click", () =>
{
navmenu.classList.add('hidden')
}) 
)

closeicon.addEventListener("click", () =>
{
navmenu.classList.add('hidden')
})

hamburger.addEventListener("click", () => {
    navmenu.classList.remove('hidden')
})


const tabs=document.querySelectorAll(".tabs-wrap ul li");

const all = document.querySelectorAll(".food-wrap ");

const food = document.querySelectorAll(".food ");

const snack = document.querySelectorAll(".snack ");

const beverage = document.querySelectorAll(".beverage ");

tabs.forEach(tab => {
    tab.addEventListener("click",() => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'

        })
        if(tabval == 'food'){
            food.forEach(item => {
            item.style.display = 'block'
            })
        }
        else if (tabval == 'snack'){
            snack.forEach(item => {
            item.style.display = 'block'
            })
        }
        else if (tabval == 'beverage'){
            beverage.forEach(item => {
            item.style.display = 'block'
            })
        }
        else{
            all.forEach(item => {
              item.style.display ='block'  
            })
        }
    })
})

