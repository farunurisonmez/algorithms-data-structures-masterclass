const arr1 = [1, 2, 1]; // İlk dizi, 1, 2 ve 3 elemanlarını içerir
const arr2 = [4, 1, 9]; // İkinci dizi, 4, 1 ve 9 elemanlarını içerir

// 'same' adlı bir işlev tanımlanıyor ve iki dizi parametre olarak alınıyor
function same(arr1, arr2){
    // İki dizi boyutları karşılaştırılıyor. Eğer boyutları farklı ise...
    if(arr1.length !== arr2.length){
        console.log("Dizi Boyutlu Aynı Değil");
        return false;
        // ...işlev 'false' değeri ile sonlanıyor ve dizi boyutları aynı değil.
    }
    for(let i = 0; i < arr1.length; i++){
        // İki dizinin elemanları karşılaştırılıyor. Eğer karşılaştırılan elemanın karesi ikinci dizide yoksa...
        let correctIndex = arr2.indexOf(arr1[i] ** 2)

        if(correctIndex === -1){
            console.log("İkinci dizede ilk dizenin elemanlarının karesi bulunamadı!");
            return false;
            // ...işlev 'false' değeri ile sonlanıyor ve dizilerin elemanları aynı değil.
        }

        arr1.splice(correctIndex, 1);
    }
    console.log("İkinci dizede ilk dizenin elemanlarının karesi bulundu!");
    console.log('Arr2', arr1);
    console.log('Arr 2:', arr2);
    return true; 
    // ...işlev 'true' değeri ile sonlanıyor ve dizilerin elemanları aynı.

}
 
same(arr1, arr2);