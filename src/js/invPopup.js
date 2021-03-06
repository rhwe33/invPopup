class InvPopup {

  constructor(idOverlay) {
    this.overlay = '#'+idOverlay+'.iOverlay';
    this.btn;
    this.maxWidth = '300px';
    this.maxHeight = '300px';
    this.minWidth = '100px';
    this.minHeight = '100px';
    this.background = 'white';
    this.fade = 300;
    this.closeBtn;
  }

  setMaxWidth(param) {
    this.maxWidth = param;
  }

  setMaxHeight(param) {
    this.maxHeight = param;
  }

  setMinWidth(param) {
    this.minWidth = param;
  }

  setMinHeight(param) {
    this.minHeight = param;
  }

  setBackground(param) {
    this.background = param;
  }

  setFade(param) {
    this.width = param;
  }

  setCloseBtn(param) {
    this.closeBtn = '#'+param;
  }

  linkBtn(param) {
    this.popupStyle();
    this.btn = '#'+param;
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