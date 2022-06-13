export interface Theme {
  background: string;
  title: string;
  letter: string;
  details: string;
}

type Light = Theme;
type Dark = Theme;

export type Themes = Dark | Light;

export const light: Light = {
  background: 'white',
  title: '#0A2463',
  letter: '#1E1B18',
  details: '#2A72DE',
};

export const dark: Dark = {
  background: '#151516',
  title: '#9CA9DE',
  letter: '#EFF2F1',
  details: '#EDF5FC',
};
