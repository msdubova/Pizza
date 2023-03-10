import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


function setTab() {
  const tab = document.querySelector('.tabs');
  const tabControls = tab.querySelectorAll('.tabs__control');
  const tabCards = tab.querySelectorAll('.tabs__card');

  function clearTab() {
    tabCards.forEach(function (card) {
      card.classList.add('tabs__card--hidden');
    });
  }

  // function resetTab() {
  //   let all = tab.querySelector('input[name="tab-btn"]:checked');
  //   if (all.getAttribute('data-tab') === 'all') {
  //     tabCards.forEach(function (card) {
  //       card.classList.remove('tabs__card--hidden');
  //       alert(card);
  //     })
  //   }
  // };

  function changeTab(item) {
    clearTab();
    let currentControl = item;
    let tabId = currentControl.getAttribute('data-tab');
    let currentCards = tab.querySelectorAll(tabId);

    if (tabId === '#all') {
      tabCards.forEach(function (each) {
        each.classList.remove('tabs__card--hidden');
      });
    } else {
      currentCards.forEach(function (each) {
        each.classList.remove('tabs__card--hidden');
      });
    }

    // resetTab();
  }

  tabControls.forEach(function (element) {
    element.addEventListener('change', function () {
      changeTab(element);
    });
  });

//   tabControls.forEach(function(control){
//     if(control.classList.contains('tabs__control--active')){

//       let currentControl = control;
//       let tabId = currentControl.getAttribute('data-tab');
//       let currentCards = tab.querySelectorAll(tabId);

// currentCards.forEach(function(element){
//   element.classList.remove('tabs__card--hidden');
// })

//     }
//   })


};

setTab();
