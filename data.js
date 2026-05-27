const LAST_UPDATED = '2026-05-26T09:00:00Z';
const DECAY = [null, 30, 22.5, 12, 6, 2.5, 2.5];
const SELECT_N = [null, 5, 5, 5, 4, 4, 4];

const DATA = [
  {
    rank:1, slug:'kenji-nakamura', name:'Kenji Nakamura',
    country:'Japan', flag:'🇯🇵', distance:'Marathon', gender:'Men',
    pts:1382, prevRank:3,
    results:[
      { raceName:'Tokyo Marathon',               date:'2026-03-03', distance:'Marathon', position:1, fieldSize:38000 },
      { raceName:'Osaka International Marathon', date:'2025-12-01', distance:'Marathon', position:2, fieldSize:28000 },
      { raceName:'Fukuoka International Marathon',date:'2025-09-07', distance:'Marathon', position:1, fieldSize:15000 },
      { raceName:'Lake Biwa Marathon',           date:'2025-02-01', distance:'Marathon', position:1, fieldSize:8000  },
      { raceName:'Chicago Marathon',             date:'2024-10-13', distance:'Marathon', position:3, fieldSize:50000 },
      { raceName:'Boston Marathon',              date:'2024-04-15', distance:'Marathon', position:5, fieldSize:30000 },
    ]
  },
  {
    rank:2, slug:'ji-ho-kim', name:'Ji-ho Kim',
    country:'Korea', flag:'🇰🇷', distance:'10K', gender:'Men',
    pts:1344, prevRank:2,
    results:[
      { raceName:'JTBC Seoul 10K',           date:'2026-04-05', distance:'10K', position:1, fieldSize:7500 },
      { raceName:'Chosun Ilbo Chungjeon 10K',date:'2025-10-12', distance:'10K', position:1, fieldSize:5800 },
      { raceName:'Daegu International 10K',  date:'2025-08-17', distance:'10K', position:2, fieldSize:4200 },
      { raceName:'Busan International 10K',  date:'2025-03-09', distance:'10K', position:1, fieldSize:6000 },
      { raceName:'Gyeongju 10K',             date:'2024-10-06', distance:'10K', position:1, fieldSize:5500 },
      { raceName:'Seoul Spring 10K',         date:'2024-03-17', distance:'10K', position:2, fieldSize:7000 },
    ]
  },
  {
    rank:3, slug:'emma-clarke', name:'Emma Clarke',
    country:'UK', flag:'🇬🇧', distance:'Half Marathon', gender:'Women',
    pts:1298, prevRank:4,
    results:[
      { raceName:'London Big Half',      date:'2026-03-01', distance:'Half Marathon', position:1, fieldSize:18000 },
      { raceName:'Great North Run',      date:'2025-09-07', distance:'Half Marathon', position:2, fieldSize:60000 },
      { raceName:'Manchester Half',      date:'2025-05-18', distance:'Half Marathon', position:1, fieldSize:8500  },
      { raceName:'Edinburgh Half',       date:'2025-01-19', distance:'Half Marathon', position:2, fieldSize:6000  },
      { raceName:'Bristol Half',         date:'2024-09-15', distance:'Half Marathon', position:1, fieldSize:9000  },
      { raceName:'Reading Half Marathon',date:'2024-03-10', distance:'Half Marathon', position:3, fieldSize:12000 },
    ]
  },
  {
    rank:4, slug:'wei-zhang', name:'Wei Zhang',
    country:'China', flag:'🇨🇳', distance:'Marathon', gender:'Women',
    pts:1251, prevRank:1,
    results:[
      { raceName:'Xiamen Marathon',   date:'2026-01-05', distance:'Marathon', position:1, fieldSize:25000 },
      { raceName:'Shanghai Marathon', date:'2025-11-24', distance:'Marathon', position:1, fieldSize:38000 },
      { raceName:'Chengdu Marathon',  date:'2025-09-28', distance:'Marathon', position:2, fieldSize:20000 },
      { raceName:'Wuhan Marathon',    date:'2025-04-13', distance:'Marathon', position:1, fieldSize:18000 },
      { raceName:'Beijing Marathon',  date:'2024-10-27', distance:'Marathon', position:2, fieldSize:30000 },
      { raceName:'Hangzhou Marathon', date:'2024-05-19', distance:'Marathon', position:1, fieldSize:15000 },
    ]
  },
  {
    rank:5, slug:'antoine-rousseau', name:'Antoine Rousseau',
    country:'France', flag:'🇫🇷', distance:'10K', gender:'Men',
    pts:1214, prevRank:5,
    results:[
      { raceName:'Paris 10K',     date:'2026-04-06', distance:'10K', position:1, fieldSize:12000 },
      { raceName:'Lyon 10K',      date:'2025-10-19', distance:'10K', position:2, fieldSize:6500  },
      { raceName:'Marseille 10K', date:'2025-07-06', distance:'10K', position:1, fieldSize:5000  },
      { raceName:'Bordeaux 10K',  date:'2025-03-02', distance:'10K', position:2, fieldSize:7000  },
      { raceName:'Nice 10K',      date:'2024-11-10', distance:'10K', position:1, fieldSize:5500  },
      { raceName:'Toulouse 10K',  date:'2024-04-07', distance:'10K', position:3, fieldSize:4000  },
    ]
  },
  {
    rank:6, slug:'seo-yeon-lee', name:'Seo-yeon Lee',
    country:'Korea', flag:'🇰🇷', distance:'5K', gender:'Women',
    pts:1178, prevRank:7,
    results:[
      { raceName:'Seoul Women\'s 5K',   date:'2026-04-19', distance:'5K', position:1, fieldSize:3800 },
      { raceName:'Busan International 5K',date:'2025-10-05', distance:'5K', position:1, fieldSize:2800 },
      { raceName:'Incheon 5K',          date:'2025-08-03', distance:'5K', position:2, fieldSize:2200 },
      { raceName:'Daejeon 5K',          date:'2025-02-16', distance:'5K', position:1, fieldSize:1800 },
      { raceName:'Jeju 5K',             date:'2024-10-20', distance:'5K', position:1, fieldSize:2500 },
      { raceName:'Gwangju 5K',          date:'2024-04-28', distance:'5K', position:2, fieldSize:3000 },
    ]
  },
  {
    rank:7, slug:'chen-wei-ting', name:'Chen Wei-ting',
    country:'Taiwan', flag:'🇹🇼', distance:'Half Marathon', gender:'Men',
    pts:1135, prevRank:null,
    results:[
      { raceName:'Taipei City Half Marathon',  date:'2026-02-09', distance:'Half Marathon', position:1, fieldSize:12000 },
      { raceName:'Taichung Half Marathon',     date:'2026-01-04', distance:'Half Marathon', position:2, fieldSize:8000  },
      { raceName:'Kaohsiung Half Marathon',    date:'2025-11-16', distance:'Half Marathon', position:1, fieldSize:9000  },
      { raceName:'Sun Moon Lake International',date:'2025-08-03', distance:'Half Marathon', position:3, fieldSize:7000  },
      { raceName:'Tainan Half Marathon',       date:'2025-03-23', distance:'Half Marathon', position:2, fieldSize:5500  },
    ]
  },
  {
    rank:8, slug:'lukas-bauer', name:'Lukas Bauer',
    country:'Germany', flag:'🇩🇪', distance:'Marathon', gender:'Men',
    pts:1092, prevRank:6,
    results:[
      { raceName:'Frankfurt Marathon', date:'2025-10-26', distance:'Marathon', position:1, fieldSize:22000 },
      { raceName:'Berlin Marathon',    date:'2025-09-28', distance:'Marathon', position:2, fieldSize:50000 },
      { raceName:'Hamburg Marathon',   date:'2025-04-27', distance:'Marathon', position:3, fieldSize:20000 },
      { raceName:'Cologne Marathon',   date:'2024-10-06', distance:'Marathon', position:2, fieldSize:18000 },
      { raceName:'Munich Marathon',    date:'2024-04-28', distance:'Marathon', position:4, fieldSize:16000 },
    ]
  },
  {
    rank:9, slug:'mei-fujiwara', name:'Mei Fujiwara',
    country:'Japan', flag:'🇯🇵', distance:'10K', gender:'Women',
    pts:1048, prevRank:10,
    results:[
      { raceName:'Nagoya Women\'s 10K', date:'2026-03-08', distance:'10K', position:1, fieldSize:8000 },
      { raceName:'Kyoto 10K',           date:'2025-11-30', distance:'10K', position:2, fieldSize:5500 },
      { raceName:'Kobe 10K',            date:'2025-08-24', distance:'10K', position:1, fieldSize:4800 },
      { raceName:'Sendai 10K',          date:'2025-01-12', distance:'10K', position:2, fieldSize:4000 },
      { raceName:'Sapporo 10K',         date:'2024-08-18', distance:'10K', position:1, fieldSize:5200 },
      { raceName:'Hiroshima 10K',       date:'2024-02-25', distance:'10K', position:3, fieldSize:3500 },
    ]
  },
  {
    rank:10, slug:'chan-kai-lok', name:'Chan Kai-lok',
    country:'Hong Kong', flag:'🇭🇰', distance:'Marathon', gender:'Men',
    pts:1011, prevRank:11,
    results:[
      { raceName:'Standard Chartered HK Marathon',date:'2026-02-15', distance:'Marathon', position:2, fieldSize:14000 },
      { raceName:'Macau Marathon',               date:'2025-12-07', distance:'Marathon', position:1, fieldSize:8000  },
      { raceName:'Taipei Marathon',              date:'2025-09-21', distance:'Marathon', position:3, fieldSize:10000 },
      { raceName:'Seoul Marathon',               date:'2025-03-16', distance:'Marathon', position:4, fieldSize:22000 },
      { raceName:'HK Marathon 2024',             date:'2024-02-18', distance:'Marathon', position:4, fieldSize:13000 },
    ]
  },
  {
    rank:11, slug:'camille-lefevre', name:'Camille Lefevre',
    country:'France', flag:'🇫🇷', distance:'Half Marathon', gender:'Women',
    pts:968, prevRank:9,
    results:[
      { raceName:'Paris Half Marathon',       date:'2026-03-01', distance:'Half Marathon', position:2, fieldSize:45000 },
      { raceName:'Semi de Bordeaux',          date:'2025-10-12', distance:'Half Marathon', position:1, fieldSize:6000  },
      { raceName:'Nice Half Marathon',        date:'2025-07-06', distance:'Half Marathon', position:2, fieldSize:5000  },
      { raceName:'Lyon Half Marathon',        date:'2025-01-26', distance:'Half Marathon', position:1, fieldSize:7500  },
      { raceName:'Lille Half Marathon',       date:'2024-09-22', distance:'Half Marathon', position:3, fieldSize:8000  },
    ]
  },
  {
    rank:12, slug:'ahmad-razif', name:'Ahmad Razif',
    country:'Malaysia', flag:'🇲🇾', distance:'5K', gender:'Men',
    pts:934, prevRank:12,
    results:[
      { raceName:'Putrajaya 5K',    date:'2026-04-27', distance:'5K', position:1, fieldSize:2500 },
      { raceName:'KL Twilight 5K',  date:'2025-11-09', distance:'5K', position:1, fieldSize:1800 },
      { raceName:'Penang Bridge 5K',date:'2025-08-31', distance:'5K', position:2, fieldSize:2200 },
      { raceName:'Malacca 5K',      date:'2025-02-23', distance:'5K', position:1, fieldSize:1500 },
      { raceName:'Ipoh 5K',         date:'2024-10-13', distance:'5K', position:2, fieldSize:1800 },
      { raceName:'Langkawi 5K',     date:'2024-04-21', distance:'5K', position:1, fieldSize:1200 },
    ]
  },
  {
    rank:13, slug:'hannah-muller', name:'Hannah Müller',
    country:'Germany', flag:'🇩🇪', distance:'Marathon', gender:'Women',
    pts:897, prevRank:8,
    results:[
      { raceName:'Berlin Marathon',    date:'2026-04-26', distance:'Marathon', position:1, fieldSize:50000 },
      { raceName:'Hamburg Marathon',   date:'2025-11-02', distance:'Marathon', position:2, fieldSize:20000 },
      { raceName:'Cologne Marathon',   date:'2025-08-10', distance:'Marathon', position:1, fieldSize:18000 },
      { raceName:'Frankfurt Marathon', date:'2025-03-30', distance:'Marathon', position:1, fieldSize:22000 },
      { raceName:'Munich Marathon',    date:'2024-10-13', distance:'Marathon', position:2, fieldSize:16000 },
      { raceName:'Vienna Marathon',    date:'2024-04-14', distance:'Marathon', position:1, fieldSize:35000 },
    ]
  },
  {
    rank:14, slug:'supachai-thongsuk', name:'Supachai Thongsuk',
    country:'Thailand', flag:'🇹🇭', distance:'10K', gender:'Men',
    pts:861, prevRank:15,
    results:[
      { raceName:'King\'s Cup 10K Bangkok', date:'2026-04-05', distance:'10K', position:1, fieldSize:6000 },
      { raceName:'Chiang Mai 10K',          date:'2025-11-23', distance:'10K', position:2, fieldSize:4000 },
      { raceName:'Phuket 10K',              date:'2025-09-14', distance:'10K', position:1, fieldSize:3500 },
      { raceName:'Pattaya 10K',             date:'2025-03-22', distance:'10K', position:2, fieldSize:5000 },
      { raceName:'Hua Hin 10K',             date:'2024-10-06', distance:'10K', position:1, fieldSize:3200 },
    ]
  },
  {
    rank:15, slug:'lin-mei-ling', name:'Lin Mei-ling',
    country:'Taiwan', flag:'🇹🇼', distance:'5K', gender:'Women',
    pts:824, prevRank:14,
    results:[
      { raceName:'Sun Moon Lake Run', date:'2026-03-15', distance:'5K', position:1, fieldSize:2800 },
      { raceName:'Kaohsiung 5K',      date:'2025-12-14', distance:'5K', position:2, fieldSize:2000 },
      { raceName:'Taipei 5K',         date:'2025-10-05', distance:'5K', position:1, fieldSize:2500 },
      { raceName:'Taichung 5K',       date:'2025-04-06', distance:'5K', position:1, fieldSize:1800 },
      { raceName:'Tainan 5K',         date:'2024-11-10', distance:'5K', position:3, fieldSize:2200 },
    ]
  },
  {
    rank:16, slug:'oliver-hughes', name:'Oliver Hughes',
    country:'UK', flag:'🇬🇧', distance:'Marathon', gender:'Men',
    pts:789, prevRank:13,
    results:[
      { raceName:'London Marathon',    date:'2026-04-26', distance:'Marathon', position:4, fieldSize:50000 },
      { raceName:'Manchester Marathon',date:'2025-10-12', distance:'Marathon', position:3, fieldSize:25000 },
      { raceName:'Liverpool Marathon', date:'2025-07-27', distance:'Marathon', position:2, fieldSize:8000  },
      { raceName:'Edinburgh Marathon', date:'2025-05-25', distance:'Marathon', position:5, fieldSize:12000 },
      { raceName:'Brighton Marathon',  date:'2025-04-06', distance:'Marathon', position:4, fieldSize:15000 },
      { raceName:'York Marathon',      date:'2024-10-06', distance:'Marathon', position:2, fieldSize:6000  },
    ]
  },
  {
    rank:17, slug:'mohd-hafiz-zainal', name:'Mohd Hafiz Zainal',
    country:'Malaysia', flag:'🇲🇾', distance:'Half Marathon', gender:'Men',
    pts:754, prevRank:17,
    results:[
      { raceName:'Penang Bridge International Half',date:'2025-12-07', distance:'Half Marathon', position:2, fieldSize:5000 },
      { raceName:'Putrajaya Half Marathon',         date:'2025-09-28', distance:'Half Marathon', position:1, fieldSize:3800 },
      { raceName:'KL Standard Chartered Half',      date:'2025-06-22', distance:'Half Marathon', position:3, fieldSize:6500 },
      { raceName:'Sabah Half Marathon',             date:'2025-02-02', distance:'Half Marathon', position:2, fieldSize:2800 },
      { raceName:'Malacca Half Marathon',           date:'2024-08-25', distance:'Half Marathon', position:1, fieldSize:2200 },
    ]
  },
  {
    rank:18, slug:'nattaya-charoenwong', name:'Nattaya Charoenwong',
    country:'Thailand', flag:'🇹🇭', distance:'Half Marathon', gender:'Women',
    pts:718, prevRank:16,
    results:[
      { raceName:'Bangkok Half Marathon',  date:'2026-01-18', distance:'Half Marathon', position:1, fieldSize:8000 },
      { raceName:'Chiang Mai Half Marathon',date:'2025-11-16', distance:'Half Marathon', position:2, fieldSize:5500 },
      { raceName:'Khon Kaen Half Marathon',date:'2025-09-07', distance:'Half Marathon', position:1, fieldSize:4000 },
      { raceName:'Phuket Half Marathon',   date:'2025-02-09', distance:'Half Marathon', position:3, fieldSize:6000 },
      { raceName:'Pattaya Half Marathon',  date:'2024-10-20', distance:'Half Marathon', position:2, fieldSize:4500 },
    ]
  },
  {
    rank:19, slug:'lars-eriksson', name:'Lars Eriksson',
    country:'Sweden', flag:'🇸🇪', distance:'Ultra', gender:'Men',
    pts:681, prevRank:19,
    results:[
      { raceName:'Transgrancanaria 128K',  date:'2026-03-01', distance:'Ultra', position:3, fieldSize:1200 },
      { raceName:'UTMB 100',              date:'2025-08-29', distance:'Ultra', position:5, fieldSize:2300 },
      { raceName:'Lavaredo Ultra Trail',  date:'2025-06-27', distance:'Ultra', position:4, fieldSize:850  },
      { raceName:'Nordenskiöldsloppet',   date:'2025-03-08', distance:'Ultra', position:2, fieldSize:600  },
      { raceName:'Kebnekaise Ultra',      date:'2024-09-15', distance:'Ultra', position:3, fieldSize:500  },
    ]
  },
  {
    rank:20, slug:'daisuke-mori', name:'Daisuke Mori',
    country:'Japan', flag:'🇯🇵', distance:'Marathon', gender:'Men',
    pts:645, prevRank:19,
    results:[
      { raceName:'Kobe Marathon',       date:'2026-02-15', distance:'Marathon', position:3, fieldSize:20000 },
      { raceName:'Nara Marathon',       date:'2025-12-07', distance:'Marathon', position:2, fieldSize:12000 },
      { raceName:'Nagano Marathon',     date:'2025-10-26', distance:'Marathon', position:4, fieldSize:8500  },
      { raceName:'Matsuyama Marathon',  date:'2025-04-06', distance:'Marathon', position:3, fieldSize:7000  },
      { raceName:'Kitakyushu Marathon', date:'2024-11-10', distance:'Marathon', position:5, fieldSize:9000  },
    ]
  },
  {
    rank:21, slug:'fang-liu', name:'Fang Liu',
    country:'China', flag:'🇨🇳', distance:'10K', gender:'Women',
    pts:609, prevRank:null,
    results:[
      { raceName:'Shenzhen 10K',  date:'2026-04-19', distance:'10K', position:1, fieldSize:9000 },
      { raceName:'Guangzhou 10K', date:'2026-02-15', distance:'10K', position:2, fieldSize:7500 },
      { raceName:'Chengdu 10K',   date:'2025-12-07', distance:'10K', position:1, fieldSize:6800 },
      { raceName:'Wuhan 10K',     date:'2025-10-18', distance:'10K', position:3, fieldSize:5500 },
    ]
  },
  {
    rank:22, slug:'min-jun-park', name:'Min-jun Park',
    country:'Korea', flag:'🇰🇷', distance:'5K', gender:'Men',
    pts:572, prevRank:24,
    results:[
      { raceName:'Seoul City 5K',          date:'2026-03-22', distance:'5K', position:3, fieldSize:4500 },
      { raceName:'Incheon International 5K',date:'2025-10-26', distance:'5K', position:2, fieldSize:3200 },
      { raceName:'Busan 5K',               date:'2025-07-13', distance:'5K', position:1, fieldSize:2800 },
      { raceName:'Daegu 5K',               date:'2025-03-30', distance:'5K', position:2, fieldSize:2500 },
      { raceName:'Ulsan 5K',               date:'2024-11-24', distance:'5K', position:4, fieldSize:2000 },
    ]
  },
  {
    rank:23, slug:'wong-siu-ming', name:'Wong Siu-ming',
    country:'Hong Kong', flag:'🇭🇰', distance:'Marathon', gender:'Men',
    pts:538, prevRank:23,
    results:[
      { raceName:'Standard Chartered HK Marathon',date:'2026-02-15', distance:'Marathon', position:5,  fieldSize:14000 },
      { raceName:'Macau Marathon',               date:'2025-12-07', distance:'Marathon', position:3,  fieldSize:8000  },
      { raceName:'Shenzhen Marathon',            date:'2025-11-23', distance:'Marathon', position:4,  fieldSize:18000 },
      { raceName:'Guangzhou Marathon',           date:'2025-11-02', distance:'Marathon', position:6,  fieldSize:30000 },
      { raceName:'Taipei Marathon',              date:'2025-01-26', distance:'Marathon', position:5,  fieldSize:10000 },
    ]
  },
  {
    rank:24, slug:'giulia-ferrari', name:'Giulia Ferrari',
    country:'Italy', flag:'🇮🇹', distance:'Marathon', gender:'Women',
    pts:501, prevRank:21,
    results:[
      { raceName:'Rome Marathon',     date:'2026-03-22', distance:'Marathon', position:2, fieldSize:15000 },
      { raceName:'Florence Marathon', date:'2025-11-23', distance:'Marathon', position:3, fieldSize:12000 },
      { raceName:'Venice Marathon',   date:'2025-10-19', distance:'Marathon', position:1, fieldSize:8000  },
      { raceName:'Milan Marathon',    date:'2025-04-06', distance:'Marathon', position:2, fieldSize:10000 },
      { raceName:'Turin Marathon',    date:'2024-11-10', distance:'Marathon', position:1, fieldSize:5000  },
    ]
  },
  {
    rank:25, slug:'lee-pui-yan', name:'Lee Pui-yan',
    country:'Hong Kong', flag:'🇭🇰', distance:'Ultra', gender:'Women',
    pts:464, prevRank:26,
    results:[
      { raceName:'HK100 Ultra Trail',      date:'2026-01-24', distance:'Ultra', position:3, fieldSize:1800 },
      { raceName:'Lantau 50',              date:'2025-11-16', distance:'Ultra', position:2, fieldSize:800  },
      { raceName:'Vibram HK Trail',        date:'2025-09-14', distance:'Ultra', position:4, fieldSize:1200 },
      { raceName:'Oxfam Trailwalker HK',   date:'2025-03-22', distance:'Ultra', position:5, fieldSize:600  },
      { raceName:'Coast of Bays Ultra',    date:'2024-10-13', distance:'Ultra', position:3, fieldSize:400  },
    ]
  },
];

