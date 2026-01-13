const API_ENDPOINT ="http://localhost:3000/cities"
async function init() {
  const cities = await fetchCities();
  console.log(API_ENDPOINT);

  if(!cities){
    return;
  }

  // // update the dom with the cities
  cities.forEach((city)=>{
    addCityToDom(city.id,city.city,city.description,city.image);
  });
 
}
async function fetchCities(){
    try{
        const res = await fetch(API_ENDPOINT);// get data cities 
        if(!res.ok)
        {
            throw new Error("FAiled to Fech cities");
        }
            const data =await res.json();// conver to json format
            console.log(data);
            return data;
       
    }
    catch(error){
            console.error("Error fetching cities:", error);
               return null;
        }
}
function addCityToDom(id,city,description,image)
{
    const dataDiv = document.getElementById("data");
    
   const colDiv =document.createElement("div");
         colDiv.className ="col-12 col-sm-6 col-lg-3 mb-4";

   const anchor =document.createElement("a");
        anchor.href =`./pages/adventures//?city=${id}`;
         //anchor.href =``;
         anchor.id =id;

   const TileDiv =document.createElement("div");
         TileDiv.className ="tile";

   const img = document.createElement("img")
         img.src =image;
         img.alt =city;

    const tileText=document.createElement("div");
          tileText.className="tile-text text-center text-white";
    
    const cityName = document.createElement("h5");
          cityName.innerText=city;    

   const cityDesc = document.createElement("p");
         cityDesc.innerText = description;

    tileText.append(cityName,cityDesc);
    TileDiv.append(img,tileText);
    anchor.append(TileDiv);
    colDiv.append(anchor);
    dataDiv.append(colDiv);


}


export { init,fetchCities,addCityToDom };