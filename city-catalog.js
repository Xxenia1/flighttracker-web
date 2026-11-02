// Common city names are resolved locally. Other names are looked up only on search.
const FLIGHT_TRACKER_CITIES = [
  { code: 'BJS', en: 'Beijing', zh: '北京', aliases: ['Peking'] },
  { code: 'SHA', en: 'Shanghai', zh: '上海' },
  { code: 'CAN', en: 'Guangzhou', zh: '广州', aliases: ['廣州'] },
  { code: 'SZX', en: 'Shenzhen', zh: '深圳' },
  { code: 'HKG', en: 'Hong Kong', zh: '香港', aliases: ['香港特别行政区'] },
  { code: 'CKG', en: 'Chongqing', zh: '重庆', aliases: ['重慶'] },
  { code: 'CTU', en: 'Chengdu', zh: '成都' },
  { code: 'WUH', en: 'Wuhan', zh: '武汉', aliases: ['武漢'] },
  { code: 'NKG', en: 'Nanjing', zh: '南京' },
  { code: 'HGH', en: 'Hangzhou', zh: '杭州' },
  { code: 'XIY', en: "Xi'an", zh: '西安', aliases: ['Xian'] },
  { code: 'XMN', en: 'Xiamen', zh: '厦门', aliases: ['廈門'] },
  { code: 'TSN', en: 'Tianjin', zh: '天津' },
  { code: 'TAO', en: 'Qingdao', zh: '青岛', aliases: ['青島'] },
  { code: 'TYO', en: 'Tokyo', zh: '东京', aliases: ['東京'] },
  { code: 'OSA', en: 'Osaka', zh: '大阪' },
  { code: 'SEL', en: 'Seoul', zh: '首尔', aliases: ['首爾'] },
  { code: 'SIN', en: 'Singapore', zh: '新加坡' },
  { code: 'NYC', en: 'New York', zh: '纽约', aliases: ['New York City', '紐約'] },
  { code: 'CHI', en: 'Chicago', zh: '芝加哥' },
  { code: 'LAX', en: 'Los Angeles', zh: '洛杉矶', aliases: ['洛杉磯'] },
  { code: 'SFO', en: 'San Francisco', zh: '旧金山', aliases: ['舊金山'] },
  { code: 'LON', en: 'London', zh: '伦敦', aliases: ['倫敦'] },
  { code: 'PAR', en: 'Paris', zh: '巴黎' },
  { code: 'DXB', en: 'Dubai', zh: '迪拜' },
  { code: 'BKK', en: 'Bangkok', zh: '曼谷' }
];

if (typeof window !== 'undefined') window.FLIGHT_TRACKER_CITIES = FLIGHT_TRACKER_CITIES;
if (typeof module !== 'undefined') module.exports = FLIGHT_TRACKER_CITIES;
