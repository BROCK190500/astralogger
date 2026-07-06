
 @namespace SpinnerTypes


 AstraSpinner sınıfının yapıcı (constructor) metoduna geçilecek seçenekler.
  @typedef {Object} SpinnerOptions
  @property {string} text - Animasyon dönerken ekranda görünecek ilk mesaj.
  @property {'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'} [color="cyan"] - Spinner animasyon karakterlerinin rengi.
 @property {'dots' | 'line' | 'star' | 'loading' | 'pipe'} [spinnerType="dots"] - Kullanılacak animasyonun görsel şablonu.
  @property {boolean} [disableColors=false] - True ise renk efektlerini tamamen kapatır (düz metin).
 


  Spinner durumunu güncellemek veya kapatmak için kullanılan metot seçenekleri.
  @typedef {Object} SpinnerUpdateOptions
  @property {string} [text] - Ekranda halihazırda dönen yazıyı değiştirmek için yeni mesaj.
  @property {'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'} [color] - Spinner rengini dinamik olarak değiştirmek için yeni renk.


// JSDoc tiplerinin dışarıdan import edilebilmesi için boş nesne export ediyoruz
export {};
