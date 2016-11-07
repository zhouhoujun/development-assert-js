// import * as path from 'path';
import { IDynamicTaskOption, Operation, IDynamicTasks, dynamicTask } from 'development-core';
// import * as chalk from 'chalk';
const cache = require('gulp-cached');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


/**
 * js task optin.
 * 
 * @export
 * @interface IJsTaskOption
 */
export interface IJsTaskOption {

    /**
     * babel 6 option.
     * 
     * @type {*}
     * @memberOf IJsTaskOption
     */
    babelOption: any;

    /**
     * sourceMaps path.
     * 
     * @type {string}
     * @memberOf IJsTaskOption
     */
    sourceMaps: string;
}
@dynamicTask
export class JsTasks implements IDynamicTasks {

    tasks(): IDynamicTaskOption[] {
        return [
            {
                name: 'jscompile',
                oper: Operation.build,
                pipes: [
                    () => cache('javascript'),
                    () => sourcemaps.init(),
                    (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
                    (config) => sourcemaps.write((<IJsTaskOption>config.option).sourceMaps || './sourcemaps')
                ]
            },
            {
                name: 'jscompile',
                oper: Operation.release | Operation.deploy,
                pipes: [
                    () => cache('javascript'),
                    () => sourcemaps.init(),
                    (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
                    () => uglify(),
                    (config) => sourcemaps.write((<IJsTaskOption>config.option).sourceMaps || './sourcemaps')
                ]
            },
            {
                name: 'jswatch',
                oper: Operation.build | Operation.e2e | Operation.test,
                watchTasks: ['jscompile']
            }
        ];
    }
}
