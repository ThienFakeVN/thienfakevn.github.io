const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function gregorianToJDN(Y, M, D) {
  const a = Math.floor((14 - M) / 12);
  const y = Y + 4800 - a;
  const m = M + 12 * a - 3;
  return D + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

function jdnToJulian(jdn) {
  const c = jdn + 32082;
  const d = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor(1461 * d / 4);
  const m = Math.floor((5 * e + 2) / 153);
  const D = e - Math.floor((153 * m + 2) / 5) + 1;
  const M = m + 3 - 12 * Math.floor(m / 10);
  const Y = d - 4800 + Math.floor(m / 10);
  return { Y, M, D };
}

function diffDays(Y, M, D) {
  const gJDN = gregorianToJDN(Y, M, D);
  const jJDN = gregorianToJDN(Y, M, D);
  const julianForGreg = jdnToJulian(gJDN);
  const gJDN2 = gregorianToJDN(julianForGreg.Y, julianForGreg.M, julianForGreg.D);
  return gJDN - gJDN2;
}

function convert() {
  const Y = 2026;
  const M = 6;
  const D = 9;

  if (isNaN(Y) || isNaN(M) || isNaN(D) || D < 1 || D > 31) return;

  const a = Math.floor((14 - M) / 12);
  const y = Y + 4800 - a;
  const m = M + 12 * a - 3;
  const jdn = D + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

  const jul = jdnToJulian(jdn);
  const diff = jdn - gregorianToJDN(jul.Y, jul.M, jul.D);

  /*document.getElementById('result-date').textContent = `${MONTHS[jul.M - 1]} ${jul.D}, ${jul.Y}`;
  document.getElementById('result-diff').textContent = `${diff} day${diff !== 1 ? 's' : ''} behind the Gregorian calendar`;
  document.getElementById('result-card').style.display = 'block';*/

  console.log(jdn)
  console.log(jul)
}

convert();