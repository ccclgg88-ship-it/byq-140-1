/**
 * 作品与项目页：查看详情 - jQuery UI Dialog
 */
(function () {
  'use strict';

  function initWorkDialogs() {
    var $ = window.jQuery;
    if (!$ || !$.fn.dialog) return;

    var dialogOptions = {
      autoOpen: false,
      modal: true,
      width: Math.min(520, window.innerWidth - 40),
      closeText: '关闭',
      show: { effect: 'fade', duration: 200 },
      hide: { effect: 'fade', duration: 150 },
      open: function () {
        document.documentElement.classList.add('work-dialog-open');
        document.body.classList.add('work-dialog-open');
        $(this).closest('.ui-dialog').addClass('work-dialog-theme');
      },
      close: function () {
        document.documentElement.classList.remove('work-dialog-open');
        document.body.classList.remove('work-dialog-open');
      }
    };

    ['dialog-project1', 'dialog-project2', 'dialog-project3'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        $(el).dialog(dialogOptions);
        $(el).closest('.ui-dialog').addClass('work-dialog-theme');
      }
    });

    document.querySelectorAll('[data-work-dialog]').forEach(function (btn) {
      var id = btn.getAttribute('data-work-dialog');
      if (!id) return;
      btn.addEventListener('click', function () {
        if ($('#' + id).length) $('#' + id).dialog('open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWorkDialogs);
  } else {
    initWorkDialogs();
  }
})();
