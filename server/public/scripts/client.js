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
            <td><button>Delete</button></td>
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



function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
axios.post('/koalas', viewKoala)
.then ((respoonse) => {
  document.querySelector('#addKoalaInput').value = '';
})
.catch((error) => {
  console.log(error);
});
}

getKoalas();
