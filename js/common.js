/**
 * 个人简历展示网站 - 公共脚本
 * 导航高亮、Toast、localStorage、表单校验
 */
(function () {
  'use strict';

  /* ========== 当前页导航高亮 ========== */
  function initNavHighlight() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    var links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href.indexOf('index.html') !== -1 && page === 'cover') {
        link.classList.add('active');
      } else if (href.indexOf(page + '.html') !== -1) {
        link.classList.add('active');
      }
    });
  }

  /* ========== Toast 提示 ========== */
  function showToast(message) {
    var toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:12px 24px;border-radius:8px;z-index:9999;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.2);';
    document.body.appendChild(toast);
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 2500);
  }

  window.showToast = showToast;

  /* ========== localStorage 工具（可选） ========== */
  function setStorage(key, value) {
    try {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    } catch (e) {}
  }

  function getStorage(key) {
    try {
      var val = localStorage.getItem(key);
      if (val === null) return null;
      try {
        return JSON.parse(val);
      } catch (e) {
        return val;
      }
    } catch (e) {
      return null;
    }
  }

  window.setStorage = setStorage;
  window.getStorage = getStorage;

  /* ========== 访问记录（localStorage 真实读写） ========== */
  var VISIT_COUNT_KEY = 'resume_visit_count';
  var VISIT_LAST_KEY = 'resume_last_visit';

  function updateVisitRecord() {
    var count = getStorage(VISIT_COUNT_KEY);
    if (count === null || typeof count !== 'number') count = 0;
    count += 1;
    setStorage(VISIT_COUNT_KEY, count);
    var now = new Date();
    var timeStr = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
    setStorage(VISIT_LAST_KEY, timeStr);
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function renderVisitInfo() {
    var el = document.getElementById('visitInfo');
    if (!el) return;
    var count = getStorage(VISIT_COUNT_KEY);
    var last = getStorage(VISIT_LAST_KEY);
    if (count === null || typeof count !== 'number') count = 0;
    var countText = count <= 0 ? '首次访问' : '您已访问本简历 ' + count + ' 次';
    var timeText = last ? '上次访问：' + last : '本次访问时间已记录';
    el.innerHTML = '<span class="visit-count">' + countText + '</span><span class="visit-time">' + timeText + '</span>';
  }

  function initVisitRecord() {
    updateVisitRecord();
    renderVisitInfo();
  }

  /* ========== 表单基础校验 ========== */
  function validateForm(form) {
    var inputs = form.querySelectorAll('[required]');
    for (var i = 0; i < inputs.length; i++) {
      var el = inputs[i];
      if (!el.value || !el.value.trim()) {
        showToast(el.placeholder || '请填写必填项');
        el.focus();
        return false;
      }
      if (el.type === 'email' && el.value) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(el.value)) {
          showToast('请输入有效的邮箱地址');
          el.focus();
          return false;
        }
      }
    }
    return true;
  }

  function initFormValidate() {
    var forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateForm(form)) return;
        showToast('提交成功');
      });
    });
  }

  /* ========== 初始化 ========== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initNavHighlight();
      initVisitRecord();
      initFormValidate();
    });
  } else {
    initNavHighlight();
    initVisitRecord();
    initFormValidate();
  }
})();
