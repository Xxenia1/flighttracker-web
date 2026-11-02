const translations = {
  en: {
    title: 'FlightTracker', subtitle: 'Flights, airports and routes in one view',
    currentLocation: 'Your current location', refreshLocation: 'Update location',
    nearbyAirport: 'Nearby airport', routeSearch: 'Search scheduled routes',
    cityCodeHint: 'Enter a city name or IATA code; choose a suggestion if needed.',
    from: 'From city', to: 'To city',
    fromPlaceholder: 'e.g. Beijing or BJS', toPlaceholder: 'e.g. Shanghai or SHA', search: 'Search',
    flight: 'Flight', departureAirport: 'Dep. airport', departureTime: 'Dep. time',
    arrivalAirport: 'Arr. airport', arrivalTime: 'Arr. time', duration: 'Duration',
    days: 'Operates', aircraft: 'Aircraft', inboundFlights: 'Inbound flights',
    routePages: 'Route result pages', previousPage: 'Previous', nextPage: 'Next',
    routePageSummary: 'Showing {from}–{to} of {total} routes',
    routePageNumber: 'Page {page} of {pages}', everyDay: 'Daily',
    flightPages: 'Inbound flight pages',
    flightPageSummary: 'Showing {from}–{to} of {total} flights',
    weekdayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    inboundHint: 'Current arrivals and aircraft positions', selectAirport: 'Airport',
    defaultAirport: 'Madison (MSN)', milwaukee: 'Milwaukee (MKE)',
    chicago: "Chicago O'Hare (ORD)", atlanta: 'Atlanta (ATL)',
    altitude: 'Altitude', registration: 'Registration', direction: 'Direction',
    latitude: 'Latitude', longitude: 'Longitude', flightStatus: 'Status',
    flightMap: 'Flight map', routesTable: 'Scheduled routes table',
    flightsTable: 'Inbound flights table', overviewRegion: 'Location and nearby airport',
    languageAction: 'Switch to Chinese',
    dayMode: 'Day mode', nightMode: 'Night mode',
    dayModeAction: 'Switch to day mode', nightModeAction: 'Switch to night mode',
    locationValue: 'Lat: {lat}  Long: {lng}',
    nearbyValue: '{name} ({code})', findingNearby: 'Finding nearby airports…',
    noNearby: 'No nearby airport found.', nearbyError: 'Unable to find nearby airports.',
    loadingFlights: 'Loading inbound flights for {airport}…',
    showingFlights: 'Showing {count} inbound flights for {airport}.',
    noFlightsStatus: 'No current inbound flights for {airport}.',
    noFlights: 'No current inbound flights', unableFlights: 'Unable to load flights',
    locationUnavailable: 'Location is unavailable in this browser; using the default location.',
    locationDenied: 'Location permission is unavailable; using the default location.',
    enterCities: 'Enter both city names or IATA codes.',
    noCityMatch: 'No city found for “{query}”. Try a longer name or an IATA code.',
    chooseCity: 'Which city did you mean by “{query}”? Choose one, then search again.',
    citySelected: '{name} ({code}) selected. Press Search to continue.',
    searchingRoutes: 'Searching scheduled routes…',
    foundRoutes: 'Found {count} scheduled routes.',
    noRoutesStatus: 'No scheduled routes found.',
    noRoutes: 'No scheduled routes found', unableRoutes: 'Unable to search routes',
    configError: 'The AirLabs API key is not configured on the server.',
    networkError: 'Cannot connect to the server. Check your connection and try again.',
    invalidResponse: 'The server returned an invalid response.',
    serviceError: 'Flight data is temporarily unavailable. Please try again.',
    yourLocation: 'Your location',
    enRoute: 'En route', landed: 'Landed', scheduled: 'Scheduled',
    delayed: 'Delayed', cancelled: 'Cancelled'
  },
  zh: {
    title: '航班追踪', subtitle: '航班、机场与航线，一页查看',
    currentLocation: '当前位置', refreshLocation: '更新位置',
    nearbyAirport: '附近机场', routeSearch: '搜索定期航线',
    cityCodeHint: '可输入中文或英文城市名、IATA 代码；必要时选择建议。',
    from: '出发城市', to: '到达城市',
    fromPlaceholder: '例如 北京 或 BJS', toPlaceholder: '例如 上海 或 SHA', search: '搜索',
    flight: '航班', departureAirport: '出发机场', departureTime: '出发时间',
    arrivalAirport: '到达机场', arrivalTime: '到达时间', duration: '时长',
    days: '每周运营', aircraft: '机型', inboundFlights: '进港航班',
    routePages: '航线结果分页', previousPage: '上一页', nextPage: '下一页',
    routePageSummary: '显示第 {from}–{to} 条，共 {total} 条航线',
    routePageNumber: '第 {page}／{pages} 页', everyDay: '每天',
    flightPages: '进港航班分页',
    flightPageSummary: '显示第 {from}–{to} 条，共 {total} 个航班',
    weekdayNames: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    inboundHint: '当前到港航班与飞机位置', selectAirport: '选择机场',
    defaultAirport: '麦迪逊 (MSN)', milwaukee: '密尔沃基 (MKE)',
    chicago: '芝加哥奥黑尔 (ORD)', atlanta: '亚特兰大 (ATL)',
    altitude: '高度', registration: '注册号', direction: '航向',
    latitude: '纬度', longitude: '经度', flightStatus: '状态',
    flightMap: '航班地图', routesTable: '定期航线表',
    flightsTable: '进港航班表', overviewRegion: '位置与附近机场',
    languageAction: '切换为英文',
    dayMode: '日间模式', nightMode: '夜间模式',
    dayModeAction: '切换为日间模式', nightModeAction: '切换为夜间模式',
    locationValue: '纬度：{lat}  经度：{lng}',
    nearbyValue: '{name}（{code}）', findingNearby: '正在查找附近机场…',
    noNearby: '附近没有找到机场。', nearbyError: '无法查找附近机场。',
    loadingFlights: '正在加载 {airport} 的进港航班…',
    showingFlights: '正在显示 {airport} 的 {count} 个进港航班。',
    noFlightsStatus: '{airport} 当前没有进港航班。',
    noFlights: '当前没有进港航班', unableFlights: '无法加载航班',
    locationUnavailable: '此浏览器无法定位，正在使用默认位置。',
    locationDenied: '无法获取定位权限，正在使用默认位置。',
    enterCities: '请填写出发和到达城市名称或 IATA 代码。',
    noCityMatch: '未找到“{query}”。请尝试更完整的城市名或 IATA 代码。',
    chooseCity: '“{query}”对应多个城市。请选择一个，再次搜索。',
    citySelected: '已选择{name}（{code}），请再次点击搜索。',
    searchingRoutes: '正在搜索定期航线…',
    foundRoutes: '找到 {count} 条定期航线。',
    noRoutesStatus: '没有找到定期航线。',
    noRoutes: '没有找到定期航线', unableRoutes: '无法搜索航线',
    configError: '服务器尚未配置 AirLabs API 密钥。',
    networkError: '无法连接服务器，请检查网络后重试。',
    invalidResponse: '服务器返回了无效数据。',
    serviceError: '暂时无法获取航班数据，请稍后重试。',
    yourLocation: '你的位置',
    enRoute: '飞行中', landed: '已降落', scheduled: '计划中',
    delayed: '延误', cancelled: '已取消'
  }
};

function readPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* The UI still works without storage. */ }
}

let language = readPreference('flightTracker.language') === 'zh' ? 'zh' : 'en';
let manualTheme = readPreference('flightTracker.theme');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let theme = manualTheme === 'light' || manualTheme === 'dark'
  ? manualTheme : (systemTheme.matches ? 'dark' : 'light');
const apiBaseUrl = (window.FLIGHT_TRACKER_CONFIG?.apiBaseUrl || window.location.origin).replace(/\/$/, '');
const statusElement = document.getElementById('status');
const locationElement = document.getElementById('location');
const nearbyElement = document.getElementById('nearbyAirport');
const flightTable = document.getElementById('table_body');
const routeTable = document.getElementById('routesInfotb');
const routePagination = document.getElementById('routePagination');
const routePageSummary = document.getElementById('routePageSummary');
const routePageNumber = document.getElementById('routePageNumber');
const routePrev = document.getElementById('routePrev');
const routeNext = document.getElementById('routeNext');
const routePageSize = 10;
let routeResults = [];
let routePage = 0;
const flightPagination = document.getElementById('flightPagination');
const flightPageSummary = document.getElementById('flightPageSummary');
const flightPageNumber = document.getElementById('flightPageNumber');
const flightPrev = document.getElementById('flightPrev');
const flightNext = document.getElementById('flightNext');
const flightPageSize = 10;
let flightResults = [];
let flightPage = 0;
const airportSelect = document.getElementById('newAirport');
const cityOptions = document.getElementById('cityOptions');
const cityChoices = document.getElementById('cityChoices');
const languageButton = document.getElementById('languageButton');
const themeButton = document.getElementById('themeButton');
const defaultLocation = { latitude: 43.0637, longitude: -89.2043 };
const map = L.map('map').setView([defaultLocation.latitude, defaultLocation.longitude], 9);
const flightMarkers = L.layerGroup().addTo(map);
const planeIcon = L.icon({ iconUrl: 'icons8-plane-24.png', iconSize: [24, 24], iconAnchor: [12, 12] });
let locationMarker;
let flightRequestId = 0;
let nearbyRequestId = 0;
let statusState = null;
let nearbyState = null;
let locationState = null;
let choicesState = null;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function t(key, params = {}) {
  return translations[language][key].replace(/\{(\w+)\}/g, (_match, name) => params[name] ?? '');
}

