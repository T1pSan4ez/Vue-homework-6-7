export default {
    beforeMount(el, binding) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = binding.value;
        el.appendChild(tooltip);
        el.style.position = 'relative';
        el.style.cursor = 'help';
        tooltip.style.display = 'none';
        el.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        });
        el.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
        el._tooltip = tooltip;
    },
    beforeUnmount(el) {
        if (el._tooltip) {
            el._tooltip.remove();
            delete el._tooltip;
        }
    }
}