import { IDynamicTaskOption, IAsserts, IDynamicTasks } from 'development-core';
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
     * @type {string}
     * @memberOf IJsTaskOption
     */
    sourceMaps?: string;
}
export declare class JsTasks implements IDynamicTasks {
    tasks(): IDynamicTaskOption[];
}