function applyLanguage() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = t('title');
  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.textContent = t(element.dataset.i18n);
  }
  for (const element of document.querySelectorAll('[data-i18n-placeholder]')) {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  }
  for (const element of document.querySelectorAll('[data-i18n-aria]')) {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  }
  languageButton.textContent = language === 'en' ? '中文' : 'English';
  languageButton.setAttribute('aria-label', t('languageAction'));
  updateThemeButton();
  if (statusState) statusElement.textContent = t(statusState.key, statusState.params);
  if (nearbyState) nearbyElement.textContent = t(nearbyState.key, nearbyState.params);
  if (locationState) locationElement.textContent = t('locationValue', locationState);
  renderCityOptions();
  renderChoices();
  if (routeResults.length) renderRoutes();
  if (flightResults.length) renderFlights();
}

function renderCityOptions() {
  cityOptions.replaceChildren();
  for (const city of window.FLIGHT_TRACKER_CITIES || []) {
    const option = document.createElement('option');
    option.value = `${city[language]} (${city.code})`;
    cityOptions.append(option);
  }
}

function renderChoices() {
  cityChoices.replaceChildren();
  cityChoices.hidden = !choicesState;
  if (!choicesState) return;
  const prompt = document.createElement('p');
  prompt.textContent = t('chooseCity', { query: choicesState.query });
  cityChoices.append(prompt);
  const list = document.createElement('div');
  list.className = 'city-choice-list';
  for (const choice of choicesState.choices) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `${choice.name} (${choice.code})${choice.country ? ' · ' + choice.country : ''}`;
    button.addEventListener('click', () => {
      document.getElementById(choicesState.field === 'departureCity' ? 'fromCity' : 'toCity').value =
        `${choice.name} (${choice.code})`;
      choicesState = null;
      renderChoices();
      setStatus('citySelected', { name: choice.name, code: choice.code });
    });
    list.append(button);
  }
  cityChoices.append(list);
}

function updateThemeButton() {
  themeButton.textContent = t(theme === 'dark' ? 'dayMode' : 'nightMode');
  themeButton.setAttribute('aria-label', t(theme === 'dark' ? 'dayModeAction' : 'nightModeAction'));
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  updateThemeButton();
}

