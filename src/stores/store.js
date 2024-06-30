import { defineStore } from 'pinia'

const mockReports = {
  1: [
    {
      clientId: 1,
      reportId: 'client_1_report_2023',
      fileName: '2023_Volkswagen_Group_Nachhaltigkeitsbericht',
      timestamp: '2023-12-01'
    },
    {
      clientId: 1,
      reportId: 'client_1_report_2022',
      fileName: '2022_Volkswagen_Group_Nachhaltigkeitsbericht',
      timestamp: '2022-12-01'
    },
    {
      clientId: 1,
      reportId: 'client_1_report_2021',
      fileName: '2021_Volkswagen_Group_Nachhaltigkeitsbericht',
      timestamp: '2021-12-01'
    }
  ],
  2: [
    {
      clientId: 2,
      reportId: 'client_2_report_2023',
      fileName: '2023-nachhaltigkeitsbericht',
      timestamp: '2023-12-01'
    }
  ],
  3: [
    {
      clientId: 3,
      reportId: 'client_3_report_2023',
      fileName: 'Allianz_Group_Sustainability_Report_2023-web',
      timestamp: '2023-12-03'
    },
    {
      clientId: 3,
      reportId: 'client_3_report_2022',
      fileName: 'Allianz_Group_Sustainability_Report_2022-web',
      timestamp: '2022-12-03'
    }
  ],
  4: [
    {
      clientId: 4,
      reportId: 'client_4_report_2023',
      fileName: 'bayer-nachhaltigkeitsbericht-2023',
      timestamp: '2023-12-01'
    }
  ],
  5: [
    {
      clientId: 5,
      reportId: 'client_5_report_2023',
      fileName: 'Beiersdorf-geschaeftsbericht-2023-de',
      timestamp: '2023-12-01'
    },
    {
      clientId: 5,
      reportId: 'client_5_report_2022',
      fileName: 'Beiersdorf-geschaeftsbericht-2022-de',
      timestamp: '2022-12-01'
    },
    {
      clientId: 5,
      reportId: 'client_5_report_2021',
      fileName: 'Beiersdorf-geschaeftsbericht-2021-de',
      timestamp: '2021-12-01'
    },
    {
      clientId: 5,
      reportId: 'client_5_report_2020',
      fileName: 'Beiersdorf-geschaeftsbericht-2020-de',
      timestamp: '2020-12-01'
    }
  ],
  6: [
    {
      clientId: 6,
      reportId: 'client_6_report_2023',
      fileName: 'brenntag-nachhaltigkeitsbericht-2023',
      timestamp: '2023-12-01'
    }
  ],
  7: [
    {
      clientId: 7,
      reportId: 'client_7_report_2023',
      fileName: 'continental-sustainability-report-2023',
      timestamp: '2023-12-01'
    }
  ],
  8: [
    {
      clientId: 8,
      reportId: 'client_8_report_2023',
      fileName: 'nichtfinanzieller-bericht-2023',
      timestamp: '2023-12-01'
    }
  ]
}

const mockAnalysis = {
  answers: [
    {
      question_id: 1,
      question:
        'Is there sustainability reporting in the company? If yes, name the standard the company uses.',
      answer: 'Yes, GRI',
      contexts: ['context 1'],
      category: 'governance'
    },
    {
      question_id: 2,
      question: 'What was the water consumption in the fiscal year?',
      answer: '1,178,788 m³',
      contexts: ['context 1'],
      category: 'environmental'
    },
    {
      question_id: 3,
      question: 'Which transitional risk drivers are particularly significant for the company?',
      answer:
        'Environmental and climate change risks, human rights violations, risks to local communities, and workforce risks',
      contexts: [],
      category: 'environmental'
    },
    {
      question_id: 4,
      question:
        'To what extent does the company plan to reduce greenhouse gas emissions (Scope 1) by 2030?',
      answer: '70% against a 2019 baseline',
      contexts: [],
      category: 'environmental'
    },
    {
      question_id: 5,
      question: 'Which acute physical climate risks are most relevant for the company?',
      answer: 'Extreme weather',
      contexts: [],
      category: 'environmental'
    },
    {
      question_id: 6,
      question:
        'What goals does the company have for increasing the proportion of women in leadership positions?',
      answer: '40%',
      contexts: [],
      category: 'social'
    },
    {
      question_id: 7,
      question: 'What is the proportion of women in leadership positions in the reporting year?',
      answer: '35.51%',
      contexts: [],
      category: 'social'
    },
    {
      question_id: 8,
      question:
        'Is there a person responsible for sustainability in the company? If yes, are they a member of the board?',
      answer: 'Yes, yes',
      contexts: [],
      category: 'governance'
    },
    {
      question_id: 9,
      question:
        "Is the achievement of sustainability goals part of the board's compensation system?",
      answer: 'Yes',
      contexts: [],
      category: 'governance'
    },
    {
      question_id: 10,
      question:
        'What was the electricity consumption in the reporting year in GWh, and what was the percentage of electricity consumption from renewable sources?',
      answer: '1,574,357 GJ, 100%',
      contexts: [],
      category: 'environmental'
    }
  ]
}

