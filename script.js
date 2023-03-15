const search = document.querySelector("input")
const btn = document.querySelector("button")
const imgGrid = document.querySelector(".img-grid")
const renderImages = (arr=[])=>{
 arr.forEach(item => {
     console.log(item.urls.raw)
     const img = document.createElement("img")
     img.src = `${item.urls.raw}`
     img.alt = "img"
     img.className = "each-img"
     imgGrid.appendChild(img)
 });
}

const loadImg = async ()=>{
   const res =  await fetch(`https://api.unsplash.com/search/photos/?query=${search.value}&per_page=9&client_id=8GRDNGtnBxdWolsPIZXf_Yvc9AZayG5nupbRazLM77c`)
    const images = await res.json()
//    console.log(images.results)
  renderImages(images.results)
}

btn.addEventListener("click",loadImg)

