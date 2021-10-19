let globalBookData = [];

const taskContents = document.getElementById('taskContentsrow');

const button = document.getElementById('submitButton');

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

document.getElementById('bookname').attributes["required"] = ""
const generateTaskCard = ({id, name, author, quantity, price}) => {
    return(`<div class="col-lg-4 col-md-6 mt-3 mb-3 md-ml-3" id = ${id} key = ${id}>
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
        <button type="button" class="btn btn-primary" name = ${id} onclick = "editTask(this)" data-bs-toggle="modal" data-bs-target = "#editModal">Edit</button>
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



const editTask = (e) => {
  const editID = e.getAttribute("name");
  
  for(let i=0; i<globalBookData.length; i++)
  {
    if(globalBookData[i].id  == editID)
    {
      document.getElementById('editName').value = globalBookData[i].name;
      document.getElementById('editAuthor').value = globalBookData[i].author;
      document.getElementById('editQuantity').value = globalBookData[i].quantity;
      document.getElementById('editPrice').value = globalBookData[i].price;

      const editBtn = document.getElementById('editButton');

      editBtn.addEventListener('click' , function(){

        const editTaskDetails = {
          eName : document.getElementById('editName').value,
          eAuthor : document.getElementById('editAuthor').value,
          eQuantity : document.getElementById('editQuantity').value,
          ePrice : document.getElementById('editPrice').value
        }

        globalBookData[i].name = editTaskDetails.eName;
        globalBookData[i].author = editTaskDetails.eAuthor;
        globalBookData[i].quantity = editTaskDetails.eQuantity;
        globalBookData[i].price = editTaskDetails.ePrice;

        saveToLocalStorage();
        window.location.reload();
      })
    }
  }


}