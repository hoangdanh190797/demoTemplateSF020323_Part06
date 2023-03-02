var service = new Services();

function getInfo() {
  service
    .getData()
    .then(function (result) {
      renderHTML(result.data.slip);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getInfo();

function renderHTML(slip) {
    var content = "";
    content += `<div class="boxContent">
                <h3>${slip.id}</h3>
                <h2>${slip.advice}</h2>
                </div>`;
    document.getElementById("data").innerHTML = content;
}
