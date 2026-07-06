
  @namespace AstraTypes



  AstraLogger yapılandırma seçenekleri
  @typedef {Object} LoggerConfig
  @property {string} [moduleName="ASTRA"] - Logların başında görünecek modül adı.
  @property {'development' | 'production'} [environment="development"] - Çalışma ortamı.
  @property {boolean} [silent=false] - True ise konsola hiçbir şey yazdırmaz.
  @property {string} [prefixColor="cyan"] - Modül adının rengi (Chalk renkleri).
 


  Tekil log mesajları için özelleştirme seçenekleri
  @typedef {Object} LogOptions
  @property {boolean} [timestamp=false] - Logun başına saat/tarih eklenip eklenmeyeceği.
  @property {string} [color] - Mesajın özel rengi.
  @property {boolean} [bold=false] - Yazının kalın (bold) olup olmayacağı.
  @property {boolean} [uppercase=false] - Yazının tamamen büyük harfe çevrilip çevrilmeyeceği.
 

   AstraSpinner animasyon motoru seçenekleri
  @typedef {Object} SpinnerOptions
  @property {string} text - Ekranda dönerken görünecek olan yazı.
  @property {'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'} [color="cyan"] - Spinner animasyonunun rengi.
  @property {'dots' | 'line' | 'star' | 'loading'} [spinnerType="dots"] - Animasyonun şekil tarzı.



  ErrorAnalyzer hata analiz sonuç yapısı
  @typedef {Object} AnalysisResult
  @property {string} errorName - Hatanın adı veya kodu.
  @property {string} message - Hatanın detaylı açıklaması.
  @property {'low' | 'medium' | 'high' | 'critical'} severity - Hatanın kritiklik seviyesi.
  @property {string} possibleSolution - Çözüm için önerilen yöntem veya döküman linki.
  @property {Date} timestamp - Analizin yapıldığı zaman.


// JavaScript'in bu tipleri export edebilmesi için boş bir nesne fırlatıyoruz, 
// JSDoc bunu otomatik olarak algılayıp geliştiricilere gösterecek.
export {};
