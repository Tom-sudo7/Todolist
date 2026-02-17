console.log('connecté'); 
const form = document.getElementById('form'); 
console.log(form); 
const todo = document.getElementById('todo'); 
console.log(todo); 
let listItems = document.querySelector('.list-items'); 
console.log(listItems); 

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    console.log('bouton cliqué'); 
    const todoValue = todo.value; 
    console.log(todoValue); 

    let item = `
                    <div class="item">
                        <p>${todoValue}</p>
                        <button class="btn-delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="btn-archive">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
               `
    listItems.innerHTML += item;

    const btnDelete = document.querySelectorAll('.btn-delete'); 
    console.log(btnDelete); 
    btnDelete.forEach(i => {
        console.log('btn-delete'); 

        i.addEventListener('click', function(){
            console.log('btn-delete cliqué');
             i.parentElement.remove();  
        }); 
    }); 

    const btnArchive = document.querySelectorAll('.btn-archive'); 
    console.log(btnArchive); 

    btnArchive.forEach(i => {
        console.log('btn-archive'); 
        i.addEventListener('click', function(){
            i.parentElement.classList.toggle('done'); 
        }); 
    }); 
    
    form.reset(); 

});



           



        
