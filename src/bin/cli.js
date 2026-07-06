#!/usr/bin/env node

import chalk from 'chalk';
import logger from '../index.js';
import { AstraSpinner } from '../core/Spinner.js';

// Terminalden gelen argümanları alıyoruz (Örn: node cli.js --help veya astra user)
const args = process.argv.slice(2);
const command = args[0]?.toLowerCase();

/**
 * CLI Yardım Menüsü
 */
function showHelp() {
  console.log(`
${chalk.bold.cyan('🌌 ASTRA CLI MULTI-TOOL')} ${chalk.gray('- Komut Satırı Yönetim Paneli')}

${chalk.yellow('Kullanım:')}
  ${chalk.green('astra <modül> [komut]')}

${chalk.yellow('Kullanılabilir Modüller:')}
  ${chalk.bold.magenta('user')}       ${chalk.gray('-> Kullanıcı modülü işlemleri (profil, doğrulama)')}
  ${chalk.bold.magenta('server')}     ${chalk.gray('-> Sunucu yönetim ve durum kontrol modülü')}
  ${chalk.bold.magenta('developer')}  ${chalk.gray('-> Geliştirici araçları ve log analiz motoru')}

${chalk.yellow('Seçenekler:')}
  ${chalk.blue('--help, -h')}     ${chalk.gray('-> Bu yardım menüsünü gösterir')}
  ${chalk.blue('--version, -v')}  ${chalk.gray('-> Astra CLI versiyonunu gösterir')}

${chalk.italic.gray('Örnek: astra developer --analyze')}
  `);
}

/**
 * Ana CLI Çalıştırıcı Motoru
 */
async function run() {
  // Komut girilmemişse veya yardım istenmişse menüyü göster
  if (!command || command === '--help' || command === '-h') {
    showHelp();
    process.exit(0);
  }

  // Versiyon kontrolü
  if (command === '--version' || command === '-v') {
    // package.json'dan versiyon çekilebilir, şimdilik statik v1.0.0
    logger.info('Astra CLI Versiyonu: v1.0.0');
    process.exit(0);
  }

  // Modüllere göre yönlendirme yapıyoruz kanka
  switch (command) {
    case 'user':
      logger.log('User modülü başlatılıyor...');
      // TODO: import { handleUser } from '../modules/user.js';
      break;

    case 'server':
      const serverSpinner = new AstraSpinner({ text: 'Sunucu durumu kontrol ediliyor...', color: 'yellow' });
      serverSpinner.start();
      
      // Simüle edilmiş bir sunucu kontrolü
      setTimeout(() => {
        serverSpinner.succeed('Sunucu sistemleri optimize edildi ve aktif!');
      }, 1500);
      break;

    case 'developer':
      logger.info('Astra Geliştirici Modülü Aktif.');
      logger.warn('Bu modül şu an dene
