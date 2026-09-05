(function () {
  'use strict';

  var translations = {
    ru: {
      title: 'КоМа Студия | Игры для Android',
      description: 'КоМа Студия создаёт мобильные игры для Android. Русские шашки и Мелстрой Кликер доступны в RuStore.',
      skip: 'К содержанию',
      brandLabel: 'Запустить игровой импульс и вернуться наверх',
      brandStatus: 'Игровой импульс запущен',
      navLabel: 'Основная навигация',
      languageLabel: 'Выбор языка',
      navGames: 'Игры',
      navContact: 'Обратная связь',
      navPortfolio: 'Портфолио',
      heroEyebrow: 'ANDROID / ДВА РИТМА / ОДНА СТУДИЯ',
      heroWordOne: 'ВКЛЮЧАЙ',
      heroWordTwo: 'ЛОГИКУ.',
      heroWordThree: 'ИЛИ АЗАРТ.',
      heroIntro: 'КоМа Студия делает мобильные игры, в которые легко войти. Выберите спокойную партию или быстрый прогресс.',
      heroOpen: 'Открыть выбранную игру',
      heroAll: 'Все игры',
      selectorLabel: 'ВЫБОР РЕЖИМА / 01',
      selectorAria: 'Выберите игру',
      tabCheckers: 'ДУМАТЬ / ШАШКИ',
      tabClicker: 'ТАПАТЬ / КЛИКЕР',
      gamesCode: 'ИГРЫ / 02',
      gamesTitle: 'Выберите<br><i>свой темп.</i>',
      gamesIntro: 'Две игры с разным характером. Обе доступны для Android в RuStore.',
      featuresLabel: 'Особенности игры',
      checkersAlt: 'Иконка игры Русские шашки',
      checkersTag: 'Стратегия · 0+',
      checkersTitle: 'Русские шашки',
      checkersDescription: 'Классические русские шашки для партии с другом или игры против компьютера. Удобное управление и тактические решения.',
      checkersFeatureOne: 'Для двоих',
      checkersFeatureTwo: 'Игра с ИИ',
      checkersFeatureThree: 'Классические правила',
      checkersOpen: 'Открыть Русские шашки в RuStore',
      clickerAlt: 'Иконка игры Мелстрой Кликер',
      clickerTag: 'Казуальная · 18+',
      clickerTitle: 'Мелстрой Кликер',
      clickerDescription: 'Динамичный кликер с уровнями, наградами, коллекциями и постоянным прогрессом. Каждый тап открывает следующий шаг.',
      clickerFeatureOne: 'Уровни',
      clickerFeatureTwo: 'Награды',
      clickerFeatureThree: 'Коллекции',
      clickerOpen: 'Открыть Мелстрой Кликер в RuStore',
      contactCode: 'СВЯЗЬ / 03',
      contactTitle: 'Есть идея?<br>Давайте <i>услышим.</i>',
      contactText: 'Сообщите об ошибке, предложите улучшение или поделитесь впечатлением от игры.',
      feedbackOpen: 'Обратная связь',
      portfolioOpen: 'QA портфолио',
      footerText: '© 2026 КоМа Студия. Игры для Android.',
      privacyLink: 'Политика сайта',
      checkersPrivacyLink: 'Политика игры «Шашки»',
      backToTop: 'Наверх',
      feedbackCode: 'ОБРАТНАЯ СВЯЗЬ / БЕЗ РЕГИСТРАЦИИ',
      feedbackTitle: 'Расскажите<br><i>по делу.</i>',
      feedbackClose: 'Закрыть форму',
      feedbackIntro: 'Можно сообщить об ошибке, предложить улучшение или поделиться впечатлением. Поля с * обязательны.',
      feedbackName: 'Имя *',
      feedbackNamePlaceholder: 'До 30 символов',
      feedbackEmail: 'Email для ответа *',
      feedbackMessage: 'Сообщение *',
      feedbackMessagePlaceholder: 'Что вы заметили?',
      feedbackWarning: 'Не отправляйте паспортные, платёжные, медицинские и другие чувствительные сведения.',
      feedbackConsent: 'Я даю согласие на обработку введённых данных и ознакомлен с политикой сайта.',
      consentLink: 'Согласие ↗',
      privacyShortLink: 'Политика ↗',
      feedbackAge: 'Мне исполнилось 18 лет либо сообщение отправляет мой законный представитель.',
      feedbackSubmit: 'Отправить',
      feedbackSending: 'Отправляем...',
      feedbackSuccess: 'Сообщение отправлено. Спасибо!',
      feedbackError: 'Не удалось отправить. Проверьте интернет и попробуйте ещё раз.',
      gameData: {
        checkers: {
          title: 'Русские шашки',
          description: 'Классическая партия с другом или против компьютера. Простые правила и пространство для тактики.',
          tag: 'СТРАТЕГИЯ · 0+',
          sticker: 'СНАЧАЛА ХОД',
          linkLabel: 'Открыть в RuStore'
        },
        clicker: {
          title: 'Мелстрой Кликер',
          description: 'Быстрый кликер с уровнями, наградами, коллекциями и постоянным прогрессом.',
          tag: 'КАЗУАЛЬНАЯ · 18+',
          sticker: 'ТАП ЗА ТАПОМ',
          linkLabel: 'Открыть в RuStore'
        }
      }
    },
    en: {
      title: 'KoMa Studio | Android Games',
      description: 'KoMa Studio creates Android games. Russian Checkers and Mellstroy Clicker are available on RuStore.',
      skip: 'Skip to content',
      brandLabel: 'Trigger the play pulse and return to the top',
      brandStatus: 'Play pulse triggered',
      navLabel: 'Main navigation',
      languageLabel: 'Language selection',
      navGames: 'Games',
      navContact: 'Feedback',
      navPortfolio: 'Portfolio',
      heroEyebrow: 'ANDROID / TWO PACES / ONE STUDIO',
      heroWordOne: 'SWITCH ON',
      heroWordTwo: 'LOGIC.',
      heroWordThree: 'OR MOMENTUM.',
      heroIntro: 'KoMa Studio makes mobile games that are easy to enter. Choose a calm match or fast progress.',
      heroOpen: 'Open selected game',
      heroAll: 'All games',
      selectorLabel: 'MODE SELECTOR / 01',
      selectorAria: 'Choose a game',
      tabCheckers: 'THINK / CHECKERS',
      tabClicker: 'TAP / CLICKER',
      gamesCode: 'GAMES / 02',
      gamesTitle: 'Choose<br><i>your pace.</i>',
      gamesIntro: 'Two games with different personalities. Both are available for Android on RuStore.',
      featuresLabel: 'Game features',
      checkersAlt: 'Russian Checkers game icon',
      checkersTag: 'Strategy · 0+',
      checkersTitle: 'Russian Checkers',
      checkersDescription: 'Classic Russian checkers for a match with a friend or against the computer. Clear controls and tactical decisions.',
      checkersFeatureOne: 'Two players',
      checkersFeatureTwo: 'Play against AI',
      checkersFeatureThree: 'Classic rules',
      checkersOpen: 'Open Russian Checkers on RuStore',
      clickerAlt: 'Mellstroy Clicker game icon',
      clickerTag: 'Casual · 18+',
      clickerTitle: 'Mellstroy Clicker',
      clickerDescription: 'A fast clicker with levels, rewards, collections and steady progress. Every tap opens the next step.',
      clickerFeatureOne: 'Levels',
      clickerFeatureTwo: 'Rewards',
      clickerFeatureThree: 'Collections',
      clickerOpen: 'Open Mellstroy Clicker on RuStore',
      contactCode: 'CONTACT / 03',
      contactTitle: 'Got an idea?<br>Let us <i>hear it.</i>',
      contactText: 'Report a bug, suggest an improvement or share your experience with a game.',
      feedbackOpen: 'Send feedback',
      portfolioOpen: 'QA portfolio',
      footerText: '© 2026 KoMa Studio. Games for Android.',
      privacyLink: 'Site privacy',
      checkersPrivacyLink: 'Russian Checkers privacy',
      backToTop: 'Back to top',
      feedbackCode: 'FEEDBACK / NO ACCOUNT NEEDED',
      feedbackTitle: 'Tell us<br><i>what matters.</i>',
      feedbackClose: 'Close form',
      feedbackIntro: 'Report a bug, suggest an improvement or share an impression. Fields marked * are required.',
      feedbackName: 'Name *',
      feedbackNamePlaceholder: 'Up to 30 characters',
      feedbackEmail: 'Reply email *',
      feedbackMessage: 'Message *',
      feedbackMessagePlaceholder: 'What did you notice?',
      feedbackWarning: 'Do not send passport, payment, medical or other sensitive information.',
      feedbackConsent: 'I consent to processing the entered data and have read the site privacy policy.',
      consentLink: 'Consent ↗',
      privacyShortLink: 'Privacy ↗',
      feedbackAge: 'I am at least 18, or this message is sent by my legal representative.',
      feedbackSubmit: 'Send',
      feedbackSending: 'Sending...',
      feedbackSuccess: 'Message sent. Thank you!',
      feedbackError: 'Could not send. Check your connection and try again.',
      gameData: {
        checkers: {
          title: 'Russian Checkers',
          description: 'A classic match with a friend or against the computer. Clear rules with room for tactical play.',
          tag: 'STRATEGY · 0+',
          sticker: 'THINK FIRST',
          linkLabel: 'Open on RuStore'
        },
        clicker: {
          title: 'Mellstroy Clicker',
          description: 'A fast clicker with levels, rewards, collections and steady progress.',
          tag: 'CASUAL · 18+',
          sticker: 'TAP BY TAP',
          linkLabel: 'Open on RuStore'
        }
      }
    }
  };

  var games = {
    checkers: {
      counter: '01 / 02',
      tone: 'lime',
      tabId: 'tab-checkers',
      icon: 'https://static.rustore.ru/imgproxy/S_-r8M7lbxUd-ukBQhzLB4ZWll-Zy1n79whHn_9-prg/preset:vk_og_img/plain/https://static.rustore.ru/2026/8/10/66/apk/2063745241/content/ICON/3715ad90-2285-4666-ab97-f5ab9533d7c9.png@webp',
      href: 'https://www.rustore.ru/catalog/app/com.koma.russiancheckers'
    },
    clicker: {
      counter: '02 / 02',
      tone: 'coral',
      tabId: 'tab-clicker',
      icon: 'https://static.rustore.ru/imgproxy/599ypp7QAMEqnysWEGfSeEv78ctYdh4lO70l325EHQc/preset:vk_og_img/plain/https://static.rustore.ru/2026/3/27/b9/apk/2063703643/content/ICON/18bff51e-37ce-4ab2-9416-0dfbde1bba7f.png@webp',
      href: 'https://www.rustore.ru/catalog/app/com.mellstroy.clicker'
    }
  };

  document.body.classList.add('motion-ready');

  var currentLanguage = 'ru';
  var activeGame = 'checkers';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var metaDescription = document.querySelector('meta[name="description"]');
  var ogLocale = document.querySelector('meta[property="og:locale"]');
  var gameStage = document.querySelector('[data-game-stage]');
  var stageIcon = document.querySelector('[data-stage-icon]');
  var stageTitle = document.querySelector('[data-stage-title]');
  var stageDescription = document.querySelector('[data-stage-description]');
  var stageTag = document.querySelector('[data-stage-tag]');
  var stageSticker = document.querySelector('[data-stage-sticker]');
  var stageCounter = document.querySelector('[data-stage-counter]');
  var stageLink = document.querySelector('[data-stage-link]');
  var stageLinkLabel = document.querySelector('[data-stage-link-label]');
  var activeStoreLink = document.querySelector('[data-active-store-link]');
  var tabs = Array.from(document.querySelectorAll('[data-game]'));
  var languageButtons = Array.from(document.querySelectorAll('[data-language]'));

  function renderGame(gameKey, animate) {
    var nextGame = games[gameKey] || games.checkers;
    var copy = translations[currentLanguage].gameData[gameKey] || translations[currentLanguage].gameData.checkers;
    var apply = function () {
      activeGame = gameKey;
      gameStage.dataset.tone = nextGame.tone;
      gameStage.setAttribute('aria-labelledby', nextGame.tabId);
      stageIcon.src = nextGame.icon;
      stageTitle.textContent = copy.title;
      stageDescription.textContent = copy.description;
      stageTag.textContent = copy.tag;
      stageSticker.textContent = copy.sticker;
      stageCounter.textContent = nextGame.counter;
      stageLink.href = nextGame.href;
      stageLinkLabel.textContent = copy.linkLabel;
      activeStoreLink.href = nextGame.href;
      tabs.forEach(function (tab) {
        var isActive = tab.dataset.game === gameKey;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });
      gameStage.classList.remove('is-switching');
    };

    if (animate && !reducedMotion) {
      gameStage.classList.add('is-switching');
      window.setTimeout(apply, 150);
    } else {
      apply();
    }
  }

  function setLanguage(language, updateUrl) {
    currentLanguage = translations[language] ? language : 'ru';
    var copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = copy.title;
    if (metaDescription) metaDescription.content = copy.description;
    if (ogLocale) ogLocale.content = currentLanguage === 'en' ? 'en_US' : 'ru_RU';

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var value = copy[node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (node) {
      var value = copy[node.dataset.i18nHtml];
      if (value) node.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (node) {
      var value = copy[node.dataset.i18nAria];
      if (value) node.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (node) {
      var value = copy[node.dataset.i18nAlt];
      if (value) node.setAttribute('alt', value);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (node) {
      var value = copy[node.dataset.i18nPlaceholder];
      if (value) node.setAttribute('placeholder', value);
    });

    languageButtons.forEach(function (button) {
      var active = button.dataset.language === currentLanguage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-portfolio-link]').forEach(function (link) {
      link.href = 'https://kezerio.github.io/kezerio-qa-portfolio/?lang=' + currentLanguage;
    });
    document.querySelectorAll('[data-site-privacy-link]').forEach(function (link) {
      link.href = currentLanguage === 'en' ? 'site-privacy/en.html' : 'site-privacy/';
    });
    document.querySelectorAll('[data-consent-page-link]').forEach(function (link) {
      link.href = currentLanguage === 'en' ? 'personal-data-consent/en.html' : 'personal-data-consent/';
    });
    var backToTop = document.querySelector('[data-back-to-top]');
    if (backToTop) backToTop.setAttribute('aria-label', copy.backToTop);
    renderGame(activeGame, false);

    if (updateUrl) {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', currentLanguage);
      window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    }
  }

  languageButtons.forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.dataset.language, true); });
  });
  setLanguage(new URLSearchParams(window.location.search).get('lang') || 'ru', false);

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { renderGame(tab.dataset.game, true); });
    tab.addEventListener('keydown', function (event) {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      var nextIndex = index;
      if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabs.length - 1;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
      else nextIndex = (index + 1) % tabs.length;
      tabs[nextIndex].focus();
      renderGame(tabs[nextIndex].dataset.game, true);
    });
  });

  var brand = document.querySelector('[data-brand]');
  var brandStatus = document.querySelector('[data-brand-status]');
  var brandTimer = null;
  if (brand) {
    brand.addEventListener('click', function () {
      window.clearTimeout(brandTimer);
      brand.classList.remove('is-pulsing');
      void brand.offsetWidth;
      brand.classList.add('is-pulsing');
      if (brandStatus) brandStatus.textContent = translations[currentLanguage].brandStatus;
      brandTimer = window.setTimeout(function () { brand.classList.remove('is-pulsing'); }, 900);
    });
  }

  var revealNodes = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealNodes.forEach(function (node) { revealObserver.observe(node); });
  } else {
    revealNodes.forEach(function (node) { node.classList.add('is-visible'); });
  }

  var consoleNode = document.querySelector('[data-console]');
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  if (consoleNode && finePointer && !reducedMotion) {
    consoleNode.addEventListener('pointermove', function (event) {
      var rect = consoleNode.getBoundingClientRect();
      var rotateY = ((event.clientX - rect.left) / rect.width - .5) * 4;
      var rotateX = -((event.clientY - rect.top) / rect.height - .5) * 4;
      consoleNode.style.transform = 'perspective(1100px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
    });
    consoleNode.addEventListener('pointerleave', function () { consoleNode.style.transform = ''; });
  }

  if (finePointer && !reducedMotion) {
    document.querySelectorAll('[data-tilt-card]').forEach(function (visual) {
      visual.addEventListener('pointermove', function (event) {
        var rect = visual.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width - .5) * 10;
        var y = ((event.clientY - rect.top) / rect.height - .5) * -10;
        visual.style.transform = 'perspective(800px) rotateX(' + y.toFixed(2) + 'deg) rotateY(' + x.toFixed(2) + 'deg)';
      });
      visual.addEventListener('pointerleave', function () { visual.style.transform = ''; });
    });
  }

  var backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop) {
    var updateBackToTop = function () { backToTop.classList.toggle('is-visible', window.scrollY > 520); };
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }); });
  }

  var dialog = document.querySelector('[data-feedback-dialog]');
  var form = document.getElementById('feedback-form');
  var nameField = form ? form.querySelector('input[name="name"]') : null;
  var messageField = form ? form.querySelector('textarea[name="message"]') : null;
  var honeyField = form ? form.querySelector('input[name="_honey"]') : null;
  var nameCount = document.querySelector('[data-name-count]');
  var messageCount = document.querySelector('[data-message-count]');
  var formStatus = document.querySelector('[data-feedback-status]');
  var submitButton = document.querySelector('[data-feedback-submit]');
  var lastFocused = null;

  function setFormStatus(text, type) {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.className = 'form-status' + (type ? ' is-' + type : '');
  }
  function updateCounts() {
    if (nameCount && nameField) nameCount.textContent = nameField.value.length + ' / 30';
    if (messageCount && messageField) messageCount.textContent = messageField.value.length + ' / 3000';
  }
  function openDialog() {
    if (!dialog) return;
    lastFocused = document.activeElement;
    setFormStatus('', '');
    dialog.showModal();
    document.body.classList.add('is-dialog-open');
    window.setTimeout(function () { if (nameField) nameField.focus(); }, 0);
  }
  function closeDialog() {
    if (dialog && dialog.open) dialog.close();
  }

  document.querySelectorAll('[data-feedback-open]').forEach(function (button) { button.addEventListener('click', openDialog); });
  document.querySelectorAll('[data-feedback-close]').forEach(function (button) { button.addEventListener('click', closeDialog); });
  if (dialog) {
    dialog.addEventListener('close', function () {
      document.body.classList.remove('is-dialog-open');
      if (lastFocused) lastFocused.focus();
    });
    dialog.addEventListener('click', function (event) {
      var rect = dialog.getBoundingClientRect();
      var inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) closeDialog();
    });
  }
  if (nameField) nameField.addEventListener('input', updateCounts);
  if (messageField) messageField.addEventListener('input', updateCounts);
  updateCounts();

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      setFormStatus('', '');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (honeyField && honeyField.value) return;

      var copy = translations[currentLanguage];
      submitButton.disabled = true;
      submitButton.textContent = copy.feedbackSending;
      setFormStatus(copy.feedbackSending, '');
      var formData = new FormData(form);
      var email = String(formData.get('email') || '').trim();
      var payload = {
        name: String(formData.get('name') || '').trim(),
        email: email,
        message: String(formData.get('message') || '').trim(),
        consent_to_personal_data_processing: formData.get('consent') ? 'Yes' : 'No',
        age_confirmation: formData.get('age_confirmation') ? 'Yes' : 'No',
        language: currentLanguage,
        submitted_from: 'https://kezerio.github.io/',
        submitted_at: new Date().toISOString(),
        _replyto: email,
        _subject: 'KoMa Studio feedback',
        _template: 'table'
      };

      fetch('https://formsubmit.co/ajax/aniyurotaxo084@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        form.reset();
        updateCounts();
        setFormStatus(copy.feedbackSuccess, 'success');
      }).catch(function () {
        setFormStatus(copy.feedbackError, 'error');
      }).finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = copy.feedbackSubmit;
      });
    });
  }
})();
