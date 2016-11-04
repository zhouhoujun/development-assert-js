import { IDynamicTaskOption, IDynamicTasks } from 'development-core';
export interface IJsTaskOption {
    babelOption: any;
    sourceMaps: string;
}
export declare class JsTasks implements IDynamicTasks {
    tasks(): IDynamicTaskOption[];
}
