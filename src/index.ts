// import * as path from 'path';
import { ITaskInfo, ITaskContext, IAssertDist, Pipe, task, PipeTask, IDynamicTaskOption, Operation, IAsserts, IDynamicTasks, dynamicTask } from 'development-core';
import { Gulp } from 'gulp';
import * as _ from 'lodash';
// import * as chalk from 'chalk';
const cache = require('gulp-cached');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


/**
 * js assert task optin.
 * 
 * @export
 * @interface IJsTaskOption
 * @extends {IAsserts}
 */
export interface IJsTaskOption extends IAsserts {

    /**
     * babel 6 option.
     * 
     * @type {*}
     * @memberOf IJsTaskOption
     */
    babelOption?: any;

    /**
     * sourceMaps path.
     * 
     * @type {string | boolean}
     * @memberOf IJsTaskOption
     */
    sourceMaps?: string | boolean;

    /**
     * js option.
     * 
     * @type {boolean}
     * @memberof IJsTaskOption
     */
    uglify?: boolean;
}


@task({
    oper: Operation.default | Operation.autoWatch
})
export class JsCompile extends PipeTask {
    constructor(info: ITaskInfo) {
        super(info)
    }

    getInfo() {
        this.info.name = this.info.name || 'jscompile';
        return this.info;
    }


    pipes(ctx: ITaskContext, dist: IAssertDist, gulp?: Gulp): Pipe[] {
        let option = ctx.option as IJsTaskOption;
        let pipes: Pipe[] = [
            () => cache('javascript'),
            () => sourcemaps.init(),
            (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
        ];

        pipes = pipes.concat(super.pipes(ctx, dist, gulp));
        if (option.uglify) {
            pipes.splice(0, 0, {
                oper: Operation.deploy | Operation.release,
                toTransform: (ctx) => _.isBoolean(option.uglify) ? uglify() : uglify(option.uglify)
            });
        }

        if (option.sourceMaps !== false) {
            let mappath = (_.isBoolean(option.sourceMaps) || !option.sourceMaps) ? './sourcemaps' : option.sourceMaps;
            pipes.push((ctx) => sourcemaps.write(mappath));
        }
        return pipes;
    }

}

// @dynamicTask()
// export class JsTasks implements IDynamicTasks {
//     tasks(): IDynamicTaskOption[] {
//         return [
//             {
//                 name: 'jscompile',
//                 oper: Operation.build,
//                 watch: true,
//                 pipes: [
//                     () => cache('javascript'),
//                     () => sourcemaps.init(),
//                     (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
//                     (config) => sourcemaps.write((<IJsTaskOption>config.option).sourceMaps || './sourcemaps')
//                 ]
//             },
//             {
//                 name: 'jscompile',
//                 oper: Operation.release | Operation.deploy,
//                 pipes: [
//                     () => cache('javascript'),
//                     () => sourcemaps.init(),
//                     (config) => babel((<IJsTaskOption>config.option).babelOption || { presets: ['es2015'] }),
//                     () => uglify(),
//                     (config) => sourcemaps.write((<IJsTaskOption>config.option).sourceMaps || './sourcemaps')
//                 ]
//             }
//         ];
//     }
// }
