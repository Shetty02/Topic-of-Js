const createOrderCard = (orderId) => {
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')
    // Create Element 
    // 1) creating a div tag ,we use a new method name createElement
    // let colDiv = document.createElement('div')  
    //because creating the div tag so we have to put div inside the createElement above is Ex:
    
    let colDiv = document.createElement('div') 
    let cardDiv = document.createElement('div')
    let cardheader = document.createElement('div')
    let cancelBtn = document.createElement('i')
    let cardBody = document.createElement('div')
    let cardText = document.createElement('p')
    let cardText1 = document.createElement('p')
    let cardText2 = document.createElement('p')
    let statusBadge = document.createElement('span')
    let cardFooter = document.createElement('div')

    let BillTable = document.createElement('table')
    let billRow = [];

    // for()

    
    colDiv.classList = 'col-md-3 order-status-card'
    cardDiv.classList = 'card text-center'
    cardheader.classList = 'card-header'
    cancelBtn.classList='fa-solid fa-xmark cancel-btn'
    cardBody.classList = 'card-body'
    cardText.classList = 'card-Text'
    createTable.classList = 'table'
    createTHead.classList ='table-head'
    createRow.classList = 'table-row'
    createTHead1.classList = 'scope="col"'
    createTHead2.classList = 'scope="col"'
    createTHead3.classList = 'scope="col"'
    cardText1.classList = 'card-Text'
    cardText2.classList = 'card-Text'
    cardText3.classList = 'card-Text'
    statusBadge.classList = 'badge rounded-pill bg-success'
    cardFooter.classList = 'card-footer'

    
    // <th scope="col">#</th>
    //                   <th scope="col">Item</th>
    //                   
    cardheader.innerHTML = `<span>Order ID: <b>${orderId}</b></span>`
    createTHead1.innerHTML =`<th scope="col">#</th>`
    createTHead2.innerHTML =`<th scope="col">Item</th>`
    createTHead3.innerHTML =`<th scope="col">Price</th>`
    cardText1.innerText = 'Medium Size Pizza - 2 Nos'
    cardText2.innerHTML = 'Bill Amount: <b>$22</b>'
    statusBadge.innerText = 'First Layer of Cheese added'
    const d = new Date()
    
    // cardFooter.innerText = d
    cardFooter.innerText = new Date().toLocaleDateString("en-US",{ 
        // weekday: 'long',
         year: 'numeric', 
         month: 'long', 
         day: 'numeric',
        hour:'2-digit',
        // hour:"numeric",
      minute:"2-digit",
    second:'2-digit' })
    // 22-08-2022 02:32 PM
    

    // colDiv.innerText = 'XYZ'
    //   <div>XYZ</div> this is created above 
    // So here the parent Element is  "order-cards-wrapper" & the child element is "order-status-card" of which I have created the element colDiv , so here we have to link the child element to the parent element ,so how we are gona do that ? By using .appendchild method Ex:
    // orderCardsWrapper.appendChild(colDiv)

    
    statusBadge.id = orderId


    cardDiv.appendChild(cardheader)
    cardheader.appendChild(cancelBtn)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardText1)
    cardBody.appendChild(cardText2)
    cardText2.appendChild(statusBadge)
    cardDiv.appendChild(cardBody)
    cardDiv.appendChild(cardFooter)
    colDiv.appendChild(cardDiv)
    orderCardsWrapper.appendChild(colDiv)

    cancelBtn.addEventListener('click',() => {
      // orderCardsWrapper.removeChild(colDiv)  // This we cann't use in this case only because in background after we remove the orderCards still the asynchronous process is running thus it will show us an Error in console ,thus we have to use style.display='none 
      colDiv.style.display='none'    
    })
}



/*   <div class="col-md-3 order-status-card">
          <div class="card text-center">
            <div class="card-header">
              <span>Order ID: <b>nh03</b></span>
              <i class="fa-solid fa-xmark "></i>
            </div>
            <div class="card-body">
              <p class="card-text">
                <table class="table">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Medium Corn</td>
                      <td>$5.00</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Large Mushroom</td>
                      <td>$7.50</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <!-- <td colspan="2">Larry the Bird</td> -->
                      <td>Medium Paneer</td>
                      <td>$4.75</td>
                    </tr> 
                    <tr>
                      <td colspan="2">Total</td>
                      <td>$17.25</td>
                    </tr>
                </table>
              </p>
              <!-- <p class="card-text">Medium Size Pizza - 2 Nos</p>
              <p class="card-text">Bill Amount: <b>$22</b></p> -->
              <p class="card-text" > <span class="badge rounded-pill bg-success">First Layer of Cheese added</span>
              </p>
            </div>
            <div class="card-footer">
              18-08-2022 10:25 PM
            </div>
          </div> */