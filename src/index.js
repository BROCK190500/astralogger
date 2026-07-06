if (!(Test-Path src)) { New-Item -ItemType Directory src }; Set-Content src/index.ts 'import chalk from "chalk";

export class AstraLogger {
  private prefix: string;

  constructor(moduleName: string = "ASTRA") {
    this.prefix = chalk.bold.cyan(`[${moduleName}]`);
  }

  log(message: string) {
    console.log(`${this.prefix} ${chalk.green("✔")} ${message}`);
  }

  error(message: string, trace?: string) {
    console.error(`${this.prefix} ${chalk.red("✖")} ${chalk.bold.red("Hata:")} ${message}`);
    if (trace) {
      console.error(chalk.gray(trace));
    }
  }

  warn(message: string) {
    console.warn(`${this.prefix} ${chalk.yellow("⚠")} ${message}`);
  }

  info(message: string) {
    console.info(`${this.prefix} ${chalk.blue("ℹ")} ${message}`);
  }
}'
