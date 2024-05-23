var btn = document.querySelector('button');
var quote = document.getElementById('quote-box');
var bookQuote = document.getElementById('bookQuotes');
var lifeQuote = document.getElementById('lifeQuotes');
var movieQuote = document.getElementById('movieQuotes');
var sportQuote = document.getElementById('sportQuotes');

var oldRandom = -1;
var quotes = []


console.log(quotes);

bookQuote.addEventListener('click',function(){
    quotes = [
        `<p class = "quote text-center">“There is no friend as loyal as a book.”</p>
        <p class = "author text-center">-- Ernest Hemingway</p>`,
        `<p class ="quote text-center">“One must always be careful of books, and what is inside them, for words have the power to change us.”</p>
        <p class = "author text-center" >-- Cassandra Clare, Clockwork Angel</p>`,
        `<p class = "quote text-center" >“You should write a book," Ron told Hermione as he cut up his potatoes, "translating mad things girls do so boys can understand them.”</p>
        <p class = "author text-center" >-- J.K. Rowling, Harry Potter and the Order of the Phoenix</p>`,
        `<p class = "quote text-center" >“Books were safer than other people anyway.”</p>
        <p class = "author text-center" >-- Neil Gaiman, The Ocean at the End of the Lane </p>`,
        `<p class = "quote text-center" >“The Voice There is a voice inside of you That whispers all day long, I feel this is right for me,I know that this is wrong." No teacher, preacher, parent, friend Or wise man can decide  What's right for you--just listen to The voice that speaks inside.”</p>
        <p class = "author text-center" >-- Shel Silverstein </p>`,
        `<p class = "quote text-center" >“I do things like get in a taxi and say, "The library, and step on it.”</p>
        <p class = "author text-center" >--  David Foster Wallace, Infinite Jest</p>`,
        `<p class = "quote text-center" >“Isn't it odd how much fatter a book gets when you've read it several times?" Mo had said..."As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells...and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like a pressed flower...both strange and familiar.”</p>
        <p class = "author text-center" >--  Cornelia Funke, Inkspell </p>`,
        `<p class = "quote text-center" >“It's not gray," Clary felt compelled to point out. "It's green."
        "If there was such a thing as terminal literalism, you'd have died in childhood," said Jace.”</p>
        <p class = "author text-center" >-- ―Cassandra Clare, City of Bones </p>`,
        `<p class = "quote text-center" >“Harry - you're a great wizard, you know."
        "I'm not as good as you," said Harry, very embarrassed, as she let go of him.
        "Me!" said Hermione. "Books! And cleverness! There are more important things - friendship and bravery and - oh Harry - be careful!”</p>
        <p class = "author text-center" >-- J.K. Rowling, Harry Potter and the Sorcerer's Stone </p>`,
        `<p class = "quote text-center" >“What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic."</p>
        <p class = "author text-center" >-- Carl Sagan, Cosmos </p>`,
    
    ]
    console.log(quotes);
    btn.classList.replace('opacity-0','opacity-100')
    quote.innerHTML = ' ';
});

