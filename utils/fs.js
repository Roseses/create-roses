import fse from 'fs-extra'
// https://github.com/jprichardson/node-fs-extra
export const pathExistsSync = fse.pathExistsSync
export const remove = fse.remove

export const removeSync = fse.removeSync
export const copy = fse.copy

export const PROCESS_PWD = process.cwd()

export default {
  removeSync,
  pathExistsSync,
  remove,
  copy,
  PROCESS_PWD
}

