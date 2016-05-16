$('.toggle').on('click', function () {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function () {
  $('.container').stop().removeClass('active');
});

AlertifyError = function (string) {
  // Extend existing 'alert' dialog
  if (!alertify.errorAlert) {
    //define a new errorAlert base on alert
    alertify.dialog('errorAlert', function factory() {
      return {
        build: function () {
          var errorHeader = '<span class="fa fa-times-circle fa-2x" '
            + 'style="vertical-align:middle;color:#e10000;">'
            + '</span> Error';
          this.setHeader(errorHeader);
        }
      };
    }, true, 'alert');
  }
  //launch it.
  // since this was transient, we can launch another instance at the same time.
  alertify
    .errorAlert(string);
}