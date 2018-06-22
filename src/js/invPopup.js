class InvPopup {

  constructor({
    btn        = 'open_popup',
    idOverlay  = 'invPopup',
    maxWidth   = '300px',
    maxHeight  = '300px',
    minWidth   = '100px',
    minHeight  = '100px',
    background = 'white',
    closeBtn   = 'close_popup',
    fade       = 300
  }) {

    // OPTIONS
    this.btn        = '#' + btn;
    this.overlay    = '#' + idOverlay;
    this.maxWidth   = maxWidth;
    this.maxHeight  = maxHeight;
    this.minWidth   = minWidth;
    this.minHeight  = minHeight;
    this.background = background;
    this.closeBtn   = '.' + closeBtn;
    this.fade       = fade;

    // CREATING
    this.create();
  }

  create() {
    this.popupStyle();
    var iOverlay = this.overlay;
    var fade = this.fade;
    $(this.btn).on('click', function(){
      $(iOverlay).fadeIn(fade);
      $(iOverlay).css('display', 'flex');
    });
    this.closeByOverlay();
    this.closeByBtn();
  }

  getReady() {
    this.popupStyle();
    var iOverlay = this.overlay;
    var fade = this.fade;
    $(document).ready(function(){
      $(iOverlay).fadeIn(fade);
      $(iOverlay).css('display', 'flex');
    })
    this.closeByOverlay();
    this.closeByBtn();
  }

  getReadyByTime(param) {
    if(!param) {
      param = 1000;
    }
    this.popupStyle();
    var iOverlay = this.overlay;
    var fade = this.fade;
    setTimeout(function(){
      $(iOverlay).fadeIn(fade);
      $(iOverlay).css('display', 'flex');
    }, param);
    this.closeByOverlay();
    this.closeByBtn();
  }

  popupStyle() {
    var maxWidth = this.maxWidth;
    var maxHeight = this.maxHeight;
    var minWidth = this.minWidth;
    var minHeight = this.minHeight;
    var background = this.background;
    var iPopupWrap = $(this.overlay).children();
    $(iPopupWrap).css({'position' : 'relative', 'z-index' : '5556', 'max-width' : maxWidth, 'max-height' : maxHeight, 'min-width' : minWidth, 'min-height' : minHeight, 'background' : background});
  }

  resetBasicStylePopup() {
    var iPopupWrap = $(this.overlay).children();
    $(iPopupWrap).css({'position' : '', 'z-index' : '', 'max-width' : '', 'max-height' : '', 'min-width' : '', 'min-height' : '', 'background' : ''});
  }

  closeByOverlay() {
    var iOverlay = this.overlay;
    var fade = this.fade;
    $(this.overlay).on('click', function (e) {
      var $targ = $(e.target);
      var iPopupWrap = $(iOverlay).children();
      if (!$targ.closest(iPopupWrap).length) {
        $(iOverlay).fadeOut(fade);
      }
    });
  }

  closeByBtn() {
    var iOverlay = this.overlay;
    var fade = this.fade;
    var closeBtn = this.closeBtn;
    $(this.closeBtn).on('click', function (e) {
      $(iOverlay).fadeOut(fade);
    });
  }
}