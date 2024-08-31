let itemsContainerElement = document.querySelector('.items-container');

let item ={
   item_image:' images/1.jpg',

   rating:{
    stars: 4.5,
    noof_reviews: 1400,
   },

   company_name: 'Carlton London',
   item_name: 'Rhodium-Plated CZ Floral Studs',
}

itemsContainerElement.innerHTML = `
<div class="item-container">
                <img class="item-image" src="${item.item_image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.noof_reviews}
                </div>
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs 649</span>
                    <span class="original-price">Rs 1049</span>
                    <span class="discount">(42% OFF)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>`;
