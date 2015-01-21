app.service('dataService', function ($cookieStore) {

  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  // 3 functions
  // 1) getting 2) adder 3) deleter

  this.getData = function () {
    return quotes;
  };

  this.addData = function (text, author) {
      if (text !== "" && author !== "") {
        quotes.push({text: text, author: author});
      }
      $cookieStore.put('data', quotes);
  };

  this.removeData = function(text) {
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].text === text) {
        quotes.splice(i, 1);
      }
    }
    $cookieStore.put('data', quotes);
  }

  if ($cookieStore.get('data')) {
    quotes = $cookieStore.get('data')
  } else {
    $cookieStore.put('data', quotes);
  }

});