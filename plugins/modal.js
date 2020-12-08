function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
const modal = document.createElement('div');
modal.classList.add('ymodal');
modal.insertAdjacentHTML('afterbegin', `
<div class="modal-overlay" data-close="true">
    <div class="modal-window" style="width: ${options.width|| DEFAULT_WIDTH}">
        <div class="modal-header">
<span class="modal-title">${options.title || 'Fenster'}</span>
${options.closeable ? `<span class="modal-close=true" data-close>&times;</span>` : ''}
        </div>
        <div class="modal-body">
       ${options.content || ''}

        </div>
        <div class="modal-footer">
<button>Ok</button>
<button>Canel</button>

        </div>
    </div>
</div>
`);
document.body.appendChild(modal);
return modal;
}

$.modal = function(options) {
    const ANIMATION_SPEED = 200;
    const $modal = _createModal(options);
    let clossing = false;
    let destroyed = false;
    const modal ={
        open() {
            if (destroyed) {
                return console.log('Modal is destroy')

            }
            !clossing && $modal.classList.add('open')
         },
         close() {
             clossing = true;
             $modal.classList.remove('open');
             $modal.classList.add('hide')
             setTimeout(() => {
     $modal.classList.remove('hide')
     clossing = false;
             }, ANIMATION_SPEED)
         },
    }
const listener = event => {
    if (event.target.dataset.close) {
        modal.close();
                }
}
    $modal.addEventListener('click', listener)

return Object.assign( modal,
     {destroy() {
    $modal.parentNode.removeChild($modal);
    $modal.removeEventListener('click', listener);
    destroyed = true;
}
});
};