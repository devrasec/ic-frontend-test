import numeral from 'numeral';

numeral.register('locale', 'br', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'b'
  },
  currency: {
    symbol: 'R$ '
  }
});

numeral.locale('br');

export const currencyFormat = n => {
  const number = parseFloat(n);

  return numeral(number).format('$ 0,0');
};

export default function numberFormat(n) {
  const number = parseFloat(n);

  return numeral(number).format('0,0.[00]');
}
