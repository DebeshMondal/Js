let itemsContainerElement = document.querySelector('.items-container');

let item ={
    
}

itemsContainerElement.innerHTML = `<div class="item-container">
                <img class="item-image" src="images/1.jpg" alt="item image">
                <div class="rating">
                    4.5 ⭐ | 1.4k
                </div>
                <div class="company-name">Carlton London</div>
                <div class="item-name">Rhodium-Plated CZ Floral Studs</div>
                <div class="price">
                    <span class="current-price">Rs 649</span>
                    <span class="original-price">Rs 1049</span>
                    <span class="discount">(42% OFF)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>`;
