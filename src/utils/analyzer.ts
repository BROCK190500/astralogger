import { ErrorAnalysis } from '../types/index.js';

export class ErrorAnalyzer {
  public static analyze(error: any): ErrorAnalysis {
    const message = error?.message || String(error);
    const stack = error?.stack || '';

    if (message.includes('ENOENT')) {
      return {
        type: 'Dosya Bulunamadı (File Not Found)',
        possibleCause: 'Belirtilen yolda bir dosya veya klasör mevcut değil.',
        solutionSuggestion: 'Dosya yolunu kontrol edin veya `fs.existsSync()` ile önce kontrol sağlayın.'
      };
    }
    
    if (message.includes('ECONNREFUSED')) {
      return {
        type: 'Bağlantı Reddedildi (Network Error)',
        possibleCause: 'Bağlanmaya çalıştığınız port kapalı veya hedef sunucu çalışmıyor.',
        solutionSuggestion: 'Hedef servisin (örn: Veritabanı, API) aktif olduğunu ve port numarasını doğrulayın.'
      };
    }

    if (stack.includes('SyntaxError')) {
      return {
        type: 'Sözdizimi Hatası (Syntax Error)',
        possibleCause: 'JavaScript/TypeScript kodunda yazım veya parantez hatası mevcut.',
        solutionSuggestion: 'Hata satırındaki parantezleri, tırnak işaretlerini veya rezerve kelimeleri kontrol edin.'
      };
    }

    return {
      type: 'Bilinmeyen Sistem Hatası',
      possibleCause: 'Derin veya yakalanamayan bir çalışma zamanı (Runtime) istisnası.',
      solutionSuggestion: 'Hata yığınını (stack trace) inceleyerek hatanın fırlatıldığı satıra odaklanın.'
    };
  }
}