function setStatus(key, params = {}, isError = false) {
  statusState = { key, params };
  statusElement.textContent = t(key, params);
  statusElement.className = isError ? 'status error' : 'status';
  statusElement.hidden = false;
}

function uiError(key) {
  const error = new Error(key);
  error.uiKey = key;
  return error;
}

async function request(path, options) {
  let response;
  try { response = await fetch(`${apiBaseUrl}${path}`, options); }
  catch { throw uiError('networkError'); }
  let data;
  try { data = await response.json(); } catch { throw uiError('invalidResponse'); }
  if (!response.ok) {
    if (response.status === 422 && (data.error === 'choose_city' || data.error === 'city_not_found')) {
      const error = uiError(data.error === 'choose_city' ? 'chooseCity' : 'noCityMatch');
      error.query = data.query;
      error.field = data.field;
      error.choices = Array.isArray(data.choices) ? data.choices : [];
      throw error;
    }
    throw uiError(data.error === 'FLIGHTS_API_KEY is not configured' ? 'configError' : 'serviceError');
  }
  return data;
}

function addRow(table, values) {
  const row = document.createElement('tr');
  for (const value of values) {
    const cell = document.createElement('td');
    cell.textContent = value ?? '';
    row.append(cell);
  }
  table.append(row);
  return row;
}

function addEmptyRow(table, key, colspan) {
  const row = document.createElement('tr');
  const cell = document.createElement('td');
  cell.colSpan = colspan;
  cell.className = 'empty-cell';
  cell.dataset.i18n = key;
  cell.textContent = t(key);
  row.append(cell);
  table.append(row);
}

function flightStatusKey(status) {
  return ({
    'en-route': 'enRoute', landed: 'landed', scheduled: 'scheduled',
    delayed: 'delayed', cancelled: 'cancelled'
  })[String(status || '').toLowerCase()];
}

function renderFlights() {
  flightTable.replaceChildren();
  if (!flightResults.length) {
    flightPagination.hidden = true;
    return;
  }
  const pages = Math.ceil(flightResults.length / flightPageSize);
  flightPage = Math.min(flightPage, pages - 1);
  const start = flightPage * flightPageSize;
  for (const flight of flightResults.slice(start, start + flightPageSize)) {
    const statusKey = flightStatusKey(flight.status);
    const row = addRow(flightTable, [flight.alt, flight.reg_number, flight.dir, flight.lat, flight.lng,
      statusKey ? t(statusKey) : flight.status]);
    if (statusKey) row.lastElementChild.dataset.i18n = statusKey;
  }
  flightPagination.hidden = flightResults.length <= flightPageSize;
  flightPageSummary.textContent = t('flightPageSummary',
    { from: start + 1, to: Math.min(start + flightPageSize, flightResults.length), total: flightResults.length });
  flightPageNumber.textContent = t('routePageNumber', { page: flightPage + 1, pages });
  flightPrev.disabled = flightPage === 0;
  flightNext.disabled = flightPage === pages - 1;
}

async function getFlights(airportCode = airportSelect.value) {
  const requestId = ++flightRequestId;
  flightTable.replaceChildren();
  flightResults = [];
  flightPage = 0;
  flightPagination.hidden = true;
  flightMarkers.clearLayers();
  setStatus('loadingFlights', { airport: airportCode });
  try {
    const data = await request(`/flights/${encodeURIComponent(airportCode)}`);
    if (requestId !== flightRequestId) return;
    const flights = Array.isArray(data.response) ? data.response : [];
    if (!flights.length) addEmptyRow(flightTable, 'noFlights', 6);
    else {
      flightResults = flights;
      renderFlights();
    }
    for (const flight of flights) {
      if (Number.isFinite(Number(flight.lat)) && Number.isFinite(Number(flight.lng))) {
        L.marker([Number(flight.lat), Number(flight.lng)], { icon: planeIcon })
          .addTo(flightMarkers).bindPopup(() => {
            const popup = document.createElement('span');
            popup.textContent = `${flight.flight_iata || flight.reg_number || t('flight')} → ${airportCode}`;
            return popup;
          });
      }
    }
    setStatus(flights.length ? 'showingFlights' : 'noFlightsStatus',
      { count: flights.length, airport: airportCode });
  } catch (error) {
    if (requestId !== flightRequestId) return;
    addEmptyRow(flightTable, 'unableFlights', 6);
    setStatus(error.uiKey || 'serviceError', {}, true);
  }
}

