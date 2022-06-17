import { api } from '../configs';
import { TCountry } from '../types';

class CountriesService {
  async getCountries() {
    try {
      const { data } = await api.get<TCountry[]>('/all');
      return data;
    } catch {
      return null;
    }
  }

  async getCountryById(id: string) {
    try {
      const { data } = await api.get<TCountry[]>(`/alpha/${id}`);
      return data.length > 0 ? data[0] : null;
    } catch {
      return null;
    }
  }

  async getNeighbors(codes: string[]) {
    try {
      const { data } = await api.get<TCountry[]>('/alpha', {
        params: { codes: codes.join(',') },
      });
      return data;
    } catch {
      return null;
    }
  }
}

let instance: CountriesService | null = null;

export default (() => {
  if (!instance) instance = new CountriesService();
  return instance;
})();
