import { IDynamicTaskOption, IAsserts, IDynamicTasks } from 'development-core';
export interface IJsTaskOption extends IAsserts {
    babelOption?: any;
    sourceMaps?: string;
}
export declare class JsTasks implements IDynamicTasks {
    tasks(): IDynamicTaskOption[];
}
