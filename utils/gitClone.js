import download from 'download-git-repo';
import { primary, error, success } from './chalk.js';
import ora from 'ora';
import log from './log.js'

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        log(success(`\r\n`));
        log('err', error(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('模板下载成功！'));
      log(success(`\r\n`));
      log(primary(`cd ${name}\n`));
      log(primary('pnpm install\r\n'));
      // console.log('pnpm run build:roses\r\n');
      // console.log('pnpm run roses:dev\r\n');
      resolve();
    });
  });
};
