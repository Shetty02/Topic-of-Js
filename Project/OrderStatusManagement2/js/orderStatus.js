const ChefReceived = (orderId) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Chef received'
            resolve(orderId)
        }, 2000);
    })
}
const PizzaSauceAdded = (orderId) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Pizza Sauce added'
            resolve(orderId)
        }, 10000)
    })
}
const FirstLayerOfCheezeAdded = (orderId) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'First layer added'
            resolve(orderId)
        }, 5000)
    })
}
const ToppingsAddedd = (orderId) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Toppings added'
            resolve(orderId)
        }, 12000)
    })
}

const SecondLayerOfCheezeAdded = (orderId) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById(orderId).innerText = 'Second layer added'
        resolve(orderId)
    }, 5000)
})
}
const pizzaBaked = (orderId) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById(orderId).innerText = 'Pizza baked!'
        resolve(orderId)
    }, 15000)
})
}
const OreganoAddedAndPacked = (orderId) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById(orderId).innerText = 'Oregano added and packed'
        resolve(orderId)
    }, 8000)
})
}

const PackageReceivedAtCounter = (orderId) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById(orderId).innerText = 'Package received at counter'
        resolve(orderId)
    }, 2000)
})

}