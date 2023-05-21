const groceries=[{product:'milk',
quantity:1,
price:1.5},
{
    product:'Banan',
    quantity:2,
    price:2
},
{
product:"soap",
quantity:2,
price:20
},
{
    product:'bread',
    quantity:2,
    price:25
}]

const getTotalprice=(groceries)=>{
    return  groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=>{
            return acc*num
        })
    })

}

getTotalprice(groceries)

const createUI=()=>{
    const groceriesParenetEl=document.querySelector('.groceries');
    const totalPriceEl=document.getElementById('total');
    console.log(groceriesParenetEl)
    let title=getTItle(groceries)
    
    title.map((titl)=>{
        console.log(titl)
        
        
        const groceriesListItem=document.createElement('li');
        groceriesParenetEl.appendChild(groceriesListItem)
        groceriesListItem.classList.add('header');
        groceriesListItem.innerHTML=titl.charAt(titl[0]).toUpperCase()+titl.slice(1);
    })
     getValues(groceries).map((item)=>{
        item.map((titl)=>{
            console.log(titl)
            const groceriesListItem=document.createElement('li');
            groceriesParenetEl.appendChild(groceriesListItem)
            groceriesListItem.innerHTML=titl;
        })

     })
     const value1=getTotalprice(groceries);
     console.log(value1)
     const total=value1.reduce((acc,num)=>{
        return acc+num
     })
     console.log(total)
     totalPriceEl.innerHTML=` ${total.toFixed(2)}`;
}

const getTItle=(groceries)=>{
     return Object.keys(groceries[0])

}
const getValues=(groceries)=>{
    return groceries.map((grocerieItem)=>{
        return Object.values(grocerieItem);

    })


}

createUI()