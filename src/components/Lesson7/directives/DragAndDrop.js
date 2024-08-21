export default {
    beforeMount(el) {
        el.style.position = 'absolute';
        el.style.cursor = 'move';

        let posX = 0, posY = 0, initialX = 0, initialY = 0;

        const onMouseMove = (event) => {
            event.preventDefault();
            posX = initialX - event.clientX;
            posY = initialY - event.clientY;
            initialX = event.clientX;
            initialY = event.clientY;
            el.style.top = `${el.offsetTop - posY}px`;
            el.style.left = `${el.offsetLeft - posX}px`;
        };

        const onMouseDown = (event) => {
            event.preventDefault();
            initialX = event.clientX;
            initialY = event.clientY;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        el.addEventListener('mousedown', onMouseDown);
    },

};