export type { PickRequired };

type PickRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
