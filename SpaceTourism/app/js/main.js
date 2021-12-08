const nav_links = document.querySelector('#nav_links');
const hamburger = document.querySelector('#hamburger');



hamburger.addEventListener('click', () => {
    console.log("Clicked")
    if(hamburger.classList.contains('open')){
        nav_links.classList.remove('open')
        hamburger.classList.remove('open')
    }else{
        nav_links.classList.add('open')
        hamburger.classList.add('open')
    }
    
})




// links.forEach(link => {
//     console.log('inside  for');
//     link.addEventListener('click', () => {
//         links.forEach(element => {
//             element.classList.remove('active');
//         });
//         link.classList.add('active');
//        // link.classList.add('active').siblings().remove('active');
//     })
    
// });



//links.addEventListener('click', () => {
   // console.log(links.item,"Clicked");
//})
