import { defineStore } from 'pinia'
// import axios from 'axios'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
      {
        client: 'Client A',
        clientId: 1,
        children: []
      },
      {
        client: 'Client B',
        clientId: 2,
        children: []
      }
    ]
  }),
  getters: {
    getClients(state) {
      return state.clients
    }
  },
  actions: {
    async fetchReports(clientId) {
      try {
        // const response = await axios.get(`/api/reports?clientId=${clientId}`)
        let mockData = []
        if (clientId === 1) {
          mockData = [
            {
              clientId: 1,
              reportId: 'cl_1_rep_1',
              report: 'Report 1',
              timestamp: '2024-06-01T12:00:00Z'
            },
            {
              clientId: 1,
              reportId: 'cl_1_rep_2',
              report: 'Report 2',
              timestamp: '2024-06-02T12:00:00Z'
            }
          ]
        } else if (clientId === 2) {
          mockData = [
            {
              clientId: 2,
              report: 'Report 3',
              reportId: 'cl_2_rep_1',
              timestamp: '2024-06-03T12:00:00Z'
            }
          ]
        }
        let response = { data: mockData }
        const client = this.clients.find((c) => c.clientId === clientId)

        if (client) {
          client.children = response.data
        }
      } catch (error) {
        console.error('Failed to fetch reports:', error)
      }
    },
    async fetchAllClientsReports() {
      for (const client of this.clients) {
        await this.fetchReports(client.clientId)
      }
    }
  }
})
