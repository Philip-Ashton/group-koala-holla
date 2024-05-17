console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios.get('/koalas')
    .then((response) => {
        const koalas = response.data;
        const contentDiv = document.querySelector('#viewKoalas');
        contentDiv.innerHTML = '';
        let contentHTML = '';    

        for (let koala of koalas){
          contentHTML += `
          <tr>
            <td>${koala.name}</td>
            <td>${koala.age}</td>
            <td>${koala.favoriteColor}</td>
            <td>${koala.readyToTransfer}</td>
            <td>${koala.notes}</td>
            <td><button>Ready for transfer</button></td>
            <td><button onClick="deleteKoala(${koala.id})">Delete</button></td>
          </tr>
          `;
        }
        contentDiv.innerHTML = contentHTML;
      })
      .catch((error)=>{
      console.log(error);
      alert('Get Koala went wrong');
      });
  
} // end getKoalas

// function removeData(event) {

//   event.target.parentElement.parentElement.remove();
// };
function deleteKoala(id){
  axios.delete(`/koalas/${id}`)
  .then(()=>{
    getKoalas();
  })
  .catch(error => {
    console.log(error);
    alert('Delete Koala went wrong');
  });
}


function saveKoala(){
  console.log( 'in saveKoala' );
  const name = document.querySelector('#nameIn').value;
  const age = document.querySelector('#ageIn').value;
  const favoriteColor = document.querySelector('#colorIn').value;
  const readyToTransfer = document.querySelector('#readyForTransferIn').value;
  const notes = document.querySelector('#notesIn').value;
  const koala = { name, age, favoriteColor, readyToTransfer, notes};
  // axios call to server to get koalas
axios.post('/koalas', MediaKeySession)
.then ((respoonse) => {
  getKoalas();
})
.catch((error) => {
  console.log(error);
  alert('Save Koala went wrong.');
});
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#addButton'). addEventListener('click', saveKoala);
  getKoalas();
})


getKoalas();