async function getNearbyAirports(latitude, longitude) {
  const requestId = ++nearbyRequestId;
  nearbyState = { key: 'findingNearby', params: {} };
  nearbyElement.textContent = t(nearbyState.key);
  try {
    const data = await request(`/nearbyAirports/${latitude},${longitude}`);
    if (requestId !== nearbyRequestId) return;
    const airport = data.response?.airports?.find(item => /^[A-Z]{3}$/.test(item.iata_code || ''));
    if (!airport) {
      nearbyState = { key: 'noNearby', params: {} };
      nearbyElement.textContent = t('noNearby');
      return;
    }
    nearbyState = { key: 'nearbyValue', params: { name: airport.name, code: airport.iata_code } };
    nearbyElement.textContent = t(nearbyState.key, nearbyState.params);
    let option = [...airportSelect.options].find(item => item.value === airport.iata_code);
    if (!option) {
      option = new Option(`${airport.name} (${airport.iata_code})`, airport.iata_code);
      airportSelect.add(option, 0);
    }
    airportSelect.value = airport.iata_code;
    await getFlights(airport.iata_code);
  } catch (error) {
    if (requestId !== nearbyRequestId) return;
    nearbyState = { key: 'nearbyError', params: {} };
    nearbyElement.textContent = t('nearbyError');
    setStatus(error.uiKey || 'serviceError', {}, true);
  }
}

function updateLocation(latitude, longitude) {
  locationState = { lat: latitude.toFixed(4), lng: longitude.toFixed(4) };
  locationElement.textContent = t('locationValue', locationState);
  if (locationMarker) locationMarker.remove();
  locationMarker = L.marker([latitude, longitude]).addTo(map)
    .bindPopup(() => t('yourLocation'));
  map.setView([latitude, longitude], 9);
  getNearbyAirports(latitude, longitude);
}

function getLocation() {
  if (!navigator.geolocation) {
    setStatus('locationUnavailable', {}, true);
    return;
  }
  navigator.geolocation.getCurrentPosition(
    position => updateLocation(position.coords.latitude, position.coords.longitude),
    () => setStatus('locationDenied', {}, true),
    { enableHighAccuracy: false, timeout: 10000 }
  );
}

const weekCodes = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

function operatingDays(days) {
  const values = Array.isArray(days) ? days : typeof days === 'string' ? days.split(/[\s,]+/) : [];
  return new Set(values.map(value => {
    if (/^[1-7]$/.test(String(value))) return weekCodes[Number(value) - 1];
    return String(value).trim().toLowerCase().slice(0, 3);
  }).filter(value => weekCodes.includes(value)));
}

function renderDays(cell, days) {
  const activeDays = operatingDays(days);
  if (!activeDays.size) {
    cell.textContent = '—';
    return;
  }
  if (activeDays.size === 7) {
    cell.textContent = t('everyDay');
    return;
  }
  const names = translations[language].weekdayNames;
  const strip = document.createElement('span');
  strip.className = 'week-strip';
  strip.setAttribute('role', 'img');
  strip.setAttribute('aria-label', names.filter((_name, index) => activeDays.has(weekCodes[index])).join(language === 'zh' ? '、' : ', '));
  weekCodes.forEach((code, index) => {
    const badge = document.createElement('span');
    badge.className = activeDays.has(code) ? 'week-day active' : 'week-day';
    badge.textContent = language === 'zh' ? '一二三四五六日'[index] : 'MTWTFSS'[index];
    badge.title = names[index];
    badge.setAttribute('aria-hidden', 'true');
    strip.append(badge);
  });
  cell.append(strip);
}

