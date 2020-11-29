import css from "./css/style.css";

import apiServices from './js/apiServices.js';
import template from './templates/template.hbs';
import refs from './js/imageRefs.js';
import debounce from 'lodash.debounce';

const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'load more...'
loadMoreBtn.classList.add('loadMoreBtn');

refs.ul.append(loadMoreBtn);

refs.input.addEventListener('input', debounce((event)=>{
  refs.ul.innerHTML = '';
  let input = event.target.value;
  apiServices.getImages(input)
  .then(data => {
    const imageLi = template(data.hits);
    refs.ul.insertAdjacentHTML('afterbegin', imageLi);
  });
  refs.input.value = ''
},1000));

