import { defineStore } from 'pinia'

const mockReports = {
  1: [
    {
      clientId: 1,
      reportId: 'client_1_report_2023',
      report: '2023_Volkswagen_Group_Nachhaltigkeitsbericht',
      timestamp: '2023-12-01'
    }
  ],
  2: [
    {
      clientId: 2,
      reportId: '2023-nachhaltigkeitsbericht',
      report: 'client_2_report_2023',
      timestamp: '2023-12-01'
    }
  ],
  3: [
    {
      clientId: 3,
      reportId: 'Allianz_Group_Sustainability_Report_2023-web',
      report: 'client_3_report_2023',
      timestamp: '2023-12-03'
    }
  ],
  4: [
    {
      clientId: 4,
      reportId: 'bayer-nachhaltigkeitsbericht-2023',
      report: 'client_4_report_2023',
      timestamp: '2023-12-01'
    }
  ],
  5: [
    {
      clientId: 5,
      reportId: 'Beiersdorf-geschaeftsbericht-2023-de',
      report: 'client_5_report_2023',
      timestamp: '2023-12-01'
    }
  ],
  6: [
    {
      clientId: 6,
      reportId: 'brenntag-nachhaltigkeitsbericht-2023',
      report: 'client_6_report_2023',
      timestamp: '2023-12-01'
    }
  ],
  7: [
    {
      clientId: 7,
      reportId: 'continental-sustainability-report-2023',
      report: 'client_7_report_2023',
      timestamp: '2023-12-01'
    }
  ],
  8: [
    {
      clientId: 8,
      reportId: 'nichtfinanzieller-bericht-2023',
      report: 'client_8_report_2023',
      timestamp: '2023-12-01'
    }
  ]
}

const mockAnalysis = {
  answers: [
    {
      question_id: 1,
      question:
        'Gibt es eine Nachhaltigkeitsberichterstattung im Unternehmen? Falls ja, nenne den Standard, den das Unternehmen verwendet.',
      answer: 'Ja, GRI',
      contexts: ['context 1']
    },
    {
      question_id: 2,
      question: 'Wie hoch war der Wasserverbrauch im Fiskaljahr?',
      answer: '1000 m³',
      contexts: ['context 1']
    },
    {
      question_id: 3,
      question:
        'Welche transitorischen Risikotreiber sind für das Unternehmen von besonderer Bedeutung?',
      answer: 'Klimawandel und Digitalisierung',
      contexts: []
    }
  ]
}

const mockReportsDetails = {
  client_1_report_2023: {
    clientId: 1,
    reportId: 'client_1_report_2023',
    title: 'Volkswagen Group Nachhaltigkeitsbericht 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  '2023-nachhaltigkeitsbericht': {
    clientId: 2,
    reportId: '2023-nachhaltigkeitsbericht',
    title: 'Henkel Nachhaltigkeitsbericht 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  'Allianz_Group_Sustainability_Report_2023-web': {
    clientId: 3,
    reportId: 'Allianz_Group_Sustainability_Report_2023-web',
    title: 'Allianz Group Sustainability Report 2023',
    timestamp: '2023-12-03',
    analysis: mockAnalysis
  },
  'bayer-nachhaltigkeitsbericht-2023': {
    clientId: 4,
    reportId: 'bayer-nachhaltigkeitsbericht-2023',
    title: 'Bayer Nachhaltigkeitsbericht 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  'Beiersdorf-geschaeftsbericht-2023-de': {
    clientId: 5,
    reportId: 'Beiersdorf-geschaeftsbericht-2023-de',
    title: 'Beiersdorf Geschäftsbericht 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  'brenntag-nachhaltigkeitsbericht-2023': {
    clientId: 6,
    reportId: 'brenntag-nachhaltigkeitsbericht-2023',
    title: 'Brenntag Nachhaltigkeitsbericht 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  'continental-sustainability-report-2023': {
    clientId: 7,
    reportId: 'continental-sustainability-report-2023',
    title: 'Continental Sustainability Report 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  'nichtfinanzieller-bericht-2023': {
    clientId: 8,
    reportId: 'nichtfinanzieller-bericht-2023',
    title: 'KPMG Nichtfinanzieller Bericht 2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  }
}

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
      { client: 'Volkswagen AG', clientId: 1, children: [] },
      { client: 'Henkel AG & Co. KGaA', clientId: 2, children: [] },
      { client: 'Allianz SE', clientId: 3, children: [] },
      { client: 'Bayer AG', clientId: 4, children: [] },
      { client: 'Beiersdorf AG', clientId: 5, children: [] },
      { client: 'Brenntag SE', clientId: 6, children: [] },
      { client: 'Continental AG', clientId: 7, children: [] },
      { client: 'KPMG AG', clientId: 8, children: [] }
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
        // todo: fetch reports from API
        const client = this.clients.find((c) => c.clientId === clientId)
        if (client) {
          client.children = mockReports[clientId] || []
        }
      } catch (error) {
        console.error('Failed to fetch reports:', error)
      }
    },
    async fetchAllClientsReports() {
      for (const client of this.clients) {
        await this.fetchReports(client.clientId)
      }
    },
    async fetchReportById(reportId) {
      try {
        // todo: fetch report from API
        return mockReportsDetails[reportId] || {}
      } catch (error) {
        console.error('Failed to fetch report:', error)
      }
    }
  }
})
