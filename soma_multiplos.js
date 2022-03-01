function somarMultiplosAteMil(){
    let multiplosDeCinco = 0;
    let multiplosDeSete = 0;

    for(i = 0; i <= 1000; i++){
        if(i % 5 == 0)
            multiplosDeCinco += i;
            if(i % 7 == 0)
            multiplosDeSete += i;
    }
    console.log(multiplosDeCinco+multiplosDeSete)
}
somarMultiplosAteMil()