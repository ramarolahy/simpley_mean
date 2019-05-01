/**
 * Todo model interface
 */
export interface Todo {
    owner: string;
    desc: string;
    completed: boolean;
    _id?: string;
    order?: number;
}