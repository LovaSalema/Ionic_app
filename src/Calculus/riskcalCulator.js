const riskcalCulator= (base, Amount)=>{
    let waggered=0;
    let profit=0;
    let total =0;
    let i=0;
    for(let i=0; total<3; i++){
            waggered= base*(1.6)**(i);
            Amount=Amount - waggered;
            profit= waggered*1.66778 - total
            total= total + waggered;
            console.log(("waggered: "+Math.floor(waggered*10000)/10000+" "+i));
            console.log("profit :" +profit.toFixed(4));

    }
    console.log("total waggered :"+total);
}

riskcalCulator(0.0002,4)

// 34% balance $5
// const riskcalCulator= (base, Amount)=>{
//     let waggered=0;
//     let profit=0;
//     let total =0;
//     let i=0;
//     for(let i=0; total<3; i++){
//             waggered= base*(1.549)**(i);
//             Amount=Amount - waggered;
//             profit= waggered*1.82471 - total
//             console.log(("waggered: "+Math.floor(waggered*10000)/10000+" "+i));
//             // console.log("profit :" +profit.toFixed(4));
//             total= total + waggered;
//     }
//     console.log(total);
// }

// riskcalCulator(0.0002,4 )

// 36%
// const riskcalCulator= (base, Amount)=>{
//     let waggered=0;
//     let profit=0;
//     let total =0;
//     let i=0;
//     for(let i=0; total<3; i++){
//             waggered= base*(1.5999)**(i);
//             Amount=Amount - waggered;
//             profit= waggered*1.66778 - total
//             console.log(("waggered: "+Math.floor(waggered*10000)/10000+" "+i));
//             console.log("profit :" +profit.toFixed(4));
//             total= total + waggered;
//     }
//     console.log("total waggered :"+total);
// }

// riskcalCulator(0.0002,5)