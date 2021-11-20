// recipeCard.js

/** Represents a recipe card in the explore page */
class RecipeCard extends HTMLElement {
  /**
   * Creates an instance of RecipeCard.
   *
   * @author: Darwin
   */
  constructor() {
    super(); // inherets everything from HTMLElement
    this.attachShadow({mode: 'open'}); // Creates the Shadow DOM
  }

  /**
   * Set data and create element <recipe-card>
   * @param {Object} data recipe in Object format
   */
  set data(data) {
    this.json = data; // Store the data passed in for later

    const styles = document.createElement('style');
    styles.innerHTML = '';

    // Create the outer wrapper for the recipe to nest inside
    const wrapper = document.createElement('article');

    // Create the recipe image element
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('image-wrapper');
    const img = document.createElement('img');
    img.setAttribute('src', data.image);
    img.setAttribute('alt', data.title);
    const heartWrapper = document.createElement('div');
    heartWrapper.classList.add('placement');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heartWrapper.append(heart);
    imgWrapper.append(img, heartWrapper);

    // Create the recipe title
    const title = document.createElement('p');
    title.classList.add('title');
    const href = document.createElement('a');
    href.setAttribute('href',
        window.location.origin +
        window.location.pathname.replace('Explore.html', 'Recipe.html') +
        '?searched=true&id=' + data.id);
    href.innerText = data.title;
    title.append(href);

    // Create the time for recipe
    const time = document.createElement('div');
    time.classList.add('time-wrapper');

    // Create the tags for recipe
    const tag = document.createElement('tag');
    tag.classList.add('tag-wrapper');

    // Add all of the above elements to the wrapper
    wrapper.append(imgWrapper, title, time, tag);

    // Append the wrapper and the styles to the Shadow DOM
    console.log('here');
    this.shadowRoot.append(styles, wrapper);
  }

  /**
   * Return recipe showing in json string
   * @return {String} recipe showing in json string
   */
  get data() {
    return this.json;
  }
}

customElements.define('recipe-card', RecipeCard);
