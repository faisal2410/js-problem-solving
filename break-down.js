const products=[
    {
        name:'iphone 14',
        price:70000
    },
    {
        name:'samsung galaxy 14',
        price:6000
    },
    {
        name:'dell laptop',
        price:50000
    },
    {
        name:'lenovo yoga laptop',
        price:55000
    },
    {
        name:'asus afsus laptop',
        price:35000
    },
    {
        name:'smart watch samsung',
        price:4000
    },
    {
        name:'apple watch',
        price:9000
    },
    {
        name:'apple watch 14',
        price:20000
    },
    {
        name:'plus one phone 4',
        price:27000
    }
    ];

    // for(const product of products){
    //     if(product.price<5000){
    //         break;
    //     }
    //     console.log(product);
    // }

    for(const product of products){
        if(product.price<10000){
            continue
        }
        console.log(product);
    }
    console.log("After the loop");