lifeQuote.addEventListener('click',function(){
    quotes = [
        `<p class = "quote text-center">“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”
        </p>
        <p class = "author text-center">--  William W. Purkey</p>`,
        `<p class ="quote text-center">“You only live once, but if you do it right, once is enough.”</p>
        <p class = "author text-center" >-- Mae West</p>`,
        `<p class = "quote text-center" >“In three words I can sum up everything I've learned about life: it goes on.”</p>
        <p class = "author text-center" >--Robert Frost</p>`,
        `<p class = "quote text-center" >“To live is the rarest thing in the world. Most people exist, that is all.”</p>
        <p class = "author text-center" >-- Oscar Wilde</p>`,
        `<p class = "quote text-center" >“Insanity is doing the same thing, over and over again, but expecting different results.”</p>
        <p class = "author text-center" >-- Narcotics Anonymous </p>`,
        `<p class = "quote text-center" >
        “It is better to be hated for what you are than to be loved for what you are not.”</p>
        <p class = "author text-center" >--  Andre Gide, Autumn Leaves</p>`,
        `<p class = "quote text-center" >“It does not do to dwell on dreams and forget to live.”</p>
        <p class = "author text-center" >--   J.K. Rowling, Harry Potter and the Sorcerer's Stone </p>`,
        `<p class = "quote text-center" >“Good friends, good books, and a sleepy conscience: this is the ideal life.”</p>
        <p class = "author text-center" >-- Mark Twain</p>`,
        `<p class = "quote text-center" >“Life is what happens to us while we are making other plans.”</p>
        <p class = "author text-center" >-- Allen Saunders</p>`,
        `<p class = "quote text-center" >“Sometimes the questions are complicated and the answers are simple.”</p>
        <p class = "author text-center" >-- Dr. Seuss</p>`,
    
    ]
    console.log(quotes);
    btn.classList.replace('opacity-0','opacity-100')
    quote.innerHTML = ' ';
});
movieQuote.addEventListener('click',function(){
    quotes = [
        `<p class = "quote text-center">“There is no friend as loyal as a book.”</p>
        <p class = "author text-center">-- Ernest Hemingway</p>`,
        `<p class ="quote text-center">“One must always be careful of books, and what is inside them, for words have the power to change us.”</p>
        <p class = "author text-center" >-- Cassandra Clare, Clockwork Angel</p>`,
        `<p class = "quote text-center" >“You should write a book," Ron told Hermione as he cut up his potatoes, "translating mad things girls do so boys can understand them.”</p>
        <p class = "author text-center" >-- J.K. Rowling, Harry Potter and the Order of the Phoenix</p>`,
        `<p class = "quote text-center" >“Books were safer than other people anyway.”</p>
        <p class = "author text-center" >-- Neil Gaiman, The Ocean at the End of the Lane </p>`,
        `<p class = "quote text-center" >“The Voice There is a voice inside of you That whispers all day long, I feel this is right for me,I know that this is wrong." No teacher, preacher, parent, friend Or wise man can decide  What's right for you--just listen to The voice that speaks inside.”</p>
        <p class = "author text-center" >-- Shel Silverstein </p>`,
        `<p class = "quote text-center" >“I do things like get in a taxi and say, "The library, and step on it.”</p>
        <p class = "author text-center" >--  David Foster Wallace, Infinite Jest</p>`,
        `<p class = "quote text-center" >“Isn't it odd how much fatter a book gets when you've read it several times?" Mo had said..."As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells...and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like a pressed flower...both strange and familiar.”</p>
        <p class = "author text-center" >--  Cornelia Funke, Inkspell </p>`,
        `<p class = "quote text-center" >“It's not gray," Clary felt compelled to point out. "It's green."
        "If there was such a thing as terminal literalism, you'd have died in childhood," said Jace.”</p>
        <p class = "author text-center" >-- ―Cassandra Clare, City of Bones </p>`,
        `<p class = "quote text-center" >“Harry - you're a great wizard, you know."
        "I'm not as good as you," said Harry, very embarrassed, as she let go of him.
        "Me!" said Hermione. "Books! And cleverness! There are more important things - friendship and bravery and - oh Harry - be careful!”</p>
        <p class = "author text-center" >-- J.K. Rowling, Harry Potter and the Sorcerer's Stone </p>`,
        `<p class = "quote text-center" >“What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic."</p>
        <p class = "author text-center" >-- Carl Sagan, Cosmos </p>`,
    
    ]
    console.log(quotes);
    btn.classList.replace('opacity-0','opacity-100')
    quote.innerHTML = ' ';
});
sportQuote.addEventListener('click',function(){
    quotes = [
        `<p class = "quote text-center">“There is no friend as loyal as a book.”</p>
        <p class = "author text-center">-- Ernest Hemingway</p>`,
        `<p class ="quote text-center">“One must always be careful of books, and what is inside them, for words have the power to change us.”</p>
        <p class = "author text-center" >-- Cassandra Clare, Clockwork Angel</p>`,
        `<p class = "quote text-center" >“You should write a book," Ron told Hermione as he cut up his potatoes, "translating mad things girls do so boys can understand them.”</p>
        <p class = "author text-center" >-- J.K. Rowling, Harry Potter and the Order of the Phoenix</p>`,
        `<p class = "quote text-center" >“Books were safer than other people anyway.”</p>
        <p class = "author text-center" >-- Neil Gaiman, The Ocean at the End of the Lane </p>`,
        `<p class = "quote text-center" >“The Voice There is a voice inside of you That whispers all day long, I feel this is right for me,I know that this is wrong." No teacher, preacher, parent, friend Or wise man can decide  What's right for you--just listen to The voice that speaks inside.”</p>
        <p class = "author text-center" >-- Shel Silverstein </p>`,
        `<p class = "quote text-center" >“I do things like get in a taxi and say, "The library, and step on it.”</p>
        <p class = "author text-center" >--  David Foster Wallace, Infinite Jest</p>`,
        `<p class = "quote text-center" >“Isn't it odd how much fatter a book gets when you've read it several times?" Mo had said..."As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells...and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like a pressed flower...both strange and familiar.”</p>
        <p class = "author text-center" >--  Cornelia Funke, Inkspell </p>`,
        `<p class = "quote text-center" >“It's not gray," Clary felt compelled to point out. "It's green."
        "If there was such a thing as terminal literalism, you'd have died in childhood," said Jace.”</p>
        <p class = "author text-center" >-- ―Cassandra Clare, City of Bones </p>`,
        `<p class = "quote text-center" >“Harry - you're a great wizard, you know."
        "I'm not as good as you," said Harry, very embarrassed, as she let go of him.
        "Me!" said Hermione. "Books! And cleverness! There are more important things - friendship and bravery and - oh Harry - be careful!”</p>
        <p class = "author text-center" >-- J.K. Rowling, Harry Potter and the Sorcerer's Stone </p>`,
        `<p class = "quote text-center" >“What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic."</p>
        <p class = "author text-center" >-- Carl Sagan, Cosmos </p>`,
    
    ]
    console.log(quotes);
    btn.classList.replace('opacity-0','opacity-100')
    quote.innerHTML = ' ';
});

btn.addEventListener('click',function(e){

    // random no from 0 to 10
    var newRandom = Math.floor(Math.random()*10);
    if (oldRandom == newRandom){
        // console.log(oldRandom);
        // console.log(newRandom);
        console.log("You already have this number!");
        oldRandom =(oldRandom + 1) % 10;
        quote.innerHTML = quotes[oldRandom];
    }
    else{
        // console.log(oldRandom);
        // console.log(newRandom);
        oldRandom = newRandom
        console.log(oldRandom);
        quote.classList.add('p-5');
        quote.innerHTML = quotes[oldRandom];
    }
    
});