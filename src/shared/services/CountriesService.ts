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
}

let instance: CountriesService | null = null;

export default (() => {
  if (!instance) instance = new CountriesService();
  return instance;
})();
