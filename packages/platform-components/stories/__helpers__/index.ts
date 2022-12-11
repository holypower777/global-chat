import { SIZE } from '../../src/components/constants';

export const disableControls = () => ({ controls: { disable: true } });
export const hideTable = () => ({ tabel: { disable: true } });
export const sizeProps = () => ({ size: { control: 'select', options: SIZE } });
export const selectControls = (options: Array<unknown>) => ({ control: 'select', options });
