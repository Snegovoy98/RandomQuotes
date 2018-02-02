var quotes = [
    'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move',
    'Adventure is worthwhile',
    'Traveling – it leaves you speechless, then turns you into a storyteller',
    'We travel, some of us forever, to seek other places, other lives, other souls',
    'A journey is best measured in friends, rather than miles',
    'The gladdest moment in human life, me thinks, is a departure into unknown lands',
    'No place is ever as bad as they tell you it’s going to be',
    'I am not the same, having seen the moon shine on the other side of the world',
    'Travel makes one modest. You see what a tiny place you occupy in the world',
    'We travel not to escape life, but for life not to escape us',
    'The man who goes alone can start today; but he who travels with another must wait till that other is ready',
    'To awaken alone in a strange town is one of the pleasantest sensations in the world',
    'The life you have led doesn’t need to be the only life you have',
    'Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all of one’s lifetime',
    'Man cannot discover new oceans unless he has the courage to lose sight of the shore',
    'The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are',
    'The world is a book, and those who do not travel read only one page',
    'Travel and change of place impart new vigor to the mind',
    'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do',
    'Once a year, go someplace you’ve never been before',
    'Travel is the only thing you buy that makes you richer',
    'To travel is to discover that everyone is wrong about other countries',
    'See the world. It’s more fantastic than any dream made or paid for in factories',
    'Traveling tends to magnify all human emotions',
    'You don’t have to be rich to travel well'
];

var mainButton = document.querySelector('button');

function clickRandom() {
    mainButton.addEventListener('click', function() {
        var randomResult = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quoteResult').innerHTML = randomResult;
    });
}

clickRandom();

