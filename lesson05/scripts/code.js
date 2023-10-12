const button = document.querySelector('button');
const userEntry = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (userEntry.value !== "") {

        // create a li element and a delete button

        let listItem = document.createElement('li');
        let deleteBtn = document.createElement('button');

        // set attributes
        listItem.classList.add('list');
        deleteBtn.classList.add('delete');

        // asign values
        listItem.textContent = userEntry.value;
        deleteBtn.textContent = "❌";

        // add to list <ul> as a child the element <li> (listItem)
        // then add to <li> the button 
        list.appendChild(listItem);
        listItem.append(deleteBtn);

        // delete button
        deleteBtn.addEventListener('click', function () {

            listItem.remove();
            
        });
        
        document.querySelector('input').focus();
        userEntry.value = '';
    }
});