/* ── Formula helpers (shared by index + profile) ── */
function getPeriod(dateStr) {
  const race = new Date(dateStr);
  const ref  = new Date(LAST_UPDATED);
  const months = (ref.getFullYear() - race.getFullYear()) * 12 + (ref.getMonth() - race.getMonth());
  if (months <=  6) return 1;
  if (months <= 12) return 2;
  if (months <= 18) return 3;
  if (months <= 24) return 4;
  if (months <= 30) return 5;
  if (months <= 36) return 6;
  return null;
}

function calcEventScore(position, fieldSize, period) {
  const ff = Math.log10(Math.min(fieldSize, 10000) / position);
  return ff * DECAY[period];
}

function scoreResults(results) {
  const scored = results.map(r => {
    const period = getPeriod(r.date);
    if (!period) return null;
    const ff    = Math.log10(Math.min(r.fieldSize, 10000) / r.position);
    const score = ff * DECAY[period];
    return { ...r, period, ff, score };
  }).filter(Boolean);

  const byPeriod = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[]};
  scored.forEach(r => byPeriod[r.period].push(r));

  const out = [];
  for (let p = 1; p <= 6; p++) {
    byPeriod[p].sort((a, b) => b.score - a.score).forEach((r, i) => {
      out.push({ ...r, selected: i < SELECT_N[p] });
    });
  }
  return out;
}
