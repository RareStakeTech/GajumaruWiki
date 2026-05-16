---
type: transcript
title: "Quantum, AI, and the Machine Economy： Why the Internet Isn't Safe for Economic Value"
date_downloaded: 2026-05-16
transcript_method: subtitles
---

Good morning, good afternoon, wherever
you are in the world. Uh, three things
we want to talk about today. Quantum,
the news from Anthropic about the
arrival of the machine economy. Uh, I I
think it's the LLM industry growing up
and realizing that they have to work on
a commercial base. They cannot continue
to be subsidized by vast amounts of VC
funding. Um, and the third one was
coming back to anthropic again, mythos.
So the illusion that the internet of
data is a secure place for anybody to do
anything with sensitive data never mind
economic value should now be fully
exploded and exposed um or exposed and
exploded whichever way around you want
to go but let's start with quantum a lot
of fuss about quantum over the last
couple of weeks with the news from
Google our resident quantum expert who
wrote the paper that we published well
you know relative term Um but yeah, you
are the expert within the team or one of
them and um
you wrote the the paper that we put up
on the qpq.swiss
website and gajimaru.io IO site about
what we've done to with quantum, what
the issues really are, how we've
approached it and actually I I thought
it was one of the most uh mature grownup
writings on this because so much of what
we've seen around it has been
sensationalist
and I think is not about quantum at all.
It's about driving an agenda. However,
we'll come to that. Wolf,
do you want to give the audience a precy
of what it was that you had to say in
that article and what we've done to
address the quantum issue?
>> Yeah. So, so in that article we uh
quoted ourselves from a while back when
we were saying that um we believe that
quantum computers capable of cracking uh
elliptic cur cryptography the ones the
one used in most blockchains
is
at least decades away if it will ever
materialize. Um having said that
uh we talked about how our architecture
is actually well prepared for
implementing alternative uh signing
methods. So we have already demonstrated
um that we will support quantum
resistant uh accounts by mainet launch.
I am I have been working on uh
supporting them more natively uh so that
we get even more efficiency doing it.
But um so now a couple of uh some news
dropped where there have been some
theoretical optimizations in uh how you
could solve
uh or implement shores algorithm which
is the trick to uh cracking crypto keys
or finding really large prime numbers
and in with much fewer cubits than was
previously thought. So that
brought the solution an order of
magnitude or so closer. And uh another
evolution is that using
uh so-called neutral atoms
um
the chances of being able to actually
run
uh tens of thousands of cubits uh in a
realistic uh machine. have increased.
So I think in the very most optimistic
um predictions
more or less um in the mid 2030s you
might see
quantum computers that could possibly
attack u say a single
blockchain key pair.
in
running in a few days like oh maybe 10
days running at full bore. Now that
wouldn't be
sensible to do unless that account has
at least
like $100,000 worth of crypto in it or
more. Um
probably a lot more. and uh also
wouldn't really be sensible un unless
there weren't any other attractive
business cases for that kind of quantum
computer. But it turns out there are
there are interesting computing business
cases like protein folding
uh simulations and uh and all kinds of
stuff that would be really really
interesting to run on those machines.
So,
we think that our analysis holds up
really well. Um, you would keep
most of your funds, if you even have
funds uh of that size. You would you
could have one uh or a couple of safe
accounts that are protected by quantum
resistant uh signatures
and then you can keep using elliptic
curve crypto
for the lower value accounts. And this
has been best practice apart from the
quantum side. Uh anyway, like if you
have lots of crypto, you spread it out
over several accounts. You have some
accounts with keys that never touch the
internet that you don't have in your
mobile wallet um just to minimize the
risk that you will lose those keys and
and therefore your money. And then you
have some accounts that have a limited
amount of
um money in them that you can that you
use for your daily daily work. And if
you have integrated that
that way of structuring your uh your
assets, then you can keep doing that.
You're going to be fine. And um you can
definitely do it on Gajamaro because
we have the support for that. So
no worries on our end and uh I guess it
will be good for humanity if they manage
to build those um machines.
Maybe ideally machines that aren't
really economical for cracking crypto
but really good for a lot of other
things. Now, and it turns out that most
of the researchers who are
working really hard on this, they they
aim at Shor's algorithm
mostly because that's like a poster
example, not because they are just
longing to break security everywhere,
but it's it's an easy target or it's a
hard target, but well defined to aim
for. Um, and it's sexy and it can get
them funding.
So, um,
we're still fine. We're not panicking on
our end. Um,
>> I mean, the
>> I guess that's my message.
>> There are multiple layers of uh defense
to quantum within our planning within
the work that you've done within the
implementations. I mean the point was
when we posted this a couple of weeks
months back forgive me uh that we're
quantum secure at this point in time
because I had come back from Davos and
said to you guys look the things that
are on everybody's lips are AI quantum
and most of it is woefully ill
illinformed um it's all panic but and
you have to look at those panic levers
and ask why are people having panicked
conversations.
Why aren't they having rational
conversations like we have about this
saying, well, you know, there is this
issue here and there is that one over
there and this is what looks like it's
going to play out toward. Um,
as it stands, the Gajimaru is quantum
secure. The choices that people will
make as to how secure their operations
on it are theirs. We don't control it.
We don't govern it. We don't dictate
those terms. However, the more complex
you make the security levers in that,
the more expensive it will be to run a
transaction to send a message because
you've elected to put uh frictions in
place that are your choice, therefore
you pay for them. I appreciate in the
era of everything being bundled from our
music to our software choices that the
idea that you pay for utility where you
find it is somewhat foreign to many
people. But ultimately I I I know web 3
is a dirty word in our team, but
what web 2 was always about was that
aggregation. It was about the internal
data. It was about where you found the
information. Um and ultimately it was
all free because you were the the value.
Your data was the value. Um the idea of
the internet of of uh sorry the web 3
idea was essentially that you would find
utility and pay for it as you used it.
Um ultimately if you strip away all of
the nonsense that appeared in every ICO
and white paper and tokconomics that's
what it basically bore down to if they
were trying to offer anything of any
actual utility and not just a number go
up scheme.
This is the utility we offer. This is
how people will pay for it. and and that
really has still not been answered at
all, which we'll come to in a second
with the anthropic email from last
Friday. Good Friday, a great Friday for
us as it happens. In fact, I feel a bit
like Donald Trump saying that it was
good, then it was great. But anyway, um
the the whole thing around those choices
are the things that we're building out
at the moment. We're Greg, you and Ol
were talking about this this morning.
Oh well
yeah the um the problem that that people
have faced with uh well just streaming
media for example um from a
we had previously had the uh the problem
where the recording industry broadly
speaking uh had mistaken
um medium for message and the message
being the thing that you want you want
to watch this movie but the big the
movie is a big number essentially
Uh, and they would mistake the medium,
the DVD that you get it on as the as the
movie experience. And so you'd pay for
the DVD, but then you can watch the
movie as many times as you want. They
got rid of that and they went to this
subscription streaming model. And then
everybody wanted their own streaming
platform. So now there's dozens of
streaming platforms. Depending on what
you want, things disappear. They come
up, they go down, you've paid for it,
but you can't get it anymore. Um, this
has kind of become a disaster for
people. So, we went from the DVD control
regime being so oppressive that people
were pirating movies back to early
streaming was so convenient that people
stopped piracy. Now, they're going back
to piracy because the the streaming
platforms are bundling everything. It's
a mess. Le let's come back to that in a
second because what you're touching on
there is the unbundling piece and and I
know I kind of set that up but actually
I want to stick to the quantum piece
because the conversation you and had
this morning
>> was around um
>> choices yeah creating layers around the
quantum solution set and what I was
saying is look
>> people are going to have to start taking
responsibility for the choices they make
>> the that's right
>> informed choice
that works for your specific
requirements is what we're going to try
and make sure there is a variety of from
PE for people to pick from. I just would
like you uh to to go through some of the
things that you were talking about this
morning that we are going to implement.
>> Sure. Oh yeah, sure. Um so uh currently
we have you know the the main uh account
form is the um elliptic curve keys that
we've all seen. It's the AK blah blah
blah ids. Um we also have uh generalized
accounts the gas which we can already
put a uh um quantum secure um
authorization scheme behind if we want.
Um, I think I don't know the the current
like jazz over quantum computing gives
us an excuse to kind of play in an area
that um is actually really interesting
and kind of nerdy fun and that is to
have um tiered account categories. So
the current AK accounts remain as they
are. We can add um A1 accounts, A2
accounts, A3 accounts and these become
sort of difficulty layers. uh an A1
account um being this is the current
conception right now. I have to finish
writing this up and run it through
review with um Dimitar and and Ul and
we'll see how that changes when
subjected to uh to to scrutiny. But the
basic idea is having um like an A1
account would be an elliptic curve key,
but the reference for it is a that the
ID for is not the public key. It's a
hash of the public key kind of like on
Bitcoin. So you can't figure out what
the public key is. So you can't attack
it to start with. So if you send money
to that account, there's no public key
record yet until some activity occurs on
that account. So there's nothing to
attack yet. Um so that's one layer of
additional security added to the
existing scheme. Um
the the place where you you encounter
some friction with that is um elliptic
curve key cryptography has some
amazingly good properties for things
like messaging and and creating uh
secure message channels and um
encrypting a message to somebody who you
haven't even talked to yet. You know
their public key so you can do the
encrypt message to that specific person.
Um there's a lot of really nice
properties to ECC. So, if you can't see
the public key, you don't have access to
some of those more advanced features,
which is inconvenient, but it's fine.
Um, for this case of protecting an
account a little bit more securely, um,
the next level, an A2 account, uh, would
be, um, a DSA key, an MLDDSA key, which
is a cryptographically strong uh,
signature mechanism. But that mechanism
requires keys that are very large
compared to ECC keys. Uh you're talking
thousands of bits instead of you know
hundreds. And the signatures are
>> also huge.
4 kilobytes for uh the medium strength
MLDDSA.
>> Well, the private key, let's see, the
signature size is about 3K
or MLDDSA
uh 65 and the public keys because you
have to store them too on the chain,
they're about 2K. So nice.
>> It's I mean there are reasons why
you wouldn't want to just go to town and
use these uh accounts for everything
today.
>> Mhm.
>> Because it will bloat things and it will
be slower. And um so and the thing about
using temporary accounts, I guess that
is the way to stay safe on Bitcoin right
now.
>> Mhm. where you don't reveal the public
key until you actually want to sign
something.
>> So essentially the the account is
anonymous until
you push a
transaction to the memp pool where you
actually want to sign things and then
you have a window where everything is
out in the open. Not your private key
but essentially it's crackable
>> if you have the hardware. Well, this is
this is the the thing that um and
forgive me cutting in on on you as well,
uh Craig. We'll come back to it. This is
the thing that has me sort of laughing a
little bit, but in a dark way at what's
going on around this because the
assumption that um they're going to
build a quantum computer and the first
thing it's going to do is wake up in the
morning going, "Today, gentlemen, I'm
going to hack everybody's Bitcoin
account." Yeah.
>> And it's just insane. Like as you point
out unless an account does something
onchain it has no existence as it
there's nothing to point at it doesn't
exist yet as far as the chain is
concerned. That's one.
>> But the more fundamental part is you
have to aim a quantum computer at a
specific thing. And even if you were to
take the assumption that it will become
exceedingly cheap to run a a quantum
computer 50, 60, 100 years from now, um
it's still not going to be the case that
it just gets up and automatically says,
"Oh, I'm going to go and hack everything
I can touch." No, that's not how they
work. And I think a lot of the panic,
and I've touched on this before, is
agenda driven. It's not about is Bitcoin
insecure. Yeah, it is. It's always been
insecure. This the quantum aspect
doesn't necessarily change this. I mean,
ultimately the most insecure thing in
the security chain is the human being.
um you know where do you leave your
we've already had some of the people who
are minors some of the earliest miners
who have lost their um their nemonic and
with it has gone a big chunk of gajus um
ulti you know whatever you want to to to
do with any system the human being
element cannot be taken away as ceasing
to be the risk vector. uh what I think
I'm seeing in in terms of certainly on
on X and a little bit on LinkedIn and
and I've even taken to asking which one
of the wannabe saviors is funding you to
certain shrills because you've got a few
of them out there. You know, Sailor's
talking about how he's going to save
Bitcoin from quantum and he has so many
devs working on a quantum security
algorithm. Um, you've got Adam Beck who
has a long track record of wanting to be
the savior. Uh, no doubt we'll see Craig
Wright rear his wonderfully um, uh,
latigious head around some of this stuff
as well.
Um, all these things are coming and
these people are all putting their hand
up saying, "Oh, I'll save Bitcoin." And
it's not I think it's only going to be a
matter of time before Larry Frink adds
to his previous comment about well
Bitcoin can be forked with we're going
to fork it and we'll have all the money
in the world to do it with. Uh the thing
that's I think really happening is
they're creating this panic to drive
people into a savior state that
introduces governance. And the moment
you have that governance,
>> it's gone. Bitcoin is finished. The
moment you have governance, it's
finished. except for
to the number go up community who make
up most of the Bitcoin community. For
those people, it's just another means of
keeping the number go up fantasy
running. Um, these are the same people
who think that it's not an open Ponzi
scheme, who really hate it when I say
things like, "Have you thought about
what happens when the subsidy of the
market price is absent and you now must
rely upon transaction fees in order to
incentivize miners? Oh, that's 140 years
away." Yeah, but have you ever heard of
a time value of money calculation?
Because if the future value is this and
the present value is this, that
disconnect becomes a risk.
Uh
>> well, it isn't. It isn't though. I mean,
we're already at the point where
um the cost of mining Bitcoin
well roughly equal to the price of
Bitcoin as it happens.
>> That's that's not true. That's not true.
Um the the research
>> I think it may be lower now.
>> 87,000 is the average price. before the
war in Iran broke out, Iran had
extremely cheap hash rate. So, uh I
think that's probably gone up quite
substantially over the course of the
war, especially with rising fuel prices.
But as of the end of February, when I
could get the data to run the analysis,
>> the average cost of mining Bitcoin in
the previous three months had averaged
at $87,000.
The average price of Bitcoin in the same
period was $70,000. And this is why you
have companies like Mars writing down I
can't remember how many billions it was
of Bitcoin mining operations.
>> And the next having isn't 40 years away.
It's coming pretty soon. I don't I
haven't inked it into my calendar
because I don't um
I don't really
>> look it's it's uh it's very entertaining
watching the h havinging cycle because
the h havinging cycle essentially is get
to the h havinging keep everybody saying
oh it's not going to happen this time
the price isn't going to go up enough
it's the whole thing is going to
collapse and and so anybody who gets
fearful of where bitcoin is going to go
and starts applying some logic and
reason and allows that logic and reason
to overwhelm the illogical FOMO. Um,
starts to sell
and then the narrative switches because
the whales have refilled their boots and
now they need the price to go back up
again and create all that FOMO that lets
them do the exit. Just after the
havinging, maybe about a year after
that, you'll see the price collapse
again. This is a repeat process that
they've been doing since the the
beginning. But look, putting aside the
whole thing of how Bitcoin pricing is
manipulated, mining operations are no
longer sustainable, the fundamental
thing that people have been pushing at
in the last week has been Google can
hack Google's uh sorry, Google's quantum
computer can hack a transaction in 9
minutes and Bitcoin takes 10.
So uh yeah, but these are the things
that are going on and this is the
narrative that's being pushed. There's a
lot of panic coming from all the the
shrills around this. I think that panic
is manufactured. I think like everything
else in the Bitcoin system, like for
example, what I've just talked about how
they talk down Bitcoin for a sustained
period to shake everybody out, refill
their boots, and then talk it back up
again right in time for the next h
havinging. Um, all of these things
I think are being paid for. I think
they're being paid for by very wealthy
people who have put their hands up
saying, "I can save Bitcoin. I can save
Bitcoin from this terrible quantum
threat. Just give me the keys to the
kingdom." And one of the things that
we've always talked about is that there
can be no key. That, you know, this is
the message of Tolken and the Lord of
the Rings. It's not that well you know a
hobbit is such a good naturatured person
that they can hold the ring. No, nobody
can hold the ring. Nobody can be
entrusted with that much power. But
that's what they all want and that's
what the system is built around. This
the whole corporative system is about
creating control and then extracting
rent from that control. It is not about
adding value and the differential
between the value add and the price
being your profit margin. We should we
should call this cabal of people the Naz
Ghoul because they're these clingy race
that want to
>> run everything but their own influences
corrupted themselves first and foremost.
>> That's pretty much what they are. In
fact, that is what they will be from
this day forth. The Nazoul
there's like nine of them and they're
all creeps.
>> Yeah.
>> Still though,
>> more than one direct connection with
Jeffrey Epstein, too, by the way.
Oh, that's great.
>> So, we can call him Sauron.
>> Anyway, sorry.
>> So, there is good news for people who
have
>> uh people who have a lot of Bitcoin
could actually
move to a wrapped Bitcoin on a different
chain. And um for Bitcoin in particular,
it wouldn't be that terrible because
practically all of the traffic
uh around Bitcoin
is offchain already.
>> Yeah, Bitcoin doesn't run Bitcoin
anymore. So, we could make we should
make an associate chain GBTC that's a
native have a native Bitcoin as a alt
currency.
>> Not we should we will
>> because we can do that.
>> Yeah. No, we we look I've been talking
to Bitcoin Wales who are I think more
more grounded more practical about this.
Um and the conversation arc was
essentially so how do you they were
saying oh Bitcoin is money and I said
okay well look I I respect that because
that's actually where it began. It began
as a peer-to-peer electronic cash
system. So when I hear someone say that
and not the store of value narrative,
which is not supported by the Satoshi
white paper in any way, shape, or form,
and I appreciate that they think that
I'm a Nazi for referring to the white
paper that they hold as being a sacred
document, unless it disagrees with them,
but
excuse me.
The conversation I've had with those
people is, uh, okay, so how do how do
you buy a coffee with it? How do you buy
a pair of shoes with it? How do I buy a
a plane ticket with it? Uh, I'm standing
in the terminal airport. I need to get
from Chicago to St. Louis. Um, it's an
emergency. I can't wait an hour to get
on the flight. I can't I I can barely
wait the 10 minutes. How do I transact?
Oh, lightning. Well, I'm sorry. No,
lightning doesn't work.
>> 23% of the time. And I'm I remember
Peter Harpending did a really good
article. It's on gazumaru.io
and I think qpq.swiss Swiss about
exactly this that lightning doesn't just
fail at $100. It gets more and more
failures the further up the the the
value chain you go. So when you get to
an airline ticket last minute
>> it's not going through.
>> It's not going through. Full stop.
>> There's no way.
>> And all the demos with lightning are
done for microp payments for a good
reason. Um
>> the reality is it's a massively
intermediated system. the jinny index is
0.97. I say all these things. I say
look, you know, one is absolute
monopoly. It's that's that's how bad
lightning is. And then I said, look,
there is an alternative. Um I don't if I
were you, I wouldn't like it, but if I
were you, I wouldn't be holding on to
Bitcoin
either. So my opinion is moot and
irrelevant to this conversation.
If I wanted to hold Bitcoin, I would
hold it as a gaju wrapped Bitcoin,
which does mean that you have an
intermediated provider who wraps the
Bitcoin. But the flip side is if that
intermediate provider is actually a
regulated entity, you haven't you
haven't lost anything
because lightning was already custo
is it the wallet of Satoshi and it's a
custodial wallet. Almost the entirety of
Lightning is custodial. The whole
mechanism of it is custodial. So the
difference is that you've moved from
custodial with no oversight to custodial
with regulatory oversight.
um it's somewhat less palatable because
lightning are very like all of the layer
2s are completely dishonest about how
they actually operate. Um and and that
we've touched on a lot in the unweight
paper. Um,
so just recapping,
>> I mean, you could definitely have a an
unregulated
AC on Gajumaru where you could wrap
things in the Wild West essentially, but
why would you want to?
Uh certainly if you're in the EU there
is a lot of talk now about the Micah
getting more serious and uh that it will
be a real bloodbath for the unregulated
stable coins
>> and uh
>> I I need to come up with a good way to
convey to like talking talking with the
uh the space people the structure of the
god is a immediate understanding and
immediate good self for them because
they understand when I explained that we
can tune for these huge lace latencies
in cis lunar space that they they get it
because they've thought about that exact
problem already. But most people haven't
considered exactly they thought only
about how to dodge regulation, not how
to adapt to it. And the structure that
the Gajimaru has that gives it this
massive flexibility to adapt to
different regulatory schemes. Um I just
I need to have a I need to come with a
good way to convey that to people in a
simple way because it's structural. It's
not a thing you can just add to some
other chain or just make a layer two
that does whatever. It's it's a really
hard problem. It's a really sticky
problem and
>> our architecture lets us flex around
that. It it turned out you know what
what was uh what was obviously the right
answer for reducing complexity in the
system turned out to be just like the
killer feature for kind of all these
cases because adaptability nobody I
think predicted early on in blockchain
that this adaptability is the killer
feature. You have to be adaptable in
these in these surprising ways. And I
mean, lucky us, we've got the only one
that can do it. But it's just like
that that feature can't be stressed
enough how important it is that we can
flex different parts of the system being
a chain of chains that can do this. Um,
and
>> well, I mean, lucky us, we can also more
or less write a book about the joys of
being crypto adjacent, which is what
we've had to be.
>> Yeah. Yeah. We've learned the hard way
how important this is.
>> It's been it's actually been a crappy
set of lessons.
>> Um,
>> you know, something. So, I mean, look,
putting a cap on the quantum point, um,
the the the recap to that is number one,
uh, I think a lot of what's going on in
this is is panic talk. It's not rational
talk. I think what Ul put out a little
while ago uh, back in January is what an
adult would have to say about this. A
well-informed adult would have to say
about this, and I would direct everybody
to read it. um not only because it
points out that the Gajimaru is quantum
secure and will become stronger and
stronger in that regard with clear
planning for how it might adapt further
in future without needing any
governance.
>> Um
but how that's left up to the user to
decide what level of security increased
security increased it correlates with
increased friction. So, it's up to them
how to do this, but that gets that winds
up in in the uh the memple competition
space with an an appropriate pricing
without us having to do anything. That's
another magical feature that's going to
emerge as we go. Thank goodness.
>> Now, Craig, I I think that might
actually qualify as hate speech. That
sounded very like Milton Freriedman. Um
>> Oh. Oh, dear me. Was one of my favorite
people ever. But yeah, that dude and
Thomas are amazing.
>> Yeah. No, but you know his speech on the
on the miracle of a pencil
>> um is the one that I always point people
at and that's exactly what this is. It's
like okay so and I'm going to come to
this now in a second. Basically the
reason I love the machine economy
despite everything that we're trying to
do about being the restoration of of
human sovereignty is because actually
machines are going to be complete
capitalists. They are not going to care
one iota about what false barriers you
create to create these ivory towers in
which there is no competition.
The corporist create control and then
extract value from that control or sorry
ex extract rent from that control is
going to die. The machines just aren't
going to put up with it. And what you've
just touched on is exactly what machines
will do. They will look at something and
say, "Well, the cost the the the risk is
X, the cost is Y, the decision,
therefore is zed, and the market will
give them the the price points and data
they need to make that informed
decision."
>> For example, you've got the meool
competition. What is it going to cost to
run this transaction in this time frame
with this level of friction for
security? Answer right there. It's in
front of you. make your decision. Do you
want to go faster or do you want to go
more secure? The the the whole point is
to restore choice to the user whether
that user is an agenic AI at the behest
of that user or that user is an
individual clicking a button. Um
>> and that kind of segus us very nicely to
this whole point around what happened on
Good Friday, Great Friday as I will
begin to call it. So essentially
Anthropic sent out an email on the 4th
of April ending the flat rate compute
for openclaw. For those who don't know
uh openclaw is um a set of tools that
you can download and install on your own
machine that you then plug a large
language model into. Claude is the one
that is most often used, but you can
plug in Grock, I believe, and you can
definitely plug in chat GPT and have it
do all manner of things for you almost.
Um,
well, you can actually install in such a
way that there are no stops to what it
does. Um,
>> it can just automatically mess your life
right up.
>> It can,
>> yeah, delete all your emails, which
happens happened to one of the security
experts at Meta. Um but
>> but this is the cost of you know uh what
was it they used to say about innovation
was about running fast and breaking
things. So um while I have some sympathy
for those who thought that it was a
secure system and installed it on their
home computer with access to everything
in their home files um it's limited. So
yeah, open claw essentially uses a large
language model to do all this work and
in doing so it is pulling the the large
language model tool set thousands of
times a day. This is not what these tool
sets was designed for. And this goes
back to what you were touching on Craig,
this whole thing with bundling. So you
can get a subscription to chat GPT for
$20 a month. You can do the same with
Claude. Uh, I think Grock is about $180
a year including X premium to get the
top end version of Grock. These things
are all I think massively subsidized by
the venture capital industry. Um, the
there's a little bit of a kiddology
going on with the OpenClaw people
talking about how awful it is that
Anthropic have done this because
actually uh GPT where the founder of
OpenClaw now works haven't done this
yet. But chat GPT got $300 billion
dollars of compute subsidization from
Oracle in exchange for equity. So
it's just delaying.
>> The numbers hurt to hear.
>> They're insane. But in in an era when
money is meaningless because it's been
it's been uh destroyed.
>> Only if you're doing dumb things.
>> If you're doing stupid stuff, it's free.
>> For sure. And
I I personally think that this is if I
were looking at this as an LLM AI uh
analyst, I would say this is great news.
This is the industry finally beginning
to come of age and and finding its feet
and discovering that it needs to be
commercial. Uh actual compute is not
cheap. It's it's expensive. and in fact
the demand to to grow it. The we've
talked about this a few times, the
number of data centers that are in
theory doing something that aren't. So
much fraud, so much going on in this
sector. And ultimately,
the subsidization model doesn't work
when people actually use it properly.
It's the same as if everybody uses gym
membership was the original version of
this.
You can fit 100 people into your gym.
You sell 10,000 memberships. The gamble
is that at no time will more than 100
people want to use it at the same time.
>> Um Netflix is more bundling. You touched
on this, Craig, so I'll pass that back
to you to continue.
>> Well, that the gym membership one's
really telling because a lot of the gym
membership industry depends on a few
things. One of which is yes, not
everyone's going to show up at the same
time. Two, most people will never show
up. that's your favorite customer
because they produce no wear and tear on
your system and you make it very
difficult to get out of the contract
and you also provide the emotional
support that every New Year's and every
birthday
the guy says my resolution is to go to
the gym. So he shows up like once and
he's like you know what that kind of
sucked I'm not going back. So but he
keeps the gym membership because he
wants to be a person who has a gym
membership. That's actually the sales
model. the regulars who do show up every
every day, the guy that trains four days
a week, you hate that guy, especially if
he uses machines because you got to like
have the cable dude come out and replace
stuff and they got to mop up and it
it's it's much more entertaining than
that. Uh LA Fitness in London when I was
working in London and I was playing
>> I'm sorry, LA Fitness in London. That's
>> Yeah. Yeah. Yeah. I I know. Uh but they
were directly underneath uh just to the
side of the office that I was working in
at the time. I was playing for London
Welsh and uh I was still a fairly big
unit. Um and I was still squatting
outrageous amounts and uh they banned me
from their gym and released me from
their membership because I was using all
of their free weights on the
>> plates. Yeah. All the plates in order to
do just my squat session. And uh yeah,
sorry, but just as you're right, the
point is anybody who's a real gym user,
and I was back then,
>> uh you are not welcome in any way,
shape, or form.
>> That's uh Peter and I had had made an
observation before about um and his
phrasing for this was really good. He um
the kind of gyms that I like to go to
are the places where the football team
goes, rugby team goes, the the baseball
team shows up and all that. and they've
got a certain smell to them that you're
like, "Someone uses this gym." First
off,
>> and they all have
>> a certain
>> There's a certain type of person that
really hates that smell. And then
there's other people that go, "Oh, I
this is where I want to. This is my
place. I get it." And that's the whiskey
gym is got that. And then you got the
wine gyms and that's the place that has
lots of floor space for yoga. And
there's people that talk about a lot of
aspirational things more than they
actually do any work. And they call them
weights because they wait on you, that
kind of place. And those people are the
cash cow. So the whiskey gyms are very
like work focused and half the equipment
in the gym belongs to somebody who goes
to that gym and that's where they're
able to keep their stuff and everybody
else use and it's all like free weights,
right? That so whiskey gyms versus wine
gyms is kind of this distinction that
we've we've come to appreciate. And uh I
guess that extends to um crypto projects
too. Uh I just saw for the first time,
you know, this nauseating but funny
thing called pump.f fun. They're just
minting money right now and it's a big
joke and they literally just say this is
to pump your memecoin and it has create
a memecoin on the thing and I'm like
wow.
And it's all bots. There's no people.
It's just bots trying to create volume
to make it look like a memecoin has
volume. It It's sort of like the nexus.
I don't know. It's the It's It's sort of
the distillation of all the nonsense
that happens on Salana right there.
>> Like a sort of like a Rico case maybe.
>> Uh well, if
>> No, no, no, no, no. It is. I I I'm I you
know
you guys don't get time to read all the
stuff that I put out but one of the
things I've been talking about and it's
it's in the uh the unweight paper where
I talk about layer 2 and it's going to
be so much fun when I get to do the case
study on Salana um the most centralized
to centralized uh chain of them all and
>> but it's fast.
>> Oh,
>> it actually isn't. No, it isn't. That is
another thing. Well,
>> uh, but let's come to Andreas Anderson
and, um, A16Z in just a second, please.
But, uh, no, the the, uh, Pump Fund and
the Salana Foundations and all the
pieces around it are all now in court in
New York. They've gone through the first
hearings and this is now real and
serious. uh forget the name of the
company um but there's a law firm in New
York who are suing all of these entities
for a RICO type conspiracy to to pump
which is
>> like what what should have happened to
FTX like way before that got out of
control.
Well, FTX was a different animal. Um,
and yes, there was a lot of conspiracy
in it. Um, but I think you had to have a
degree of knowledge to see it. uh it
not that I want to prejudice the legal
proceedings but
I don't know how you can look at that
and not see that it's clearly
conspiratorial it it to me looking at
what I know
the RICO charges are a slam dunk um the
the name had me concerned I was worried
about clicking on a thing called pump.f
fun these days. And I was like, is that
>> Yeah, that won't be that won't be to do
with a gym, that's for sure.
>> I was just like, what's this site for?
But uh yeah, it turned out to be
actually worse than my worry. Um because
it's it's like the kind of thing that
destroys people's lives. But um Oh, man.
It they they have uh they had like
streamers to like stream the fake trades
to get, you know. Yeah. Yeah. Look, the
whole thing
>> the whole thing is dirty. Uh if you stop
seeing crypto as so I I I have this
whole chapter in the unweight paper
about essentially look stop conflating
blockchain and crypto. That's like
conflating the printing press and
counterfeing.
Yes, it is helpful to be able to
counterfeit when you can use a printing
press, but you could have done it by
hand beforehand. Um it it it is a
scaling tool. It is not the tool. And
with any tool, the intent of the user
cannot be controlled by the creator. No
matter what the gun lobby, anti-gun
lobby might say on that point as well.
The same point applies over and over
again. Um
and I've yet to get anybody speaking of
gun lobby come back to me when they say,
"Oh, guns kill people." I go, "Yep." Uh,
so what's the most heavily armed nation
on earth after America? That would be
Switzerland. They had 11 gun deaths last
year, most of which were suicides. Um,
guns don't kill people, people kill
people. And this is the same thing with
this. um
where this is going.
>> Just the the pure gamification of it,
just watching sort of the action of that
like what because that that's like a
live page if you go to uh pump.f fun and
you can watch the bots do their bot
thing to like you'll see 10 million in
volume on a 50k
cap thing. Well, that's obviously not
real.
Look, look, Greg, the point I'm making
here is that this is such an obvious
thing that normally I would argue that
how someone uses a tool cannot be
predicated by the user, by the creator
necessarily, but this is very clearly a
tool designed to create a false sense of
what is actually happening and and how
it's happening. And and to your point,
you've got vast numbers of transactions
allegedly occurring and Salana benefit
from that because it sits on their
systems and allegedly is using Salana
which allegedly is decentralized. I
think this whole mask is about to get
ripped off. Dude, the the
decentralization point doing
looking into uh this goes back to the
space thing, but um the cis lunar space
issue where you've got a a second 1.3
second delay just a oneway message to
the moon. So round trip is going to be
two and a half seconds, which also gives
you from the edge of cis lunar space on
one side to the other a two and a half
second just propagation delay if even if
it's a straight shot. Well, okay. How do
you deal with that latency in a
high-speed blockchain? Well, hey, turns
out we can deal with it really smoothly
because we can tune the microblock
interval and retain the same global
height interval. It's the key block
interval doesn't have to change. Salana
though, I was like, okay, so how does
Salana deal with this? They completely
breaks and it breaks in such a hard way
that they're already geographically
bound.
>> Hold on a second. What do you mean it
completely breaks that you're talking
about it like it's a future tense thing?
Sauna is completely broken. It has never
worked. That is clear from all of the
third party research on this.
>> It completely breaks even more.
>> Well, my point is is that they're the
way that they operate right now is that
they have to be in close the nodes have
to be in close geographic proximity. It
basically they have to be centralized.
If you try to spread it in the next
update that they're about it's got some
I forget the name. It's got some cool
name like Arctic Fox or like some cool
like, you know, super secret alpha one
number five. Like some crap.
>> Yeah. The kind of thing that somebody
who's never left his mother's basement
would come up with. Yeah.
>> Yeah. It's it's like a video game
mission name or something. Um
>> the uh
they're supposed to be reducing their
finality to 150 milliseconds. That is
like that's like message confirmation
time within my preeture.
>> Sorry. Um,
are they saying settlement or finality?
>> They're saying finality.
>> so
>> that would be I I can see all taking a
deep breath.
>> A lecture on settlement versus finality
from on high. Dude, the the the response
the the response they probably conflated
this for marketing purposes because they
like they'll have a mouthpiece say the
wrong thing to get get that in people's
heads, but um because that's the kind of
shady stuff that marketers do in this
business. But um the but 150 seconds is
striking to me because like ping just
ping
>> millisecond
>> from where I am in the Western Pacific
to New York is is like right at the edge
of that on a good day on a straight
route with very few hops. I you know
that's like 150 to 180. The jitter can
push me over whatever they're saying is
their finality limit. Well, okay. So
let's send a message to space and back
like no you're not doing that. You're
not even doing that to geostationary
orbit and that's only 30,000 km that
like that's this is
anyway they their their nodes cannot
operate. They have no way to cope with
that. It like it's so bad that every
different component would suddenly
become its own shard that can't validate
anything and everything shuts down.
>> Well, they can't cope with this.
>> There's a really interesting
conversation to have about what happens
when you build an economy on Mars. what
happens. We need to build an economy on
the moon. And the obvious answer is an
associate chain.
>> It's it's the obvious answer.
>> But
>> we have lots of ways that we can flex
around those those uh we could we can
flex around all of these crazy um
logistical issues that that show up
because of context because we got this
really flexy structure. Um but
>> actually much more fundamental and this
is one of Ul's uh favorite uh topics
>> is because we separated the concerns and
and this is something that I I wrote all
the way through the unw white paper is
that there are certain things that you
can take as being almost a a um a
biblical certainty in the in the in the
approach within the gajimar and one of
them is the separation of concerns
>> and it's something that you guys have
been extremely pedantic about and
correct about um the reason I laughed
when Ol started talking earlier on about
the quantum thing was he said well you
know we did write this a while back and
actually the wonderful quote that
appears uh in our discord that I posted
on LinkedIn was that uh I think
something to the effect of it's amazing
how often we have to be I wonder how
many times we have to be right before
people start listening
>> right
>> um that separation of concerns is
fundamental to doing any of this
>> which gave the comment that one of the
worst things that you can do is to be
right about things
>> being being right too early
>> will will earn you no end of wrath.
Yeah. One of the things that you're
supposed to learn if you work in big
corporate environment is never say I
told you so.
>> H especially in especially in Sweden. Uh
that is a hard rule when um things break
badly and you really want to say yeah we
actually told you that we told you so
three years ago that
it was going to end up here and so well
let's not
relitigate the past. is like now we just
want to look forward now let's just work
together now this is not the time to cla
cast blame and um then you're supposed
to just say okay yes I'll be magnanimous
about it I will not say I told you so
but I did tell you so
>> that's the best way not say that I told
I won't say I told you so
>> well actually one of the biggest uh one
well anything that is before the butt is
the liar Right. Um that's one of the
things that I think is
coming back to um the the news flow
that's been going on. Uh Anthropic
coming out saying, "Look, uh we're not
going to to play ball with this bundling
thing anymore because you're paying $200
and you're eating $5,000 worth of
compute. Uh we don't think this is fair
and we're not going to play ball." So,
Um there was a lot of push back. at
Anthropic overseeing this, doing this,
but ultimately the people who are
throwing stones are throwing stones from
open from chat GPT where they have, as I
say, hundreds of billions in venture
funding and a $300 billion compute uh
subsidization from Oracle. And where
Larry Ellison goes, corporatism follows.
Um, so all the idea that all, you know,
any of this is open has got to start
being thrown away. It's not. they're not
playing in a in a in that way. And
ultimately, as I said at the outset of
this uh aspect of the discussion, I
think this is the the AI/LM industry
starting to come of age because they
have to start charging what it actually
costs with a margin in order to do
something. The fundamental problem
however
is that the machine economy does not it
requires a dimensional change from what
we have. What we have is a system
designed for people to use that works
across
fragmented fractured infrastructure
platforms all of which are controlled.
That control is uh rent extraction
all the way through. a constant tolling
on your actual transactional efficiency
and cost. And
what I see and and you know, and the the
guy from uh A16Z, Andreas Anderson, came
out saying, "Oh, Salana's going to solve
this. This is amazing. You're going to
be using your Visa card with Salana."
Uh you've got other people saying much
similar things about Lightning, which is
insane on a whole other level. But um
what I see coming out of this is this
the way I characterize it is it's the
last we of the corporist system trying
to stop the capitalist system from
emerging by putting this straight jacket
on it. And as I said on Twitter, this is
not what you're talking about is not the
emergence of the machine economy. It's
the straight jacketing of the machine
economy because you're trying to apply
tools that simply don't work. And one of
the things that is at the heart of what
we're doing with the whole gajimaru
approach, the resource platform
application or resource infrastructure
platform application, the dualities
these things create. So so important to
restore our freedoms to take us on a
different path from that which we're on.
Um and there's no denying that machine
economy is coming. But the key to
unlocking it is real money onchain. the
gaju able to transact at sufficient cost
efficiency to make actual transactions
viable and the next piece to this state
machines.
So, ul,
>> state channels.
>> Sorry, forgive me. State channels.
>> They are a state machine. So,
>> that's a big one.
>> Sure. Um, but you you've been testing
this on a MacBook M4
and the numbers are preposterous. What
you're looking at with state channels is
that capacity to take real money,
the gaju, and turn it into the money of
the internet of economics, which it is,
and the machine economy, which it will
be. Uh so all of the transactions that
people are doing with their open claw
bots uh in fact with any ai any machine
tool that is acting in an economic
context even if it's just exchanging
messages. This is this is the the real
dimensional shift. I'll come to the
security point which is the other aspect
of this later because that's the other
big news from anthropic was mythos. But
focusing on on this aspect, you're now
going to see every compute being
billable. Well, you can't build that in
sense. You can you can build bundles of
them in sense maybe, but even then
you're still talking about really deep
dark problems around how you get that
kind of flow to move and how those
things can happen, how that's tracked.
The obvious answer is state channels on
Groot, the Gajumaru base core. Um, so
Ol, over to you.
Right. So yeah, our state channel uh
implementation is
a few years old. Actually, I I did talk
about
um use cases like paying for the next
page of text on the internet, micro payw
walls and things like that. back in 2019
when we charted uh
>> I told you remember
>> I Oh yeah.
But um what we were
one of the big missing piece back then
was really
that
we didn't have the commercial users
because the currency wasn't money. Um so
essentially we've now solved the
architectural bit where we have an
ecosystem that is actually adapted for
commercial use and then state channels
be will become really interesting. So
and I guess the intuition for a state
channel is you can think of it as kind
of your uh coffee shop card. you top it
up and then you can just you can use
that coffee shop card um in that store
as long as you have credits on it and um
and buy anything in the store
essentially. So
this when you create a state channel it
becomes like a onetoone dialogue with
somebody else that somebody else can be
a server it can be a market operator or
whatever. Uh we have a couple of
different modes and then
you can payments are extremely fast and
they are finalized immediately because
they're all co-signed. Um and um also
there we designed it so that
it has a few layers like you can also
load smart contracts and you can do
contract calls. So essentially, you
could run operate a casino where you
open up a state channel and you're
actually having the smart contract
provide the rules. Um
and um
one of the interesting things there is
that if you just bail out the
the c the casino could still close out
your state channel with the latest state
so they won't lose the money. You could
also use that for example in restaurants
where even if the customer does a does a
walk out the if the payments were in the
state channel and you were paying as you
went along the restaurant owner can
recover the money by doing a unil
unilateral close of the of the latest
state of the state channel. Um so there
are interesting features like that and
so you can
do smart contract calls uh those you can
do like 40 40 calls per second or
something on one channel. Um you can do
payments about on my
MacBook M4
uh running both sides it had if it
operates the entire channel. So both
sites
uh and doing all the signing and
verification it could do about 500 per
second on a channel. Um and then we also
introduced plain messages which are just
you can send any message. You could
essentially have a chat going. You could
encrypt it if you want to. Um or you
could just implement a protocol where
you're
whatever you want to do. You could um
what was the figure on that? That was
about uh 3,000 messages per second that
you could do on a on a state channel. in
my benchmark where the same computer is
running both ends and actually at that
point it gets all the 10 cores of the
laptop gets the performance cores get
saturated. So you could actually and
this happens if you have like 50
concurrent channels
all going full bore then it becomes CPU
limited. You could keep loading up
channels. So you could have
I think I ran 20,000 channels
simultaneous channels on my own lap
MacBook and they were all serving. They
just couldn't go past the CPU saturation
but they didn't
it didn't start breaking down either. So
performance was actually very steady and
reliable. Um
and um so if you would be running um uh
servers in a shop or whatever, if you
add nodes that are serving state
channels, performance will scale
linearly. So you could easily support
hundreds of thousands of state channels
uh active.
They can stay active for as long as you
want. Uh you can disconnect, you can
reconnect a state channel and recover
the state uh or you can just have it be
open and not essentially not cost
anything. Um and then just interact
extremely cheaply
uh when you need it. Um,
you could implement fees. In my state
channel market demo, which I uh wrote
some years ago,
um, I actually implemented in the smart
contracts
that you could configure the fee that
the market operator charges because the
market operator has to put up collateral
to move funds between channels. So you
deserve to be able to pay for that. But
in that case, what I wanted to show was
that you could connect a channel to a
market
and uh find vendors on that market. I
even having had encrypted ad hoc chat
groups which I think the EU at least
threatened to make illegal with their
various um um ideas on legislation but
there an end toend payment
from one channel to another via an op
like a customer to a vendor
was about 15 millisecond roundtrip plus
network delays
um and um and manual signing delays if
you actually have to bring up your
mobile and scan a QR code or whatever.
But the interesting thing is that the
actual compute cost for the parties
involved is extremely small which means
that you can actually have really good
economy on it.
Now
on the when we first did this, this was
before we designed the gajumaru and also
the witnessing scheme that gives us
um fast practical finality and uh which
means that you could actually set up a
state channel and you get your first
indication that it's on chain within a
few seconds.
um and then you can start uh transaction
transacting right away. Um
that didn't used to be the case if you
had to wait for several block
confirmations which could be depending
on
the mining power on your chain
could be many minutes. Then we had the
problem that
you might want to be able to um
leave a state channel and come back and
just keep it open at all time because it
was so expensive to start one. But I
think
uh on the gajumaru it won't even be
that. So, but on the other hand, we have
the mach machine economy now where we
have the LLM bots, which I didn't really
consider when I gave a talk about that
in 2019.
so now we are getting
>> we're in a world where this is really
>> I told you so. My turn to do and I told
you so. It was called the Da Vinci
Protocol. Um, and the idea was that we
got rid of this whole thing of bundling
and started to have direct connections
between
>> artists, producers, studios, and
consumers. And this this is what Craig
was touching on. You know, this whole
thing about bundling um, essentially we
do it for convenience. We do it because
it's the simpler way of doing things.
But that is no longer the case. If you
can get to the point where your home
computer is able, you know, I can go
into Siri and say, "Hey Siri, not that
it works on my phone for obvious
reasons. Um,
find me a movie from the 1980s with John
Candy." And it comes back with Uncle
Buck. I'm like, "Yes, play Uncle Buck."
The agenic AI in my machine goes off and
negotiates with whoever it is that's the
producer studio rights holder
>> and streams it directly to me and
negotiates the transaction fee, the
price, everything. It all happens
without me even looking and the cost
would be pretty insignificant for a
movie that was made 40 years ago that
almost no one else watches.
>> This is the greatest performance of a
state channel. You could pay for the
next key frame in in the movie.
>> Yeah, you could pay. Well, because the
the puck is so reined, too, that you
could pay for
>> however much you watched.
>> You know, you were mentioning
leprechauns earlier today. You know, I
want to watch Leprechaun 4 in space.
Why? I don't know. Why is he in space? I
don't know, but I want to watch it. And
you get five minutes through and you go,
never mind. I'm I'm fine. And that could
be the full amount that you watched. You
could pay like it could be that granular
without
>> Yeah,
>> that that could be orch like that's a
practical thing we could orchestrate
that you could never do today with
current payment systems. It's way too
complicated.
>> Oled earlier as well. Do you want to
keep reading the next page of the uh of
the website? Um, one day somebody
somewhere is going to pick me up on my
continual joke. Do you want to know
more? Um, somebody not in this team. But
anyway, uh, yeah. I'm doing my part.
>> Uh, every time that you start to read
something, I mean, the whole idea of
Substack is that you're essentially
paying them to provide an intermediated
service, etc., etc. Uh, what about if on
your blog you have this tiny charge to
open the headline? You know, here's the
headline, you click on it, that cost you
one puck. Money you would never even
know existed essentially. Um, tiny tiny
tiny tiny number. And then it's one
quintilionth of a of a gaju. A gaju
trading at one cent per per gaju. That's
a that's a a a cost you've never even
considered to understand. Even at $1 per
gazu is still a cost you can't even wrap
your head around how small it is. But
let's say you want to read a bit
further. Well, that could be another
puck.
You want to read the article that
thousands of other people have read.
Well, that's going to be 10 pucks,
please. All of this is this is
capitalism. This is how you start to get
price signals around things and and the
market being driven by utilization.
>> Mhm. And if you really like what you're
reading, you could actually top up a
little bit and uh give a tip, which
becomes a conversational cost signal,
which is um I mean a costly endorsement,
which is also something that I think we
sorely lack on social media because it's
so easy to whip up a frenzy because
retweeting or whatever sharing uh
doesn't cost you anything. Sending a
hateful message doesn't cost you
anything. Um, and liking,
well, it doesn't cost anything either.
So, but that also
>> So, you can so you can orchestrate
>> gives you a sense of how much it's
worth.
So, what I've always wanted is I would
like to be able to
have an algorithm feed me stuff that
people that I trust and they could be
anonymized as a group. Basically, if I
signal that I trust the judgment of Greg
Chu and Craig Everett and uh others. And
so, I would like to see what they found.
so valuable that they were willing to
actually sponsor it with their money.
>> Um and then that could be an
aggregation.
I I would actually even perhaps want to
do a follow the money on the things that
George Soros likes. Um
I'm I probably won't like it, but I
would be curious. But
>> why go for the amateur when you can go
for Nancy Pelosi?
Yeah. Yeah. And uh
look at Craig now.
>> But the fun the Nancy Pelosi stock
tracker never misses. I'm just saying.
But the um
the interesting thing about having like
paid likes and paid retweets is even
though they could cost like, you know,
the equivalent of a penny or a tenth of
a penny or something, um it puts a hard
c something that a human wouldn't even
care about. Like it cost me a penny to
retreat this. I wouldn't care. Um,
that's a hard cap though on bots doing
the activity and generating fake volume
>> because while it would cost me nothing
to I mean cost me something but it'd be
inconsequential to me if it cost me like
you know half a yen to to retweet
something if you had a bot farm doing
that that would run you tens of
thousands every hour. You're not going
to do that. So it puts a hard cap on the
garbage and because content is essent
well especially while it's subsidized
it's free at the cost of an economic
hangover that we're going to hit later
and it's going to suck but that's later.
At the moment it's essentially free to
abuse all the free compute that's being
or free all the subsidized compute
that's out there uh and generate just
reams and reams and reams of trash. less
than 5% of blogs today actually write
their own stuff anymore and it's because
it's just already that quickly been just
it's all slop. So this the problem that
we have is not getting information. In
the past that was the model. We have to
suck all the information. We're going to
hold it all. Big data is the whole
thing. Now big data sucks. Now you have
to look for focused meaning and focus
the search for meaning online is all
about curation. And the best curation
filters are cost signals. And you
mentioned Milt Freriedman. Everything
goes back to having a costly signal for
something. And this actually gets into a
couple other people aside from
Freriedman, but um the uh having a
costly signal, even a tiny cost, even a
fractional cost for something um rules
out automated engagement and and fake
engagement farming. Engagement farming
is crafted to get bot attention. Bot
attention gets more bought attention.
The bots advertise to each other. they
now look like algorithmically like high
highv value users. Now they go swarm
some content and it looks like it's
popular. That whole model falls apart
and you get back to organic content
actually being the important stuff. If
it costs even a tiny bit because you
can't if every email cost one penny
there would be like no spam.
But that's not the case. So, you know,
Viagra,
>> yeah, one of my favorite examples of how
broken the whole free LLM
uh model is um was a paper where they
had compared
uh human doctors with LLMs um in the
ability to give a correct diagnosis.
The paper was criticized a little bit
because the diagnosis that they chose
were pretty obscure, whereas a human
doctor would probably go for the common
cold first. It's, you know, the when you
hear hoof beasts, think horses, not
zebras. Um, unless you're on the
savannah. But the thing I noticed was
the part in the paper where they just
mentioned in passing that the cost of
the diagnosis was actually higher with
the LLM than with a human doctor.
>> That's interesting. Well, right actually
back to that issue of compute how
expensive it is.
>> That cost
>> Yeah. was decidedly higher than I had
imagined. I I of course I knew it would
be a cost, but I didn't think that it
would actually be more expensive than a
human doctor's uh giving a diagnosis.
>> Me too. That's
>> But it was Yes. And and but as an end
user, well, why do I care? Somebody else
is picking up the task. On the other
hand, we do have that subsidy problem
across the entire economy where even
agriculture which is the that's the
baseline of all economics
>> of course nobody knows the price of a
tomato the actual price
>> with socialized health care the doctor
is free too.
free
at the it's a tiny cost of systemic
collapse this can be free
>> but yeah so I guess what we are talking
about is is going back to Freriedman and
actually trying to reinstate
working price signals um which is an
amazing
amazing tool for uh directing innovation
and effort
to places where it actually can pay off.
>> It It's one more case of if we have
faith that the fundamentals
are in fact fundamental and we play into
that, we don't have to do a lot of extra
work in cheetah flips to understand how
things work and evolve from there. And
that's that's been one of the most
fundamentally interesting things about
this project so far is every time we
just go with what the fundamentals
should be, things simplify it, the
code's less complex and the structure
winds up playing in our favor every
time, which has been really really
interesting. That's just one more case
of it.
>> I think I think that the the biggest
struggle that we have apart from budget
is and maybe to some degree this is a
function of budget. Um, and one of the
things I was really trying to achieve
with the unweight paper was to give
people and large language models first
sight of
a different narrative, one that isn't
paid for by people who want you to think
that something that is completely
centralized is decentralized in order
for them to take a position within the
uh create control and extract rent from
it corporatist model. Um,
it's it's really
bizarre to me. You know, when we talk, I
often tell you guys that you live in a
in a you spend a lot of your time in a
bubble and a very privileged bubble
because you get to talk to each other
and you don't get to talk to other
people who
most of the things that we talk about
are foreign. Um, and let's come to to
grids. Um, when we first got together,
we all agreed the web is completely
insecure. makes no sense to use the way
it is. If you're going to do anything
serious on the web, it it it's it's not
the right environment. It's the right
environment to find something, to look
for information, but it is not the right
environment in which to exchange
important information
um sensitive information and certainly
not economic value.
Uh so this was the other leg of this
conversation, the the Mythos news. So,
Mythos is uh a new iteration from uh of
the large language model from Anthropic.
Um they applied it to the web and they
discovered that it breaks just about
everything out there. So, it found tens
of thousands of zeroday vulnerabilities
autonomously. Uh it found a 27y old um
OpenBSD
floor uh which is one of the most
hardened code bases anywhere. And by
Anthropic's estimate, and I think this
estimate is probably a bit on the
generous side because the competition
just went up a notch and the genie is
out of the bottle. They think it's going
to be 6 to 18 months before all of the
large language models out there can do
What you're essentially seeing is that
every single Aenic framework today is
running uh store credentials on a
connected device that is completely
wide open to being hacked, attacked,
controlled, subverted, etc. uh you know
the the things that we were talking
about with MPM hacks a little while ago
become child's play next to this and all
of the defense in depth type approaches
that historically have been applied
around online security are simply
irrelevant. The only correct answer is
the one that we had again I told you so
right at the outset which is that you
have to completely separate out
the issues. Separation of of issues
again and that moment where
you instantiate grids and everybody who
uses anything on the gajumaru is using
grids. Craig this is your baby. So I'm
going to punt this over to you.
>> Yeah. So I mean the the core of it all
is goes back to what what we actually
touched on at the very beginning of this
was um that
security corresponds with increased
friction, convenience corresponds with
reduced security. Um so sorry yeah
friction and convenience corresponds
with reduced security. So there's a
trade-off and it's a spectrum and for
you know
kind of low I'm going to buy an ice
cream at the convenience store that's
not that big of a deal. But the thing
that you really, really want, if you're
running a business, if you're managing
your family's finances, if you're
receiving your salary, anything like
that that's going to significantly
affect your life, you absolutely need to
physically separate the signature
context
from whatever like the thing you're
doing context. So, if I'm buying
something on a web application, I need
my keys to be out of the browser. I
don't even want them on the same
computer if possible. I would you I
should have my keys on a totally
separate device that is gapped from uh
from the the website I want to buy
something on that as Greg as you'd said
the web's a great way to find stuff but
you you don't want to be running things
like the just the mere idea of having um
browser plugins that are wallets for
like crypto that's crazy like that's
just nuts
>> the idea of No, it's it's not nuts. It
it what exactly like was said about the
MPM hack, it illustrates exactly what
crypto is. And I wrote this in the
Unwite paper.
>> If crypto if crypto had value,
>> you wouldn't take this completely
nonserious ludicrous approach to
security because it is essentially a
cryptographic betting slip that might be
worth a lot, might be worth nothing. Who
knows until the moment that it happens.
A bit like getting a random ticket to a
random horse at the Grand National. It's
Heisen money,
>> right? So, yeah. Yeah. If it like and
we've we've had this kind of realization
several times where as we unwrap the
layers of kind of um I don't know the
the fakeitude around a lot of crypto
things, we start realizing, oh, this is
this the reason people do this
ridiculous thing that's totally insecure
is because nobody does commerce using
this. like there's no if there's
commercial hard concrete commercial
activity and a lot of value is actually
passing through there that's genuine um
you you can't
you none of the common practices in the
crypto space would be acceptable. It's
it's absolutely crazy uh what people
have found acceptable so far. So from
our perspective is me being able to tell
like me as a developer uh you know a
core developer in a in a project that's
that's handling a new form of money
that's self-referential. It's a it's
actually a really big deal. Uh I have to
be able to tell a user I know everything
that this does. I know how this is
served. I know this is how this is
built. I know every action taken when
it's on your system. And the the best
step beyond that is to say, and I know
that whatever you're doing can never
pollute the signature context for you to
authorize what's going to happen next.
That that authorization step needs to
occur in a totally isolated uh isolated
context. Um the uh
I an interesting thing about the the
you know LM's trying to find security AI
is trying to find security
vulnerabilities is that a lot of the
code that they're digging into is code
that has been reviewed but reviewed by a
very tiny number of eyeballs because
there has been a
almost a a cult belief in never roll
your own crypto. You don't know enough
to touch security code. Don't check on
this. That's too hard. Don't learn a
low-level language. Don't care how the
computer works. Just use the highle
stuff. Just trust whatever remote
systems throw at your computer when you
type in npm build whatever. Um
like and then there's like a there's a
cult of reuse where it's not
appropriate. And I I a lot of these I
don't know this gets into like
programming method methodology
antiatterns um which are methodologies
tend to be antiatterns that are
misinterpreted by people who didn't come
up with them. Um, but that we're in a
really bad I think we're in a bad spot
right now and the AI's the AI kind of uh
well the AI bubble has been
even worse because a lot of the
Greybeard developers, speaking of which
um have been fired or quit just recently
and they're not going they didn't just
get fired. They were ruthless ruthlessly
called by idiots who don't know how
anything works. like actually stupid
people
>> who don't know how stuff works.
>> I have to add two anecdotes into this.
on was what I told you guys this morning
about that uh guy with about 2 million
followers who is reporting on AI and uh
talked about getting onto a a flight
from Chicago to uh no from LA to Chicago
and uh said that he walked past in the
in the business uh business lounge.
He walked past a guy wearing a Meta
hoodie, a Meta engineers hoodie that was
coding by hand. So immediately went on
to his broker site and sold his Meta
holdings because if Meta are still using
developers to code by hand, Meta is
finished. This was his public
announcement.
>> That's crazy.
>> That's crazy. won. I I have
Go on. Sorry.
>> No, it's just like these guys have been
unceremoniously and insultingly not let
go. They have been cut and fired and the
NBA's are dancing on the the grave of
their careers. These dudes are up.
They're not coming back.
>> Oh, they are.
>> They've taken their skills with them.
>> No, no, no. They are. Once we're funded,
they're coming to work.
>> Oh, well, they're coming. I'm saying
they're not going where they used to be.
>> Yeah. No. But look, Greg, one one of the
best stories in this, and we're not
going to name any names, you personally
know the head developer for one of the
most well-known projects in this space,
who resigned because he was sick to
death of the making up things to address
the technical deficit between what their
system can actually do and what the
vastly outnumbering the development
team, commercial team say it can do.
>> Without naming names, put some color
around that because that's that's a real
example of what you're talking about.
>> Yeah. So, there's a there's a a fairly
well-known group that has a gigantic
marketing. Well, they have a huge
budget. They kind of have unlimited
money in the like they have so much
money they don't know how to metabolize
it. That's how much they have. Um, and
so they dump it all into marketing to
own the marketing space and to control
the narrative. and inside of their
uh their technical
side of things. Um the developers and
the system operators don't know like
they had no idea what the marketing
people have been saying. Um and I I
asked I was like you work for so and so
right and he's like yeah I'm like so how
are you guys doing X Y and Z because it
doesn't seem like that should be
possible. And I was curious like if they
had some magic technique and he's like,
"What are you talking about? You got to
be thinking of a different company.
There's no way that's us." Well, it
turns out it was them. He was so
disconnected from what their marketing
people say that he had no
he he had never even heard of half the
stuff that I'd mentioned. Um, and he's
like, "No, we have this cool little
language, this message writing thing.
It's really neat." And and yes, the
stuff he mentioned was neat. Uh, but it
wasn't at all what the marketing people
were talking about. a few months pass.
So, it was like a weird thing. I'm like,
"Well, that's okay, whatever." And I
just I dropped it. Um, a few months
later, he calls me up and he's like,
"Dude, you're not going to believe this.
We're told that by like last week, we're
supposed to be good on X, Y, and Z. We
have to have all these things, you know,
implemented. And none of the stuff that
they're telling us to do makes any one,
it doesn't make sense, and two, it's not
possible. Like, they're they're trying
to break the laws of physics here. You
can't you can't do the things they're
asking." and our lead development
division over in you know hot place was
like
>> sorry
>> telling you know what I mean like um
>> very hot place yes
>> yeah told told the management like uh
you can't that doesn't work like what
what you're saying is absurd like you
need to like this is you're talking Star
Wars technology it doesn't make sense
this is like Disney Star Wars stuff that
you're saying it doesn't any sense. And
the management's reaction was to fire
those guys. They they sacked the whole
division. So, the only people that knew
what was going on are gone. And
and they're still sitting on piles of
money and they're still telling
everybody how they're going to, you
know, I don't know, they're going to
they're going to fix uh I I don't
know, they're going to fix whale cancer
on the blockchain or something. It's
like they're just making stuff up that
sounds everything. the good idea share
fairy like poops on their shoulder. They
just come straight out of their mouth
and they just say it and it's nuts and
none of it makes any sense at all. And
they just keep it. It's amazing how well
that works though. They they're like I
guess the noisiest people in the rooms
they visit. So they keep somehow getting
getting all the money that was printed
over the last few years that better not
touch the consumer economy because I
would like eggs to not cost 50 bucks per
dozen. Um it it's just it's bonkers.
Everyone's lost their mind. It in so
they've lost their mind this like
excited, exuberant throw money at at
crazy sounds way on the one hand and
then somebody says quantum computing and
everyone goes, "Oh my goodness, it's the
boogeyman." Like they think that that
that like the plot for sneakers is like
real or something. They don't understand
that there's these massive constraints
and trade-offs when it comes to trying
to crack something like a cryptographic
key. even if you have.
>> But hold on. Why would they? They're
constantly being told by an incredibly
well-resourced marketing department in
all these these different companies that
magic really happens and all you have to
do is close your eyes and click your
ruby heels together three times and you
two can be in Kansas. It
>> Yeah, that's true. No, I mean it it the
signup is very real.
>> It is real. One of the chapters to come
in the unw white paper is I I'm talking
about why enterprise blockchain has
failed. And some of it is down to a
categorization error driven by the
crypto industry who have used Fabianes
type tactics to put people into all of
the decision-making roles that then
dictate what is a blockchain and what is
not. Their definition of blockchain is
we said it is. Our definition is well
can I trust the message not the
messenger securely at scale? Yes or no?
This comes back to t trustlessness,
efficiency, accountability. The moment
that you have no trustlessness, you
either trustlessness is binary. Either
you have it or you do not. If you do
not, for any aspect that you do not, you
have created an efficiency because trust
enables efficiency. But where you have
that trust that enables the efficiency,
you must have accountability. Or you
don't have trust, you have blind faith.
>> there's these ideas are completely
foreign to the whole thing. The quantum
industry, not the quantum tech people,
the quantum marketing people, the the
people who are working in aenic uh
systems, all of the all of the as you
call them, the MBAs, they're the ones
pushing this fantastical state. And
because they're the ones with the
mouthpiece on this and some of the case
studies I've been working to put out
show this like you wouldn't believe. The
marketing documents say one thing, the
press release which has been approved by
lawyers says another again. And the tech
documents say another thing again.
>> It's insane.
>> Yeah. Peter and I've run into that a
couple times too. Um some something
you'd said earlier.
you'd said,
"Pardon me for quoting the the holy text
that you you know the the text that you
hold is this holy foundation for the the
church of Bitcoin, except for when it
disagrees with you and that I'm a
heretic or a Nazi for having said so."
That's, you know, I'm writing a series
on cult dynamics and there's actually a
close parallel there. Um,
and it's the difference between a
religion, a religious idea that gives
you a way of interpreting and
interrogating the world versus an
ideology that has a wrote set of
conclusions from which you may not
deviate. And
the the thing that triggered this
thought just now is you said their
definition of a blockchain is we said it
>> the definition
>> the the way that you know an entropist
wouldn't would define uh a cult ideology
or an ideology that will form a cult
around it is that the ideology is itself
perfect by its own definition. Therefore
the only reason anything can be going
wrong is that you didn't do the ideology
hard enough. So only the humans can be
failing the ideology. It can never be
failing you. And there is a distinct
flavor of that going on in the crypto
world right now in these and in and a
couple of slices here and there. And uh
and that's a that's a pretty spooky one.
But it's also evidence that there's
definitely
um I mean there's we're in SCOP
territory. It's not influence territory.
We're in SCOP territory when that sort
of thing is so widespread. So, so yeah,
I mean it is hard for people who haven't
had the time or the interest or they
they they're moving too fast. They think
this isn't that this is beneath them to
understand the details or whatever. Um
or they've been tricked into thinking
that they understand how things are work
that they don't really get. Um yeah,
it's hard for people to to understand
the things that that we're talking about
sometimes. And it's not, you know, it's,
you know, to to be silly about it. It's
it's kind of like that character in
Kungpow Wimpllo and the master says this
is Wimblello. He was trained wrong as a
joke and you know that's a lot of people
are operating in that and Wimpllo
doesn't know that he sucks at fighting.
He thinks that the my face to your fist
technique is like uber and that's how
he'll win the fight. He's like I am
bloody signifying that I am the victor
and he just has no idea that he's been
trained wrong as a joke. And that's how
a lot of people are behaving right now.
I I I fear the moment when the punchline
comes.
>> So, we should probably confess that we
do use AI occasionally. It's not like we
are dissing vibe coding because we don't
know what it is. But most of the time
when we engage with the AI tools on
programming
um we end up thinking that it was
actually a waste of time. We could have
done it quicker ourselves and better.
And sometimes I there are a couple of
>> there are interesting cases where AI
tools are extremely helpful and that's
I'll push back
>> the nasty corner cases. Yeah, the nasty
corner cases where why doesn't this
work? It should work. It's not there's
nothing in the manuals. I go out and
Google and I find 50 people who
basically ask the same question. Why
doesn't this work? It should work. You
never see an answer in any of those
threads. And typically AI can be really
good at finding the one place on the
internet where there was actually an
answer. And yeah, this is really weird
and it happens sometimes that you could
try this.
>> It's good at pointing for a direction.
It's it's good at being directionally
correct, but and that's a shortcut.
That's better than an old search engine.
And you can search for syntax that
you're not familiar with in in a
language you haven't touched for 20
years,
>> which happened to me, you know, a few
weeks ago. But at coding, oh my
goodness, don't ever commit something
from an AI without rewriting it
yourself. Like, wow.
>> I want to push back just a little bit
here on a couple of points. So, um, I
wanted to create a very simple blog
site. I did not want to use Squarespace
or else to do it because then you're
locked into them controlling everything
you do, having the ability to shut you
off if you say something you don't like,
etc.
um not wanting to spend a great deal of
time learning how to use something as
horrifying as uh what do they call that
thing that we unfortunately built some
of our websites with that I deeply
darkly hate.
>> Oh, WordPress.
>> Thank you. Not wanting to spend a lot of
time dying and punching keyboards that I
can't afford to replace uh working with
WordPress, I went to Claude and I said,
"Claude, can you build me a very simple
website to do the following?" Within
half an hour I had a website up and
running. Am I telling you that website
is perfect? Am I telling you that you
should do e-commerce on it? Absolutely
not. But for the purpose I had, which
was a simpleformational website to which
I could post blogs. Perfect. Um the
>> I have to I have to confess I I made
Cecil have to deal with editing that
herself by hand. She hates hates life.
>> Oh, great.
So uh the unw white paper itself um
there's I have been doing this 25 years.
I have
this
this oh you I'm I'm in my bedroom in my
house in Ireland. So I can't show you
stuff without showing the whole bedroom
>> without showing all the leprechaun gold
in the back. you know, the I IKEA cubes.
I I have the I have IKEA cubes full of
notes, just hundreds of scrolled pieces
of notes. And I I'm I'm I don't even
have a filing system because they're
just things that I had a thought and I
was talking to somebody and this I have
thousands of emails where I've discussed
ideas and concepts and pieces. I have
hundreds of unfinished skeletons,
unfinished essays sitting around that I
never quite got around to finishing and
publishing or I didn't feel were now a
priority because something else had
happened or I got pulled in a different
direction and they've just sat there.
Putting all of those pieces together
into the unw paper, I had a few really
big challenges. Number one is how to get
the narrative arc right. So I could
structure it out and then I would give
it to Grock and to Claude and I would
say you are a high school graduate of
above average intelligence between the
ages of 18 and 45.
Does does this narrative flow? If not,
how might I structure it better? All the
things that working alone without
somebody else to bounce ideas off. I
will tell you that I found the LLM's a
fantastic tool to help me structure
that. Um, I made a joke about how we
talk versus how normal people talk. Uh,
in regard to Jill wants to get to Jack's
house. How does Jill get to Jack's
house? Jill gets a bus. That's the
normal way of saying it. In our version,
if you and I were talking it through,
it' be like, well, how does Jill know
where she is in the first place? she
probably needs to geollocate herself in
a way that is reliable and then from
that factor her timing her flows etc etc
and actually the bus may not be the most
efficient way of doing it because in
fact given the time constraints and the
fact she's never been to Jack's house
before she can't really confirm that
that is where Jack lives so probably
best if she gets in a cab and relies
upon the driver to take her to where
nobody has no nobody outside of our
weird bubble talks like that and we
write that Okay. Most of the time
>> and Jack moved,
>> right?
>> So, uh, having the LLM adopt that
persona and challenge what I wrote, how
I wrote it. So, my paragraphs could be
six sentences long with all sorts of
grammatically correct but dense writing
with commas, uh, semicolons, colons,
hyphens, etc., etc., etc. It forced me
to get everything down to shorter
punchier sentences. When I wanted to
write a conclusion to a section, it
didn't want the long form in conclusion
that I gave it pushed to give simple
statements at the end. Why? Readability.
The audience is not you guys. I'm not
trying to impress you guys is what I've
done to to put that on white paper
together. I'm trying to take the work
that you guys have done on the technical
specifications and systems and make that
readable to somebody and contextualize
it for somebody who isn't from our our
world or isn't
>> we would read the product and then at
least try to keep an eye out for things
that ended up being factually untrue,
>> right? Yeah.
>> They don't have
>> We never say something untrue.
So but we try to find the the level
where at the level of description this
is actually a a good approximation
it you can't really improve on it
having the eyes glaze over of the
intended reader.
So, but you don't want to say things
that are just blatantly false because
they're so simplified that they
>> depart from
>> that is the challenge. There are so many
aspects. So, so uh quite a few people
have said, "Oh, but it's so long." And I
said, "Yeah, well, you try and convey
all the ideas that I'm trying to convey
without having that detail because uh if
you want to compress it, feel free to go
to your favorite LLM and ask it to
compress it because it's very
compressible all of the all the stuff."
So, actually, what you're talking about
was we had a discussion about settlement
versus finality, which is why I was
laughing earlier on about that same
thing.
>> Oh, yeah. Yeah. from
>> from a commercial perspective uh
settlement is uh I've paid I'm leaving
you know people don't yeah
>> think about
>> so I I go up to the machine I buy a
coffee and a bun I wave my phone at the
NF NFC uh
head and I've paid as far as I'm
concerned I've paid and I walk out of
the shop as far as the shop owner is
concerned I've paid but that's Not true.
That's settlement in that the shopkeeper
is happy that I have left with the
coffee and a bun that were their wares
and that I have paid for it. I'm happy
that I have received these things and
that I've paid for it. The the reality
of finality is 2 days to 5 days away.
But people don't think about those
things. And that was the debate we had.
And that's why actually in the unweight
paper I went to great lengths to explain
to people look don't get freaked out
about the idea that settlement is 2 to 3
seconds but finality is 3 to four
minutes. You don't have to stand there
at the till for 3 to four minutes. If
that was Bitcoin you'd be there for 3 to
4 days. Um no
settlement I tried to explain at great
length is always probabilistic.
Finality is not. It's a mathematical
certainty. It's a n or one. Do you have
finality? Yes. One. And do you have
finality? No. Zero. Uh settlement is
much more probabilistic. And trying to
explain how many things people do that
are probabilistic that they take for
granted all the time that actually are
life-threatening if they get it wrong uh
was what I was trying to achieve in the
unw papers. So where I where my family
live in Ireland, we have big tall hedges
around all of the country roads. So
going around the corner of a country
road and they're all very narrow and the
edges are all broken. So you know
they're not very navigable at speed. Um
and of course there's no pleasing of
speed limits on country roads only on
motorways where they can maximize the
tax take. that on country roads, it's
almost a joke in Ireland, you'll see
these pictures that American tourists
take of country roads with 100 kilometer
an hour speed limit and it's like a dirt
track with big hedges either side,
right?
And um when you go around the corner of
one of these things, there is simply no
way that you will know that another car
is coming the other direction. You are
just putting faith that they will be on
the correct side of the road relative to
your positioning on the road and you
both go around the corner at 50 km an
hour and that's it. But what happened if
that person was looking at their phone
at that moment or they sneezed? The
amount of faith you put in going around
a corner of a country road in Ireland is
out of all relativity to the risk that
you're taking.
Um and and I was because of the
discussion that we had internally around
this that you said you know you're
simplifying this. I said yeah I'm
simplifying it because that's what
people think when people go into a shop
and they pay for something they think
they've paid. If they paid in cash yes
they have paid and they have there there
is finality because that cash has been
received. Arguably there's another layer
of finality which is an accounting
finality from the the shopkeeper
perspective. But
with anything digital apart from the
gajimaru apart from gashus your
settlement cycle and your finality cycle
are an a galaxy apart.
>> Mhm. That's true. And sometimes that's a
feature like you you can you have
there's places where that can be used as
a feature but for the base case that we
want to cover to for just the simple uh
obvious money use case I think what
we've done is optimal. The fact that we
can flex around providing alternative
contexts is really interesting and very
useful. Again, that's something else
another no other chain system can do
also is this this novel thing where you
can make an associate chain for purpose
to have things like, you know, a fraud
prevention gap window or something like
that. Um, it all goes back to structure
and I think we got structure right. I
think that's never going to stop being
the most important thing is the fact
that we have a flexible structure.
>> Well, yeah, but look, I I want to get
back to this uh place where we started
if we can. Um, I know we have a tendency
to meander off topic because these are
real conversations, not scripted ones.
But um this whole idea of the machine
economy um and what I said earlier about
uh Andreas Anderson from A16Z who is a
massive investor in Salana and various
other things like uh Coinbase who run
base which is possibly the most
laughable layer 2 from a regulatory
arbitrage arbitrage perspective that I
have come across in all of the studies
that I've done. um their approach is
entertainingly
uh transparent in a way. Um they flat
out tell the SEC that they have other
income from other sources in their
disclosures. But anyway uh yeah I know
it's very entertaining. Um anyway the
the point is uh and Andreas Anderson is
talking about how Salana will solve this
how Visa Mastercard will operate and I
said earlier that this is literally the
last we of the corporist extraction from
control rentier model um and it's a
straight jacket on the whole machine
economy because this is a dimensional
switch. Everything that we've talked
about to date has been about
digitization. Making the inefficient
margin incrementally more efficient.
Digitalization is that transformation to
a state where the inefficiency is
removed altogether. The inefficiency in
this context is the traditional payment
system. It's the idea of fiat money.
It's money that is not onchain that
settles atomically on chain. The gauu
does all these things. Not only that,
with the way that the uh the system
works with grids, and I I want to get
into this a little bit more with you,
Craig,
you have
an agent that you are able to give
permission to do things in a state
channel context that can operate at
phenomenal speeds with huge throughputs.
3,000 transaction, sorry, 500
transactions per second, 3,000 messages
per second. all properly sequenced, all
properly done within the state channel.
You have the opening and closing to
chain either end of it. You've got this
tiny tiny cost. In fact, the cost of
running a state channel is literally the
cost of running your machine. That's it.
Divide that by the number of channels
you're running on your machine. Um,
nothing in the existing system is
capable of bearing the load of the
machine economy unleashed. Full stop.
I'm going to ask you to go to the
security element of that and pull back
in the discussion around grids for that.
>> Oh, so the uh
>> I I'll phrase it better.
>> I have a Mac Mini M4. I'm running a
thousand channels of uh state channels
on my M4. I'm trying to do business with
all these different people. Where does
the gaju where does start with the state
channel? What is the state channel
doing? Where does the gaju fit into
this? How does gaju desk or gaju mobile
fit into this? What am I doing? How am I
doing it? And where does grids fit into
the picture? Create the kind of picture
for what this actually is and why this
is the only way of doing it. And and
that's not a that's not a marketing
claim, that's a fact. Okay. Yeah. So
there's um the the most important thing
that that um we get from state channels
is not just the speed but the ease with
which we can delegate to something in a
safe way. So, um, your signature device,
remember I said earlier, we want to keep
the, you know, your keys that you really
have, we want to keep those out of
context,
but we have to give an agent the ability
to sign stuff really fast also, right?
Well, we can make a key for that agent
for this spec specific use that quick
and it can set up a channel right away.
So, I can authorize
payment from my account that I've got
the key on a separate device for to my
agents account and it's a small number.
We're doing like AI stuff. So, it it's
probably a small number of gajus. I'm
going to give it a 100 gajus something
like that. And it's going to be doing
microtransactions of that really really
fast with whatever's you know,
whatever's servicing at the other end. I
can have the agent set up a state
channel with a provider. I can give just
however much I want to be available to
the agent in increments authorized from
my phone. Keep the separate the agent
has. So if your system if your agent
goes haywire and blows all the money on
something silly, which you know could
happen, you've limited your risk. You
don't have to give the agent the keys to
your kingdom. That's crazy. Like never
don't ever do that. Um it's a really bad
idea. But the agent can set up a state
channel and it can that your endpoint
for the state channel could be running
locally or probably a more common sort
of for convenience case may be that the
agent has the signature authority for
its own state channel but this channel
itself may be running somewhere else
like maybe maybe a cloud service that we
provide to let state channels be you
know pop up and down quickly that also
makes us a party in this um so you can
pay both both services quickly. Um but
the agent has authority over whatever
you've given it but only whatever you've
given it not over everything and we can
so we can partition the problem and we
can also partition risk in this way and
that allows agents to deal with uh other
machine you know at at the other end is
a machine service and that service is
running as fast you know however fast it
wants to run uh and so is your agent. it
can make microp payments in that state
channel as fast as it needs to uh for
and that and that can be chunked. that
can split up any any kind of different
way. But like at at one yen per gaju
roughly, you know, right now under the
the mining scheme right now, um a
hundred yen's like like a dollar or I'm
sorry, 100 g is like a dollar, something
like that. Um that's enough to do a
significant amount of work in a brief
period, but I don't have to expose
myself to a lot of risk by giving the
agent a 100 g or a thousand god or
something. um I can give it what it
needs to do its work and nothing more.
It can go do that and setting up the
state channel because it's so cheap. The
the prohibiting factor, the limiting
factor on doing micro payments right now
is that if I want to pay I can't pay a
penny for something because the cost of
transacting a penny is way more than a
penny. So it doesn't make any sense to
do transactions like that. So I'd have
to prepay to make any sense out of this.
I'd have to like preload like a hundred
bucks, 50 bucks, something like that. So
that the transaction to load up makes
sense, but then getting a rebate back is
usually impossible. So you have these
token pay systems that you preload with
a provider right now and there's no way
to get a refund if it's small. Usually
it's in their in their terms of service,
right? Where it says like any any amount
below X, you know, below $20, we can't
refund. And that's because they
literally can't do it and be efficient.
They can't be economically viable that
way. With the state channel, you can set
it up, use whatever you use, tear it
down, it's gone. these things flip in
and out of existence and that's very
cheap to do. Um that that this actually
does solve a major major problem. Um
especially for the for the agentic use
case where they they want to be able to
set up and tear down state channels
quickly or keep them going for a long
time and plus them up periodically. um
whichever use pattern winds up emerging
is is favorable, we can adapt to all of
them without having to expose you to the
risk of your AI agent actually having
your private keys for like your you know
the accounts that you keep big money on.
And I
I think state channels is the only
possible way like I mean we've thought
through a lot of different structures
from a lot of different ways that that
different blockchains work and I think
state channels is like the only way to
do this particular thing. Well,
>> So, is that kind of a description like
that you were looking for or do you want
more explanation still?
>> So, think about how I've set up a
channel with you. How is grids how how
would that actually work from an
operations perspective? I go into my
gazeu desk. I do what? How do I uh
authorize that between you and I there
is this connection and that certain
things can happen. Where does what
actions are occurring on Gaju desk? Uh
where does grids come into the equation?
That connection point the authentication
all of those pieces. So I'm let's say an
individual wanting to stream your music.
You are a famous musician who is selling
your songs.
um through this process. How might what
I'm trying to do is give people a real
illustration of what this would look
like in actual use, not theoretical
because this isn't theoretical. We've
built it. It's working. It's there.
>> What needs to happen next is people come
in and do it and use it.
>> So imagine we have a a like a music
streaming site and you want to listen to
music and you haven't ever been here
before. Um, the fact that you haven't
been to the site before is not a blocker
because your public ID you can
authenticate. It's self-referential. You
don't have to make an account and get an
email and all that stuff. The fact that
you have the private key already lets
you authenticate as definitely the owner
of that account. And it's true across
every site in the world just by signing
a message. So the way that works is you
go to the site and you say log. You
don't have an account but you just hit
login. You don't register. You just hit
login and you see a QR code. You show
the QR code to your so that so the QR
code right that is the grids message
it's just encoded in this block you show
that to your phone the phone goes oh
that's a grids message so I will open
godu mobile and and if you're doing this
on desktop you do the same thing um you
open the website that URL like the grids
message there will be a text version of
it too you copy that out and you drop it
into the the grids text box on uh um
guidees
What that does, it's an instruction to
pick up a message from that site. It's a
it's a random message that's like a
login challenge. your wallet. It doesn't
matter if it's God desk or God Mobile,
whichever one it says, hey, it wants you
to sign this message and you sign it.
You know, once you once you say yes,
that sign message now goes back to the
site and the site goes, okay, we know
the public key and we know that whoever
owns whoever's in charge of that public
key definitely has the private key. So,
we create them. If they haven't been
here before, we create them a blank
account. If they have been here before,
they're just logged into their existing
account. from that point forward. Um, if
you want to do direct spins, like if you
just want to buy a thing, like I'm going
to buy a song and download it. If they
have that for sale, you put it in the
web shop at checkout. Same thing.
There's a little grids message that's
asking you to send a transaction to
them. Um, that for a website plugin that
would be like in a shop like this. If
you're just doing a straight purchase,
that would be attached to the Godu Pay
back end for the for the vendor. And God
pay is watching the chain. It knows this
transaction went through and it can tell
the website, you know, call their web
hook and say, "Hey, web shop, that guy
paid now." And it's done. That's it's
just you log in by looking at a QR code.
You pay for the thing at checkout by
looking at the same well similar uh QR
code. It's it's just that it's simple.
The first one says sign this message to
log in. The other one says, "Do you want
to pay this or not?" And you go, you
know, if you say yes in both cases, then
you've logged in and you've paid. These
are both just key functions that your
private keys are doing this, but your
device is outside of your computer. It's
outside of your browser. They they
nobody can poison that website. Nobody
can hack the back end of that website
and get anything on you. Nobody can hack
the back of that website, mess with your
account. Nobody can mess with you. And
that service provider, they don't have
to store your private information. They
Now, if there's a KYC thing attached
because of the c jurisdiction or
whatever, maybe. But the um just the the
base case is that all this panic over
private data getting stolen and oh my
goodness, somebody stole all the
passwords from a database and they
weren't stored properly in some service.
Well, now they've got everybody's email
address and their passwords. Email
addresses are very often the login ID
for people. So what do the what do the
bad guys do? They buy that database that
was stolen. They'd run around every
website and they try to log in with that
email address and that same password and
what do you know very often it works.
That's a completely eliminated problem
with this type system and and that's
just like the basic that's not even
state channel. That's just like the most
basic thing. So even if you don't do
like cryptocurrency, even if you don't
pay with Gajus, you really want to log
in like I would want to have Gaju mobile
on my phone just to log into websites.
And as a web author myself who's written
a ton of sites, the f the first time
that we implemented that, this is Peter
Harper and I, the first time we
implemented that in in a in a test site
and we tried it, it was like imagining
on every website like this for like the
last 10 years already. Like it was so
much better.
>> So we could mention that
>> in Sweden we have this app called bank
ID. uh it's extremely simple as you and
the way it works
I mean
so here for example is a public or like
a public sector mailbox um service
implemented in airlines so we like it um
and um if I want to log into that I go
to the mobile banky that's the green
button you can't read it Um, and then I
get a QR code.
I just go with the
hit the scan QR code. I scan it. I
identify with a fingerprint and now it's
logged in. So the this is ubiquitous in
Sweden. The problem with it obviously is
it works on the essentially if you have
a bank account the bank can issue a
certificate
that is then used via it it's kind of
like grids but it's based on the
certificate chains that the banks
provide.
So the information that the site will
have is my personal ID number which is
the key to a lot of stuff in in um
Sweden. But hey that's it's all
centralized authority. So um
um grids provide this
without you having to actually identify
unless you have to which is the case for
a lot of websites.
And so I think that's really awesome. Um
and and for example the
Ukrainians that we helped that fled to
Sweden. Um
we could see like for um for a very long
time a lot of the services that they
were trying to access required bank ID.
But since they didn't have a permanent
or they didn't have a a residency permit
yet, they couldn't get a bank ID.
Um, so they couldn't log in.
>> That's horrible.
>> It was u they could get bank accounts,
but they they the bank couldn't issue a
bank ID for them because of their uh
immigration status at the time. So
even it's extremely convenient if you
qualify for the system. Um and of course
it's local because it's it's based on
Swedish laws and Swedish banks and and
all that. So it's really neat in Sweden,
but that's about the the limits of it.
Whereas grids could be universal. And uh
for state channels, one of the recent
additions to state channels was the
ability to set up assigning key pair in
the channel.
so when you open the channel, you can
basically tell the
state channel logic proxy that okay, set
up a key pair that allows you to sign
things and the chain will recognize
them. So they are actually it's a proxy
signature for me that I have approved
and what will typically happen is that
whenever there is something that the
state channel your end needs to sign it
will send a message to the app the app
logic and if it says yeah go ahead sign
that then
it it can sign it uh automatically if it
was um if I delegate ated their
authority to the state channel state
machine. And um so essentially you could
you could write the app so that on
certain occasions certainly if you want
to need to top it up from the chain then
you need to bring out gades or gadu
mobile and sign the transaction.
other cases you might want to
essentially start a flow in your state
channel where everything that happens
up to that follows from you're signing
one thing is I just go ahead and then
there are a bunch of interactions that
the state channel actually signs
automatically and then you you can get
to sign with Gajuesk. for gaju mobile if
you want to continue. So you you can
sort of split it up that way. So you
don't have to have manual this is what I
mean when I say manual signing delays.
Anytime
the state channel needs to ask Gaju
mobile to to authenticate the next step
then
that will be a pause in the interaction.
But with the delegated signing keys,
it's kind of up to you whether you just
want to
uh rip with
the amount that is available in in um in
the state channel. You could basically
have it just go to town and
automatically
do the spends and you don't have to
interact at all. But it's it's kind of
it depends on what the the application
needs. So you can you can do both and
you can do a mix of both and I think
that's pretty powerful. And by default
it doesn't automatically sign anything.
You have to install the delegated key
pair in order for it to do it at all.
Otherwise you have to sign everything
explicitly.
>> Mhm. But this the ability to give app
developers and users this
variety of tradeoffs that they get to
pick instead of us enforcing them on
everybody.
>> saying this is this is the one system is
the only way to do things.
>> Having this spectrum of things that
people can develop apps in a unique way
around and make their own their own you
know comfort trade-offs about security.
Um that's huge. So again, it gets back
to structure. The structure of this has
been that it was obvious that we would
want some autonomy and apps to have
things work automatically. I don't think
at the time we were thinking of like,
oh, there's going to be this agentic AI
thing and that's going to be useful for
that, but it happens to work be a very
nice pairing.
By the way, um an interesting um one
thing about the anonymous login is that
when you can provide couple them with
essentially zero knowledge
uh proof certificates from a KYC
operator or something that essentially
verifies that you have the qualities
required without having to provide
anything more than that.
So that basically if you're in a if you
log in anonymously to a site that
requires you to be 18, you could provide
a proof for that and saying, "Okay, here
is the proof that I'm over 18. That's
all I'm going to share to you."
Um and um
one of the interesting things about the
latest quantum
uh advancements
uh was that the
was it the paper from Google where they
they provided a zero knowledge proof
that they had actually solved what they
claimed to have solved without revealing
the details.
>> Right. Yeah. Yeah. The first it was the
first use of a ZKP for that.
Yeah,
like we don't
>> we don't want to give people any ideas
>> or we for ourselves.
>> Yeah, it makes me wonder if there's a a
uh a future where some sort of um where
a patented process could be proven that
it exists without showing it in the
patent application.
So these are uses of zero knowledge
proofs that we don't necessarily
endorse. But uh the ability to
incrementally
reveal things about yourself without
having to share more than you want to is
extremely powerful.
and that's something we're set up to do.
uh what we need to do is bring in some
KYC operators that have credibility
within the market where and that could
be for example a Swedish or a Swiss KYC
um provider that
that is authorized within that
particular domain where you for example
an AC operates and uh then you can get a
a signed proof pro from them that
you are authorized
to participate in whatever thing it is
you want to join which could be voting
in an election for example.
Yeah. Uh so just bringing this home and
uh conscious of how late it's getting
and how long we've been chatting. Um
bottom lines what you what we've seen in
the last few days I think has been the
coming of age of the machine economy
that when you look back in history day
zero month zero is actually April
because we have mainet on the 26th of
April. All of these tools are going to
be available to the world then. So state
machines, associate chains, group
itself, uh the gaju desk that you can
operate and actually write the smart
contracts, do all of these setups. Uh
gaju mobile coming uh first on Android,
then on on iOS. Uh we will also
implement all kinds of slicker prettier
versions that people can pay for the
slicker prettier version. But the simple
robust
system that we we offer up to the world
under GPL3 open sourcing that's all
going to be there. And the
transformation is a you've got companies
like Anthropic seeing just how broken
the bundling model is.
You have an audience who think that
they're the bad guys for calling time on
it. Actually, it's just a matter of time
that everybody starts to do this because
these large language models allied to
aenic AIS like open claw are going to
blow up the models everywhere. The
amount of information they can post, the
amount of data they can post, how much
data they'll consume, how much uh
compute power they will consume, all of
these things are going to become very
real very quickly. And this is the
inflection point of change. anthropic
for me. I applaud the fact that they had
the courage to come out and say this
because otherwise the model is doing
what chat GBT and Open AI are doing. How
they can still call themselves Open AI
is a whole other kettle of fish. But um
right here, right now, they're sitting
on $300 billion of compute subsidization
from Oracle and exchange for equity.
Grock is largely uh being supported by X
subscriptions. I think a little bit but
mostly it's about the whole engine that
is Elon Musk sitting behind it
subsidizing its growth development and
and uh roll out. These things are
changing. Twitter itself is going to
change. You touched upon this when you
talked about how a like means nothing
but if a like cost you 10 bucks it might
begin to mean something. um a repost
costing
a gaju could actually be a real value
signal that people can follow these
things. And this is where all of the
things that we've talked about so many
times over the years around what is
corporatism, what is capitalism, you're
seeing the break that's going to make
all of this come into fruition, that
this is the real economy. This is the
unbridled capitalist economy. is the one
that everybody can be part of and that
price signals drive events as it should
be. That's that's the efficiency model
that we've always talked about, but
we've tried to sty in a way that has
ended up making a very small number of
people extraordinarily rich and demeaned
and devalued the lives of everybody else
in order to sustain this illusory
economy. Um,
forgive me being on a bit of a rant
here, but this is something that I I
spent 25 years working toward. Uh what
you're seeing now is the realization
that not only is are the existing
corporatist rentseeking control model it
won't work for payments it's not just
payments it won't work for
authorizations it most definitely will
not work in a post-quantum post AI
context around how we do security the
web is grossly insecure it has
absolutely no way that it should be
being used for sensitive data for
economic data, for economic value. And
yet it is the illusion has got to be
gone now with with mythos uh and project
glass wing.
The whole idea of how we approach
security is totally different because we
built this to be something that the real
world commercial
universe can operate with. that these
are the things that when we work with
real money and real sensitive data that
we actually need to have these levels of
security and it's not even about
creating levels. Forgive me that's
misleading. It's not about that defense
in depth as an answer. It isn't an
answer.
The answer correctly is to separate the
concerns and address the fact that well
that if you don't have an attack
surface, what do you attack? How do you
how do you grab this information? And
with grids you cannot.
The signing context is physically
separated from the execution context.
This is huge. This lends itself to
airgapped signature sign on and so on.
You your mobile phone eventually if we
get enough funding. We've we've talked
about Craig and I aspirationally how
we'd like to get a foundry going in
Switzerland and Japan that will actually
make Grid's devices which are very
simply the capacity to see a screen and
provide a screen like a little flip that
you can just turn around. There's my
screen to give you my QR code. Here's my
camera to read yours. No internet
connection whatsoever. Um, these are all
the things that we have built into the
gajimaru at base because we see them as
being fundamental things that have to be
addressed and now the rest of the world
is starting to see them too. Anybody who
tells you that the web is a secure place
to do anything after the announcement
this week of Mythos and Mthos is just
the first and it's the first that we
know about. Let's be clear about that
too.
Ultimately, what we talk about in terms
of the machine economy can only be made
possible by what we define as being the
internet of economics which the gajimaru
delivers.
The the economy that we talk about now
when you see people talking about the
machine economy in in LinkedIn in X,
they have no idea. And if they do have
an idea, they're probably crypto people
because crypto people, I think, do know
the lies they're telling. Certainly
anybody who's ever talked about zero
knowledge proofs that comes from a zero
knowledge proofs lab knows that the
mathematical impossibility of what
they're doing or or they're blind.
There's no way that somebody with the
intelligence to get a job in a place
like that doesn't know the basic maths
that under under completely undermine
any claim that the zero knowledge proof
works as a scaling tool.
Um anyway, forgive me. The the point is
all of those illusions have now got to
be gone. We have the only answer in the
world for this. If you look at the two
million people who are using Open Claw
and that's growing every single day. If
you go to the Discord channel, it's just
a constant flurry of welcome, welcome,
welcome, welcome, welcome. The machine
economy is there. It's about to be
unbridled, but it doesn't have the
economic base upon which to operate. It
doesn't have the tool set. And that
dimensional change is away from the era
of digitization of the corporatist model
to the digitalization
and capitalist model that machines will
actually use. The only way there is
through the gaju gajimaru group state
channels grids the entire apparatus of
security we've put around this.
That's the that's really the the big big
news from our perspective. And uh
look everybody who's listened to us this
far, thank you for your time. Greatly
appreciate it. I I hope this prompts
some people to have a dive into the unw
white paper. I am working through as
best and fast I can the chapter in part
three on the machine economy, the
internet of economics. Um
there's no way that this will not beat
that uh because it's still in editing.
But uh thank you all for your time. Good
night. God bless. Bye-bye.