const mockReportsDetails = {
  client_1_report_2023: {
    clientId: 1,
    reportId: 'client_1_report_2023',
    title: 'Volkswagen Group Sustainability Report 2023',
    fileName: '2023_Volkswagen_Group_Nachhaltigkeitsbericht',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  client_1_report_2022: {
    clientId: 1,
    reportId: 'client_1_report_2022',
    title: 'Volkswagen Group Sustainability Report 2022',
    fileName: '2022_Volkswagen_Group_Nachhaltigkeitsbericht',
    timestamp: '2022-12-01',
    analysis: mockAnalysis
  },
  client_1_report_2021: {
    clientId: 1,
    reportId: 'client_1_report_2021',
    title: 'Volkswagen Group Sustainability Report 2021',
    fileName: '2021_Volkswagen_Group_Nachhaltigkeitsbericht',
    timestamp: '2021-12-01',
    analysis: mockAnalysis
  },
  client_3_report_2022: {
    clientId: 3,
    reportId: 'client_3_report_2022',
    title: 'Allianz Group Sustainability Report 2022',
    fileName: 'Allianz_Group_Sustainability_Report_2022-web',
    timestamp: '2022-12-03',
    analysis: mockAnalysis
  },
  client_2_report_2023: {
    clientId: 2,
    reportId: 'client_2_report_2023',
    title: 'Allianz Group Sustainability Report 2023',
    fileName: '2023-nachhaltigkeitsbericht',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  client_3_report_2023: {
    clientId: 3,
    reportId: 'client_3_report_2023',
    title: 'Allianz Group Sustainability Report 2023',
    fileName: 'Allianz_Group_Sustainability_Report_2023-web',
    timestamp: '2023-12-03',
    analysis: mockAnalysis
  },
  client_4_report_2023: {
    clientId: 4,
    reportId: 'client_4_report_2023',
    title: 'Bayer Sustainability Report 2023',
    fileName: 'bayer-nachhaltigkeitsbericht-2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  client_5_report_2023: {
    clientId: 5,
    reportId: 'client_5_report_2023',
    title: 'Beiersdorf Business Report 2023',
    fileName: 'Beiersdorf-geschaeftsbericht-2023-de',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  client_5_report_2022: {
    clientId: 5,
    reportId: 'client_5_report_2022',
    title: 'Beiersdorf Business Report 2022',
    fileName: 'Beiersdorf-geschaeftsbericht-2022-de',
    timestamp: '2022-12-01',
    analysis: mockAnalysis
  },
  client_5_report_2021: {
    clientId: 5,
    reportId: 'client_5_report_2021',
    title: 'Beiersdorf Business Report 2021',
    fileName: 'Beiersdorf-geschaeftsbericht-2021-de',
    timestamp: '2021-12-01',
    analysis: mockAnalysis
  },
  client_5_report_2020: {
    clientId: 5,
    reportId: 'client_5_report_2020',
    title: 'Beiersdorf Business Report 2020',
    fileName: 'Beiersdorf-geschaeftsbericht-2020-de',
    timestamp: '2020-12-01',
    analysis: mockAnalysis
  },
  client_6_report_2023: {
    clientId: 6,
    reportId: 'client_6_report_2023',
    title: 'Brenntag Sustainability Report 2023',
    fileName: 'brenntag-nachhaltigkeitsbericht-2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  client_7_report_2023: {
    clientId: 7,
    reportId: 'client_7_report_2023',
    title: 'Continental Sustainability Report 2023',
    fileName: 'continental-sustainability-report-2023',
    timestamp: '2023-12-01',
    analysis: mockAnalysis
  },
  client_8_report_2023: {
    clientId: 8,
    reportId: 'client_8_report_2023',
    title: 'KPMG Non-Financial Report 2023',
    fileName: 'nichtfinanzieller-bericht-2023',
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
