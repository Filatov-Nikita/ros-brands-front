const body = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(51417850, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true,
  ecommerce:"dataLayer"
  });
`;

const _noscript = `<div><img src="https://mc.yandex.ru/watch/51417850" style="position:absolute; left:-9999px;" alt="" /></div>`;

export function noscript() {
  return [
    {
      innerHTML: _noscript,
    }
  ];
}

export function scripts() {
  return [
    {
      type: 'text/javascript',
      innerHTML: body,
    },
  ];
}
