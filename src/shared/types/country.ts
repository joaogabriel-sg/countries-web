export type TCountry = {
  borders: string[];
  capital?: string[];
  cca2: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};
