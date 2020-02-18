const agencies = document.querySelector('.agencies');
const eventsMonday = document.querySelector('.eventsMonday');
const eventsTuesday = document.querySelector('.eventsTuesday');
const eventsWednesday = document.querySelector('.eventsWednesday');
document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render agency data
const renderAgency = (data, id) => {

  const html = `
  <li>
  <div class="collapsible-header" data-id="${id}"><i class="material-icons iconadd">add</i><i class="material-icons iconremove">remove</i>${data.agencyName}</div>
  <div class="collapsible-body">
    <ul class="collection">
      <a href="#!" class="collection-header name">${data.userName}</a>
      <a href="#!" class="collection-item title">${data.userTitle}</a>
      <a href="mailto: ${data.userEmail}" class="collection-item email"><i class=" tiny material-icons">email</i> ${data.userEmail}</a>
      <a href="tel:+1-${data.userCellPhone}" class="collection-item cell"><i class="tiny material-icons">phone_android</i> Cell: ${data.userCellPhone}</a>
      <a href="tel:+1-${data.userOfficePhone}" class="collection-item office"><i class="tiny material-icons">local_phone</i> Office: ${data.userOfficePhone}</a>
      <a href="${data.agencyAddressLink}" class="collection-item title" target="_blank"><i class="tiny material-icons">add_location</i> ${data.agencyAddress}</a>
    </ul>
  </div>
  </li>
  `;
  agencies.innerHTML += html;

};

// render event data monday
const renderMonday = (data, id) => {

  const html = `
  <li>
  <div class="collapsible-header hide" data-id="${id}">${data.eventsOrder}</div>
  <div class="collapsible-header" data-id="${id}"><i class="material-icons iconadd">add</i><i class="material-icons iconremove">remove</i>${data.eventsTime}</div>
  <div class="collapsible-body">
    <ul class="collection">
      <li class="collection-item eventtitle">${data.eventsTitle}</li>
      <li class="collection-item location">${data.eventsLocation}</li>
      <li class="collection-item info">${data.eventsInfo}</li>

    </ul>
  </div>
  </li>
  `;
  eventsMonday.innerHTML += html;

};

// render event data tuesday
const renderTuesday = (data, id) => {

  const html = `
  <li>
  <div class="collapsible-header hide" data-id="${id}">${data.eventsOrder}</div>
  <div class="collapsible-header" data-id="${id}"><i class="material-icons iconadd">add</i><i class="material-icons iconremove">remove</i>${data.eventsTime}</div>
  <div class="collapsible-body">
    <ul class="collection">
      <li class="collection-item eventtitle">${data.eventsTitle}</li>
      <li class="collection-item location">${data.eventsLocation}</li>
      <li class="collection-item info">${data.eventsInfo}</li>

    </ul>
  </div>
  </li>
  `;
  eventsTuesday.innerHTML += html;

};

// render event data wednesday
const renderWednesday = (data, id) => {

  const html = `
  <li>
  <div class="collapsible-header hide" data-id="${id}">${data.eventsOrder}</div>
  <div class="collapsible-header" data-id="${id}"><i class="material-icons iconadd">add</i><i class="material-icons iconremove">remove</i>${data.eventsTime}</div>
  <div class="collapsible-body">
    <ul class="collection">
      <li class="collection-item eventtitle">${data.eventsTitle}</li>
      <li class="collection-item location">${data.eventsLocation}</li>
      <li class="collection-item info">${data.eventsInfo}</li>

    </ul>
  </div>
  </li>
  `;
  eventsWednesday.innerHTML += html;

};
