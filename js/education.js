/**
 * 教育与总结页：联系表单期望到岗日期 - jQuery UI Datepicker（中文 + 站点样式）
 */
(function () {
  'use strict';

  var zhCN = {
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'
  };

  function initDatepicker() {
    var $ = window.jQuery;
    if (!$ || !$.fn.datepicker) return;
    var el = document.getElementById('contactDate');
    if (!el) return;
    $.datepicker.setDefaults(zhCN);
    $(el).datepicker({
      dateFormat: 'yy-mm-dd',
      showAnim: 'fadeIn',
      minDate: 0,
      beforeShow: function () {
        setTimeout(function () {
          var w = document.querySelector('.ui-datepicker');
          if (w) {
            w.style.zIndex = 9998;
            w.classList.add('education-datepicker');
          }
        }, 0);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDatepicker);
  } else {
    initDatepicker();
  }
})();
