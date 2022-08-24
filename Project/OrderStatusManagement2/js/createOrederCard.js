const createOrderCard = (orderId) => {
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')
    // Create Element 
    // 1) creating a div tag ,we use a new method name createElement
    // let colDiv = document.createElement('div')  
    //because creating the div tag so we have to put div inside the createElement above is Ex:
    
    let colDiv = document.createElement('div') 
    let cardDiv = document.createElement('div')
    let cardheader = document.createElement('div')
    let cardBody = document.createElement('div')
    let cardText1 = document.createElement('p')
    let cardText2 = document.createElement('p')
    let cardText3 = document.createElement('p')
    let statusBadge = document.createElement('span')
    let cardFooter = document.createElement('div')

    
    colDiv.classList = 'col-md-3 order-status-card'
    cardDiv.classList = 'card text-center'
    cardheader.classList = 'card-header'
    cardBody.classList = 'card-body'
    cardText1.classList = 'card-Text'
    cardText2.classList = 'card-Text'
    cardText3.classList = 'card-Text'
    statusBadge.classList = 'badge rounded-pill bg-success'
    cardFooter.classList = 'card-footer'

    
    cardheader.innerHTML = `Order ID: <b>${orderId}</b>`
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
    cardBody.appendChild(cardText1)
    cardBody.appendChild(cardText2)
    cardBody.appendChild(cardText3)
    cardText3.appendChild(statusBadge)
    cardDiv.appendChild(cardBody)
    cardDiv.appendChild(cardFooter)
    colDiv.appendChild(cardDiv)
    orderCardsWrapper.appendChild(colDiv)
}

// {/* <div class="col-md-3 order-status-card">
// <div class="card text-center">
//     <div class="card-header">
//         Order ID: <b>MP20220001</b>
//     </div>
//     <div class="card-body">
//         <p class="card-text">Medium Size Pizza - 2 Nos</p>
//         <p class="card-text">Bill Amount: <b>$22</b></p>
//         <p class="card-text">
//  <span class="badge rounded-pill bg-success">First Layer of Cheese added</span>
//         </p>
//     </div>
//     <div class="card-footer">
//         18-08-2022 10:25 PM
//     </div>
// </div>
// </div> */}