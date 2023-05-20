const groceries=[{product:'milk',
quantiyt:1,
price:1.5},
{
    product:'Banan',
    quantity:2,
    price:2
}]

const getTotalprice=(groceries)=>{
    let totalCost=  groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=>{
            return acc*num
        })
    })
    console.log(totalCost)

}

getTotalprice(groceries)

const createUI=()=>{
    const groceriesParenetEl=document.querySelector('.groceries');
   
    console.log(groceriesParenetEl)
    let title=getTItle(groceries)
    console.log(title);
    title.map((title)=>{
        const groceriesListItem=document.createElement('li');
        groceriesParenetEl.appendChild(groceriesListItem)
        groceriesListItem.innerHTML=title;
    })
}
const getTItle=(groceries)=>{
     return Object.keys(groceries[0])

}


createUI()