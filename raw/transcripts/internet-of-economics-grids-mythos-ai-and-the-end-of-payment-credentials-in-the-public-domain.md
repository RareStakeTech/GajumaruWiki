---
type: transcript
title: "Internet of Economics ｜ GRIDS, Mythos AI, and the end of payment credentials in the public domain"
date_downloaded: 2026-05-16
transcript_method: subtitles
---

When we talk about the web, there are
actually two internets. One of them
you've used every day for the last 30
years. The other is just being built.
The one you used every day, have been
using in every function we do. In fact,
we're using it right now. Was designed
to share information, which is what
we're doing. That is what it does well.
That is how it changed the world. The
one that we're building is designed to
carry economic activity. your money,
your identity, your sensitive data, your
signature on a contract, any of the
things that actually we need to protect
and their uniqueness is important.
These are things therefore that must not
be copied. They cannot be duplicated.
You know, a payment that's duplicated is
not a payment. It's an error. So
everything you've ever done with your
bank, your card, your online identity
has been running on the wrong one of
those two internets. It's been running
on the internet of data because it's
what we knew. And rather than create
something that actually solved for what
we needed, we instead patched it. And
that's essentially what's been going on
all of this time. Two weeks ago, an AI
model called Mythos was released by
Anthropic. Sorry, forgive me. Not
released. Uh it it was announced by
Anthropic. They actually haven't
released it because they discovered that
it could hack every single access point
going for everything. Whether that was
uh your bank transfer login, uh your
bank account login, um security access
to a building, all of these things
became hackable
almost instantaneously in seconds with
Mythos, which is why they put a pause on
its release.
So the cyber security industry of course
continues to talk about spending more
money, more layered defense, more um
defense in depth as they put it. But
actually that's because they're still
trying to protect the wrong thing. The
wrong thing is to have that information
in the public domain in the first place.
That's the mistake. So where we set
about looking at this was that first off
grids solved this problem. Grids is the
gajimaru remote instruction dispatch
serialization
architected by Craig Everett the chief
products officer of QPQ who's with me
now from Japan. And what it does is it
dis itates the two things. It says if
you are signing into a secure portal,
you don't actually give a login and
password that can be hacked. You provide
a secure authentication cryptographic
code from one to the other, a key from
public key A to public key B.
Um,
what that then does is allows you to log
in securely. This is what I was
demonstrating in the videos last week
that I could log in to Gazu Mining. I
could log into Gaju Market. I could do
actions in there again authenticating
that it is indeed me and I want to do
that authentication in order to confirm
that the transaction or the login should
go ahead and it's a one-time deal. You
don't you don't continually stay logged
in on that login and password. It's
unique to each time you do it.
That removes the attack vector that
mythos attacks completely. The attack
surface is gone. It's not that you've
increased the security. You've just
removed the sec the sensitive data from
needing to be protected at all. This
morning, I was doing a transaction to
buy my wife a a new phone cover because
hers broke. When I went to the end of
the process, it struck me how stupid it
was that I had to trust all the people
involved that I've never met, never
dealt with, never done business with
before. I have no track record with
them. I have no knowledge of them really
other than the fact that they have
physical stores in Ireland. So, I
figured they must be there must be some
substance to them. And I'm handing these
people my credit card details to pay for
this mobile phone cover. It's €16.9
something. And it just struck me how
insane this is and how silly it is. Um I
a 3DS didn't come through asking me to
confirm that I wanted to do the
transaction perhaps because it was such
a small transaction but often as not
they do and again layers of do I really
want you knowing all these things about
me this is insane why isn't grids
working in this as well alongside which
I've spent the last week trying to
communicate what what people need to
understand about mythos what people need
to understand about the attack surface
that it It presents to uh oh sorry it it
it attacks and
explaining that in a way that people
from different industries could see
where the solution sits and how they
could integrate grids into their
workflows into their systems and remove
the threat vector completely. Um, so
going down this rabbit hole, I started
thinking about, well, hey, you could
replace 3DS with grids and oh, if you
replace 3DS with grids, you could
actually go much further because then
the question comes, why are you using a
credit card at all? Could it not be
something that binds to your wallet that
can work with the existing systems? And
again, coming back to something that's a
consistent thread and everything we've
done in the Gajimaru, which is
separating issues and concerns. So the
argument I've been making for 25 years
to financial institutions is you will
make more money with less risk by
focusing on your USP and not on all the
things that you do to deliver that USP.
All of those infrastructures are not an
asset. They are in fact a liability. And
that was when I then said being um I'll
contact Craig and before I get any
deeper into this rabbit hole of wonder
and fantastic new uh good idea fairy
trips that I would do a a kind of a
sense check and say okay you're the
architect what happens where when and
start with a quick run through of what
grids does how it works and what the
purpose and object is and how that can
then translate to these other things
please.
>> Okay, sure. Um, fundamentally, uh, grids
is a way to communicate out of band
with, uh, a signature device. In this
case, Gaju desk or Gajju Gaju mobile.
what's great about that is that it lets
us completely separate the signature
context from whatever execution context
is going on.
um the the web you know where we use
browsers and Chrome and Firefox and all
that uh it is just a nightmare of
problems and the only way to the only
correct way to cope with all the just
the limitless number of unknowable it's
not unknown it's just unknowable how
many there are uh security
vulnerabilities is to just separate the
context like let that be
let it be understood that this is an
unsafe context. Well, how do I never let
my keys be exposed to that context? You
should remove the signature context from
that execution context which we know is
really dangerous. So that you know the
easiest code to secure is the code that
you don't have. The easiest part to fix
is the part that you don't need to have
in your system. Uh so just removing this
the scary stuff as much of the scary
things as we can can from uh from the
situation is is always the best
solution. And uh grids lets us
communicate out of band with a um a
signature device. So we can give it an
instruction and that instruction can be
to perform a specific action or to
or to request a message from a specific
endpoint that we can verify and then
prompt the user for an action based on
that message. Um that's if you know if
you're if you're a networking guy or
whatever that's not doesn't sound all
that complicated. It's just it's the
magical matching of this technique with
this particular context that makes it
really useful. Um so you know the the
idea that you're going to expose your
credit card details to just some website
because you need to buy a phone cover.
That's that's pretty crazy in 2026. Like
I w I would have thought that we would
have solved that problem. Like I can't
believe we have credit card numbers
actually. That's
>> really
is one of your bug bears. Uh why do we
still have emails? Um
>> because actually when you think it
through um social media, emails, credit
cards, all of it should relate back to a
single public key that is yours from
which you do all of your a set of them.
Sure. But they are public keys that are
yours and that
>> have these things embedded into them
have the stronger idea inside. It's it's
even outside of this idea of like well
national ID systems and all that like
you wind up getting into sort of a rose
by any other name type problem. The real
question that you care about on the on
the internet is not what someone's
national ID card says. What you care
about is repeated interactions with that
person or entity is it always the same
one or not? That's what you really care
because you build up a history of
interaction and so you build up a
history of trust through all these trust
signals. whole social mechanisms are
there that humans have evolved for you
know millennia to get right and
with the internet we don't know if okay
I've interacted with this person 50
times and you know we're we're on good
terms the next time might be an
imposttor and you can't really you don't
have a good way to know whether or not
that's true that's why account hacking
can be so well often funny but often
pretty devastating
um you know that's if someone gets a a
hold of your let's say you do a lot of
business through a social media account
and somebody gets into your account it's
not you that can start really wreaking
havoc sometimes on your whole life. Um
then the problem is not uh
the social media per se is not
necessarily a problem. The med the idea
of communicating on the internet is not
specifically the the like the main
problem. The problem is is that we've
we've done all this. We invented all
these ways to communicate back in like
not all these ways, but we invented a
lot of ways to communicate like this.
This this concept came around in, you
know, the Arpanet days when it was like
a defense network and all the scientists
knew each other and so of course sending
a message is just it's part of the
project. No big deal. Um finding ways to
secure that. Whoa. Like retrofitting
security is always really bad. It
>> it was never designed to be secured. It
was always
>> not in that way. No.
>> Yeah. Yeah. And this is so we've
replaced letters with emails. And the
problem there is that a letter you it's
handwritten or at least there's a
signature on it.
>> Um
>> often you can smell the guy's hand be
like, "Oh, I know I know what house this
came from because their house smells a
certain way."
>> Yes. Or indeed you'd have back in the
day when I was in boarding school a
young lady writing a letter to you
tended to dose the douse the letter in a
bit of perfume.
>> Oh when I was in the army that was like
>> Yeah
you had to get
>> Yeah. That's where you're waiting for
mail day.
>> Yeah 100%. Um not the one that smelt of
your mom's perfume but the one that
smelt of some fair rose and a distant sh
>> Oh yeah. Make make all your buddies
jealous. Anyway, uh yeah, we had all
these ways of knowing that something was
somebody. I mean, for example, I always
used to get letter my father used to
write a letter to me every week in
boarding school and I always knew it was
him and not just the stamp. I mean, my
point is there are so many points of
authentication. There was his
handwriting on the front of the
envelope. The fact the stamp came from
Saudi Arabia. Um all of these things
told you, yeah, that's that's a letter
from my dad. it is genuinely my father
because that's his handwriting. I know
it. I'm one of the few people in the
world who can read it at any speed. Um
and so on. Uh when you
when you started to strip away those
things and you had something as
anonymous as email, how do I know you
were you? How do I authenticate that you
were you? You know, you have I had this
problem earlier today. This guy uh
contacted me on uh X wanting to know
about mining. says he's runs a mining
operation in Poland. I said, "Yeah,
look, very happy to share some
information with you, but I don't know
who you are because you're not verified
on X and I don't see your LinkedIn
profile. Um, so would you mind
authenticating who you are somewhere
else and messaging me so I know you you
are you?" And the guy got into a rage
and told me to go to hell. So, I did. Um
>> no look in an era where there are you
know you were talking about spear
fishing with AI it's going to get really
really big um
>> spear fishing with AI and now that we
have these like local run you know
agents and and access to access to LLMs
that you can easily stock with um black
market purchase private data from any
number of data breaches which are
probably going to accelerate soon. Well,
they've already been accelerating.
>> Well, the the mythos point is going to
be that there will be nothing but a sea
of compromised data for us to to be
compromised.
>> So, when you couple that with, you know,
not people trying to shortcut some work,
but genuine miscreants using things like
OpenClaw to automate extremely carefully
targeted, you're totally going to
believe that your grandmother just got
sick and wrote you an email. right?
You're 100% gonna believe that because
all the cues that you could possibly
convey in it'll, you know, in bits is
going to be there.
>> Okay. So, an interesting uh segue. Um
I've only ever been caught out once by
this. Um and I I'm always telling people
to check these things. When you get an
email from a company, whether you deal
with them or not, most often if you do,
you need to check that it's actually
them who emailed you, not
blah@gmail.com
>> that they use a uh a pseudonym that you
see in the in the from line in your
email which is a major problem in how
emails work. They shouldn't do that at
all. They should force that you can only
be seen as your actual address. Anyway,
the point is
>> you get to the reply to the the sneaky
reply to headers and all that where it's
like uh really really I promise this is
Craig at totally the real company blah
blah blah blah.cn.
>> Correct. And then um
>> so what what happened was I received an
email allegedly from Spotify. It had all
the Spotify uh headings. It looked
exactly like a Spotify email.
>> Mhm.
uh so exactly that I could when I
checked back later I looked at an actual
email from Spotify and an email from
them and I couldn't tell the difference
put them up side by side on the screen
and went Jesus I really apart until I
went and checked who the message was
actually from I couldn't have checked
>> this is also why I hate HTML email
>> well I'll tell you the rest of the story
so I I had literally just changed banks
and I had made a point of changing ing
my credit card just about everywhere,
but one that I I there's always going to
be one or two that you miss. And I
thought maybe I had missed the Spotify
subscription because the email said,
"Your credit card payment has bounced.
Please update your credit card details."
>> Right?
>> This was in the week that I had been
doing this with everybody else. So, I
faithfully put in my details. It then
asked me for uh it asked me for another
piece of information which I began to
think well that why do you need to know
my date of birth? Um that's pretty
irrelevant to you.
So um at that stage
I left it blank. It demanded that I put
the data in and then I thought
is this some sort of KYC thing that I
didn't know about? Oh damn it. probably
is. And I was in a rush trying to do
other things. So I hit I I put the
details in. I hit okay. And it then
asked me for more. I thought, "Okay, now
you're definitely smelling. This isn't
good." And I rang my Visa card uh issuer
at the bank and said, "Please cancel my
cards. I appreciate I've only been with
you for a wet week, but I've already
screwed up. So please cancel all my
cards." um
and
all of the processes that the email did
and how it presented. For example, it
said from accounts at spotify.com. It
wasn't. That was just
>> like a display name, the from
>> Yeah.
And I had to click and I've always said
to people, click in and check that the
from is consistent, is correct. But I I
missed it. I was under pressure for
time. Wasn't paying attention. Made the
stupid mistake. Made the second stupid
mistake thinking that my initial
instinct was wrong because maybe
something has changed in our ever
growing list of KYC demands for
everybody that you deal with.
>> That's another problem.
>> Yeah. And uh, hey presto, I've obviously
had somebody steal my credit card. So,
and the thing is I I'm a nerd. So, if it
can happen to me, it's no wonder that it
happens to so many other people
everywhere else because they don't know
what these things happen. So it comes
back to, as you said a moment ago, where
you look at where all of this started
was in a group of people who all knew
each other or at least knew of each
other.
>> In a in a great big world in which we
really want to be sure that you are you
and I am me.
Your birth certificate, passport,
driving license, and address don't
actually really solve that for me. They
merely tell me that there are some
documents that relate to a person who
might who may or may not be you. Right.
>> Yeah. And there's ways to spoof those
personas as well. And
we're about to we're about to enter a
new um exciting era depending on your
where you lean on these things. Um
the combination of vibe coding and
automated crack exploits um kind of the
whole the whole snowball. uh you're
going to start getting actually a real
email from really Spotify
and their vibe coded back end the AI
that produced the crappy code that they
just like copy pasted in there is going
to have in it a filter that checks if
it's a response from one of their spam
emails that was sent out that these guys
don't even know about and that whole
backend the the scam backend is going to
be in their infrastructure they won't
know it that's going to happen so just
checking that it came from Spotify is
not going to be good enough. There's
going to be cracks where the whole back
end has been cracked and it is actually
running an automated scam that they
don't know about and emitting data
through some side channel somewhere.
>> That's going to become a thing.
>> Ultimately, this this all comes down to
the fact that we are conflating all of
these pieces. We're conflating all of
these things. And actually, they as an
entity should stand alone and you or I
as an entity should stand alone. and we
should each be able to say, "Okay, so
I'm going to log into my client area on
your website."
How I
I me logging in with anything that can
be used again is insane.
>> Yes.
>> Because all I have to do all somebody
has to do is capture the information
that I use to log in with you and
they've got everything they need. And
very often that becomes a snowball
because if they get access to my email,
they get access to my phone, they get
access to um my bank account, there's
all sorts of things they can then
authenticate on the back of that because
these things are then layered one into
the other. You know, for example, I want
to change my password. Oh, okay.
Authenticate to your email. Great. I
already compromised the guy's email, so
I'll just get the change of password and
put it in. Well, even even beyond that,
we've got um
Peter Harping and I have talked about
this in the past before. It's one of
these uncomfortable things people don't
want to think is true, but um
whether or not it's behaving as the
greatest man-in-the-middle attack
possible right now, it can if it's
compromised. things like Cloudflare,
AWS, and so on. There's not necessarily
any way to check, whether or not they're
acting in your interest for one thing.
Uh because capacity drives intent. So,
that's kind of a tricky one by itself.
Um and second, that they know whether or
not their system is secure. They don't
necessarily know that for sure. We've
seen that just recently. I mean, that's
why we've had Cloudflare outages
recently as they've been vibe coding.
So, we know that's pretty safe. Um
and we have the problem that certificate
authorities the motivation to compromise
any one. So if you compromise a single
CA certificate authority you've
compromised all because just because
that the way that system works and we're
pretending that DNS is secure and it's
not. Uh there's no there's no actual way
to really secure DNS. Um so there's kind
of layers to this to this problem where
we're depending on a lot of very opaque
things. uh the actors involved.
It's impossible that that at least one
of them doesn't have some, you know,
motives that were not that aren't the
ones I state. Um
I think the Snowden disclosure should
have put the final I don't know that was
the anvil that wrote the camel's back.
Uh if you were still living in the world
where any of that was safe. Um but we
didn't change anything. We didn't fix
anything. Um the incent I mean what
cloud provider has an incentive to fix a
microode bug if the fix the p like the
problem is is that some microode
optimization that makes things run 60%
faster actually opens up a memory you
know secure memory reading vulnerability
and the user can't tell that this that
they're being compromised right the the
people that are running their things in
a cloud environment they can't tell if
private memory is being read so are you
going to go add 60% more hardware to
your whole data center operation as a
cloud provider. No, of course you're
not. You're going to tell everybody that
you patched it. But they have no way to
check. So like where's the incentive?
It's kind of the joke that like don't
ever update anything. And the security
guy says, "But then the viruses, but the
viruses, they're already here.
>> They're not hurting anybody except for
the customers and they already paid so
screw them. Just never update anything."
Um, that's kind of the the the mentality
that's it's very easy to evolve that
mentality. Uh, if especially if you
start running on thin margins, things
are complicated. It's hard to keep up
with things and um then you start
getting overwhelmed by just the the
vibecoded garbage of the world and you
just give up and say, you know what,
they're throwing bags of money at us.
Let's just take the money and just not
look.
>> And that's what they do. This is uh I
remember talking to a consultant from
one of the the big names in uh technical
consulting. I won't name them because
this was a private conversation. And he
showed me uh a map of how and South
Africa had a very advanced banking
system from comparing to most places
because they had the whole apart idea
and they had to build everything
themselves from scratch and they
actually did a pretty good job of it.
Um, so he was showing me a map of how
somebody who was a customer of a large
bank in South Africa would gain not
would go log into their bank and then
ask a very simple question. How much
money is in my account right now? And he
showed me the the the network map. 27
different servers had to be pulled to
facilitate those two extremely simple
processes. And most of them they were
blackboxed a little bit like you've just
said
because the guy who designed the system
in 1995
is probably retired or dead.
>> Oh yeah. Yeah.
>> But that system did something once upon
a time and nobody really knows or
understands what it did once upon a
time. Nobody's qualified in the language
that it's written in anymore. And so
they blackbox it and say do not touch. A
little bit like you just said, yes,
there are bugs in the system, but there
are bugs,
right? But it it it
there's an emotional appeal to that. The
ability to say, "But there are bugs."
But it's not quite the same as saying,
"Yeah, he's an idiot, but he's our
village idiot."
>> Is a little is the different thing,
right? And you're we're extending this
human sympathy to like something that's
just a machine. Um, which is a that's a
different layer of like psychological
problem which is about to get really bad
because we have people
anthropomorphicizing like AIS now that
are hallucination engines and they're
like, "Oh, my AI got mad at me." It's
like, "No, no, it didn't.
That's not how this works." Um, but you
know, that's autocomplete on steroids.
It's amazing how fast people's brains
can get oneshotted by like Cliffy Plus,
which is kind of what we've got running
a muk now.
>> Well,
>> um, hold on. Uh, I I have to take you
back a second because I I had an
argument with Grock a little while ago.
>> because I said something that was unPC
and Grock insisted that I had to be
wrong. So, I pressed the the the pedal
of logic hard to show it why I was
actually correct. And it still couldn't
it could accept the logical reasoning
for why I was correct, but essentially
said something your mother might say,
which is but it was mean to say that.
>> Right.
>> But that's
not that's not that's not it being a
person. That's the person who programmed
it has very set political views and you
trampling with hate speech logic and
reason over those political views is
unacceptable and that is built into the
programming of Grock even never mind
chat GPT or Gemini where it'll get truly
hilarious and they'll probably directly
report you to the thought police.
>> Well, there's there's two layers to
that. you can have like um sort of trap
trapdo like gates in the model that you
know oh we've hit this topic and that
topic is flagged as whatever and that's
a thing that happens the other thing
that happens is that the training data
uh a lot of it's coming from places like
Reddit which we know is a um clearly a
bastion of free speech uh totally lets
any any of you go um but the the sum of
training data there
indicates that the completion for the
thing that you just wrote is this like
really annoying response and it will
give you that really annoying response
because that's the most high that's the
highest probability across training set
is this like corny corny stuff. So you
don't even need to have
the system engineers
pushing a specific agenda to get crazy
stuff out of it. especially now that AIs
are ingesting about half their train
data. It comes from other AIs and so
whatever the big signal is just gets
amplified more and more and you wind up
with like you eventually get to
nonsense. Um which is kind of I don't
know it's a we're in a really
interesting time right now but this is a
very unsustainable time. Um they talk
about sustainability all the time. They
don't forget about this form of it. how
fragile the AI like if the human economy
hits even the slightest bump there's
just not going to be any AI um that
because we we can't there's no way to
keep the lights turned on for that um at
the kind of scale that you that you
would need to do what we're doing right
now um anyway uh back to
>> it's it's it's not in anyway I mean
ultimately this stuff is is actually
pretty fundamental and
>> um you know we've often talked in the
past about how if there will always be a
market for custody, there will always be
a market for the passage of risk and
responsibility. Um, by which I mean
you and I might be perfectly comfortable
using our own wallet. Uh, everything's
self-hosted, self- responsibility, but
we probably make up one to two% of the
population. Most people want to be able
to pick up the phone and say, "I forgot
my password." or
>> Oh, yeah. Yeah, totally. And that's
>> uh my dog my mail.
>> This kind of comes f full circle where
like this idea of why do we have credit
card numbers at all today? It's a little
silly that we do. Well, what's the
alternative to that? card companies
tried in the past to do this, you know,
the the chip signature thing and they
were going to phase out card numbers,
but then online commerce winds up being
this very dominant force and there's
just no there's no way to get everybody
on board with uh buying the USB reader
thing for your card and like setting up
browser plugins so that the you know the
web shop can understand the signature
thing. All that stuff exists, but
outside of a pretty
specialized context that nobody uses
them because they're annoying and
errorprone. It's it's user errorrone.
It's hard to get set up if you're not
already familiar with these things. So
So that just never took off. So now we
have like both and and neither. Um
and we just still have credit well we
just still have credit card numbers
floating around.
Um the key
the key point of
that transaction like
when I authorize a credit card
transaction my the service provider and
the issuing bank and the credit card you
know the transfer financial transfer
network and all that's what actually
goes into motion and it's all on my
behalf. The important point is whether
or not I authorize that action. And
that's the whole point of like getting
3DS involved is to okay, well this
credit card number, but is that really
the guy that is connected to this credit
card number? They're trying to establish
that. Um
>> so this when when I was thinking this
through the first thing that I thought
about was
>> so
from trying to think h how would I
communicate this to the existing world
in a way that they would grasp. Um, I
knew that me saying, "Hey, you know
what? Credit cards are actually a really
dumb idea. You should have this public
key like this."
That that would be somewhere I could go
to in time. But it definitely wasn't
where I could start. So, I had to start
with something that was a existing
painoint that could be understood by
anybody in the audience, whether that
audience is industry or it's an
individual.
And the bit that I saw the the closest
analogy to how you could have something
that works in the process as grids was
3DS,
>> right? So, right. So the whole like the
the 3DS thing and the ACS service
whatever behind it and um
that's all operated by the same stack of
service providers that make the credit
card system work at all. And it's not
it's a way for them to defend against
fraud as opposed to being a thing that
makes them any money. And as such, it's
a cost that they could get rid of if
they begin migrating with a fourth
option, which is, you know, public key
signatures because everybody has these
um, you know, everybody has got your
mobile or the ability to get it really
easily and it does a lot of different
things, not just this one thing. Getting
people to get a one-off app is a little
bit hard. Getting them to have an app
that does a bunch of different stuff
that's more broadly useful, that's a lot
easier of a cell. Um, so giving them a
way to like
we can provide an option that doesn't
destroy what you're doing right now, but
it augments it and provides you
eventually an out from this costly
system that you're that you're stuck
into right now. While their their main
uh that whole structures um main value
ad that they should focus on is the
fraud prevention piece. Um and there's
there's ways to slide into that later
on. Um but they can keep doing what
they're doing now with this cost
reducing option. Uh which opens the door
for for better things later on. But the
whole the whole point behind this is
that um using a signature that's
requested by grids can sidestep the
problem of having dangerous data out
there in the world at all. And the more
prolific that is, the more recommended
that is to vendors,
you know, the the better things are. And
if you are able to take those instances
of authorizing a signature for a
specific action and put those on a
public ledger as a data entry, now
you've got sequence verific, you know,
in sequence verification that the user
can check, everybody can check. uh you
don't have to see what the details were
of what happened, but you can see that a
thing happened. Um and there's various
ways we can anonymize that and all that.
And there um
this winds up being kind of like in the
short term, the very near-term goal is
to get rid of this requirement that
everybody has to expose credit cards for
for silly reasons.
>> I I think so.
It's interesting because if you you go
into the rabbit hole of 3DS and you
think, okay, so how could grids replace
that? Or at least this was this was my
mental flow this morning. How could
grids replace that? Well, it would do
you'd fit it here and then it would I
was trying to think of the the process
from an a card issuers's perspective,
from a payment service provider's
perspective. What is it that they're
getting? What is it that they're losing?
What is the benefit to them? or
alternatively what is it that they lose
that they don't want to lose for example
it's a revenue stream um
and ultimately 3DS
so when it goes off on my phone it will
ask me to confirm a transaction is me
and on some of them not all of them it
will do a 3D um it'll do a a
confirmation of my face like Revolute
for example will ask me to say yes it's
me and then asked to confirm
biometrically that I am me. Okay.
>> That's not actually necessarily part of
3DS, I don't think. I think that's
specific to something they do with the
secure enclave of the phone, which is
where my visual identity is is held.
>> Um so then you you you go a step beyond
that. You think, okay, well look, um 3DS
would certainly certainly it does a
thing in this process. Maybe that's
where grids can replace that and create
a heightened level of of security. But
actually the bit that you really need to
get to is where you've just gone, which
is yes, all good and well, but actually
the thing that we shouldn't have just as
we don't want login and passwords in the
public domain, which is what they will
be in 3 to9 months from now.
Effectively, every login, every password
is going to be in the public domain.
Mhm.
>> So we don't want credit cards in the
same vein. We need them to come out of
the public domain and that they be
something that
I can authenticate. I wish to to do to
utilize. So this is where we we tie them
into the public key,
>> right? Yeah. The the public key and
having
um I mean that this is still in the in
the realm of of the fiat system that
exists. do taking what they have right
now. Don't tell them you have to get rid
of it all. Tell them we can do this
better and we can, you know, we can help
you do this better, but it's not a
oneoff. It's an entryway into something
much much better, which is a much bigger
cost reduction over time and helping
them get into a place where they can
focus on the big value ad that they
provide instead of having to be an
expert in 15 different things like
they're having to do right now. Um that
that does get more into like you know
God and the reason that the structure
works the way it does and all that but
um but the short there's a short-term
win that's unequivocally a win and but
it's the kind of win that's a seg it's a
seg into something better over the long
term. it's instead of just being a
one-off, which is kind of what the let's
do the chip signature thing. That's was
kind of a one-off, like how do we just
solve this one problem? Um, and then
that didn't even work out. But instead,
we can fix that problem and the follow
on keeps getting better uh over time.
So, there's I think this is a lot
better. It's hard to I don't know find
the right words to kind of
I guess pitch. We need to maybe look I I
I I know exactly where you're going. I
mean, this is the conversation I had in
the boardrooms of Barclay's uh HSBC,
Royal Bank of Scotland, and Bank of
Scotland 25 years ago. And what I said
at the time is, look guys,
digitalization is going to end the the
the game that you're currently playing.
The game you're currently playing is you
have a ton of infrastructure and you
think that infrastructure is your asset
and your plan is to extract value from
rent from the operation of that
infrastructure by your clients. Uh and
and then to be able to sell sell them
value additive services on top of that
where you actually make really good
money. Um, but the majority of the stuff
is tight, thin margins. And let's be
honest, this was true. This is as true
now as it was then. The banking system
is systemic only in its risk. There's
nothing systemic about the banking
system. Most of it is, as I described
two years ago on a similar conversation
between you and I, it's back office
people essentially being the boy
sticking his finger into the hole in the
dam all over the place all day long.
>> Right. And it's insane how much of the
workload is still being done by that.
The assumption that that can be done
with AI, by the way, you want to talk
about putting AI into the wrong
>> context
>> is is wild. Uh the idea that you can
say, well, hold on,
>> there's only so many cases that tend to
happen in this regard. So if we just
program it to do this, but you're
assuming that it doesn't hallucinate.
This is again my issue with the cyber
securityurities industry's response to
mythos is oh we'll just get some more AI
and it's but guys you do understand that
the more AI can hallucinate and while
it's okay to hallucinate and fail as an
attacker it is not okay to hallucinate
and fail as a defender because that's it
you're compromised you're dead you're
gone. Um yeah, for those who like
cricket, the batsman can never miss. The
bowler can miss all day. He only has to
hit the hit the stumps or force the
batman to batsman to make a bad
selection in his shot selection once.
This is why batsmen tend to be the ones
that are celebrated because they're the
ones who cannot be wrong. If they're
wrong, they're out. And this is the same
for for this. So um yeah the the
argument that I I tried to make to the
uh guy from Mastercard at 0 forum last
year was look a lot of what you do is
actually this this colossal
infrastructure it's super expensive to
maintain. It has so many complexities to
it. If you used a common open framework
that you build from scratch today, you
can actually get rid of so many of those
issues within that system and focus on
where your real USP is, which is
>> fraud prevention and fraud detection.
>> Which is what you were getting to. I
think that's that's the kind of
conversation we need to have with people
is understand that capitalism is not
about the aggregation of control and the
extraction of rent from control. That's
corporatism and it's a different way of
operating. Capitalism is you add value
and you get paid for the value you add.
But that also means that you probably
make a lot more money because you're no
longer having to constrain everybody
else from how to make money.
>> Yeah. because they can focus on actually
what you know they can I guess they can
re rediscover what their core business
really is. They're so wrapped up and
like it's funny how you can
once operations kinds of take kind of
takes over your business. You're no
longer driving your business anymore and
you're you're not trying to create
success anymore because you've already
got some of that. You're just trying to
not create failure and any change feels
risky. Um, but I think the biggest I
mean the belief that you're going to be
able to outrun
you know digital currency changes that's
silly. The idea that like things that
can't go on forever eventually stop.
That's just a b you know baseline rule.
Um, now the world's pretty a pretty
irrational place quite often, but it
just is a fundamental
you know, we're working in this space
where things eventually have to move
regardless, but it's very uncomfortable
being where we're at right now because
it's hard to con none of the sto like
we're having a hard time finding a way
because everything's connected to
everything. It's hard to find a good way
to collapse a story down into a single
proposition sometimes. And so having
these conversations to kind of figure
that out is important. Um, and it's hard
to sometimes it's hard to,
you know, find the way to to chop the
story down just to the proposition for a
specific uh target use. But this is a
pretty clear one. Like bottom line,
letting credit number credit card
numbers run around the world is insane.
Let's stop doing that. This is a way to
stop doing that. And it has a long tail.
Um I guess that's the coupling. We can
get rid of credit cards with credit card
numbers using the same service that's
being provided now. And this particular
this version this particular form of
that transition has a very good long
tail. Um those would be the the the
points that I would want to be able to
convey.
Uh the details of it. Yeah, it's this
thing that we have called grids. um this
is the system that we have to implement
that and all that, but that system is
sort of the gateway to this bigger thing
that comes later that you definitely
want to be a part of and we would like
them to be a part of because they're
experts in fraud prevention and we're
not and it'd be great to have them
around. So, um those are I don't know
how to put that into a deck because I'm
not a business guy, but um
>> it's really hard. Um
>> okay. No, honestly I I've been trying to
do this uh for the since the mythos. So
basically my workflow in terms of things
I must I had to get out that were in my
stack was number one um I had to get the
I'm still working through all the
chapters of the unweight paper that need
to go in there. So the one I was going
to get to next was the layer ones and
the test I have for layer 1 ones, the
six form test I have for layer ones to
determine how they fit with things. I
really wanted to push the T aspect,
trustlessness, efficiency,
accountability. Either you're trustless
or you're not. If you're not, you've
compromised for efficiency. If you have
efficiency, you must have some
accountability. Oh, you're a layer one,
therefore you have none. That's the
entire point. Got it. Um
so I was working through all those
things. I was also trying to look at
fundraising uh how we can regain some
momentum with gaja mining sales and then
anthropic came out with the news that
they're going to cut off openclaw. I
think it I'm not going to say the number
it there's some absolutely huge number
of people who have been using openclaw
and there's a factor on top of that of
the number of people of the number of
machines running this. So one of the
reasons you can't buy an Apple mini
right now without sitting on a waiting
list for 8 to 10 weeks is because all
the people buying these things are
running them on Mac minis. Mac Mini M4,
the very thing that we were recommending
to everybody to mine on. Uh, similar,
you know, they're actually a great
little piece of of hardware and they
they have all the software you need
built in. They're good. Um,
so what happened was Anthropic said,
"Okay, look, these guys are actually
using about $5,000 worth of compute and
we're only being paid $200 for it,
unlike open uh sorry uh open sorry, I
should never call it open AI because
it's not open. It's very opaque and it's
very dark. But um let's go with chat
GPT. So chat GPT can continue to pretend
that these issues of compute cost versus
revenue don't exist because they got a
300 billion subsidy for their compute
cost from Oracle.
yeah, this is the classic Silicon Valley
model, by the way. make it so hard for
anybody to compete with you that the the
gulf is just an enormous wedge of money.
And even if they do compete with you,
you have the too big to fail argument
down the road, which is just about where
we work went, by the way. They they were
looking for bailouts in various places,
too. Anyway, uh by the by the wonders of
the corporatist uh machine and the cheek
they have to call themselves venture
capitalists. Uh I I that that is almost
as objectionable as open AI. Anyway, um
I actually saw this in two lights.
Number one, I thought this is an
industry coming of age because they're
realizing that they have to make they
have to make money. They can't just
continue to burn shareholder value. Um,
and two,
and I appreciate that Amazon proved that
you can continue to raise money ad
nauseium for a long time, but I think
there was a a bigger picture plan that
Bezos and co managed to convey to
shareholders through that process, which
is a slightly different thing. But
anyway, I digress. Um,
with that maturity that if we sell you
$200 worth of compute per month, we
would really like to that to only cost
us something like $50 to $180.
When it's costing us 5,000, that's no
good. So, we're going to move to a model
where you will connect your API and we
will actually bill you for everything
that goes through. And as you and I
know, there's no way of that working
with the existing fiat systems. Doesn't
work with stable coins. Doesn't work
with any of it. It's the idea that any
of this can actually fulfill the demands
of the machine economy is, as I put it,
the last wheezes of the corporative
system trying to to to get their pension
plan topped up. Um
>> yeah there's no there's no uh
there is no we have well I say there's
no we have
I think the sol actually nobody's
implemented this but us so we have the
solution to that
>> no it is the it is the only because you
you need a you need it to be money
>> so we we
>> some foundational problems exist
technology aside
>> and then once you get through all those
points you then have to um to and do you
have state channels that can operate on
a proof of a genuine proofof work
resource layer? Yes or no?
>> Do you have state channels that exist
outside of just a document repo because
nobody went to the it's pretty hard to
do them right. It surprisingly hard to
do them right. And you don't know that
until you try it. And so everybody's
like well we'll just talk about it
instead of do it
>> And then Ol is over there not realizing
that's the game and he actually did
them.
>> Yeah. So the we have the solution to
unlock the machine economy, not
machines, the machine economy. And so
that immediately caught my attention
that I was like, okay, so there's
hundreds of millions of clawed bots in
operation. This these should all be
miners. What they can do is they can
mine gaz. as they're mining gazus,
they're essentially covering their cost
of operation to run this economy, which
would be anything like, for example, a
search. So, I want to know if there's a
coffee shop near me who served bagels.
>> That shouldn't be something that I give
to Google who then send advertisements
back to me and send me to a coffee shop
5 miles down the road because they paid
more to be at the top of the list. That
should be information that I actually
receive that is accurate and I pay for.
This is the thing about web 3. It's not
all the stuff you've been told. It's
very simple. Web 3 is the world in which
you do not give the world your
information. Instead, you pay for
services, utility as you use it, as you
find it, as you use it. So, this could
be absolutely tiny little payments that
need to happen extremely quickly between
points.
We could actually moni like we could
actually um
that like this works so well that we
could actually have charges per token
like we could rate per per token. That's
how fine
>> I gave the example of Uncle Buck when we
were talking about this on on a team
chat and you said well actually there's
no reason why as you're streaming Uncle
Buck you're not paying per kilobyte.
>> Yeah. Per key frame. Yeah. You could you
could literally charge per like that's
that's the model people had in mind
before which was like oh I want to micro
payments mean that I should be able to
click per page going through a website
but actually the entire the entire like
web model is backwards. We should be
charging up front for broadcasting data.
This is what's gonna This is the only
thing that'll save AI but from itself.
By the way, um AI is going to run itself
underground because the subsidy can't go
on forever unless you want to
hyperinflate the whole economy for AI's
sake, which is stupid.
>> Hold on. But they do. Good old Elon has
come out and I'm normally a fan, but now
he's come out saying we should just turn
everybody into slaves because he's an
advocate for very generous uh what was
the
>> people will say that he said that
>> Universal show. No, he did. He did on
Twitter. He promoted the idea that we
should have a very generous universal
social income scheme. Uh to which my
response was that's called slavery,
Elon. Um
>> well, especially if you more properly
define slavery as a state of dependency
instead of servitude. Um which is the
more accurate definition. Uh people
don't like when I say that because they
haven't thought through it yet, but
that's really it.
>> That hurts.
>> Um yeah. Well, yeah, that one that one
that one stings a little, but um the uh
the realities of the fact that we this
is not unlocking an unlimited uh
production machine. like that whole idea
comes that whole idea comes on the back
of this of of what I believe is a
delusion that um we've got some
interesting tools but no tool yet has
been so good that it's a perpetual
motion machine and
so you just so UBI doesn't work you're
just always going to have scarcity
that's just how it is. Um
so in that vein you should be charging
we should be charging for broadcasting
data as opposed to trying to monetize
the view. Now you can also monetize a
view something you can't do that but you
have to charge rather than subsidize the
broadcast of information because it's so
easy now to when it was limited by
people typing on keyboards like how much
junk went out um you know you could kind
of overlook it but now we're at the
point where you can just crank up
millions of models to just dump junk to
the point that that's why I said the
email one of the reasons I was saying
all the public uh free to post services
um image boards, forums, email, anything
like that's going to become unusable
soon because it if as long as we're
subsidizing this, it's going to become
unusable because it's too easy to just
dump junk and then reshape all the
narratives around whoever's got more
money to dump junk. If you charge
teenytiny fractions, it'd be like if you
charged a half a penny for every email
sent, spam would be impossible to do.
Let's look at it in the context of a
Gajimar transaction. On a Gajmar
transaction, when you enter it in, you
have to say how long you want this to
maintain for.
>> And you pay for it. You you will pay for
it, right? Then
I want to send Craig a message and I
want it to stay on chain for 50 years.
It's not going to be a simple spend
transaction fee. It's going to be quite
a big fee because I've got to pay for
that data to be held for all of that
period.
>> This is this is a grown-up behavior. So,
let's take a look at the platform that
we're on. This is going to go out on on
YouTube
>> there.
>> Is it how many is it quintilians of
hours of video on YouTube?
>> I think it is. It's into the quintilions
of of hours of
>> it would have to be. Yeah, it's it's
going to be something silly. It look
>> which is all stored on databases and the
majority of it is complete rubbish.
So
>> take us as an example. We're going to
put this out. I think we have about 200
subscribers on our channel. So we might
get a 100red views, maybe 150 views in
the immediiacy. But as a company wanting
to get these ideas into the world and
YouTube having a good search algorithm
that works off the content of the video
very very well, we want we would be
willing to pay to put that that video on
YouTube if they asked. Mhm. But they
they don't they have that
>> and and eventually if it gets to the
point where people say, "Oh, we must go
back and look at what these guys said
way back when, or this could be an
interesting exercise, then we might
actually get our money back." But
actually where we really succeeded was
in getting ideas that we have out into
the world because I just side topic we
put the unwite paper out and a few
articles by you and by Peter and you
said that the LLMs were going mad for
our data because it's all new. It's
something they've never seen before.
>> Yeah. So yeah, it it uh the perplexity
score of our content was very very high
and then the cluster of
the like the topical clustering of
everything that crosses even going into
like personal sites across to the
company stuff there there's a there's a
tight cluster because we've all been
thinking and working roughly in the
space for a while. So our personal lives
and our work lives are all kind of
squished together. Um but that's formed
a cluster naturally and so if one of us
says something over here and then
there's a relationship to that over here
um that that strengthens the cluster. Uh
but we have a very high like authority
score and a very high perplexity score
because we don't we don't use like we're
not using LMS to write our stuff. We're
not we don't have like a you know this
you know you can like push a button just
like make a website that like I want a
dinosaur website and it'll just like
write a whole dinosaur website. Um but
it's got nothing original on it. And
so when an LLM is reading the content
consuming the content um there's two
problems that come up. One is if it's
using like a web framework like View or
React or whatever what it actually sees
is not the content. and sees the
JavaScript
application that would be running in
your browser that would then show you
content and it has to make a decision.
Is it worth it for me to run this or
not? And most of the time it goes nah
and it just doesn't. So it never sees
the content. It just sees the JS. It
goes throws it away. If it does run it
and it starts getting the content as
it's reading the content when when it's
in training mode it'll start saying well
okay so I've seen these tokens up to
this point. what's the next token likely
to be? It'll make its own prediction.
And if the token that actually occurs is
what it predicted or is close to what it
predicted, it goes, well, that's very
low perplexity, which means it's for
it's only reinforcing the the learned
model that I've already got, so I don't
need this is like lowquality data. It's
probably LLM generated is what it winds
up concluding. Um, when it encounters
our stuff, we have our own way of
phrasing things. We've got kind of our
own internal lexicon for a a whole ton
of different ideas. Um everything from
novel structures in our our system that
we had to have words for so we made them
up to you know social social structures
we've discussed kind of like you know
the idiocracy thing where like Moses was
not sure. um phrases like that never
have occurred anywhere else and so the
AI is constantly surprised and that
makes it uh rate the source very high
because it's both coherent and it's
hyperplexity in terms of next token
following. So um to to your point um
something interesting that I I found
writing the unwhite paper is I wanted to
make it readable by anybody. So I would
give it to Claude and to Grock and ask
Claude and Grock. I would tell them you
are a 18 to 40 year old person of above
above average intelligence and high
school lever. Please read this and tell
me what you found hard. And when it was
relaying things back to me, it would
consistently make mistakes that were
related to what it expected to see next.
So it would constantly refer to the
Gajimaru as infrastructure. And I kept
saying, "No, the gajimaru is not an
infrastructure. It's an architectural
model that has within it a resource
layer that then connects
infrastructure."
And that it never got it never could get
that into its head. A little bit like um
I posted this on LinkedIn about a year
and a half ago. I was trying to draw the
analogy that I was writing. I've I've
written tons of things that I've never
published. um in part because that there
was never a platform that I thought I
could publish on. I know Substack is
there, but it's it's it's not the same
as scrolling notes and so on. Anyway, um
I was trying to draw an analogy for
people to get the idea of why Bitcoin
and Ethereum were great proofs of
concept, but they didn't actually work.
And the thing I hit upon in my head was,
okay, well, they're like square wheels.
And so people have tried to turn them
into polygons by cheating and having
so-called layer 2s, which actually don't
really work and are highly centralized,
but uh, pardon the pun for polygon,
but I went to chat GPT to get an a a
picture to convey this because, you
know, they say a picture is worth a
thousand words and it could not draw
square wheels. It could make everything
in the picture square apart from the
wheels. They were the one mean it could
put squares inside the wheels. It just
couldn't put the wheel to be square. So
I gave it a picture of a bike with
square wheels that an artist in in in
the Netherlands had created. I then gave
it a video with uh screenshots of um I
forget the guy's names. They were a kind
of a a a crazy experiment group in the
US who used to be on Discovery Channel
and they did this experiment to find out
how fast you had to drive a pickup truck
with square wheels before it stabilized
and became
>> Yeah. before it it became like being on
on round wheels. So the answer was 120
something miles an hour.
>> God, I bet that was kind of fun but
spooky.
>> Yeah. Um anyway, I I gave chat GPT all
these prompts, all these bits of
information. I said, "Now you understand
what a square wheel is." "Yes, I do."
And blah blah, it would come up with a
wheel with a square truck,
>> It just No, but this is the thing. So
you the point you're talking about
perplexity actually is very true because
all of my experiences deal with AI, I'm
not saying that AI is useless. I'm not
I'm not in that camp. I think it has its
uses. It certainly is good to to try and
uh
it is very good at suggesting pathways
to simplification of language
which I think so even when I've read out
even when I talk to people about our
videos they tell me that they're way too
complex and that we talk in terms that
are very inaccessible which is a
headache because that's not our
intention and when I'm trying to write
I'm trying to write in a way that is
accessible is conscious of that idea. So
this is where I found them very useful.
But it could never write the thing out
denovo. Not ever. Because everything
that it has been trained on is vast
amounts of output which is the only
thing that layer ones and layer 2s have
ever been good at is marketing and
they've put tons of it into the world
which all these LLM are trained on. And
of course everything we say is the
antithesis of what they've said. Even
the the Buterin uh blockchain trillemma
which I threw out
>> I think it's chapter 19. I just go no
that's complete self-s serving trash.
Let me show you a real triangle. It's
accountability.
Anyway, uh gone a long way off topic.
Coming back to the uh
>> never.
>> Yeah, sorry. Um I know it's very late
your time so forgive me. I I'll I'll
wrap this up quickly.
what we've done in everything and I say
we you guys you guys have built all this
stuff out um my kind of contribution was
the infrastructure connecting to a
resource and all that infrastructure
being owned by the people who run it.
Um, you guys did all the other pieces
within that. And something that has been
a northstar for all of you all the time
to the point that I think Ol has it
tattooed on his body somewhere is the CI
speech about uh complexity and
simplicity. And what that really boils
down to is the separation of concerns,
the separation of issues and deal with
things separately. And if you look at
anything in the world and you see
separate issues being conflated, there's
the reason for it is usually to create
the famous moat that venture so-called
venture capitalists in Silicon Valley
love so much. Because by creating all of
these aggregations of pieces,
you actually make something quite
unassalable from a business perspective
because you're quite willing to take
massive losses here, here, and here just
so you can make some money here,
>> which then becomes a really hard
leap for anybody new to make.
>> I'm still in awe of discovering how much
of a moat
some sneaky folks kind of went to a ton
of trouble to get, you know, push hard
politically on all kinds of weird
regulation stuff and then they just
built it the best mode ever for us,
which is like I guess thanks, but
um
that's wild. Uh but it comes from this
dynamic of kind of like not I guess it's
a re what a rentse seeeking sort of
impulse
where they're like oh we'll regulate the
competition out of existence and then
everything's ours
which is nuts.
>> It's it's it's not just that. It's
>> yeah that's where they go when they get
a little bit bigger. We saw that with
the um
I I had gone over to Washington for the
Trump inauguration and uh I was hoping
to get an invite to the blockchain
conference that then followed with I
forget who it was that was hosting it.
Um I think they got a picture with
Trump, but I'm not sure he was involved
in the actual I'm pretty certain he
wasn't involved in the actual
conversation. And we subsequently heard
about what had gone on in that
conversation from somebody else. And I
wrote a little spiel essentially saying
corporatism, corporatism, corporatism.
Every single thing was let's find a trap
door and pull it up behind us and just
pretend that we are decentralized and do
that in such a way that it allows us to
have this decentralization theater uh
which means we can have some efficiency
but absolutely no accountability
whatsoever.
the fact that no one's layering that the
problem the way that we have like it's
well this goes right back to separation
of concern. The fact that that's not a
thing that's happened
uh anywhere else is really surprising to
me. I keep thinking that like we just do
the most obvious thing at every step
possible and so oh someone's going to
come up with this next and then like
nobody ever does.
Look, um, when I finish part four and I
get the, uh, layer one analysis in there
and I get a few of the case studies in
there, I know the guys are working on
the black paper for the Ethereum
ecosystem. Um, I intend to send them to
every regulator I can find an email
address for
and just say, you are now on notice. You
have no excuse ever again to turn a
blind eye to decentralized theatrics. Um
>> there's gonna be some some big I told
you so
>> some colossal ones. I had someone
message me the other day saying that the
SEC or is it FINRA I can't remember
which have said that uh
quite a few activity. So there's ah this
is another topic another day. Basically
the SE the SEC/FINRA are behaving one
way and the FCA another. And I think
both have got it wrong for different
reasons, but that's a that's a whole
other conversation. It's super nerdy as
well. Um anyway, fight the bite. Uh the
thing of it is at the heart of
everything that that we've always
striven to deliver is this idea that you
separate concerns, you separate issues.
So an obvious one in that context was
grids because it separates out the the
key issues and that then lead led to
various other directions you might take
this in. And the question comes how how
could we address the vulnerability in
the credit card system and the payment
system? And if it's a payment system
where you're logging into your bank and
you're saying, "Please send my wife a
thousand dollars, yen, euros, whatever,"
that's a relatively contained problem
that grids can address immediately in
exactly the same way that it does on
Gaji mining, as I showcased in the
little demo video. Um, you log into the
secure area using grids. You don't have
a login and password. You confirm that
you wish to do a transaction that you've
created the instruction for. You sign
the instruction and again works
perfectly. It's a very easy connection.
When you start looking at how do we do
most of our online transactions, it's
not just the retailer side of that which
is do you have an account with us? No.
You know, you can do it without needing
an account but most people end up with
accounts.
You then have all these threat vectors
coming up and you look at the card
system and you think, okay, well, how
could grids help you? Well, maybe the
3DS piece could be a help. Maybe that
can work. A and then as as we both said,
you end up in this rabbit hole where you
say, well, why do you have the credit
cards in the first place? Surely, you
should just link them to your public
key. And your public key is something
you can authenticate. Nobody has to
know, as you put it, they don't need to
know that you have the appropriate
password, utility bill, etc.
>> Yeah. It makes writing the backend
system so much nicer, too, because you
don't have to worry about like, you
know, oh no, what what if somebody
steals our customer data, but we only
have their public key, so who cares?
like there's not,
>> you know, like none of it's a now
there's some there's still gonna be some
private like user data or whatever it
depending on what you're doing, but
being able to get rid of the burden of
of username, password combinations for
one. And then our system never has to
touch a credit card number ever, not
even in like an inset frame from some
other web service or whatever. And then
we're always worried that browsers are
going to have some weird like peak
through, you know, iframe workaround
attack or some cross- sight, you know,
CSS vulnerability that our web framework
wasn't done or we just rebuilt our
stupid React website and there's an npm
attack and so it's just actually
siphoning data that anybody enters
anywhere. Um, and you just you don't
know because you can't there there's
like 19,000 dependencies just for hello
world in that. So, are you going to
check them all? Cuz like, no, you're
not.
>> Um, that's it's we just have the
craziest stack of garbage and the only
way to deal with a garbage world is to
not put anything valuable in the
garbage.
>> And
>> but most of that garbage evolved because
they were trying to get
>> essentially a a dog to do a horse's job.
>> Um rather than say, "Hey, you know what?
This is a dog. Uh we need a horse. Let's
let's build a horse." They just
continued to layer things on top until
it stopped being a dog and wasn't very
good at being a horse either.
>> Yeah. They made a bunch of leggers.
>> Yeah. Uh so
in the context then what we're talking
about actually somebody opens uh they
get a grids system set up which would be
gajuesk right now. When they go into
gaju desk they create an account that
account then has a public key. they can
share that public key with anybody and
they can authenticate transactions
through that process. So somebody like
Visa, Mastercard or a bank issuer or a
payment service provider could actually
connect their unique identifiers to that
public key. Mhm.
>> Do you want to take that just explain
that a bit further and then we'll we'll
we'll bring it to a a close
>> for
from the like the payment service
provider or the vendor whoever it is
you're talking to. Um if you've already
got an account with them then you've
already got a way to authenticate with
them. Adding a key to that that account
sort of a cluster of data is super
unambiguous.
You authenticate with them the way that
you've been doing it up to now. Then
they give you a random message that
can't be repeated. You know, give give a
random message to sign. You sign that
data, send it back to them. That
signature return has your public key and
and the data that you signed and the
signature and it all goes back in a blob
and they can verify it right then. The
first time they see that key, they go,
"Oh, well that's this dude's key
obviously because this is where we are."
In fact, the message they're signing can
be they're going to sign a timestamped
message that has your user ID in it. So
like make this unambiguous
>> content data point. So for example, it
could say
>> buying from pennies. Uh
>> well that's during a transaction. I just
mean to add the very first step of
adding like how does Visa know that this
is me? Mhm.
>> Like the very first step, I can sign my
username with a time stamp or whatever
and they can it's completely
unambiguous. And from that point on,
what's it mean for a vendor to request
authentication of a specific action?
Well, the thing being signed, like you
said, it can be the details of the
action or a hash of the details of the
action if we want to anonymize it. Um so
there's no there's only one way to get
to that hash which is through all these
details and that you know we could that
can be that's an implementation detail
from the perspective of like of how the
technology works but um it's completely
unambiguous there doesn't have to be
nobody has to handle any scary data at
all except in the back end of I mean you
don't want the back end to get cracked
but
>> the thing is when you look at it like
that I was I was asked this question the
other day and I gave the example of Bank
of America so I said it was a in Texas.
So, I said, "So, you want to send $1,000
to your mother in El Paso. Uh, you log
in to the Bank of America site. You that
means you're going into a secure area."
Now, that secure area has to be on their
server. So, they have to still have your
data, your name, address, all that
information.
>> But the only access point to it that is
external facing is this public key
facility. That's it. There is no other
way it grits,
>> right? There is no other way to make
that connection externally. That's how
you kill the threat vector. Um,
>> in fact on
>> in fact on uh I believe it's true on
both of the No. Okay. We have we have a
few input fields on gajumi.com but if
you go to gaju market
there's no place to even input text
anywhere right now until like until we
do the search features later. But
that'll be there'll be a search box that
you can type into, but there's no inputs
anywhere in the system until you've
already done an authentication and that
makes the security model very easy to
reason about. Thank goodness. Um,
>> yeah,
>> that's that's just a huge like, you
know, there's a bunch of dumb web stuff
that you got to get right because the
web's crazy. But other than I mean that
pack of madness, that's it's at least
well understood madness. But that pack
of crazy stuff aside, you don't have to
worry about like, oh, what do we do
about uh people doing like repeated um
trying to log in like 10,000 times per
second to just iterate through passwords
or something. You don't have to worry
about any of that stuff. Throttling, you
just don't really worry about most of
that stuff.
>> that you normally would.
>> What you'd end up with is a state where
your public key becomes your credit card
for an from an online perspective. you
will still have a credit card for using
in the physical world and that's not our
concern. That's not our issue. The point
is that and actually
>> with country mobile you can still
>> you could they can use the exact same
payment method like because we've got uh
these
you know these these terminal
integrations now where well at least
where I live where like we could write a
an app spec that would do the exact same
thing that you would get online at the
register. Um, now there's things we want
to do
>> the need for the card altogether because
then your phone
>> Yeah, that's my that's my point.
>> It can't get stolen if it doesn't exist.
>> Yeah. Perfect. So, uh, the the the thing
is, and this is goes right back to about
an hour ago when you said the question,
I have no idea how I put that into a
deck. And that's exactly what I've been
struggling with because I I want to tell
all these people I want to go to Visa
and Mastercard and say, "Hey, this is
actually something that completely
transforms your your your model." Um,
and not in a bad way. You know, it's
like that are you sitting down thing
where you you want to give someone the
bad news and then the good news. Um, and
the good news is, well, actually,
you do these things incredibly well, and
if you stop trying to get hallucinogens
to do it for you, you could just focus
on doing that unbelievably well, which
is fraud detection and prevention. And
you should charge all of the people
involved in the system for that service
in much the same way that you charged
them in the past for providing the
payment routting.
Like there's
what we're doing with other like payment
services and things those are very
immediate
uh you know if you let's say you pay the
register with God you pay instead of a
credit card that's like that's done. Um
you better hope the vendor is when you
when you want to register for a refund
right that has to go through a process
on their side to pay you back. There's
no nobody in the middle.
There's a lot of business opportunity
for somebody to be in the middle of
that. So integrating with this on the
fiat side opens a door to integrate with
us on the blockchain side and bringing
things like fraud prevention to
blockchain services. I I think we're the
only chain anywhere that can actually
open a space for that just structurally
that we have the ability to do that. Um
that's huge like really really huge. So
be integrating with that on the fiat
side opens this really good door to
moving into the crypto side, but going
into the crypto side lets them focus on
their their main service provision. Um
their their money-making part where they
get to charge fees for doing something
that that actually adds value. Um, I I
think it goes back to this moat thing of
everybody's focused on how do I exclude
everybody else rather than how do I stay
ahead of everyone else, which are two
different questions.
>> Um, Visa, Mastercard, Discovery, they've
all got
what? Visa. No, the first one was
Diner's Card, right? And Diner's card
was
1950s.
Am I right?
>> I don't know the history.
My guess is they've got 60 to 80 years
of data
and experience and knowledge that they
can apply to understanding where the
vectors of these things are. So if you
want to look at a large language model,
they have some of the biggest best you
can possibly imagine when it comes to
any and all of these things. Um,
to your point, this is where they focus
their USP and it's where it'll be
extraordinarily hard for anyone else to
catch up with them ever again. Um, any
parting thoughts before we close down
for the night?
>> Uh,
no. I think that I think there's a
really good I I didn't think about this
in the context of credit card numbers
being a thing that still exists, but
this is like an a pretty obvious case
where
not just that we have a thing that fixes
the why do we have credit card numbers
still problem, but that has a a very
long fat tail that's good for these
particular providers. So, I think this
is actually really good. It's a fit.
it's a good fit in terms of like
integrating a good solution and that
integration leads to better things going
on not just this one problem but leads
to good things for that industry as a
whole. Uh I think that's really yeah
that's a really good one.
>> I wish I thought of it but I get no
credit for this one because I didn't
come up with it. That's a perfectly your
your thought while trying to buy a phone
case came into this and it's great that
that that happened.
Well, it's nice to get credit for once,
too, because normally I have I just have
to point at you guys and go, "No, no,
that's them. That's them."
>> No, putting these two together, I didn't
think of that at all. And it's it's
really like it's funny now in retro like
a lot of good ideas float around the
team, right? In retrospect, you're like,
"That is silly. Why do we even
>> why is everybody still doing this at
all?" But look, the thing of it is it
was fresh in my mind because I've been
writing all these uh letters to
different people, legislators,
regulators, banks, payment service
providers, critical infrastructure
providers. Uh it goes back to Salt
Typhoon. Um about year and a half ago,
uh a guy contacted us about Salt Typhoon
and said,
uh could grid solve for that? And I
said, well, yes, in so far as that when
you initiate the conversation between
two points, you authenticate that way. H
what you don't do is you don't have like
a, you know, a telephone call where the
whole thing it there's no grid doing the
whole telephone call. It's starting it's
initiating the call. You could have
>> rightick initiating the Yeah. it's
initiating the email. And um
the guy didn't understand that uh that
he thought that the whole thing had to
be secure. He didn't understand that if
the access point to the conversation
doesn't exist anywhere but between the
the parties to it that it's not
hackable. But
>> yeah, anyway, Craig, thank you. Good
night. God bless all. Byebye. Baker.
