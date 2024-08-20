import axios from 'axios'

export class ProxyService {
    async request(url: string) {
        const response = await axios.get(url)
        return response.data
    }
}

export const proxyService = new ProxyService()
