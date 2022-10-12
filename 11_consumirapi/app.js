var divResults= document.querySelector("#Resultado");
const verUsers= async ()=>{

    const respuesta= await fetch("https://jsonplaceholder.typicode.com/users")
    const json=await respuesta.json();
    console.log(json)
    let i=0
    json.map(user=>{
let divUser=document.createElement("div");
divUser.className="user"
divUser.innerHTML=`
<p><b> ID </b> ${user.id}</p>
<p><b> Nombre </b> ${user.name}</p>
<p><b> Usuario </b> ${user.username}</p>
<p><b> correo electronico </b> ${user.email}</p>
<p><b> direccion </b> ${user.address.street}</p>
<p><b> direccion </b> ${user.address.suite}</p>
<p><b> ciudad </b> ${user.address.city}</p>
<p><b> codigo zip </b> ${user.address.zipcode}</p>
<p><b> direccion </b> ${user.address.street}</p>
<p><b> latitud </b>  ${user.address.geo.lat}</p>
<p><b> longitus </b> ${user.address.geo.lng} </p>
<p><b> NM de telefono </b>  ${user.phone}</p>
<p><b> sitio web </b>  ${user.website}</p>
<p><b> nombre de la compañia</b>  ${user.company.name}</p>
<p><b> catchPhrase</b>  ${user.company.catchPhrase}</p>
<p><b> bs</b>  ${user.company.bs}</p>
`;
divResults.appendChild(divUser);
i++;
console.log (i)
if(i==6){ return 0;}
    });
}




    const clearUsers= async ()=>{
divResults.innerHTML ="";
    }