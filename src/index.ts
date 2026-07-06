import { logger, AstraLogger } from './core/Logger.js';
import { AstraSpinner } from './core/Spinner.js';
import { ErrorAnalyzer } from './utils/analyzer.js';

// 1. Standart kullanım için varsayılan olarak (default) hazır logger instance'ını dışarı aktarıyoruz
export default logger;

// 2. Geliştirici kendi logger instance'ını üretmek veya diğer sınıfları kullanmak isterse diye adlandırılmış (named) exportlar
export { 
  logger,          // Klasik kullanım için: import { logger } from 'astra-logger';
  AstraLogger,     // Yeni bir logger türetmek için: new AstraLogger()
  AstraSpinner,    // Doğrudan animasyon motoruna erişmek için
  ErrorAnalyzer    // Kendi hata analiz motorunu projelerinde kullanabilmeleri için
};
