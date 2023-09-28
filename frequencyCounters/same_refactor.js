const arr1 = [1,2,3,2,5]; // İlk dizi, 1, 2 ve 3 elemanlarını içerir
const arr2 = [9,1,4,4,11]; // İkinci dizi, 4, 1 ve 9 elemanlarını içerir

// 'same' adlı bir işlev tanımlanıyor ve iki dizi parametre olarak alınıyor
function same(arr1, arr2){
    // İki dizi boyutları karşılaştırılıyor. Eğer boyutları farklı ise...
    if(arr1.length !== arr2.length){
        console.log("Dizi Boyutlu Aynı Değil");
        return false;
        // ...işlev 'false' değeri ile sonlanıyor ve dizi boyutları aynı değil.
    }

    let frequencyCounter1 = {} // İlk frekans sayacı nesnesi oluşturuluyor
    let frequencyCounter2 = {} // İkinci frekans sayacı nesnesi oluşturuluyor

    // 'arr1' dizisinin her elemanını döngü ile gez
    for(let val of arr1){ 
        // Eğer 'frequencyCounter1' nesnesinde bu elemanın bir örneği varsa, örneğin sayısını bir artır; yoksa 0'a ekle ve 1 yap.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    // 'arr2' dizisinin her elemanını döngü ile gez
    for(let val of arr2){
        // Eğer 'frequencyCounter2' nesnesinde bu elemanın bir örneği varsa, örneğin sayısını bir artır; yoksa 0'a ekle ve 1 yap.
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // Her iki dizinin elemanlarının karelerini karşılaştırmak için döngü
    for(let key in frequencyCounter1){
        // Her bir elemanın karesi, 'frequencyCounter2' nesnesinin içinde bulunmalıdır.
        if(!(key ** 2 in frequencyCounter2)){
            // Eğer elemanın karesi bulunmuyorsa, diziler farklıdır ve 'false' döndürülür.
            return false
        }
        // Eğer elemanın karesi bulunuyorsa, bu elemanın frekansı ile karenin frekansı karşılaştırılır.
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            // Eğer frekanslar eşleşmiyorsa, diziler farklıdır ve 'false' döndürülür.
            return false
        }
    }

    console.log("İkinci dizede ilk dizenin elemanlarının karesi bulundu!");
    console.log('frequencyCounter1', frequencyCounter1);
    console.log('frequencyCounter2:', frequencyCounter2);
    // ...işlev 'true' değeri ile sonlanıyor ve dizilerin elemanları aynı.
    return true
}

same(arr1,arr2)