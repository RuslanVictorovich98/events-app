import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list events', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show events as the home page.', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/events', 'should redirect automatically');
  });
  
  test('should link to information about the company.', async function (assert){
    await visit('/')
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
  
  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to about');
  })

  test('should list available events.', async function (assert){
    await visit('/');
    assert.equal(this.element.querySelectorAll(".listing").length, 3, 'should display 3 listings');
  });

  test('should filter the list of events by city', async function (assert){
    await visit('/');
    await fillIn('.list-filter input', 'Chercasy');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing').textContent.includes('Chercasy'), 'should contain 1 listing with location Chercasy');
  });

  test('should show details for a selected event', async function (assert) {});
});
