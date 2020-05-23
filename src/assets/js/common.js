setTimeout(() => {
// ============================ 公共头部 ==================================== //
let navServTimer = -1;
let headerTimer = null;
let a = document.getElementById('nav-header-serv');
    a && a.addEventListener('mousemove', function(e) {
        clearTimeout(headerTimer);
        if (navServTimer !== -1) {
          clearTimeout(navServTimer);
          navServTimer = -1;
        }
        a.classList.add("active");
        document.querySelector('.cat-box').classList.add('active');
        document.querySelector('.mod-header').classList.add('hover');
    },
    // mouse leave
    a && a.addEventListener('mouseout', function(e) {
        // 延迟200毫秒
        navServTimer = setTimeout(() => {
          navServTimer = -1;
          document.querySelector('.cat-box').classList.remove('active');
          a.classList.remove('active');
        }, 200);
        headerTimer = setTimeout(() => {
          document.querySelector('.mod-header').classList.remove('hover');
        }, 500);
      })
);
// tab选中
// const $navSlider = document.querySelector('.jmod-nav-slider');
// const headerNav = document.querySelector('.jmod-nav-slider li');
// document.querySelector('#jmod-header-nav').addEventListener('mousemove', function
//   (e) {
//     $navSlider.classList.remove('hidden');
//     navSlide(e.currentTarget);
//   },
// );
// document.querySelector('#jmod-header-nav').addEventListener('mouseout', function(e) {
//   // headerNav.style.borderBottom = 0;
//     $navSlider.classList.add('hidden');
// })

// function navSlide(node) {
//   console.log('node', node);
  // let pos = node.offsetLeft - headerNav.offsetLeft;
  // $navSlider.css('transform', 'translateX(' + pos + 'px');
  // $navSlider.css({
  //   transform: 'translateX(' + pos + 'px)',
  //   width: document.documentElement.clientWidth + 'px'
  // });
  // headerNav.style.borderBottom = '2px solid';
  // $navSlider.style.transform = 'translateX(' + pos + 'px)';
// }
// ============================= end 公共头部 ================================ //
// ============================= start timestat & tcss & sentry上报 ================================ //
// ============================= end timestat & tcss & sentry上报 ================================ //

},0)