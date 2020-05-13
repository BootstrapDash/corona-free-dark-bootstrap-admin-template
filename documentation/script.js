(function($) {
  'use strict';

  if ($('.multiple-codes').length) {
    var code_type = '';
    var editorTextarea = $('.multiple-codes');
    for (var i = 0; i < editorTextarea.length; i++) {
      $(editorTextarea[i]).attr('id', 'code-' + i);
      CodeMirror.fromTextArea(document.getElementById('code-' + i), {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        readOnly: true,
        maxHighlightLength: 0,
        workDelay: 0
      });
    }
  }

  if ($('.shell-mode').length) {
    var code_type = '';
    var shellEditor = $('.shell-mode');
    for (var i = 0; i < shellEditor.length; i++) {
      $(shellEditor[i]).attr('id', 'code-' + i);
      CodeMirror.fromTextArea(document.getElementById('code-' + i), {
        mode: "shell",
        theme: "dracula",
        readOnly: true,
        maxHighlightLength: 0,
        workDelay: 0
      });
    }
  }

  if ($('.demo-tabs').length) {      
    $('.demo-tabs').pwstabs({
      effect: 'none'
    });
  }

  // The function actually applying the offset
  function offsetAnchor() {
    if (location.hash.length !== 0) {
        // window.scrollTo(window.scrollX, window.scrollY - 140);
        $("html").animate({ scrollTop: $(location.hash).offset().top - 15 }, 300);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
      // Click events are captured before hashchanges. Timeout
      // causes offsetAnchor to be called after the page jump.
      window.setTimeout(function() {
      offsetAnchor();
      }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);

    
})(jQuery);    