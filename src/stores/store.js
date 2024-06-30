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
      answer:
        "Yes, the company has sustainability reporting. The report is conducted according to the principles of the Global Reporting Standards' sustainability reporting standards.",
      contexts: ['P15 §3'],
      category: 'governance'
    },
    {
      question_id: 2,
      question: 'What was the water consumption in the fiscal year?',
      answer:
        'In 2021, the water consumption was 1,237,598.0; in 2022, it was 1,307,990.1; and in 2023, it was 1,178,788.0. For further insights into water consumption, refer to section 03.2 and table ENV-7. Additionally, there has been a reduction in water consumption per employee since 2019, with a consumption of 8 in 2021.',
      contexts: ['P94 §1'],
      category: 'environmental'
    },
    {
      question_id: 3,
      question: 'Which transitional risk drivers are particularly significant for the company?',
      answer:
        'The most relevant climate risks for Allianz as an organization are related to proprietary investments and property/liability insurance. Risks associated with corporate activities and life/health insurance are also present, albeit to a lesser extent. Regarding the timeframe, the assessment considers transitional risks to be more relevant in the short to medium term than in the long term under scenarios pursuing strict alignment with the Paris Agreement targets.',
      contexts: ['P15 §3', 'P70 §1'],
      category: 'environmental'
    },
    {
      question_id: 4,
      question:
        'To what extent does the company plan to reduce greenhouse gas emissions (Scope 1) by 2030?',
      answer: '70% against a 2019 baseline',
      contexts: ['P33 §3', 'P70 §1'],
      category: 'environmental'
    },
    {
      question_id: 5,
      question: 'Which acute physical climate risks are most relevant for the company?',
      answer:
        'The most relevant acute physical climate risks for Allianz in the short to medium term include events such as floods, droughts, or wildfires.',
      contexts: ['P10 §3', 'P134 §4'],
      category: 'environmental'
    },
    {
      question_id: 6,
      question:
        'What goals does the company have for increasing the proportion of women in leadership positions?',
      answer:
        'The company aims to achieve a 30% share of women in Allianz Global Executive and Senior Executive positions, a 40% share in Executive positions, and 50% in talent pools by 2024.',
      contexts: ['P140 §1'],
      category: 'social'
    },
    {
      question_id: 7,
      question: 'What is the proportion of women in leadership positions in the reporting year?',
      answer:
        'In the reporting year, the proportion of women in leadership positions at Allianz Global Executives (AGE) was 25.96%, at Allianz Senior Executives (ASE) 27.90%, and at Allianz Executives (AE) 35.51%.',
      contexts: ['P30 §1'],
      category: 'social'
    },
    {
      question_id: 8,
      question:
        'Is there a person responsible for sustainability in the company? If yes, are they a member of the board?',
      answer:
        'Yes, there is a person responsible for sustainability within the company. This person is a member of the Executive Board and is supported by one or more sustainability officers. Ultimately, the responsibility for sustainability rests with the Executive Board of Allianz SE as the parent company of the group.',
      contexts: ['P15 §3'],
      category: 'governance'
    },
    {
      question_id: 9,
      question:
        "Is the achievement of sustainability goals part of the board's compensation system?",
      answer:
        "Yes, the achievement of sustainability goals is part of the executive board's compensation system. The sustainability goals are linked to the board's compensation and form part of the individual contribution factor. This also includes the decarbonization targets for proprietary investments and own operations. Further information can be found in the Remuneration Report and in the section 'Corporate Responsibility Governance and Strategy'",
      contexts: ['P15 §3'],
      category: 'governance'
    },
    {
      question_id: 10,
      question:
        'What was the electricity consumption in the reporting year in GWh, and what was the percentage of electricity consumption from renewable sources?',
      answer:
        'The information in the text is given in GJ and not in GWh (1,574,357 GJ). It is mentioned that in the reporting year, 100% of the electricity consumption came from renewable, low-carbon sources.',
      contexts: ['P94 §1'],
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
