const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/episode?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
    <div class="card" style="width: 18rem;">
    <h5 class="card-title">${item.id}</h5>
    <div class="card-body">
    <h5 class="card-title">${item.air_date}</h5>
    <p class="card-text"><b>${item.name}</b></p>
    <p class="card-text"><b>${item.episode}</b></p>
    <p class="card-text"><b>${item.created}</b></p>
    
  </div>
</div>
`
    
    divRes.appendChild(divItem);
});
}
apiRick(1);