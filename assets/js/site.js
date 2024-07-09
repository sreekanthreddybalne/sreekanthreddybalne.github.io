(function(){
    const navEl = document.querySelector("nav");
    document.querySelector('.nav-toggle').addEventListener('click', function(){
        navEl.classList.toggle("show-for-mobile");
    })
})()