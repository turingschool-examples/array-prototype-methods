describe('popularPhotos', function () {
  it('is an array', function () {
    assert(Array.isArray(popularPhotos));
  });

  it('sorts the photos by their number of likes', function () {
    assert.operator(popularPhotos.length, '>', 1);

    for (var i = 0; i < popularPhotos.length - 1; i++) {
      assert.operator(popularPhotos[i].likes.count, '<=', popularPhotos[i+1].likes.count);
    }
  });
});
