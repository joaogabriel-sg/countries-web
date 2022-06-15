export type TCountry = {
  capital?: string[];
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
};
