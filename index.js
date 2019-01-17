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

// This handles the check button
function toggleCheck(event) {
    const shoppingItem = $(event).closest('li').find('span.shopping-item');
    const checkedBool = shoppingItem.hasClass('shopping-item__checked');
    shoppingItem.toggleClass('shopping-item__checked',!checkedBool);
}

//This handles the delete button
function getRid(event) {
    $(event).closest('li').remove();
}

function main() {
    //Handles the form input listener
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const itemName = $(this).find('#shopping-list-entry').val();
        createListItem(itemName);
    });
    //This handles the check button listener and the delete button listener
    $('ul.shopping-list')
        .on('click', 'button.shopping-item-delete', function() { getRid(this); })
        .on('click', 'button.shopping-item-toggle', function() { toggleCheck(this); });
}       

$(main);