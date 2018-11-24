import Http from '@/support/services/http';

class FisicaService extends Http {
  save(payload) {
    return this.post('/fisica', payload);
  }
}
const service = new FisicaService();
export default service;
