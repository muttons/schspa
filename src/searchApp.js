/* global algoliasearch instantsearch */





/* MY API KEYS  */
const searchClient = algoliasearch(
  '986UJU3X2J',
  '207649c6d35744a9643cfea75b80c60e'
);

const search = instantsearch({
  indexName: 'agencies',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>

  <h5 class="blue-header">{{agencyName}}</h5><br>
  <div class="divider"></div><br>
  <h6 class="white-text">{{userName}}</h6>
  <p class="white-text">{{userTitle}}</p>
  <a href="mailto: {{userEmail}}" class="email white-text"><i class="material-icons vertical-align-middle">email</i> {{userEmail}}</a><br>
  <a href="tel:+1-{{userCellPhone}}" class=" cell white-text"><i class="vertical-align-middle material-icons">phone_android</i> Cell: {{userCellPhone}}</a><br>
  <a href="tel:+1-{{userOfficePhone}}" class=" cell white-text"><i class="vertical-align-middle material-icons">local_phone</i> Office: {{userOfficePhone}}</a><br>
  <a href="{{agencyAddressLink}}" class=" cell white-text" target="_blank"><i class="vertical-align-middle material-icons">add_location</i>{{agencyAddress}}</a>

</article>
`,
    },
  }),
  instantsearch.widgets.refinementList({
    container: '#list',
    attribute: 'brand',
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
