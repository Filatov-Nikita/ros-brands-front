export default function() {
  const notify = useNotifyStore();

  function getWaLink() {
    return `https://wa.me/?text=${window.location.href}`;
  }

  function getTgLink() {
    return `https://t.me/share/url?url=${window.location.href}`;
  }

  function copyToClickborad() {
    navigator.clipboard.writeText(window.location.href)
    .then(() => {
      notify.create({
        type: 'success',
        message: 'Ссылка успешно скопирована',
      });
    })
    .catch(() => {
      notify.create({
        type: 'error',
        message: 'Не удалось скопировать ссылку',
      });
    });
  }

  return {
    getWaLink,
    getTgLink,
    copyToClickborad,
  }
}
