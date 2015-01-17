(function ($) {
  module('jQuery#textTruncate', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.textTruncate(), this.elems, 'should be chainable');
  });

  test('is textTruncate', function () {
    expect(1);
    strictEqual(this.elems.textTruncate().text(), 'textTruncate0textTruncate1textTruncate2', 'should be textTruncate');
  });

  module('jQuery.textTruncate');

  test('is textTruncate', function () {
    expect(2);
    strictEqual($.textTruncate(), 'textTruncate.', 'should be textTruncate');
    strictEqual($.textTruncate({punctuation: '!'}), 'textTruncate!', 'should be thoroughly textTruncate');
  });

  module(':textTruncate selector', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is textTruncate', function () {
    expect(1);
    deepEqual(this.elems.filter(':textTruncate').get(), this.elems.last().get());
  });
}(jQuery));
