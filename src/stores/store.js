import { defineStore } from 'pinia'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
      {
        client: 'Client A',
        clientId: '01',
        children: [
          {
            report: 'Report 1',
            timestamp: '2024-06-01'
          },
          {
            report: 'Report 2',
            timestamp: '2024-06-02'
          }
        ]
      },
      {
        client: 'Client B',
        clientId: '02',
        children: [
          {
            report: 'Report 3',
            timestamp: '2024-06-03'
          }
        ]
      }
    ]
  }),
  getters: {
    getClients(state) {
      return state.clients
    }
  }
})
