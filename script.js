// Shared interactions for the TAFKEEK company site (all pages).
document.addEventListener('DOMContentLoaded', function(){

  var yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // ---------- Mobile nav ----------
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if(hamburger && navLinks){
    hamburger.addEventListener('click', function(){
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Reveal on scroll ----------
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if(!reduceMotion && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function(t){ io.observe(t); });
  } else {
    revealTargets.forEach(function(t){ t.classList.add('in-view'); });
  }

  // ---------- Animated stat counters ----------
  var counters = document.querySelectorAll('[data-count]');
  if(!reduceMotion && 'IntersectionObserver' in window && counters.length){
    var counterIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        var el = entry.target;
        counterIO.unobserve(el);
        var raw = el.dataset.count;
        var match = raw.match(/^([^\d]*)(\d+)(.*)$/);
        if(!match){ return; }
        var prefix = match[1], target = parseInt(match[2], 10), suffix = match[3];
        var start = performance.now();
        var duration = 900;
        function tick(now){
          var p = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(target * eased) + suffix;
          if(p < 1){ requestAnimationFrame(tick); }
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    counters.forEach(function(c){ counterIO.observe(c); });
  }

  // ---------- Gallery filter tabs ----------
  document.querySelectorAll('[data-tabs-for]').forEach(function(bar){
    var targetSel = bar.dataset.tabsFor;
    var gallery = document.querySelector(targetSel);
    if(!gallery) return;
    var tabs = bar.querySelectorAll('.gtab');
    var items = gallery.querySelectorAll('.gallery-item');
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        tabs.forEach(function(t){ t.classList.remove('active'); });
        tab.classList.add('active');
        var filter = tab.dataset.filter;
        items.forEach(function(item){
          var match = filter === 'all' || item.dataset.group === filter;
          item.classList.toggle('hidden', !match);
        });
      });
    });
  });

  // ---------- Lightbox ----------
  var lightbox = document.getElementById('lightbox');
  if(lightbox){
    var lbImg = document.getElementById('lbImg');
    var lbCap = document.getElementById('lbCap');
    var activeItems = [];
    var activeIndex = 0;

    function visibleItems(scope){
      return Array.prototype.filter.call(scope.querySelectorAll('[data-lightbox]'), function(el){
        return !el.classList.contains('hidden') && el.offsetParent !== null;
      });
    }
    function render(){
      var el = activeItems[activeIndex];
      var img = el.querySelector('img') || el;
      var full = el.dataset.full || img.src;
      lbImg.src = full;
      lbImg.alt = img.alt || '';
      lbCap.textContent = el.dataset.caption || img.alt || '';
    }
    function open(scope, index){
      activeItems = visibleItems(scope);
      activeIndex = index;
      render();
      lightbox.classList.add('open');
    }
    function close(){ lightbox.classList.remove('open'); }
    function next(){ activeIndex = (activeIndex + 1) % activeItems.length; render(); }
    function prev(){ activeIndex = (activeIndex - 1 + activeItems.length) % activeItems.length; render(); }

    document.querySelectorAll('[data-lightbox-scope]').forEach(function(scope){
      scope.querySelectorAll('[data-lightbox]').forEach(function(el){
        el.addEventListener('click', function(){
          var items = visibleItems(scope);
          open(scope, items.indexOf(el));
        });
      });
    });

    var lbClose = document.getElementById('lbClose');
    var lbNext = document.getElementById('lbNext');
    var lbPrev = document.getElementById('lbPrev');
    if(lbClose) lbClose.addEventListener('click', close);
    if(lbNext) lbNext.addEventListener('click', next);
    if(lbPrev) lbPrev.addEventListener('click', prev);
    lightbox.addEventListener('click', function(e){ if(e.target === lightbox){ close(); } });
    document.addEventListener('keydown', function(e){
      if(!lightbox.classList.contains('open')) return;
      if(e.key === 'Escape') close();
      if(e.key === 'ArrowRight') next();
      if(e.key === 'ArrowLeft') prev();
    });
  }

  // ---------- Lazy-load & lazy-play video ----------
  var lazyVideos = document.querySelectorAll('video[data-src]');
  if(lazyVideos.length){
    if('IntersectionObserver' in window){
      var videoIO = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          var v = entry.target;
          if(entry.isIntersecting){
            if(!v.src){ v.src = v.dataset.src; v.load(); }
            var playPromise = v.play();
            if(playPromise){ playPromise.catch(function(){ /* autoplay blocked, fine */ }); }
          } else {
            v.pause();
          }
        });
      }, { threshold: 0.25 });
      lazyVideos.forEach(function(v){ videoIO.observe(v); });
    } else {
      lazyVideos.forEach(function(v){ v.src = v.dataset.src; });
    }
  }

  // ---------- Contact form -> mailto (static site, no backend) ----------
  var form = document.getElementById('inquiryForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.name.value.trim();
      var company = form.company.value.trim();
      var email = form.email.value.trim();
      var type = form.projectType.value;
      var brief = form.brief.value.trim();

      var subject = 'Project inquiry — ' + (type || 'General') + (company ? ' — ' + company : (name ? ' — ' + name : ''));
      var bodyLines = [
        'Name: ' + name,
        'Company: ' + (company || '—'),
        'Email: ' + email,
        'Project type: ' + (type || '—'),
        '',
        'Brief:',
        brief
      ];
      var mailto = 'mailto:studiotafkeek@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));
      window.location.href = mailto;
    });
  }

});
