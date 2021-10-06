const button = document.getElementById('submit_button');
var id = 1;
button.addEventListener('click', function(){
    const newTaskDetails = {
        id : id,
        name : document.getElementById('bookname').value,
        author : document.getElementById('bookauthor').value,
        quantity : document.getElementById('quantity').value,
        price : document.getElementById('price').value
    };


    const taskContents = document.getElementById('taskContentsrow');
    taskContents.insertAdjacentHTML('beforeend' , generateTaskCard(newTaskDetails));

    id = id +1;
})


const generateTaskCard = ({id, name, author, quantity, price}) => {
    return(`<div class="col-lg-4 col-md-6 mt-3" id = ${id} key = ${id}>
    <div class="card text-center bg-dark" style="width: 18rem;">
    <div class="card-header text-white">
      ${author}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Book Name : ${name} </li>
      <li class="list-group-item">Author Name : ${author}</li>
      <li class="list-group-item">Quantity Required : ${quantity} </li>
      <li class="list-group-item">Price of Book : ${price} </li>
      
      <li class="list-group-item">
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </li>
     
    </ul>
  </div>
  </div>`)
};
