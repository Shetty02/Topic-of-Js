const exectueOrder = () =>{
    let orderId = document.getElementById('order-id-input').value 
    // console.log('Exectue!')
    //After getting the orderId we need to empty the "Enter OrderId serach bar" so we use the belowone 
    document.getElementById('order-id-input').value = ''
    // console.log(orderId) //Checking the orderId Exectution is correct or not 

    createOrderCard(orderId)

    document.getElementById(orderId).innerText = 'Order Placed'
    
ChefReceived(orderId)
.then(PizzaSauceAdded) 
.then(FirstLayerOfCheezeAdded)
.then(ToppingsAddedd)
.then(SecondLayerOfCheezeAdded)
.then(pizzaBaked)
.then(OreganoAddedAndPacked)
.then(PackageReceivedAtCounter)
.then(()=>
document.getElementById(orderId).innerText = 'The order is ready!')
.catch((err)=>console.log(err))


    
}

