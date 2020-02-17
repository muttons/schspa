// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

  // real-time listener agencies
  db.collection('agencies').orderBy('agencyName').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderAgency(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        // remove the document data from the web page
      }
    });
  });

  // real-time listener monday
  db.collection('eventsMonday').orderBy('eventsOrder').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderMonday(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        // remove the document data from the web page
      }
    });
  });

  // real-time listener tuesday
  db.collection('eventsTuesday').orderBy('eventsOrder').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderTuesday(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        // remove the document data from the web page
      }
    });
  });

  // real-time listener wednesday
  db.collection('eventsWednesday').orderBy('eventsOrder').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added'){
        renderWednesday(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        // remove the document data from the web page
      }
    });
  });
