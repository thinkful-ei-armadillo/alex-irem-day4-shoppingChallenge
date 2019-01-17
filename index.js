'use strict';

//this creates a list item
function createListItem(itemName) {
    $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${itemName}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`
    );
}

function toggleCheck(event) {
    const currentLi = $(event.currentTarget);
    const shoppingItem = $(currentLi).parentsUntil('ul').find('span.shopping-item');
    const checkedBool = shoppingItem.hasClass('shopping-item__checked');
    shoppingItem.toggleClass('shopping-item__checked',!checkedBool);
}

function main() {
    //Handles the form input listener
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const itemName = $(event.currentTarget).find('#shopping-list-entry').val();
        createListItem(itemName);
    });

    $('ul.shopping-list').on('click', 'button.shopping-item-toggle', function(event) {
        toggleCheck(event);
    });

}

$(main);