import chalk from 'chalk'

export const greenLog = function(...others: string[]) {
  console.log(chalk.green('[MC]:', ...others))
}

export const redLog = function(...others: string[]) {
  console.log(chalk.red('[MC]:', ...others))
}

export const blueLog = function(...others: string[]) {
  console.log(chalk.blue('[MC]:', ...others))
}