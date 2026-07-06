import { LogChannel } from '../types/index.js';
import { ANSI_COLORS, EMOJIS } from '../utils/colors.js';
import { ErrorAnalyzer } from '../utils/analyzer.js';
import { AstraSpinner } from './Spinner.ts';

export class AstraLogger {
  private channels: Map<string, LogChannel> = new Map();

  constructor() {
    this.register('info', 'cyan', EMOJIS.info, 'INFO');
    this.register('success', 'green', EMOJIS.success, 'SUCCESS');
    this.register('warn', 'yellow', EMOJIS.warn, 'WARN');
    this.register('error', 'red', EMOJIS.error, 'ERROR');
    this.register('astra', 'magenta', EMOJIS.astra, 'ASTRA');
    this.register('debug', 'gray', EMOJIS.debug, 'DEBUG');
  }

  private register(name: string, color: string, emoji: string, prefix: string) {
    this.channels.set(name, {
      name,
      enabled: true,
      color: (ANSI_COLORS as any)[color] || ANSI_COLORS.reset,
      emoji,
      prefix
    });
  }

  public enableAllChannels() {
    for (const channel of this.channels.values()) {
      channel.enabled = true;
    }
    this.astra("Tüm kanallar ve alt servisler ayağa kaldırıldı!");
  }

  // Yeni bir animasyon başlatıcı oluşturur
  public createSpinner(text: string): AstraSpinner {
    return new AstraSpinner(text);
  }

  private log(level: string, message: string, err?: any) {
    const ch = this.channels.get(level);
    if (!ch || !ch.enabled) return;

    const time = `${ANSI_COLORS.gray}[${new Date().toLocaleTimeString()}]${ANSI_COLORS.reset}`;
    const header = `${ch.color}${ANSI_COLORS.bold}${ch.emoji} [${ch.prefix}]${ANSI_COLORS.reset}`;
    
    console.log(`${time} ${header} -> ${message}`);

    // Hata Tespiti ve Akıllı Analiz Devreye Giriyor
    if (level === 'error' && err) {
      const analysis = ErrorAnalyzer.analyze(err);
      console.log(`\n${ANSI_COLORS.bgRed}${ANSI_COLORS.bold} 🧠 ASTRA ERROR ANALYZER DETECTED ${ANSI_COLORS.reset}`);
      console.log(`${ANSI_COLORS.red}▶ Hata Tipi:${ANSI_COLORS.reset} ${analysis.type}`);
      console.log(`${ANSI_COLORS.yellow}▶ Olası Sebep:${ANSI_COLORS.reset} ${analysis.possibleCause}`);
      console.log(`${ANSI_COLORS.green}▶ Çözüm Önerisi:${ANSI_COLORS.reset} ${analysis.solutionSuggestion}`);
      console.log(`${ANSI_COLORS.gray}${err.stack || err}${ANSI_COLORS.reset}\n`);
    }
  }

  public info(msg: string) { this.log('info', msg); }
  public success(msg: string) { this.log('success', msg); }
  public warn(msg: string) { this.log('warn', msg); }
  public error(msg: string, err?: any) { this.log('error', msg, err); }
  public astra(msg: string) { this.log('astra', msg); }
  public debug(msg: string) { this.log('debug', msg); }
}

export const logger = new AstraLogger();
