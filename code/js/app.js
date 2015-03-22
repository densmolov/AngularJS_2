(function () {
    'use strict';

    angular.module('readingList', [])
        .controller('ReadingListController', function(){
            this.books = books;
            this.genres = genres;
        })
        .controller('BookController', function(){
        })
        .directive('bookCover', function(){
            return {
                restrict: 'E',
                templateUrl: 'templates/book-cover.html'
            };
        })
        .directive('bookGenres', function(){
            return {
                restrict: 'E',
                templateUrl: 'templates/book-genres.html'
            }
        })
    ;

    var genres = ['non-fiction', 'fiction', 'fantasy'];

    var books = [
        {
            title: 'Pragmatic Thinking & Learning',
            authors: ['Andy Hunt'],
            isbn: '1934356050',
            review: 'Love this book.',
            rating: 3,
            genres: [genres[0]]
        },
        {
            title: 'The Age of Spiritual Machines',
            authors: ['Ray Kurzweil'],
            isbn: '0140282025',
            review: 'Nice to read.',
            rating: 5,
            genres: [genres[0]]
        },
        {
            title: 'Elven Star',
            authors: ['Margaret Weiss', 'Tracy Hickman'],
            isbn: '0553290983',
            review: 'Cool as hell!',
            rating: 5,
            genres: [genres[1], genres[2]]
        }
    ];

})();
