
function displayProducts(categoryIndex) {
    const category = data.categories[categoryIndex];
    const products = category.products;
    const naslov = document.getElementById('naslov');
    naslov.textContent = category.name;

    const productList = document.createElement('ul');
  
    products.forEach(product => {
      const listItem = document.createElement('div');
      const text=document.createElement("p");
      const naziv = document.createElement("p");
      text.textContent=product.name;
      naziv.textContent = category.name;
      const itemImage = document.createElement("img");
      itemImage.src = product.image;
      console.log(product.image);
      itemImage.style.height = "100px";
  
  
      listItem.appendChild(itemImage);
      listItem.appendChild(text);
      listItem.appendChild(naziv);
  
      productList.appendChild(listItem);
    });
  
    const productDisplay = document.getElementById('product-display');
  
    productDisplay.innerHTML = '';
  
    productDisplay.appendChild(productList);
  }
  
const categoryButtons = document.getElementById('category-buttons');

  
displayProducts(0);