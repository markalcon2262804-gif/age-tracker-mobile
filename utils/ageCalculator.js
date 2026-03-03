/**
 * Calculate age from birth date
 * @param {Date} birthDate - The birth date
 * @returns {Object} Object containing years, months, days
 */
export const calculateAge = (birthDate) => {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
};

/**
 * Calculate days until next birthday
 * @param {Date} birthDate - The birth date
 * @returns {number} Days until next birthday
 */
export const daysUntilBirthday = (birthDate) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

  if (nextBirthday < today) {
    nextBirthday = new Date(currentYear + 1, birthDate.getMonth(), birthDate.getDate());
  }

  const timeDifference = nextBirthday.getTime() - today.getTime();
  return Math.ceil(timeDifference / (1000 * 3600 * 24));
};

/**
 * Get zodiac sign from birth date
 * @param {Date} birthDate - The birth date
 * @returns {string} Zodiac sign name
 */
export const getZodiacSign = (birthDate) => {
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  const zodiacSigns = [
    { name: 'Capricorn', start: [12, 22], end: [1, 19] },
    { name: 'Aquarius', start: [1, 20], end: [2, 18] },
    { name: 'Pisces', start: [2, 19], end: [3, 20] },
    { name: 'Aries', start: [3, 21], end: [4, 19] },
    { name: 'Taurus', start: [4, 20], end: [5, 20] },
    { name: 'Gemini', start: [5, 21], end: [6, 20] },
    { name: 'Cancer', start: [6, 21], end: [7, 22] },
    { name: 'Leo', start: [7, 23], end: [8, 22] },
    { name: 'Virgo', start: [8, 23], end: [9, 22] },
    { name: 'Libra', start: [9, 23], end: [10, 22] },
    { name: 'Scorpio', start: [10, 23], end: [11, 21] },
    { name: 'Sagittarius', start: [11, 22], end: [12, 21] },
  ];

  for (let sign of zodiacSigns) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;

    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      return sign.name;
    }
  }

  return 'Capricorn';
};