var arr = [
    { dp:"https://images.unsplash.com/photo-1706313293815-545e6da761be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
      story:"https://images.unsplash.com/photo-1706313293815-545e6da761be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
       },
       { dp:"https://images.unsplash.com/photo-1706354924674-0304751469e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
         story:"https://images.unsplash.com/photo-1706354924674-0304751469e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
       },
       { dp:"https://images.unsplash.com/photo-1706299573468-eafc2096fe94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
         story:"https://images.unsplash.com/photo-1706299573468-eafc2096fe94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
       },
       { dp:"https://images.unsplash.com/photo-1705742487057-02ef3f84e592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1705742487057-02ef3f84e592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
       }
]

var storiyan = document.querySelector(".Storiyan");
 var full = document.querySelector(".full");

var clutter = "";
arr.forEach(function(elem,indx){
  clutter += `<div class="story">
  <img id="${indx}" src="${elem.dp}">
</div>`
  
});
storiyan.innerHTML = clutter;
storiyan.addEventListener("click",function(dets){
  full.style.display = "block"
  full.style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(function(){
    full.style.display = "none"
  },4000)
  
})