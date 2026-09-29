// Эйрхейм — мобильное выдвижное меню
(function(){
  function init(){
    var sidebar=document.querySelector('.sidebar');
    if(!sidebar || document.querySelector('.mobile-menu-btn')) return;
    var btn=document.createElement('button');
    btn.className='mobile-menu-btn'; btn.type='button'; btn.setAttribute('aria-label','Открыть меню'); btn.textContent='☰';
    var overlay=document.createElement('div'); overlay.className='mobile-menu-overlay';
    document.body.appendChild(btn); document.body.appendChild(overlay);
    function close(){document.body.classList.remove('nav-open');btn.textContent='☰';btn.setAttribute('aria-label','Открыть меню')}
    function open(){document.body.classList.add('nav-open');btn.textContent='×';btn.setAttribute('aria-label','Закрыть меню')}
    btn.addEventListener('click',function(){document.body.classList.contains('nav-open')?close():open()});
    overlay.addEventListener('click',close);
    sidebar.addEventListener('click',function(e){if(window.innerWidth<=860 && e.target.closest('button,a')) close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();