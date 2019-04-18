import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers'; //settled - решает когда обработка завершена
import hbs from 'htmlbars-inline-precompile';

const ITEMS = [{city: 'Kiev'}, {city: 'Chercasy'}];
const FILTERED_ITEMS = [{city: 'Kiev'}];

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);
  
  test('it renders', async function(assert) {
    // we want our actions to return promises,
    //since they are potentially fetching data asynchronously
    this.set('filterByCity', () => Promise.resolve({ results: ITEMS}));
    // you can set up and use your component in the same way your application
    // will use it.
    await render(hbs`
      <ListFilter @filter={{action filterByCity}} as |results|>
        <div>
          {{#each results as |item|}}
            <div class="city">
              {{item.city}}
            </div>  
          {{/each}}  
        </div>
      </ListFilter>
    `);

    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.city').length, 2);
      assert.equal(this.element.querySelector('.city').textContent.trim(), 'Kiev');
    })
  });

  test('should update with matching listings', async function (assert) {
    this.set('filterByCity', (val) => {
      if (val === ''){
        return Promise.resolve({
          query: val,
          results: ITEMS });
      } else {
        return Promise.resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    })

    await render(hbs`
      <ListFilter @filter={{action filterByCity}} as |results|>
        <div>
          {{#each results as |item|}}
            <div class="city">
              {{item.city}}
            </div>  
          {{/each}}  
        </div>
      </ListFilter>
    `)

    await fillIn(this.element.querySelector('.list-filter input'), 'k');

    await triggerKeyEvent(this.element.querySelector('.list-filter input'), "keyup", 83);
    
    return settled().then(() => {
      assert.equal(this.element.querySelectorAll('.city').length, 1, 'One result returned');
      assert.equal(this.element.querySelector('.city').textContent.trim(), 'Kiev');
    })
  })
 
});
