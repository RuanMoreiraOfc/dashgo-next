import type { OmitDistributive } from './omitDistributive';
import type { PickDistributive } from './pickDistributive';

export type { PickRequired };

type PickRequired<T, K extends keyof T> = OmitDistributive<T, K> &
  Required<PickDistributive<T, K>>;
