export default{
  baseUrl: 'https://pixabay.com/api/',
  image_type: 'photo',
  orientation: 'horizontal',
  page: 1,
  per_page: 12,
  key: '18650341-19c64afe89823f2a939dc98db',

  getImages(query){
    let params = `?image_type=${this.image_type}&orientation=${this.orientation}&q=${query}&page=${this.page}&per_page=${this.per_page}&key=${this.key}`;
    let url = `${this.baseUrl}${params}`;

    return fetch(url)
    .then(response => response.json())

  }
}
