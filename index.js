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
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline-info">
            <i class="fas fa-pencil-alt"></i>
          </button>

          <button type="button" class="btn btn-outline-danger">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>

      <div class="card-body">
        <h4 class="bookname">${name}</h4>
        <h5 class="bookauthor">${author}</h5>
        <h5 class="quantity">${quantity}</h5>
        <h5 class="price">${price}</h5>
      </div>

      <div class="card-footer">
        <button class="btn btn-outline-primary float-end">Open Task</button>
      </div>
    </div>
  </div>`)
};
