import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | event-property-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly for a Standalone rental', async function(assert) {
    this.set('inputValue', 'Estane');

    await render(hbs`{{event-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Public');
  });

  // test('it renders collectly for a Community rental', async function(assert) {
  //   this.set('inputValue', 'Dinamo Kiev');
  //   await render(hbs`{{event-property-type inputeValue}}`);
  //   assert.equal(this.element.textContent.trim(), 'Private');
  // });
});
