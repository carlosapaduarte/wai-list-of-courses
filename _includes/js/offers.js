const filterForm = document.querySelector('[data-filter-form]');
const jsonOffers = JSON.parse('{{ site.data.offers | jsonify}}');
const jsonFilters = JSON.parse('{{site.data.filters | jsonify}}');
const jsonLang = JSON.parse('{{site.data.lang | jsonify}}');

var offersList = document.getElementById('offers-list');
var buttonExpandAll = document.getElementById("expand-sections");
var buttonColapseAll = document.getElementById("col-sections");

if (filterForm) {

  filterForm.addEventListener('change', e => {
    filterJson(filterForm);
  });

  filterForm.addEventListener('submit', e => {

    filterJson(form);
  });

  document.getElementById("deselect-1").addEventListener('click', e => {
    rebuildList(jsonOffers, []);
    filterForm.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
  });

  document.getElementById("deselect-2").addEventListener('click', e => {
    rebuildList(jsonOffers, []);
    filterForm.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
  });


  buttonExpandAll.addEventListener('click', e => {
    offersList.querySelectorAll("details").forEach(el => el.open = true);

    buttonColapseAll.hidden = false;
    buttonExpandAll.hidden = true;

  });

  buttonColapseAll.addEventListener('click', e => {
    offersList.querySelectorAll("details").forEach(el => el.open = false);
    buttonColapseAll.hidden = true;
    buttonExpandAll.hidden = false;
  });


  function filterJson(form) {

    var filtersOn = [];
    var allFiltersOn = [];
    var filterName;
    var newResults = [];
    var offersFiltered = [];

    // for each group filter category
    form.querySelectorAll('fieldset').forEach(group => {

      // identify filters on
      filtersOn = [];
      offersFiltered = [];

      group.querySelectorAll('input[type="checkbox"]').forEach(filter => {
        if (filter.checked) {
          filterName = group.querySelector("label[for='" + filter.id + "']").innerText;
          filtersOn.push(filterName);
          allFiltersOn.push(filterName);
        }
      });

      group.querySelectorAll('select').forEach(filter => {
        if (filter.value != "") {
          filterName = filter.id;
          filtersOn.push(filterName);
          allFiltersOn.push(filterName);
        }
      });

      console.log(filtersOn);

      if (filtersOn.length > 0) {

        jsonOffers.forEach(offer => {
          if (filtersOn.includes(offer[group.id]))
            offersFiltered.push(offer);
        })
        newResults.push(offersFiltered);

      }
    });

    // if no filter, show all offers
    if (newResults.length === 0)
      newResults = jsonOffers;
    // intersection between results [offers]
    else
      newResults = newResults.reduce((a, c) => a.filter(i => c.includes(i)));


    //rebuild document
    rebuildList(newResults, allFiltersOn);

    callDebug(jsonFilters, jsonOffers, filtersOn, newResults, offersList);

  }

  function rebuildList(newResults, filtersOn) {

    const articles = offersList.querySelectorAll('ARTICLE');

    articles.forEach(el => {
      if (!newResults.find(o => o.id === el.id))
        el.hidden = true;
      else
        el.hidden = false;
    })

    if (filtersOn.length === 0) {
      document.getElementById("no-offers").hidden = true;
      document.getElementById("yes-offers").hidden = false;

      document.getElementById("total-offers").innerText =
        "Showing " + newResults.length + " offers";
        document.getElementById("deselect-1").hidden = true;
        document.getElementById("deselect-2").hidden = true;
    }
    else if (newResults.length > 0) {

      document.getElementById("no-offers").hidden = true;
      document.getElementById("yes-offers").hidden = false;

      document.getElementById("total-offers").innerText =
        "Showing " + newResults.length + " offers matching the following criteria: " + filtersOn.toString();
        document.getElementById("deselect-1").hidden = false;
        document.getElementById("deselect-2").hidden = false;
    }
    else {
      document.getElementById("no-offers").hidden = false;
      document.getElementById("yes-offers").hidden = true;
      document.getElementById("total-no-offers").innerText =
      "Sorry, but no items match the following criteria: " + filtersOn.toString();
      document.getElementById("deselect-1").hidden = false;
      document.getElementById("deselect-2").hidden = false;
    }
  }


  
  
  function callDebug(jsonFilters, jsonOffers, filtersOn, newResults, offersList){
    console.log("Filters:");
    console.log(jsonFilters);
    console.log("Offers:");
    console.log(jsonOffers);
    console.log("Filters On:");
    console.log(filtersOn);
    console.log("Results:");
    console.log(newResults);
    console.log("offersList");
    console.log(offersList);
  }

  function clean(obj) {
    for (var propName in obj) {
      if (obj[propName].length === 0) {
        delete obj[propName];
      }
    }
    return obj
  }

}