function formatDuration(value) {
  const minutes = Number(value);
  if (!Number.isFinite(minutes) || minutes < 0) return '—';
  const hours = Math.floor(minutes / 60);
  const remainder = Math.round(minutes % 60);
  if (language === 'zh') return hours ? `${hours}小时${remainder ? `${remainder}分` : ''}` : `${remainder}分钟`;
  return hours ? `${hours}h${remainder ? ` ${remainder}m` : ''}` : `${remainder}m`;
}

function renderRoutes() {
  routeTable.replaceChildren();
  if (!routeResults.length) {
    routePagination.hidden = true;
    return;
  }
  const pages = Math.ceil(routeResults.length / routePageSize);
  routePage = Math.min(routePage, pages - 1);
  const start = routePage * routePageSize;
  for (const route of routeResults.slice(start, start + routePageSize)) {
    const row = addRow(routeTable, [route.flight_iata, route.dep_iata, route.dep_time,
      route.arr_iata, route.arr_time, formatDuration(route.duration), '', route.aircraft_icao]);
    renderDays(row.cells[6], route.days);
  }
  routePagination.hidden = routeResults.length <= routePageSize;
  routePageSummary.textContent = t('routePageSummary',
    { from: start + 1, to: Math.min(start + routePageSize, routeResults.length), total: routeResults.length });
  routePageNumber.textContent = t('routePageNumber', { page: routePage + 1, pages });
  routePrev.disabled = routePage === 0;
  routeNext.disabled = routePage === pages - 1;
}

async function searchFlights() {
  const departureCity = document.getElementById('fromCity').value.trim();
  const destinationCity = document.getElementById('toCity').value.trim();
  routeTable.replaceChildren();
  routeResults = [];
  routePage = 0;
  routePagination.hidden = true;
  choicesState = null;
  renderChoices();
  if (!departureCity || !destinationCity || departureCity.length > 50 || destinationCity.length > 50) {
    setStatus('enterCities', {}, true);
    return;
  }
  setStatus('searchingRoutes');
  try {
    const data = await request('/searchFlights', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ departureCity, destinationCity, lang: language })
    });
    routeResults = Array.isArray(data.routes) ? data.routes : [];
    if (!routeResults.length) addEmptyRow(routeTable, 'noRoutes', 8);
    else renderRoutes();
    setStatus(routeResults.length ? 'foundRoutes' : 'noRoutesStatus', { count: routeResults.length });
  } catch (error) {
    if (error.uiKey === 'chooseCity' || error.uiKey === 'noCityMatch') {
      if (error.choices.length) {
        choicesState = { query: error.query, field: error.field, choices: error.choices };
        renderChoices();
      }
      setStatus(error.uiKey, { query: error.query }, true);
      return;
    }
    addEmptyRow(routeTable, 'unableRoutes', 8);
    setStatus(error.uiKey || 'serviceError', {}, true);
  }
}

languageButton.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  savePreference('flightTracker.language', language);
  applyLanguage();
});
themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  manualTheme = theme;
  savePreference('flightTracker.theme', theme);
  applyTheme();
});
systemTheme.addEventListener?.('change', event => {
  if (manualTheme !== 'light' && manualTheme !== 'dark') {
    theme = event.matches ? 'dark' : 'light';
    applyTheme();
  }
});
document.getElementById('searchButton').addEventListener('click', searchFlights);
routePrev.addEventListener('click', () => { if (routePage > 0) { routePage--; renderRoutes(); } });
routeNext.addEventListener('click', () => {
  if ((routePage + 1) * routePageSize < routeResults.length) { routePage++; renderRoutes(); }
});
flightPrev.addEventListener('click', () => { if (flightPage > 0) { flightPage--; renderFlights(); } });
flightNext.addEventListener('click', () => {
  if ((flightPage + 1) * flightPageSize < flightResults.length) { flightPage++; renderFlights(); }
});
document.getElementById('locationButton').addEventListener('click', getLocation);
airportSelect.addEventListener('change', () => getFlights(airportSelect.value));

applyLanguage();
applyTheme();
updateLocation(defaultLocation.latitude, defaultLocation.longitude);
getLocation();
