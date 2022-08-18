  
 var arr=[
    {img:"https://images.unsplash.com/photo-1657535130855-80d1ce1445b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"},
    {img:"https://images.unsplash.com/photo-1656682775761-1a5d84b09767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"},
    {img:"https://images.unsplash.com/photo-1613759730654-3fa5a0146c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
}
]

 var clutter="";

 arr.forEach(function(elem,index){
    clutter +=`
    <div id="story">
    <div id="stry">
        <img  id="${index}"src= "${elem.img}" alt="">
    </div>
</div>`
 })
 document.querySelector("#stories").innerHTML=clutter;

 var arr2=[
    {img1:"https://images.unsplash.com/photo-1657655126139-741e3242950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",post:"https://images.unsplash.com/photo-1657655126139-741e3242950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",username:"ujjwal rai",like:800},
    {img1:"https://images.unsplash.com/photo-1657655126139-741e3242950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",post:"https://images.unsplash.com/photo-1657517085265-7ca277ce370a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",username:"shivam rai",like:100},
    {img1:"https://images.unsplash.com/photo-1657655126139-741e3242950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",post:"https://images.unsplash.com/photo-1657673261479-96f76a53d7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",username:"utkarsh",like:600},
    {img1:"https://images.unsplash.com/photo-1657655126139-741e3242950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",post:"https://images.unsplash.com/photo-1657673741441-7a17d640fd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",username:"akash",like:200}
 ];

 var clutter2="";
 
 arr2.forEach(function(elem,index){
    clutter2 += `  <div id="post">
    <div id="like">
    <i class="ri-heart-fill"></i>

   </div>
    <div id="postdtl">
        <div id="postprof">
            <img id="${index} " src="${elem.img1}" alt="">
        </div>
        <h4>${elem.username}</h4>
    </div>
    <img  id="${index}"src="${elem.post}" alt="">
</div>
<div id="aboutpost">
    <i class="ri-heart-fill"></i>
    <i class="ri-chat-1-line"></i>
    <i class="ri-share-forward-fill"></i>
    <h5>${elem.like}</h5>
</div>
</div>`
 })

 document.querySelector("#posts").innerHTML=clutter2;

 function showkro(url){
    document.querySelector("#storyview").style.display="initial";
    document.querySelector("#storycontant img")
    .setAttribute("src",url)
    
  }
document.querySelector("#stories").addEventListener("click",function(dets){
    showkro(arr[dets.target.id].img)

      setTimeout(function(){
        document.querySelector("#storyview").style.display="none";
        
      },3000);
})



document.querySelector("#post>img").addEventListener("click",function(dets){
    document.querySelector(".ri-heart-fill").style.display="flex";
    document.querySelector("#aboutpost .ri-heart-fill").style.color="red"
    // console.log(arr[dets.target.id].img)

    setTimeout(function(){
        document.querySelector(".ri-heart-fill").style.display="none";
        
      },1000);

})