const MIN_SIZE = 20;

export default (el: HTMLElement, binding: any): void => {
  const { width } = el.getBoundingClientRect();

  let size = width * 0.025;

  if (MIN_SIZE > size) size = MIN_SIZE;

  const iconCircle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  );
  iconCircle.setAttribute('class', 'overlay-icon__circle');
  iconCircle.setAttribute('cx', (size / 2).toString());
  iconCircle.setAttribute('cy', (size / 2).toString());
  iconCircle.setAttribute('r', (size / 2.5).toString());
  iconCircle.setAttribute('fill', 'none');
  iconCircle.setAttribute('stroke-width', '2');

  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('class', 'overlay-icon');
  icon.setAttribute('viewBox', `0 0 ${size} ${size}`);
  icon.setAttribute('width', `${size}px`);
  icon.setAttribute('height', `${size}px`);

  icon.appendChild(iconCircle);

  const overlay = document.createElement('div');
  overlay.setAttribute('class', 'overlay');

  overlay.appendChild(icon);

  if (binding.value) {
    el.classList.add('position-relative');
    el.classList.add('overflow-hidden');

    el.appendChild(overlay);
  } else {
    const overlay = el.children.item(el.children.length - 1);

    if (overlay && overlay.classList.contains('overlay')) overlay.remove();

    el.classList.remove('position-relative');
    el.classList.remove('overflow-hidden');
  }
};
