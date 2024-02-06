export default function useSelect() {
  const showed = ref(false);

  function toggle() {
    showed.value = !showed.value;
  }

  function hide() {
    showed.value = false;
  }

  return {
    showed,
    toggle,
    hide
  };
}
