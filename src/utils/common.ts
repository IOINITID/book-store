const getColorByGenre = (genre: string): string => {
  let color: string;

  switch (genre) {
    case 'Романтика':
      color = '#db8070';
      break;
    case 'Мистика':
      color = '#495590';
      break;
    case 'Фэнтези':
      color = '#a0a284';
      break;
    case 'Драма':
      color = '#be0b19';
      break;
    case 'Карьера':
      color = '#e1914c';
      break;
    case 'Приключения':
      color = '#5b6884';
      break;
    case 'Боевик':
      color = '#e1b562';
      break;
    case 'Фантастика':
      color = '#96a7ba';
      break;
    case 'Криминал':
      color = '#455a64';
      break;
    case 'Дизайн':
      color = '#5b3cf5';
      break;
    default:
      color = '#db8070';
      break;
  }

  return color;
};

export { getColorByGenre };
