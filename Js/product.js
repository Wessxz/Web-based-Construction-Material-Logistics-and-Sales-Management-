let productHtml =''

products.forEach((product)=>{
  productHtml +=`
  <div class="product-card">
    <img src="${product.image}" />
    <h4>${product.name}</h4>
    <p class="price">₱${product.price}</p>
  </div>`

})

document.querySelector('.js-product-grid').innerHTML=productHtml