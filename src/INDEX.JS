let element=document.querySelectorAll("about,projects");

let observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate");
            
        }
        else{
            entry.target.classList.remove("animate");
        }
    }),{threshold:0.2}
})

element.forEach((el)=>{
    observer.observe(el);
})
