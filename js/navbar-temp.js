const template = document.querySelector('.comunica-navbar')
fetch('def/navbar.html')
.then(res=>res.text())
.then(data=>{
    template.innerHTML = data
})
