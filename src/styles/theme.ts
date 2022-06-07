export interface Theme {
  background: string;
  title: string;
  letter: string;
  details: string;
}

export type Ligth = Theme;
export type Dark = Theme;
export type Themes = Dark | Ligth;

export const ligth: Ligth = {
  background: 'white',
  title: 'blue',
  letter: 'black',
  details: 'orange',
};

export const dark: Dark = {
  background: 'black',
  title: 'blue',
  letter: 'white',
  details: 'orange',
};
