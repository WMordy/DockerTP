async function getDATA(){
    let fetching  = await fetch('/data')
    let data = await fetching.json()
    let cardsHolder = document.getElementById("cards-list")
    data.forEach(element => {
            let card = `<div class="col-md-4">
              <div class="card" style="width: 18rem;">
                  <img src="${element.link}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item container">
                              <div class="row">
                                  <div class="col"> 
                                      <h1>${element.name}</h1>
                                  </div>
                              </div>
                          </li>
                          <li class="list-group-item container">
                              <div class="row">
                                  <div class="col-10"> Speed</div>
                                  <div class="col-2">${element.speed}</div>
                              </div>
                          </li>
                          <li class="list-group-item container">
                              <div class="row">
                                  <div class="col-10">Drible</div>
                                  <div class="col-2">${element.drible}</div>
                              </div>
                          </li>
                          <li class="list-group-item container">
                              <div class="row">
                                  <div class="col-10">Physic</div>
                                  <div class="col-2">${element.physic}</div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>`
          cardsHolder.innerHTML += card
         })
}
getDATA();