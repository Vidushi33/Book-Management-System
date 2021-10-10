let globalBookData = [];

const taskContents = document.getElementById('taskContentsrow');

const button = document.getElementById('submit_button');

button.addEventListener('click', function(){
    const newTaskDetails = {
        id : Date.now(),
        name : document.getElementById('bookname').value,
        author : document.getElementById('bookauthor').value,
        quantity : document.getElementById('quantity').value,
        price : document.getElementById('price').value
    };
    

    // const taskContents = document.getElementById('taskContentsrow');
    taskContents.insertAdjacentHTML('beforeend' , generateTaskCard(newTaskDetails));

    globalBookData.push(newTaskDetails);
    saveToLocalStorage();
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
        <button type="button" class="btn btn-danger" name = ${id} onclick = "deleteTask(this)">Delete</button>
      </li>
     
    </ul>
  </div>
  </div>`)
};

const saveToLocalStorage = () => {
  localStorage.setItem('books' , JSON.stringify({booksData : globalBookData}));
}

const relodeTaskData = () => {
  const getData = JSON.parse(localStorage.getItem('books'));
  
  if(getData){
    globalBookData = getData.booksData;

  }

  globalBookData.map((data) =>{
    taskContents.insertAdjacentHTML('beforeend' , generateTaskCard(data));
    // console.log(rowData);
  })
}


const deleteTask = (e) => {
  swal({
    title: "Do you want to delete this data ?",
    icon: "warning",
    buttons: ["no" , "yes"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      const targetID = e.getAttribute("name");

      globalBookData = globalBookData.filter((id) => id.id!=targetID);
      saveToLocalStorage();
      window.location.reload();
     }
  });
}



