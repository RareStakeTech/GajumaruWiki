---
type: transcript
title: "NPM Supply Chain Hack, Unserious Crypto, Serious Gajumaru Full"
date_downloaded: 2026-05-16
transcript_method: subtitles
---

Hello and thank you for joining us
today. We are going to talk about the
big news this week in the blockchain
world which is the largest MPM supply
chain attack in history with 18 packages
and two billion weekly downloads
affected. Uh what is an MPM? So MPM is
essentially a library of data sets that
people draw down when it's it's a
packaging system. So when people are
building wallets, they're building
certain tools, they will draw down these
libraries and use them to expedite the
programmatic process. Um the problem is
that they're not actually auditing
what's there and lots of bad actors know
that. Um there's going to be a little
bit of um potential uh paranoia here,
you might say. We would argue absolutely
not. We're giving you the thin end of
the wedge. But uh on that base, passing
over to Craig for the joys of what is
MPM and why is it to be avoided and
treated like a absolute syphilytic bomb.
>> So npm npm is the nonsensical package
manager for JavaScript and web stuff in
general. Um
the so there's a a a collection of
situations have resulted in sort of the
web the modern web as we know it. Uh
from a technical perspective being
created
um if you were going to look at like a
an engineering decision tree like how do
we get from where we are to having a
thing that we want. If you just made at
every single decision node in the
engineering tree, if you just made the
wrong decision, you would get the web at
the end. And that's npm is sort of the
child of that uh context. So um the the
primary language that's used everywhere
on the web is JavaScript that was
written in an incomplete specific
self-confed specification over a weekend
and then passed off and then implemented
when the guy came back. He's like, "Oh
crap, now we're stuck with this." um
that it hasn't really gotten that much
better.
>> Slow down. Um let's go back a second. So
node packet manager is what this is um
the correct term that is used.
>> Um
>> I would argue my term is the correct
one. Node is a JavaScript runtime.
>> So hold on. The reason I want you to to
to go back is not to debate whether mpm
means my version or your version. Um,
what I wanted to go back to was that
story of the guy who decided he would
just down his tools because
>> actually this
what Craig just said may sound
incredulous to you that surely not.
Nobody can be that dumb, but actually
that did happen. This one person decided
he didn't want to play nice anymore and
took his toys out of the game. and it
turned out that his toys were the game.
Tell that story a little bit more
because
>> I I think a lot of people would be quite
astounded at the truth of what happened
there.
>> So like every developer knows this story
and to just kind of set it up. So like
one outcome of every decision being
wrong on the way to getting where we
are. Um as Greg said, node is the uh
node node.js JS Node is a uh a
JavaScript runtime that is taken out of
the browser. So originally JavaScript
was a scripting language that was
intended to be embedded into pages so
you get more reactivity and actually
change what's supposed to be hyperl
documents into sort of an interface that
was programmatically controllable. Uh
and the problem this solved for
everybody was back in the day code
distribution was incredibly difficult.
So the way code distribution typically
happened was on floppy discs and you
made a copy and gave your friend one and
it was sneakeret, right? And everybody
ran around like sticking things into
drives and if you got the dirty drive
that had something malicious on it, man,
you were screwed because there was a lot
of auto run stuff back in the day and it
was just it was a nightmare. Um,
fast forward, uh, the web comes around
and everybody gets internet access, uh,
and now you can see web pages and
pictures and stuff and pictures of
things that some people want to see
really bad. And they would pay money for
this. And
programmers started realizing, wait, if
I can send text to somebody, then I can
send code to somebody. And this kind of
solves the code distribution problem in
a very sloppy way, but it at least
works. And this gave people tools that
they could tinker with. So this is back
in the original browser wars with uh
Internet Explorer being evil against
Netscape. It was trying to actually make
a good browser for the first time.
Netscape became Mozilla. the Mozilla
Foundation is the one the origin of
JavaScript and all this kind of
interactive stuff um with with giant
companies trying to kind of like uh
embrace extend and extinguish all along
the web. So that's that's that's how we
got the sort of story of like the jalapy
mess the the gelotinous mass that is the
web sort of came out of this big
barfsville that's why we don't have
flash anymore and so on. Anyway,
in that context, what happened was a
generational shift where everybody used
to know like Pascal and C and Assembler
and so on when I was a kid. Now,
the first programming tools that most
kids ever come into contact with is they
open developer tools in Firefox one day.
They go, "Wow, I can like type stuff and
it does things." That's a super
lightweight entry way to programming. So
the the problem with this is that they
wind up sort of like mentally crippling
themselves by their first contact of
programming winds up being uh JavaScript
and all the antiatterns around that they
just accept as normal. So
that being said, a lot of people uh a
lot of new developers uh new new
programmers have this problem of sort of
identifying themselves with a single
language or a single uh stack or tech
stack or whatever which is
>> tribalism that they see themselves.
>> It kind of yeah it becomes a tribal
>> it becomes a tribal identity and it also
becomes a problem of I think in
JavaScript and it's uncomfortable for me
to try to think in any other language
and that
The ideal is that you break out of that
as you get older and mature as a
programmer. But some people just stay
there forever. The what this has driven
though is a lot of people who only ever
knew how to program in JavaScript had
this big urge to well I want to use this
one language everywhere because I
already know it and learning a new
language is scary to me so I'm going to
stick with it. So eventually somebody
came along the node project and they
made a JavaScript runtime that is not
connected to a browser at all. It's just
it's just a JavaScript. It's like Python
or something. It's just a runtime like
airline or Python or whatever. Um so
that's where we get node from.
npm the
node package manager. Um
that is a system online that has like a
server side and on the server there are
bundles of source code, JavaScript
source code. Uh now they could be a
number of different languages, but they
all have to wind up complying with the
the JavaScript runtime definition. Um
these packages you can use as
dependencies in your own code. And if
you reference like you're you're writing
a program and you say, "Hey, uh you
know, Greg wrote a really cool um
whatever uh colorization scheme. I want
to write a little text game and Greg
wrote a cool colorization scheme and I
want to take it. I'm going to use that
because I don't want to have to remember
the color codes or any know how that
works. So, I'm just going to use his
package. So, in my dependencies, I put
Greg's package in and npm figures out
what that means. And now, what I don't
realize is that Greg has used 10 other
packages as dependencies to his package.
And what npm's job now becomes is go get
Greg's colorization package and then
open it up and peek in there and see,
oh, well, Greg has 10 other
dependencies. I need to go fetch those.
well may they have 10 other dependencies
and so on. So um this this is called
automatic dependency resolution and it
is the root of not all evil but quite a
lot of evil and
what winds up happening is you think oh
well I want to I don't want to use
JavaScript itself. We've we've advanced
past just JavaScript now to the point
that nobody really writes JavaScript
anymore. What they do is they write
against a JavaScript framework. And so
you're like, "Oh, I want to use Vue.js."
Okay, so hello world in Vue.js
depends on Vue.js. Well, it turns out
that Vue.js depends on about I don't
know, it's a it's several thousand
dependencies. So hello world and Vue.js
winds up spitting out about 70,000 lines
of code to say hello world. I'm not
kidding. by the way. Um, just to do the
build a number of critical security
warnings when you build it.
>> Yes. Yeah. So when you
>> you build it, it'll you just you see
this screen go like it's like pulling a
package building this unpacking that it
goes this whole thing. At the end it's
like 17,000 dependencies resolved,
imported, 27,000 critical security
flaws, you know, 70,000 um minor
security problems or bugs or whatever.
Uh all these little type problems like
just pile of problems and it's so many
problems. I'm not kidding about the
scale by the way. It's tens of thousands
in most framework
>> and then it declares success. There's
like a success at the end and then you
ask people what is this and they say no
it always does that you just go that's
that's it nobody nobody not an AI not
you know freaking
the the the saint of the internet does
not have time
in a real world where you just want to
show your thing to your friends or you
need to deploy a thing or you've got
investor pressure on pushing your
project out right now and you just now
for the first time realized how bad this
is, you're going to push your project
out anyway, aren't you? So what happens
is every time you get a build like that,
like in the airline world, if we get a
warning, we treat warnings as errors.
That is not how the web works at all.
Everything in the web is on fire,
constantly, just permanently on fire all
the time. And you just go, well, it's
always like that. Don't worry about it.
Ship. And so people do. Now,
I'm worried about getting
my
merman game to show up on the web
because that's what I want to deploy. I
don't care what the framework is doing.
I don't care about anything. I don't
care how the computer works. In fact, I
don't even know which code is running on
the server side and which code's running
on the client side because that's
actually pretty opaque in a lot of
frameworks today, which is insane. But
that's how things are. So with that in
mind,
if just doing hello world is, you know,
thousands of dependencies and I'm never
going to read any of them and then
writing a game is going to be tens of
thousands of dependencies. I'm also
never going to read those and I'm not
going to read their dependencies and so
on all the way down to the bottom.
What I'm left with is I actually have no
idea what's running in in my code ever.
I just like I think it works kind of and
so like well we'll just ship this. So
that's the context in which um
that's the context in which you see the
little lock icon on your screen when you
go to a website and you open your
Electron app and it's like why does this
why does a chat a text chat app take two
gigabytes just to start up? Well this is
why it's got all this junk going on that
nobody understands. Now in that context
there are a handful of packages that
like every framework and every big
package in npm depends on somewhere at
the bottom. One of these packages was
called Leftpad.
And what Leftpad did, this is the story
Greg was referencing. Um
there's a programmer who wrote a whole
bunch of different little utilities and
each utility he wrapped up as a single
package to try to keep size down. So
like maybe I want the leftpad function,
but I don't want like a library with 30
other functions in it. I just want that
one. So he was trying to be nice and
he's like, well, I'll just each function
will just be uh a package and then you
can pick and pick and choose what you
want and that'll and npm will take care
of it for you. So that'll be convenient.
So he made this thing called leftpad.
And what leftpad does I wish I would it
sounds it's it sounds like I'm making
this up but what this package does is
it's a formatting function. It's got a
function in it. It's a formatting
function. So I have like a word like I
want to say gajimaru. I'm just going to
type in gajimaru. And what I want is I
want to justify a line where the letters
that I care about actually occur.
among other text by inserting spaces on
the left side of it. So to to like push
it out or whatever. So it's sort of it's
roughly an alignment thing. So like I
want 10 spaces before gajimaru and then
like you know I want those inserted. So
there's a function to do that. So you
could calculate the number of spaces
that you need maybe given space or
you're using justified text or something
and because you're calculating that
dynamically you could just pass that as
a number with some text that you want
printed and it will be aligned where you
want. That's the whole package. That's
all it does. Now, it turns out that like
every framework in the universe depended
on Leftpad. And
because the owner of Leftpad is this one
guy, he decided uh he had some dispute
with like the npm people or I don't I
don't remember what the details are, but
he basically decided I'm taking my code
back. I I don't want it published on npm
anymore. So, boop, he pulled it out of
npm.
Like half the internet broke. the next
day. Like it's I'm This sounds so
stupid, but that's literally what
happened because nobody reads anything
and nobody knows what happens. And every
different company like as long as you're
um
as
what's a good I'm I'm trying to be
polite. Um, as long as your company is
facing the same developmental challenges
as every other company is facing, then
you don't really care that everything is
stupid all the time.
The problem happens when one of these
little stupid vulnerabilities pops out
and hits everybody at once, then
everyone freaks out about it. So anyway,
you would think that that would be a
lesson that that there'd be a lesson
here like, oh, hey, maybe we should not
be using piles of frameworks that nobody
knows how they work or stacks of code
that have thousands of dependencies that
nobody's ever going to read. Um, maybe
we shouldn't do that. Maybe we should
actually write some of our own code and
and reduce maybe we should aim to reduce
the number of dependencies that we have
and actually find out what our code is
doing every now and then. You'd think
that would be the lesson. That's not the
lesson that they took. Um, all they did
was say, "Okay, so the new rule for npm
is that nobody can delete a package once
it's published." That just became the
new publishing rules. Um, instead of
fixing the underlying
insanity, they decided to go with this.
That was the new rule. So,
fast forward a little further. Um,
there are
trying to not make this too technical.
There's a special form of brain damage
that a lot of programmers are
susceptible to and it's called
object-oriented programming. And in this
style which JavaScript has embraced and
frameworks have just taken and really
run with um every time you create a new
thing or you're going to instantiate
like a new little data object in your
program, some code might be executing an
addition that you that's opaque to you
that you don't see. Um, and you have no
idea what that code does. You just rely,
you just depend on that, oh, this
library is supposed to give me this this
object thing and I can create a
reference which makes a new one of these
and I can call it and whatever. Um, now
the problem is is that those object
models all have these thousands of
dependencies behind them somewhere and
code's being executed somewhere. So what
winds up happening is that I'm actually
only writing like create a new user like
create new user OL and then in the
background I don't actually know what's
happening. Just all this stuff's going
on. Well
>> magic.
>> Yeah. Yeah. It's magic. So we used to we
used to jokingly call this auto it it
automagically creates OL um well the
automagic has kind of become auto
nightmare and and it gets back to this
dependency issue um that it's just it's
so you could go read everything in
theory but you'd have to pause the world
for five years to catch up with
whatever's going on and it would change
the next day. So in that context, what's
happening is every different package,
remember the guy I just mentioned,
right, who said, "I'm not going to take
my package back because I'm the owner of
it." Well, every different owner of
every different package is literally the
package owner and they are in charge of
updating it, too. Now, that's normally
all fine and good because
the open source world is like a a bunch
of uh kind of white hat players and they
share code with each other to try to
advance everybody along together so that
everyone can benefit from from that body
of work. Um, however, the problem comes
in when you have a developer that's got
a package that everyone depends on, like
Leftpad, for example, and he took his
computer to the repair shop and a guy
that works there found his uh GitHub key
on it and pulled it and maybe that
GitHub key or you know, the sneaky
motherboard you can't trust from China,
for example, uh, finds your keys and
steals it.
If you can if you can crack into that
guy's GitHub account, then you could
make commits that look like they're from
him and have his authentication assigned
to it. And GitHub is doing some stuff to
automatically package updates that he's
tagged on his, you know, his whatever
his master branch is. And so that master
branch may have code in the background
on GitHub that automatically pushes the
update to uh npm without actually any
intervention from him. This is a pretty
common uh kind of publication style is
to um have whatever your git
infrastructure is or your CI
infrastructure when you do a tag commit
that's to master it may be actually
pushing updates automatically all over
to to your users. those one of those
users might be npm and npm in a lot of
these projects might be autoupdating
dependencies in the background. So the
problem with this is that remember when
I said like I say uh hey you know view
some framework uh create a new user his
name's Olen blah blah blah a lot of
stuff's going on the background that I
don't know during the initialization
phase of the user object and it's
completely opaque to me I have no idea
what's going on it's just a maze of
inheritance and and conflicts going on
it's this big giant soup of just
nightmare stew all the time and nobody's
ever going to look in there. One of
those dependencies might have been
updated in the legitimate person's name,
but the commit might be illegitimate by
somebody who stole his key. And maybe
the commit is a malicious blob of code
that's going to execute every time I
create a new guy or every time you load
a page. Or maybe it's something that's
going to stay resident in a plug-in in
your browser, check the contents of
every page incoming from the internet,
and then start changing stuff in that
page. And so you're not actually seeing
the real internet anymore. That's a
thing you could do with well that this
is an npm. This is a basic security
problem that exists with npm. It's the
source of about in the JavaScript world
about 60% attack of attacks last year
were npm. It's called the supply chain
attack problem. meaning the source code
supply chain traces back to npm and
you're getting malicious code injected
into your projects from npm without
realizing it because you've got tens of
thousands of dependencies and nobody can
audit it. Now,
this brings us forward to the crypto
problem, which is um people don't write
native applications.
>> Two billion wallets allegedly. That's
that's what is potentially affected by
this.
>> and we haven't we haven't spelled out
what happened just yet.
We So, we've just had an attack that
went out across the
what what would we call this? The
MetaMask versse. um the the Ethereum
world it's pretty broadread it's it's
very broad it's not just um Ethereum
>> summarize what happened
>> it's anything that's using JavaScript
anywhere in its system to your point
Java is a I think
>> not Java JavaScript
>> JavaScript forgive me JavaScript uh is a
to use a modern parliament hot mess um
but it's a hot mess that's very popular
with lots of people and so it's been
injected all over the place and as to
your point there are vast dependencies
that sit in almost a network like a
merkele tree of dependencies that go out
from these things that come in when you
do something which is why look I
remember when I started playing with
computers I I was very lucky my father
bought me a well bit of it was pocket
money too that I'd saved up from washing
cars I bought a um a piece an IBM M
compatible as they were known 286
>> dating ourselves hard.
>> Yeah. But
>> that was what I started doing, you know,
playing with computers on was that. And
I remember the specifications. It had a
20 megabyte hard drive. Today there's
almost nothing on my phone that's 20
megabytes.
>> Yeah. I think pictures that big. It's
crazy.
>> Yeah.
every
>> 20 megabytes, not even the memory card
in your digital camera,
>> hundreds of megabytes, hundreds. Um, and
and so
what we're really telling here is a
story of how to some extent how the
what was the Moore's law about uh how
computers will get twice as fast every
six months or something like that.
>> Specifically, transistor density would d
would uh double every so many months.
We've run that out now.
>> But this played out in terms of memory
and and all these things and
>> it took away the discipline of writing
really good code that was specific to
the purpose because to the point that's
hard. That's like sitting down saying
I'm going to write a book. Um okay you
now need to think through the entire
story that you want to convey how you
want to convey it. what happens to whom
when you have to do the whole thing. I
mean writing a a a a program isn't so
different in some ways from writing a
book. There are hundreds of different
edge cases you need to think about the
story lines etc. And there's something
that you guys were fond of quoting when
we first talked uh Tony Hall there are
two methods in software design. One is
to make the program so simple there are
obviously no errors which is what you
guys are fond of. The other is to make
it so complicated there are no obvious
errors and that is the state of
JavaScript. So it's not just
>> the state of most things now. It's
terrible.
>> It's not just MetaMask. MetaMask is sort
of the daddy of this space and to some
extent they are the Google of um you
know just as Google is to search so
MetaMask is to Ethereum based wallets.
Um,
but
this issue, I pointed this out on on
LinkedIn and and Twitter yesterday. This
issue has been begging to happen for a
very long time. It's also not isolated.
The thing about it that's interesting is
how little was stolen because somebody
twigged it at a point
for now. We don't really
>> by accident.
>> We don't really by accident. We don't
really know just how
far this will go. And the point I was
making and and this is where we get into
people saying, "Oh, you're being a
conspiracy theorist."
>> Begging to happen again, too.
>> No, no, we're not. Um the idea that this
I mean when I say Merkel tree you you
it is almost inconceivable to the human
mind how many branches and subbranches
and twigs and leaves and you what if you
want to think of it like a tree it's the
most densely packed tree you can ever
imagine in your whole life. It's like a
fungal colony graph, right?
>> It's just for one program
>> that compress into
what you do when you talk about was it
17,000 uh dependencies resolved? Oh,
sorry, 26,000 dependencies resolved.
17,000 critical security uh warnings in
order to write hello world.
>> Uh which
>> when we I I I'm in the middle of
YouTube. So when we were kids was
actually you you went into a little
terminal and you began to to write and
and you had to follow certain syntax and
rules. Um but you were the one writing
everything.
anyway, the point is we've gotten to a
stage now where programs are massively
complex to do relatively simple things
and nobody is actually verifying what
all of those dependencies are, what all
those code libraries are. So what's
happening is these things are being
imported on mass. And to the point I was
making to people, this is just the one
who got caught. There are likely in the
popoly of trees that are being pulled
into this
uh system.
I I would bet you
I bet you my mortgage that every one of
the major state in intelligence agencies
has got malicious code in there. It may
not be malicious to take anything from
you other than be able to intercept
data, be able to set information, but um
it this whole thing is absolutely
seething with it. And it's not hard to
do because somebody who writes really
good code most of the time might just
inject something that nobody else looks
at because their reputation score is so
high, i.e. they work for GCHQ. So
they're a really really good programmer
and they're developing code that is
everybody thinks is great but there's
one line in there that says please
identify me to Chelenham.
then that's that's an accelerating
problem on so many levels that when
Peter Harpen and I had originally
taken taken up sort of the well first we
tried to write a marketplace and see how
that works and then we're like well this
okay so how do we talk to wallets and
then we reverse engineered how wallets
like MetaMask and so on work and we're
just the the programming environment is
so insane inside the browser um that we
wrote our own
wallet from scratch that could run as a
browser plugin. We wrote our own
communication library to talk with it.
And Peter's code was like it. So we used
Z we didn't trust any dependencies. So
we wrote everything from scratch to to
accomplish this so that we understood
what was happening because we figured
everything is so crazy that we can't
trust there's nothing we can trust.
There's zero things that we can trust.
So, we're just going to write everything
from scratch. We wrote all of our own
crypto. We wrote all of our own
serialization routines. We wrote all of
our communication routines. We wrote all
the inpage code to communicate with the
wallet. We wrote the, you know, it's a
hand packaged project. Um, every we did
everything from scratch. And at the end
of that, what we learned from the
experience was that even with all this,
we can't trust the browser actually. So
we we came to the conclusion there is
absolutely no safe way to do a browser
wallet.
>> Explain why. Explain why because that's
also an interesting story. And look, one
of the things that I I want people to
understand is not only did we build uh
our wallet from scratch so that there
are no dependencies. It is the only
unhacked or as I would rephrase it to
people I say it's the only nonp
prehacked wallet that you can get. Um
there's something phenomenal in there
that changes the game from a security
perspective completely which is grids
which allows you to use essentially an
air gaps optical process to log into a
website uh which removes the whole thing
of login and passwords and the reasons
why the guys went to the great trouble
of doing all of this was because of the
issues that they found around web
browser dependencies. So back to that
one.
>> Yeah. So the I guess to compress the
story, there's a couple of different
problems with the way that different
elements in the browser communicate. Um
it's very weird to me that like given
how um
concurrent multiple tab a multiple tab
execution environment can be that they
never figured out a a good model for
concurrency. Um, and it's just it's
weird being an airline programmer and
then seeing like all these crazy ideas
they've come up with to try to get
around the concurrency problem. Um,
we decided to
go with a model where we could try to
make the communication the asynchronous
communication problem more tractable by
kind of modeling the way that Heirling
does things uh with messages and
processes and and so on. and we start
realizing, wait, there's sort of
universal like, you know, there's kind
of a universal shout bus inside of um
the browser and the addressing concepts
is are really crazy and the kind of
discovery you can do is kind of weird
and um and I'm not even addressing like
the the wacky zero day problem and that
that exists across browsers uh because
there's state actors that that dump
stuff into browsers to compromise those
all the time. Um, the bottom line is is
that without doing anything sneaky at
all, I can make a plugin that will just
like alter pages for you. And so, for
example, you're on a shopping website
and you're going to pay the vendor in
like ETH or something, right? You want
to you want to pay with MetaMask. Um, I
can have like a fun little uh plugin
from some unrelated thing that's just in
it just happens to be in your browser.
It may be checking all the contents of
every page that gets shown to you and
then changing them in some way. So, you
might think you're paying uh an address
that you see on the page and you see it
right there and you're you're going to
pay to that and you check in MetaMask,
it says what it should say there and
you're like, "Yeah, I'm going to send
this off." That page may have been
altered before it got to you. And it
doesn't matter if there's a little lock
icon on it. Another plugin may have been
altering it. Um, and the author of that
plugin might not know that that plugin's
doing it because it may be one of the
well, it almost always is one of these
framework monsters that's got some
malicious injection that the author
doesn't know about. So, a completely
honest actor that you totally trust for
good reasons because he's actually a
good guy. Published a plugin that you
like. It's convenient for you. Maybe
it's one of these plugins, for example,
that shows you how many background
connections are being or going around
the network. Every time you open a page,
it shows a graph of like everybody who's
spying on you on the web at the moment.
Those are cool plugins, right? That
plugin could be compromised by a supply
chain attack. You don't know about it.
The author doesn't know about it. And
actually, what the target is is not even
MetaMask. It's the page that would have
an ether an ether account in it. And
that account has been changed to the
malicious to the attacker's account. So,
you're paying the attacker, not the
person you're trying to pay. That kind
of stuff. Like, there's no way to get
away from this stuff. Um, if
>> that was in fact the this recent hack
where the
>> the code injected itself and it would
rewrite the receiver account when you
were trying to pay with MetaMask, for
example, it would replace the receiver
account
with an account number that looked
similar,
>> right? Yeah. Yeah. It had to use a bunch
of prefixes trying to find one that
looks close.
So deliberately trying to make it
difficult to even if you looked at the
account number,
it would be difficult to see that it had
actually been altered. Now,
interestingly, when we said that it was
discovered by accident, it was a it was
a brilliant brilliant mal malware, but
it was a little bit stupid about
assuming that the fetch function
actually existed in the runtime system.
And these guys were building their
software with an older runtime version
that didn't have the fetch function
built in. So then it crashed and they
started looking into it and they said
that for one thing they found code the
malicious code that was unreadable. But
this is also a common thing in
JavaScript because you tend to
>> in order to increase or
>> to uh make get faster page load load
times, you minify the JavaScript so that
it it's unreadable, but it still works
the same way. But so people are used to
seeing essentially encrypted code being
loaded into projects. That's not not
something weird. You're not supposed to
read it. It's just supposed to execute.
But that also means you can't inspect
it. So this is also one particular or
curiosity about the the particular
programming environment that makes it
even easier to hack because for example
in our when we're in in the Erlang
programming world, no way in hell would
we accept some encrypted Erlang program
that is not readable.
>> It just doesn't happen. that well that
as far as like so this spooked us and
this is like Peter and I you know a year
or two ago um getting spooked and I
remember like coming back and and
talking with you and Dimitar and being
like you know this kind of sucks but we
just like there's no good way to do this
in the browser like the browser is such
a horrible environment to be doing any
of this. Um, and and I told him like the
the only way I can conceive of making
anything kind of reasonable is making as
stripped down a website as possible to
be the marketplace than not using any
framework stuff and telling users, hey,
you should not be browsing this site
from anything that's got plugins
installed. If you've got, you know, you
got your cool customized browser set up
for doing other things, do this in a
private tab that can't run Like that's
why private tabs can't have um plugins
enabled. You have to like specify that
you want a plugin to run in private mode
because they know about this problem.
Everyone knows that's the crazy thing is
all this is known. This was begging to
happen because everybody already knows
all these problems and just go with it.
>> Hold on. And this we'll lead into some
other points around this and uh the
vulnerability of Ethereum generally. But
the point I was picking at yesterday
when I I said, you know, this has been
coming for a very long time and has been
happening nonstop anyway
>> was if crypto had any value for real. I
mean, we're not talking about, you know,
cryp an actual cryptocurrency like
Bitcoin or Guaju,
>> although cryp Bitcoin arguably doesn't
work as a currency because of its
inability to be used in real world
application. But
>> we're not talking about something real.
We're talking about all of these meme
coins, all of these so-called NFTts, um
the the gorilla things, and god knows
what else. the stuff that basically
makes up the crypto market. If it had
real value, like actual money or actual
assets,
nobody would be doing this. There is no
way in God's green earth that you would
be able to pass one of those systems
through the eye of a financial
institutions's checks and and and
reviews for IT infrastructure.
It's it's insane that anybody is really
claiming that crypto has a value whilst
using systems and key infrastructure
that they know are completely, utterly,
and totally compromised.
>> That's if you look at get my head around
that. How can you say on the one hand
this meme coin is worth $200 per coin
and there's a billion coins and then at
the same time be handling that on such
completely utterly and totally
inherently compromised infrastructure.
>> Well, it it that's one of the one of the
cases where like the crypto world being
so fake that everything is not actually
happening on chain. that's happening
inside of exchanges and other places
that's actually kind of saved people
because they don't usually have anything
in their real wallet. It's all on
Coinbase. Um, and if you look at the way
that um, so out out here where where I
live, uh, any of the banks that you want
to do commercial banking with online,
what happens, the requirement for this
is you have to install a browser that
they roll out for you. So you've got you
might have, you know, Chrome installed
and Firefox installed. You're going to
have their browser installed and it's
their re it's like their relicensing of
a browser that already exists and
they've the reason they do this is to
completely isolate it from everything
else. It's there is no way to do plugins
and there's a secure there's always a a
physical um key card that you have to
use to get the thing to work to sign
into the bank. Now, for consumer
banking,
it's too much of a pain to like crack
everybody who's only got 10 bucks in
their bank account and and actually get
anything out of that, right? If you're
an attacker, but commercial banking, if
you're doing any kind of commercial
bank, if you're a business, um your
business bank accounts here, you you
can't just get to them from your your
casual browser. They will give you a
specific uh program to log into that
with. Um, and you see that a lot with
like uh mobile mobile financial
management stuff for like stock trading
where they give you their app. They
don't let you do it through a browser.
And the reason is because they know how
messed up this is. Um, the fact that the
so the crypto world, their approach to
security, just like the software
security part, you'll see all this stuff
everywhere like we've audited this
chain, we've audited this code, we've
audited this wallet or whatever. are our
wallets audited and there's a little
badge and all that stuff is people see
the badge they're like you know think
it's good. Um none of that stuff's from
what I've seen so far I have yet to see
a wallet that's actually
other than ours that's purpose written
from scratch native to the platform and
has access because it's native has
access to all the security features of
that platform such as hardware key
access and so on. What I see typically
is people write a uh a web browser
plugin because that's the expectation.
People expect to have a web browser
plugin like MetaMask as their wallet on
their desktop and then they take that
same web framework trash and they wrap
that up in a um what's called a
crossplatform build. And so the mobile
wallet looks just like the wallet that
you see in your browser. And the reason
that that it's that way is they've
actually taken literally the same
JavaScript nightmare and they just put
it in your phone and they say, "Tada,
finished. Networks on iPhone and
Android." The problem with that is that
that's actually running in like it's
expecting a web environment. It doesn't
know about things like the Android
hardware key store. So your pneummonic
phrase that it can show to you is stored
in there hopefully encrypted in some way
but it's not using like the biometric
security features of the phone to
you know to to
secure access to hardware keys that are
generated in that phone and can never be
extracted from it to encrypt and protect
your private data like that pneummonic
phrase that you know gives rise to your
your uh Ethereum keys and so We do our
key generation a little bit differently
than than Ethereum, but the basic
principle still applies. And that's why
I have to write like we've done our
desktop wallet, that's all from scratch.
There's no dependencies. And the package
manager actually that we use for that, I
wrote that too with zero dependencies.
It it actually bootstraps and runs
itself. Um, we know every single detail
of how everything works and all of our
dependencies are written by us. That's a
pain. That's a lot of freaking work to
do.
>> Um,
>> or by Ericson.
>> Yeah. Right. So, Airlang Heirlang is the
runtime that we have that that's the
external if if we're going to point to a
dependency, we have one root dependency
and that's the runtime itself. Um
that and that's it. Well, your operating
system. I mean, we Okay, I'm not going
to talk about trusting Windows and
Microsoft and Apple, but um the bottom
the bottom line is you have to have a
thing that runs at all somewhere and you
have to draw a line. And the the point I
was making a couple years ago when I was
like, "This sucks, but we're going to
have to do everything from scratch or I
can't trust I can't because I'm the one
that was trying to stand up from the
marketplace in the first place. That's
that's how I even got into crypto was I
like, hey, no one's done Amazon in
crypto world, so I should do that." Uh,
and it turned out that crypto sucks and
that's why no one had done it yet. But
that was a discovery process. And this
was one more element of crypto sucking
uh that I that that I was oblivious to
until I really dug in and then I
realized, hey, we have to do our own
wallets from scratch. Um but part of
that
>> answer the question, why not just use
MetaMask?
>> Because MetaMask is a wallet that is
actually designed to be handle to handle
different kinds of crypto.
>> So
>> that's right. Let's set the scene for
this a little bit. We I've said before
that it is extraordinarily hard to make
an argument for why somebody should
invest another million into something
that you spent millions developing which
you're going to give to the world
completely, utterly, and totally for
free. This is um a little bit like
offering garlic, a cross, and a uh
cross-shaped dagger um to a vampire.
That's, you know, that's that's the
realms of of absolutely not. That's
insane. Um
our argument essentially is we don't own
or control the chain but we do know how
to uh deploy expertise on that chain in
a commercial way like for example Gaju
market gadu pay uh all the platforms and
applications that we want to offer to
the world now that we have an actual
blockchain that actually works minting
real money that really works. So context
is budget is really thin. We need to get
to market as quickly as we can in lots
of different ways and be able to
alleviate some of that pressure. And
yet, we chose to take very lengthy
detours into doing some of these core
things really, really well. That's how
important this is, people. And every
time I mention something and I'm like,
"Oh man, we're going to have to do this
from like square one or we can't trust
it."
Everybody's very stoic about it, but I
can feel the every now and then.
>> Um, we're we're at the point now where
we're like about to f I mean, we're
pushing product already, so thank
goodness. Um, but that's but it's that
it's so important though that nobody
questions the the judgment
determination. We're making a value
judgment on that and nobody questions
why. It's just we're like, "Oh man,
that's it's like when you have a tree
stump in your yard and you realize like
actually you're just gonna have to get a
pickaxe out and like dig through all the
roots and you're like,
>> "Yeah,
>> okay."
>> And yet it's a lot of work.
>> We still we still do automatic upgrades
on our client software.
>> So it's not like we solve the code
distribution functionality. We just do
it in a controlled way. So look, I want
to ram this home for people because on a
very very limited budget with a small
high trust team and I'm the non-coder on
the team. The other guys, there's small
number of people doing all the code, all
the thinking through how that's going to
be deployed and done. Um, we chose to do
these things from scratch because they
are that important. I can't emphasize
this enough. If if we as we were when we
started this
came to the conclusion that there was no
way to leverage the existing platforms
and infrastructure in the crypto world
and we would have to build everything
from scratch. That was a a an absolutely
colossal
financial problem to solve. How do we
get from here to there with nobody
really willing to fund an actual
blockchain that actually works? Minting
real money that really works because
that means you don't own it or control
it. And we'll have another conversation
about Dexes next week. But one of the
things I want to pull out of that is
that all of the decentralization that
you see in Dexes is actually theatrical.
It's it's just there for show. It's not
real. Why isn't it real? because they're
conflating the governance and the mint
function. And that this is where the
whole tokconomics thing come from, which
is a complete farce and abrogation and
in fact an insult to the use the the
>> the use of syllables.
>> Well, it's a horrible word.
>> It's awful. Uh I was going to say an
insult to its um its origin, which is
economics, but yes, it's actually an
insult to the the language it's it's
constructed in.
>> It's an insult to like Greek and Latin
at once. It's amazing how bad.
>> But people need people really need to
get this because why would we take such
massive risks with the runway that we
had and force ourselves to find more
funding to extend that runway
with a gun to our head the whole time?
>> Answer. It's that important because if
as we intended at the outset, you're
creating an actual blockchain that
actually works, minting real money that
really works, and I keep saying it
because I want people to get that into
their heads. Each one of those
qualifying statements is true of the
Gajimaru.
>> That means you're making real money.
That means we have to stop playing with
absolutely insanely untrustworthy,
broken hacked to infinity. Uh to
paraphrase um Pixar, to infinity and
beyond
system.
>> Oh no, copyright strike. We we we we
had to do this because
and you the audience, people out there,
anybody who's thinking about any of
these things, this is what you need to
start demanding because if you're going
to talk about crypto having value, you
cannot say that and at the same time be
completely okay with this lunatic asylum
of insecurities.
Our approach is gaz are real money.
Therefore, we built really high
enterprisegrade
proper coding from scratch to give you
the necessary tooling, infrastructure
and platforms to be able to use this
securely.
>> We we've we've just
>> I think we can also say that obviously
you shouldn't just trust us when we say
that our code is secure and theirs
isn't. But
>> one of the one of the ways we are
uh trying hard to develop our software
is to make it actually auditable. And I
think we can say
>> give a few sort of quick pointers here
for for non-technical people. I mean one
thing we're saying if someone is
offering to keep your money in a browser
plugin
just say no way in hell.
It cannot be made safe.
>> That's like the we at the school do. If
they offer you sweets, just say no.
Right?
>> It's the same thing. And another thing
we're saying is that if they are
actually using npm
and JavaScript for their software,
arguably it cannot be make sa made safe
it or it's going to be such a gargantuan
task that
the best assumption is it's not going to
be made safe. Actually, MetaMask spent a
lot of effort trying to make their
wallet safe despite this. And I guess we
have proof that they failed. And this is
also something that Craig was talking
about about a year ago or
over a year ago.
>> Looking into MetaMask,
>> the lava. We thought that we thought it
was a practical joke actually like just
to set this up. Like the the reason that
we didn't go with anything that existed
already was because by the end of our
again when I say exploration we wrote a
whole wallet marketplace project the
communication libraries the interlink
everything from all the serialization
libraries everything from scratch
to make sure that we knew what what was
going on and it was auditable and just
to give you a comparison remember Hello
world in Vue.js is like 75,000 lines.
The entirety I just did a word count on
God. Gajudes is 5,278 lines right now.
That's a totally readable project. Like
you can actually go in and read that.
And I've tried to make it as readable as
possible. So my point is
>> and Gaju Desk actually also is a
development environment allows you to
load contract code and edit it. And
>> yeah, that's a that's that's been a
really fun thing to work on whenever
I've been able to focus on it because
it's got some really like there's killer
feature. Anyway, I don't want to get
into that, but yeah, that's that's going
to that's a fun
>> a fun thing for developers, but um the
uh
>> one of you has got lava moat uh screen
gra.
>> I've got it open. So when when Peter and
I were uh
plumbing the depths of MetaMask,
um we were we were kind of keying into
this like, hey, it looks like npm is a
massive security vulnerability. I wonder
if that's an issue. And we look into it
and
turns out it's a huge problem. It's just
not that publicized until something like
what happened the other day, like with
this this particular uh crack happens.
um until something bad happens, you
never you never hear about it. But um
but anyway, we identified that as a as a
critical security vulnerability and
we're like, how does MetaMask deal with
this? What do they like? They have to be
doing something because it's like
there's no way that these guys wrote a
browser plugin that's a wallet and they
didn't think about like malicious code
coming from npm. And it turns out that
they did think about it. Um, and
let me uh let me share here real quick.
I am not the uh blah blah. Hang on.
>> Yeah, writing a crypto wallet is easy.
Screen sharing different
>> screen share.
>> No. Well, I'm trying to not do I I don't
want to do the in infinite tunnel thing.
And if I share my whole screen, which is
normally what I do when we're talking
together, I'm on a huge one right now
and everything will be so tiny nobody
can read anything. So I'm trying to make
>> It's okay to fail, Craig.
>> That Yeah, no kidding. Um, that didn't
do what I wanted because it had an old
view of my
uh Oh,
it got it it said that it couldn't share
because of it was trying to protect me
from myself. Thank you. Um,
okay. So, here we go. Is this showing?
>> Yes.
>> Okay.
Yay.
So uh
so we were asking ourselves what is it
that MetaMask did to try to protect
themselves from this particular problem?
And it turns out they did think about
this and they spent a tremendous amount
of effort and there was this whole thing
called Lavaote. And what lava mode is is
a
a JavaScript
code permissioning
environment written in JavaScript. So
it's sort of a JavaScript like loading
runtime inside of JavaScript. um which
is quite complicated and there's a lot
of different modes to this and the way
that it works is a little complicated
and there's lots of different pieces to
to Lava mode and we thought this idea
was so silly that we actually thought
this was an elaborate joke at first.
Um, and it took us a couple days to
realize like, no, they're totally
serious. Like they're they they looked
at the situation, they go, "Wow, there's
too much code coming in. It's too
complicated." Our immediate reaction to
that is, "Well, how do we reduce that
down to no dependencies?" Their reaction
was, "Oh, that's complicated, and that's
why it's scary." Well, let's make it 10
times more complicated. That'll totally
solve the problem. So,
I I I really thought this was a joke,
actually. Not kidding. So, um their
whole
it
I'm just I don't know. Sometimes I kind
of hate everything. Um this is the state
of the world that we're in though. Uh
so they're trying to secure JavaScript
in JavaScript. All you know something
I'm curious about is
this is
lava mode has dependencies itself.
That's interesting.
>> yeah. So, clearly they were not able to
protect against
>> the recent attack.
>> Long story short, I it's fun to kind of
geek out on the details of this. I am
curious about this. Okay. Thank
goodness. Um, I am I'm curious about the
the the
dig into the details of of Lava Mo, but
um the fact that
Lavaote
Lava Mo was their reaction instead of
saying, "Let's find a better way. Let's
find a way to not have like we know
people are going to shop go shopping
through browsers. they're going to go
through uh websites and they're going to
uh you know they want to go to Amazon,
they might want to pay pay at Amazon
with uh Ethereum or something. Um if
they were going to do that because that
was the idea with cryptocurrency. That's
the currency part of cryptocurrency
supposed to be. Um you know they're
going to do that through a browser. So
the first thing you do is okay how do I
sep how do I make the key management how
do I make the the the wallet system
separate be at least in a separate
process than the browser? That's the
first thing you do. Um, not not these
guys. They're like, "We're committed to
only ever making a browser plugin as the
wallet and it's a hellscape and it's
impossible to secure. So, what do we
do?" Uh, we make we make the situation
even more complicated. Um,
and this is what they came up with is
lava mode. And I Anyway, long story
short, it doesn't it didn't save them
from this. And there's a bunch of other
texts it won't save them from. And when
it comes to uh you know, browser plugins
are always going to be able to mess with
in some way kind of mess with uh
shopping sites. And then lots and lots
of there's been a lot of uh e-commerce
sites that actually have been um
attacked with supply chain um supplying
chain attacks through npm and it
requires a a fair amount of work to make
sure that you're secure against those.
Uh as a user though all of that entire
drama is kind of hidden from you and it
having anyway so long story short you
cannot have a browser wallet. It's bad.
>> Yeah in a sense it's a it's an example
of a candlestick problem. If you're
familiar with the candlestick problem,
it was um there was this great TED talk
by Dan Pink many years ago when he um uh
humoristically talked about the
candlestick problem and how it it's a
way to illustrate
um your ability to solve out ofthe-box
problems.
And um so the the challenge is to you
have a candle and you get some tacks uh
in a box and you're supposed to get the
candle to stick to the wall and you
can't use the tacks and just push them
through the candle. Doesn't work. You
can try to melt uh the candle and and
glue it to the wall. Doesn't work. The
thing that does work is to realize that
the box that the tax came in can be used
as a shelf. So you can tack that to the
wall and then you can put the candle in
the in the box. Problem solved.
>> The interesting thing there was that
it was demonstrated has been very
clearly demonstrated that if you put
time and reward pressure on people.
Essentially, the higher the rewards, the
more tunnel vision they get and the less
likely they are to realize that they can
actually use the box too and not just
the taxs that the box uh that are in the
box. And
so
when you time people, you give them
performance rewards, they get really
worse at this type of problem. So
>> if someone pays you a lot of money to
solve the security problem in in your
MPM environment,
it is logical from this point of view to
try to build a moat in npm in JavaScript
to try to fix it where you stand.
And the outofthe-box
problem is to try to step take a step
back and think
can we provide easy authentication
um some other way
that that people are actually going to
like and uh that is going to be
efficient and obviously secure.
And um
so we talked about how there are a few
countries where such authentication
solutions have actually become
ubiquitous. So I happen to live in
Sweden and in Sweden and so I think it
Sweden the Scandinavian countries
essentially have something like this. I
think Norway has its own the the Swedish
version bank ID can be used
if it's in Sweden and Finland or Sweden
and Norway whatever. Um and um it was
actually one thing that we looked at
when we uh developed the grids uh
solution. I I could actually show
let me
So now I'm Oh, this is actually the the
fraud report page that shows how that
tracks fraud on DeFi. Um,
and it's kind of interesting like uh
just showing that it's still going on
and it's hundreds of millions and
sometimes even billions of dollars worth
of crypto being lost through scams and
uh hacks and not always recovered. And
of course, one problem is if you go to
the police, they will just stare at you
blankly and uh they will not necessarily
help.
So,
>> well, good news worthless soon.
>> I found a little instruction video on
how people typically log into a website
uh that supports bank ID. Um,
and uh so essentially they it shows a QR
code. You bring up your phone the bank
ID app. You click the scan QR code and
then you type in a PIN or you press your
thumb to the fingerprint scanner and
you're in.
And the interesting thing is that
everybody under 70 knows how to do this
in Sweden and does it daily all the
time. So
it's become a ubiquitous pattern and
it's extremely fast. This is typically
how you log into your bank. It's how you
you can pay from your phone. Uh there
are a lot of especially government
websites that allow you to log in with
bank ID. One thing I found when it's
it's a
it's a trustbased system. So essentially
your bank
uh who knows who you are can issue a
traditional certificate that is then um
installed on your phone in the bank ID
app. And I found when we were helping
some Ukrainian refugees that if you're
here as a refugee, you cannot get a bank
ID. you actually have to get a residency
permit before you can get a bank ID
because you have to have a real personal
ID. Um, so I mean one of the things we
are offering with grids is essentially
the same use pattern, same ease of use,
but it's decentralized.
It's trustless
>> and it lets you log in. You can
>> Yeah, you you can those QR codes can
initiate spends. They can uh we can do
contract calls that way. We any any kind
of signature uh thing that needs to
happen, we can do through grids, which
works just like you just like that video
works. And thankfully, the Gajimon is
really fast. So shopping with it is like
it's a snap. It's it's actually really
cool. Um, but getting to the point it
would have been so much easier to just
cheat and use a bunch of JS framework
trash that already exists and then just
like ignore the security problem. But
and I mean there's clearly a big
temptation there. But that temptation
doesn't really touch us because we don't
we view that as such a huge fail that if
I put a marketplace up and people try to
use it and then their wallet gets
cracked because it's a brows it's just
browser trash. It's all npm garbage and
it's completely vulnerable to this that
that would wind up damaging the whole
project and it's just immoral. Like I
can't tell users, it would be it would
be literally immoral for us to tell
users, hey, trust us with your money.
Use the apps that we're giving you.
Trust that those aren't going to screw
you over while we know full well that
there's just a whole universe of
compromises waiting to happen to people
that are not like hypothetical. There's
I mean that that uh the Lava Mo page
that I was looking at the at the bottom
just a second ago. There's articles from
2018 in there that explain in detail
exactly how to do these attacks. So it's
not like it's a not a known issue. We
cannot proceed knowing how compromised
everything is and and just go along just
go with the flow. So it it was a it was
a moral imperative to you know actually
actually do it from scratch. So so that
I can tell you I know exact when you
push this button I know what message
goes where in the program. I know what
code is called because I wrote the whole
thing. I know like I know all of it. It
calls some libraries that like Hans and
Olf wrote. I know but I know where
everything is. I know where the package
manager I know what the package manager
is calling in detail because I wrote
every single line of the package manager
that we used. So like that's a really
important thing to be able to say if
there is a compromise. It's not
something that we knew about and covered
up. It's something that we have to seize
on and fix right away. And we actually
can fix it because it's a tractable
problem because we wrote all the code in
the first place. So identifying what
went wrong is like that easy because
it's all we all know it. It's all in our
heads already and it's open for review
too. Like our code is it's not 70,000
lines of stuff. It's a couple thousand
which is like a modest size. It's not
even a big project. Um so it's it's a
tractable problem to go through and read
it and see how things work. Thank
goodness.
>> Yeah. Back to the day.
>> Well, the blockchain itself is slightly
more but
>> well the blockchain itself is pretty
that's a bear. That's that's a
complicated guy.
>> But the blockchain itself is a is a
whole different animal. We're talking
about a tool for using
>> the wallet. Yeah.
>> And a fundamental tool. Um so, uh to
summarize that part, I would just say
this. If you are if you really believe
that the assets in your crypto wallet
are money, then you better get over to
the gajimaru as soon as humanly possible
and start using our wallet. Um because
the gaju is money. We built this to be
an enterprisegrade solution set with no
dependencies, everything coded,
everything done from scratch so that we
know that it works and we know it
doesn't have these these issues. Um in
terms of institutional adoption of uh
blockchain and the utilization of
digital assets, unless you are insane or
you have managed to convince the board
of your bank that uh you are not insane
whilst being clearly insane and unaware
or willfully ignorant of all of these
enormous security vulnerabilities,
um then you too should cancel anything
you're doing on Ethereum, Salana, any of
these and come and join us on the
Now, there's another reason why you
should join us on the Gajimaru and
actually it goes back to something that
Yanni Marus identified back in the days
when Ethereum was first coming about
which was that it was gloriously
insecure in of itself because Solidity
is a terrible smart contract language
and Ethereum virtual machines are not
secure. He therefore raised a great deal
of money to build an alternative. And
the aspect that we borrowed from the
eternity project under the MIT licensing
that he built the whole thing on was
Sophia, a smart contract language. And
>> IC license,
>> ISC license, forgive me.
>> Very similar to MIT. Um
and uh what what that
>> they take deception to the he built
having been one of the original.
Uh so he raised the money to get global
experts to build uh what was a um a
truly secure
virtual machine for operating onchain
with a proper smart contract language.
When I say to people that Ethereum is
dangerous to use and that the uh the
Ethereum virtual machine is insecure and
the smart contract language is very
immature and easy to game, they usually
think I'm talking out of my hat, but Ol,
you made the point in our morning
standup that Ethereum continues to be
hacked on a daily basis. It's just such
a regular occurrence that it doesn't.
So, ul, over to you.
>> Oh,
well, so yeah, I I did show that um
that DeFi scam
uh tracker,
which
you know, essentially you scroll down.
It's
>> so big, man. I forgot.
>> Yeah, it's like
the the numbers are just staggering. And
u an interesting thing about being
ripped off on blockchains
is if you go to the police, which would
make sense, right? Because if you these
are dollar numbers there, the the theft
wasn't actually in dollars. It was in
ETH or whatever. But they are not
legally recognized as currency. So, uh,
the
the cops may
look at you funny if you want to report
a theft of some crypto
because they will rightfully wonder
>> what the jurisdiction is and also what
the crime is because essentially you did
you agreed to play around in an
unregulated ated space with a bunch of
complex logic that you freely decided to
make use of. And uh then it turns out
that the smart contract that may have
been through like three security audits
um this is not unusual still had
exploits in it and uh those were
exploited
and um it's a little bit like uh when
uh Javier Mele was uh confronted because
the MLE mean coin um turned out to be a
rugpool and he wasn't directly involved.
He had put up one ex post saying that
that this project might be interesting
and then he pulled it down after an hour
or so when he realized that it wasn't
really serious or it was a serious
rugpool.
And um when asked for a comment, he
basically say, "Okay, so you go to the
casino, you lose money. Um how strange
is that?"
Uh and uh that is
something of the uh what you get if you
try to call the police on some hack or
blockchain attack or exploit that was
uh that was used against you probably in
a different country from what you're in
on a blockchain that's outside of
regulation.
um it's it's just uninforcable
and um this is one of another thing that
we've been talking about that if you
want security
and you want it to be commercial grade
it also the regulations you have to
adapt to regulation in a way that's
enforcable. If it's not enforceable
it's you're not going to pass audits.
The best you can hope for is to
basically get the authorities to say
what you're doing is outside of
But if they're saying that, you're going
to have a hard time asking retail
business to come and play on your
blockchain.
>> It it's also worth real money and um
>> well, it's worth remembering that inter
the phrase or the term international law
is an oxymoron.
And people forget that all the time.
They've appealed to international law.
There's no world police. I some people
wish there was one. Uh that's
that gets into a deep conversation real
fast. But
>> yes, Mussolini, Stalin, Hitler. Uh I
could go on.
>> Occasionally you will hear from the US,
why don't we just accept that we are the
world police and everybody outside the
US goes no
>> right.
>> Yeah. you know,
>> or yay, depending on which camp you're
in.
>> The point both guys are making is is
worth accentuating, which is that
if it were the case that you were acting
in a truly decentralized context, which
arguably is not the case in the existing
so-called blockchain firmament, because
what passes for blockchain at the moment
tends to be Bitcoin aside, which is an
actual blockchain. um what tends to pass
with being a blockchain is not in fact
uh what we would phrase to be a
blockchain because the test for a
blockchain is can I trust the message
not the messenger securely at scale yes
or no if yes it's a blockchain if no
it's not anything that is anonymous
proof of stake is to some extent
gameable and controllable by colluding
actors in the background so you can't
actually trust the message in the same
way that you would on the gashimaru or
indeed on Bitcoin. Um, in a truly
decentralized context, you are acting in
almost like you're acting in space. You
are not acting within any controlled
human environment. That's the whole
point. So that's why you can trust the
message, not the messenger scale. So
again, this comes back to if you're
going to build something real that the
what we talk about in terms of grids,
all these things, they're all taking us
toward what we call an internet of
economics. So instead of going to the
the web as you do today, and going onto
a website and saying, "Yeah, I'd like to
buy that jacket." And you do the
transaction, you set up an account, you
give them your Visa card details. In the
context of the world that we want to
establish, you will browse for what you
want on the internet. It will be the
internet of data and that's all it will
ever be. But you will actually transact
in an internet of economics. To make
that happen, we had to do things in a
completely different way from everyone
else and make it secure, make it so that
these things worked.
>> One of the things wanted to have happen
is to make it so that you can read smart
contracts. You don't just have to accept
that they say that it does X. You can
actually read them and check for
yourself. These are all things that
we've built into the process with the
Gajimaru to make sure that it can
fulfill the brief which is to establish
the internet of economics to create a
global economic resource layer which we
really have not had since the days that
we were hunter gatherers and we
negotiated the spaces between us through
violence.
what what the guys are talking about
with Ethereum isn't limited to Ethereum.
Ethereum is maybe the biggest and
baddest of these. If you look at the
projects around Salana, if you start
diving into some of their uh developer
chats, you will find libraries upon
libraries of dependencies all over
again. This time instead of it being in
JavaScript, they're coming out of Rust.
And there's a whole
>> which is JavaScript adjacent by the way,
>> right? But there's a whole slew of
things that that are being hidden from
you but which you should be aware of
because it's a bit like when someone
said the other day uh they came on to
the Gajing Mining uh Telegram group and
they said um is it okay for my if is it
okay for my computer to turn off every
now and then? And I said yeah sure but
bear in mind if you had a hose pipe that
shot out $100 bills in your garden would
you turn it off? No. Well, then why
would you turn off your computer? Um
because that's the that's the step
change in in thinking that that needs to
be gotten to which is when we start
talking about real money that is really
in your wallet and it it really is your
wallet. All of these things it's it's in
your accounts in your wallet. All of
these things are
step changes from where we've been and
they take us into an evolutionary step
away from where we have been in the past
which has been about digitization making
the inefficient marginally incrementally
more efficient into a step of
digitalization which is to remove those
inefficiencies altogether. So in this
context we talked about you buying a
jacket online. You will actually
transact
with grids with the counterparty for
that sale and everything will be
negotiated through the internet of
economics not the internet of data. You
won't be making your sensitive hackable
financial information and address
available in this context.
with that I think probably close out the
session. The the key thing we want
people to take away from this is start
asking questions. If you think that uh
you have that that that crypto has
value, ask why you're using wallets that
are insecure. Um why aren't you why
don't you care about these things?
Because you should you should demand
better from the people that are
providing the tools for you to operate
with. I I'd like to
>> I think yeah
>> I've been asked multiple times once by
you and I walked you through kind of why
we had to do this from scratch and
you're like okay well that sucks but
have at it. Um that sucks because it's
going to take time and that's the money
pinch that that you mentioned earlier.
Um, but we've been asked as a team a
couple times uh by other parties um for
an opinion on this or that library to
base a wallet on or they want to do a
wallet project or what wallet should
they target for adoption or and so on.
And so far, everything I've reviewed has
this exact problem to it. And
every single time that I mention that to
people and I come back with this answer
that well it sucks but I mean that looks
like a cool a cool library from the
perspective of somebody that would just
use it and make a thing and you know
just have it run but in the secure
context of making a a wallet that other
use not you but other people are going
to use and you're promising them that
this is a secure thing. My
recommendation is to not go with that
and write your own thing in house
because that library's got you know and
I was explain all the pro all the
problems that lead up to the attack that
we just saw. I explained in detail to a
couple folks that asked our opinion on
this exact issue uh about a year ago and
their reaction is not just that they're
non plused or that they're astonished at
how bad things are.
their reaction is it's the same thing as
when I was doing security assessments
and strategic assessments uh you know 10
years ago um you tell people something
that they don't want to hear especially
that they don't expect to hear they
expect just to get a a green light and a
thumbs up and you give them an indepth
explanation of why what they're doing is
dumb and dangerous and
they just kind of blow it off and go on
with it anyway. I don't understand that
attitude. I it it doesn't make any sense
to me. I don't know what pressures
they're feeling pinched by. We've got
exactly the money pressure that that
should motivate us to to cheat and we
just can't do it because it's you just
you just can't. This is not it's not
going to hurt me if this goes wrong.
It's going to hurt like all kinds of
people and then screw this whole
industry up more than it already is.
That's like no, I'm not going to do
that. I don't understand how these
people can just like flippantly blow
these deep security issues off and just
move on. I don't get it. I don't know
what's wrong with these people. Like
that's kind of been I don't know. Ul and
I've talked about this a lot in the past
already. It's kind of like I don't know
what's wrong with these people. Um and
that's all over crypto in general. Uh
but but that absolute flagrant disregard
for user security
just blows my mind. I don't get it. And
and I think that one piece of advice
perhaps to non-technical people when
they're trying to look at different
offerings in this space is to look at
how they communicate. I mean, one of the
things is that maybe we get lost in the
weeds in some of the technical details
sometimes, but I think we are pretty
consistent in always wanting to convince
you how not just that our
systems are safe, our solutions are
solid and that at the end of the day you
will be able to trust it with your
money, with your business. We are also
ready to explain how and we will keep
working at explaining how until we
are able to
um convince people that it is not just
safe, it is provably safe or it is
obviously safe. And uh like Greg said uh
Tony Horse,
there are two ways of conducting a
software design.
one is to make it so simple that there
are obviously no deficiencies. He also
said that that that method is the harder
one because then you really have to get
down to the core substance of it all and
ex and understand how things fit
together.
>> that is hard but it's so much more
rewarding too though even just as a
programmer being able to actually know
what happens through every phase of the
>> Well if people are communicating or
companies are commuting in a
communicating in a trust me bro uh way
is like you're too stupid to understand
so just leave it uh leave it to us.
wouldn't you wouldn't give someone like
that the keys to your house.
>> And um
>> you know that's that's actually a really
important point. If if you look a lot of
look at a lot of the projects out there,
the people who are involved in doing it
are anonymous. You don't it's very hard
to ascertain who they are. That just
dawned on me the other day when we were
talking about that and getting into like
the hyperlquid stuff and going like
actually nobody show like we do these
videos showing our face and I'm like
we're actually like really weird.
>> Every time you talk your name pops up
the company that you work for pops up.
>> Uh your face is there. you know, if
someone the the point is we are not in
any way, shape or form hiding from
anybody what we're doing and why we're
doing it. And
when you look at so many of the projects
out there, they don't identify who they
are. And I I' I've never come across a
world in which we can just trust this.
And you know with this hack there were
all these posts going out on LinkedIn
from people who are service providers in
this industry, financial service
providers in this industry, uh exchanges
etc. Uh talking about how touched they
were at how the community backed them up
and how the community said it was all
okay and it was all let's all be
friends. Isn't it wonderful? We're on
this frontier together and we're getting
uh attacked and we're gonna come
together as a community. I'm sorry that
this Yeah, this is this is the insanity
that I'm watching on social media. So,
you guys don't get tainted with this
because you don't have any connections
in the crypto world. I have a lot of
connections in the crypto world. They
hate my guts, but um
but I get to see the insanity that they
say. And this morning there was a guy
who is the founder of a major name in
this industry showing himself. I think
he might have hit himself in the nuts
right before he did the picture so that
he could look teary eyed. And it was
>> I wasn't crying about all the problems
that have come out of this hack. I was
crying about how wonderful my community
was to come in together and support us
through this terrible time. I'm sorry.
No, you if you're going to put yourself
into a position of a profession, you
have an a professional's obligation to
discharge your duties to the betterment
of your client. And fundamentally, that
means you don't give them tools that are
so obviously, completely, and utterly
hacked from top to bottom. You give them
tools that they should expect from an
institution who are supposed to be in a
position of trust. Can we please stop
this nonsense where people pretend that
the community is so wonderful? We're all
on this frontier together. If this is
money, which they're all saying,
Ethereum, ETH, go to the moon, Bitcoin,
go to the moon, all to the moon in fiat,
of course. It's all none of it's
self-referential.
Right. But
>> they keep they keep saying these things
and at the same time you've got this
utterly ridiculous idea that the
community will come together so that one
person can profiteeer from everybody
else who accept a lesser standard of
professional service platform everything
than you would expect in any other walk
of life. there. That is so pathological
like devouring mother complex to be
burning your customers. So you burn your
customers, right? And then you show up
so you don't get blamed for it. You want
to be endearing. You want to be endeared
to them. So you show up acting all
emotional and teareyed and oh I'm so
glad the community came together. So
that's the same pattern that you get
from a chronic abuser who like throws
acid on
>> she she throws acid on her rival where
she can't see and then shows up and
says, "Oh, I need to help you." Oh my
>> Yeah. Look, here's the thing. Um
I saw multiple posts like this. This
this isn't one. This is multiple posts
where people
>> That is psychopathic.
>> Founders of m Well, What is it when
you've profitered by selling somebody a
number go up tokconomics, you personally
drive around in
supercars, live in castles, uh throw big
parties, you know, they do quite
literally. I mean, I we're not just
talking about the one that we all know.
There's a bunch of them I know who
literally live in small castles around
Switzerland and they have taken money
from people who thought that there was
something real happening here and
they've taken that out extracted it into
a stable coin stable coin to bank
transfer. Tada. I've now taken the
ultimate rug ball of saying hey those
dollars they're terrible. allow me to
give you my shiny amazing tokconomics
number will go up token. I'll take your
dirty disgusting dollars off you and
give you this token and then turn that
into real assets. So, it's a bit like
the conversation I had with someone from
an emerging economy the other day who
wanted to solve a problem about how they
they reduce the amount of corruption
that stops them from being able to
export import and run a business
properly in this country. And when I
explained the answer, they said, "But
that means that the local currency will
go to zero." I said, "Dead right." And
it should and it must because actually
all it's doing, as you've proving, is
taxing everybody. It's destroying
everybody's ability to get ahead. We
need to move away from the era of saying
that we can trust anybody with the mint.
The mint is, and I I know Tolken fans
will tell me that I'm wrong, but I keep
thinking that when Tolken was writing
about the one ring to rule them all, he
was talking about the mint. Uh the mint
capacity in society, if you control the
mint, you basically control everything
else. You can devalue everybody else and
no matter how good you are to begin
with, it will corrupt you. It's not.
It's a context shift, but that's a
really good metaphor, actually.
>> Now, I will have to confess, I think
that technically I believe I live in a
castle. Um, we rent a wing at what's
it's essentially a mansion, but I think
in technical terms it is registered as a
or it is a castle for
>> it's like a strong
>> I mean it's I don't exactly um know the
details in that but
>> it's so just just saying um but um
>> gosh darn castle dwellers
>> and also I I wouldn't mind um upgrading
to a real castle of my own eventually as
long as I we've actually delivered
substance to justify the U and um
>> I think that's that's the point Ol is
that you know when Craig is saying that
that's psychopathic I'm saying the whole
journey is psychopathic
>> they have they've taken people's hope
they've taken people's um
>> good intentions most of the people who
came into crypto didn't come into crypto
to to rip somebody else off. They came
in because they could see the problems
that particularly post global financial
crisis. Um that's when I think a lot of
the the believers got involved in
Bitcoin and then you saw um Bitcoin
Cash, Litecoin, um Doge, Ethereum, and
the you know the original starting
points were actually pretty benevolent.
I I think what happened since the
turning um as I say crypto is not
cryptocurrency and it is not blockchain.
It is the bastard cancerous sypholytic
love child of both um whose object is to
defraud people of money. Um
and the whole industry is really
psychopathic. There's all this kumbaya
let's be friends let's do this.
Meanwhile, certain actors are profiting
wildly off everybody else whilst
delivering what in any other walk of
life would be a substandard
unprofessional service.
>> Why? Because if the basics of delivery
are this bad,
>> I mean, this would be like um
BMW selling you a car that just randomly
would accelerate you into a wall.
That's who who would buy a BMW again?
and then and then endear yourself to
your fans by doing this performant
emotion emotional stuff. It's like SBF
level psychopathy. That's
>> well that's what he did. But this
industry seems to have attracted an
awful lot of these kind of sociopaths.
And I think they see crypto as a tool to
essentially tax everybody else's
kindness, everybody else's goodwill. And
ultimately I I believe a lot of what
we've seen in this world has come from
people understanding that the existing
system has absolutely screwed them.
Their lives have been devalued by money
printing. Their economic activity is
taxed by rent-seeking intermediaries who
control a fractured universe of
disconnected infrastructure.
And the I think people fundamentally get
that and they thought they they thought
that some of the stuff that the crypto
bros come out with with democratize this
and democratize that and all of it. It's
all absolute nonsense. And I think maybe
we can um it might be good to frame the
reason why we're so incredulous
about
regarding this mentality. I mean, you
guys are both from a special forces
background essentially and uh I've spent
practically all of my professional life
working on mission critical systems and
I've always felt that it gets real when
you're in an environment or you're
solving problems where if your stuff
doesn't work, people can die.
And of course, if you're trying to build
an economic system
uh that people are expected to trust
their livelihood on, then it gets real
enough. But essentially that if the
whole thing about the community feeling
sorry for you as a as a developer or
whatever,
if if your stuff doesn't work and people
lose uh lose their pensions or whatever,
I
>> if I make mistakes like that and it's my
software that gets hacked and I don't
expect people to come and pat me on the
back and say, "Oh, poor you who caused
this. I'm
>> if they get really pissed and they want
to lynch me, I have
>> I would prefer if they don't, but I I
will understand the sentiment.
>> I think that another big aspect of why
we care about this is all of us come
from working families. By which I mean
none of us are the sons of Landed Gentry
who went to Eden um and uh have trust
funds that would set us up for life.
We've all come from families who went to
work um mothers and fathers and uh we
are all part of a families our own
families. None of our children are
entitled to have this idea that the the
world is just going to magic money into
their account.
We're very grounded people and I think
to a large extent when we're trying to
look at these problems, we're not
talking about those people over there.
We're talking about our people.
>> Mhm.
>> When when when we think about getting
companies to use this, when we think
about um getting shops to to use this,
people using it in their community that
we actually start to have gaz as a real
currency. Uh I I certainly not thinking
about Amazon. I'm thinking about the
little farm town that my mother came
from where I partly grew up with my
grandparents there. Um I'm thinking
about the the good hardworking people
who didn't have a lot but were always
kind. You know, I I told my children
about um the high trust environment that
I I used we used to have that I used to
that I grew up in, which is that when
you called to someone else's house, you
didn't knock on the front door. You
walked around the back door, you opened
the kitchen, you put the kettle on, and
you asked who else wanted tea. Um,
that's the world I want to restore. And
that's a huge my motivation around this.
And and to be clear, I'm really not
thinking about the the the people who
already have everything. I'm thinking
about the people who come from where I
come from who don't have much at all and
to give them something that's real and
that is meaningful and that can actually
deliver their economic emancipation. and
and that economic emancipation sits at
the very bedrock of your entire
sovereignty because until you own your
money, everything else is secondary.
Doesn't matter how many guns you have,
what freedom of speech you have, if you
don't own your money, and you don't
try and transfer some money from your
account to somebody else's that you
haven't transacted with before and find
out how quickly your bank tell you
you're not to do that.
>> That's a that's a shock. It's not your
money. It's money that you have the
permission of the bank and the financial
system that you live within to use. That
is not the same thing. And and as I say,
we're not the heretics. We're not trying
to pull down the the money lenders
tables in the temple. Uh well, maybe a
little bit, but we're not saying that
there is.
>> A few of those be kicked, but yeah.
>> Yeah. We're not saying that there's no
future to banking. Quite the opposite.
We're of the opinion that we talked
about trust markets and in that
discussion we said that actually local
banks are fundamental to creating global
trust markets. Um,
>> what we do want to see is we want to see
blockchain do what it was supposed to do
in the first place, which is give us all
an open, free resource that we can
operate within in which we can establish
our our lives. That what we do, the work
we do isn't taxed by third party
intermediaries for no better reason that
the system says so. that actually where
you
the objection I have with many of these
people who are putting up these posts on
LinkedIn yesterday was well you're meant
to be protecting them from this you're
meant to be adding value if you add
value that's guess what that's valuable
people will pay you for that one of the
future aspects we see in banking is a
lot of people won't actually want to
have total responsibility for everything
they have so banks will become what they
used to be custodians
Um there's a lot of things like that
at the heart of it, everybody in this
team
is really thinking about the people that
we are from, the people around us, the
they're the ones that we want to see
given a chance and we want to see a
fresh start for. And when we build
things for the people we love, the
communities that we come from, we do
that with pride. That's why we put our
faces in front of it. That's why we put
our names in front of it. You know, I
get very angry when people, not very
angry, I get angry a lot, but um
something that irritates me is when
people talk about being a professional
and I say, "Okay, so when you sign
something, are you are you liable for
what you've done?" And if the answer is
no, then you're not a professional.
We are in this company professionals.
Our names are on everything. our faces
are on these videos. We take great pride
in doing what we do and doing it well.
Um our
>> our first just to that point like our
first
use case adopter that wants to test out
God at the local like my it's in my
village. There's a shop 300 meters from
here where a little lady and her brother
still run a corner shop that's been the
family for eons.
How dare I give them some garbage that
can get cracked easy that we just has
known security? No. No. Also, I would
get like literally lynched because I'm
the one dude that looks like this living
in my town. It's pretty easy target. Um,
you know, it's
I these people that are doing the
supercars and live in their castle, they
don't know their users.
It's just cra. Anyway, this is this
It's crazy the direction things have
gone and I really hope we can get back
to just doing normal business. We just
got to fix money.
>> Yeah,
>> like the basic stuff, man. Let's buy
some lettuce.
>> With that, thank you for joining us. I
hope this conversation has been
illuminating for you. uh at the very
very least I hope it gives you the tools
to question more of the environment that
you work within and understand that when
we move to an internet of economics
we're not doing it lightly. We're not
pushing an agenda that is just to throw
some garbage together and stick it in
front of you. Um, this entire thing has
been done with that integrity, with that
belief in mind that this is about
creating a new global economy, an open
global economy for the whole world to
use with a singular mint that you do not
have to trust, that cannot deflate your
your work. Um,
and as I say, delivering that intern of
economics with that. Thank you. Good
day.
