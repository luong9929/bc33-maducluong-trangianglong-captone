function getDataApi(){
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET'
       

    });
    promise.then(function(result){
        console.log(result.data)
        renderDataApi(result.data.content)
    })
    promise.catch(function(err){
        console.log(err)
    }) 
    
}

window.onload = function () {
    getDataApi();
  };

  function renderDataApi (arrContent){
    let html = '';
    for (let i = 0 ; i < arrContent.length ; i++){
        let data = arrContent[i]
        html += `
        <div class="col-4">
        <div class="item">
        <div class="thumnail">
        <img src="${data.image}" alt="img"></div>
        <div class="text"><h3>${data.name}</h3>
        <p>${data.shortDescription}</p></div>
            
            
        <div class="title">
        <button><a href="#">Buy Now</a></button>
        <p>${data.price}$</p>
        </div> 
          
        </div>
         </div>
        `
    }
    document.querySelector("#tbody").innerHTML = html;
  return html;
  }
  