const tipCal=(marks,credits,weightedMark) => {

    weightedMark=((marks/120)*credits)
    if(weightedMark>= 10){
        console.log(`
            weighted Mark:${weightedMark}
            Good result`
        )

    }
    else{
        console.log(`
            weighted Mark: =${weightedMark}
            bad result`
        )
    }


};
    tipCal(45,10);



