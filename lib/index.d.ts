/// <reference types="gulp" />
import { ITaskInfo, ITaskContext, IAssertDist, Pipe, PipeTask, IAsserts } from 'development-core';
import { Gulp } from 'gulp';
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
export declare class JsCompile extends PipeTask {
    constructor(info: ITaskInfo);
    getInfo(): ITaskInfo;
    pipes(ctx: ITaskContext, dist: IAssertDist, gulp?: Gulp): Pipe[];
}
