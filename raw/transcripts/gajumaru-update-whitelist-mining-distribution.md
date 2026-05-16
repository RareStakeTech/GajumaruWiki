Kind: captions
Language: en
[Music]
We're on the cusp of releasing Gaju
mining software as a service uh which
will allow anybody around the world to
install the software and participate in
the mining of the Gajimaru blockchain.
um easy to say um and was really easy to
say back in October when we came to the
conclusion that this was the best way of
getting as many people as possible
engaged in mining before we opened up to
public access and we're continuing to
develop the Gajimaru for final release.
Um at that point we did think it would
take somewhere in the region of two
maybe 3 months at a push to uh get to
this point and 10 months later we can
confidently tell you that we were
totally wrong at the time. Um however
the upside is we have done something
really phenomenal. I say we I was really
just uh dealing with other dragons
whilst these guys tried to slay that
particular one. Um, so with that I I'll
pass across to the guys to talk about
what we did and how we did it. Uh, and
and I think we can also discuss the why
we did it. So the I guess we could start
with why. We're trying to solve the
problem of bootstrapping a currency and
we care about it as a currency. We think
about it as a currency. The problem is
distribution. How do we start with a
fully mined digital asset that is an
asset, it's in the asset class? Because
it's fully minded. It doesn't come from
somewhere else. Doesn't represent
anything. It's self-reerential, which is
the primary innovation of cryptocurrency
as currency is that it's a
self-referential
form of money. So, how do we start with
that from zero? No seed wallets, no
magic or anything like that. um and also
get broad distribution because if we
have all the coins then it's not in
circulation which means you can't do
anything with it and then it's not
money. Um so how do we how do we solve
the distribution problem? Uh and also so
that's one one problem distribution you
have to have broad distribution for a
currency to be current. The other
problem on the technical side is solving
the mining problem which is that there's
no shortcut to uh blockchain consensus
with regard specifically to the minting
function of money. The root problem is
is that the minting function can never
be in the hands of a few people. We had
some design choices to make. So it's a
little bit like a car. You don't magic
cars into existence. You have to build
these days a subframe to which you
attach the engine, the gearbox,
everything else. And all of those things
have got to be designed, engineered,
built. Then you've got to make sure that
they all work together as intended.
The same is true of anything that
requires some engineering. And that is
true of a proofof work blockchain.
On the one hand, you can't push updates
if you go public because you've got
miners who are completely in independent
of anything and everything you're doing.
You've no control over them. You've no
ability to push updates and make them
implement those updates. Therefore, the
chain just begins to splinter. That's
issue one. Issue two is actually mining
is not easy. It's pretty complex unless
you're a nerd. uh unless you're somebody
who's done these things before, you've
got some understanding of computer
science, this is not something that I
could turn around to any one of uh our
extended friends and family who aren't
in the tech industry and go, "Hey, why
don't you mind the gajimaru? Just start
doing it." You know, all you have to do
is this long litany of things.
&gt;&gt; Just type some stuff. It'll work. Don't
worry about it.
&gt;&gt; Exactly.
&gt;&gt; So, actually, it's it's a pretty complex
thing that excludes most people from
being able to be engaged in it.
And then we come to one of the key
design decisions in terms of how we made
the gajimaru proofof work core so
efficient which was about using the
cuckoo cycle and that in turn opened up
the capacity for anybody to mine this
certainly at the early stages with
relatively low-end computational tools.
Uh, in fact, we started the chain itself
with uh a bunch of i5 processors. I
think there were on $300 laptops. Five
$300 laptops is what we started this
whole network on. If we mine this,
because it's going to be really hard to
get people to come in and mine this
without being able to force them to push
to accept and implement updates, which
we'll be pushing on a weekly basis.
then we're going to end up with an awful
lot of gajus which defeats the entire
purpose. We do not want to end up as
Satoshi and friends were with over 40%
of the Bitcoin as they did you know once
it got outside of them and their friends
and the people they directly knew over
40% of Bitcoin had been mined. Now, we
have a similar curve, but what we didn't
want was for us to go, yeah, us and the
people we're friends with have all the
gajus. That's pointless. And I think
that was one of the things that defeated
Bitcoin's capacity to be a currency from
an early stage, that lack of broad
participation, never mind the
inefficiency of the system itself. So
the solution was to come up with a hive
type structure that allowed us to run
the or to set up the mining operations
and then for people to provide the
computational capacity from their
computers. So to achieve that these guys
came up with the idea of a software set
that could be installed automatically
updated really install once and never
touch it again. you know, extremely
uh accessible for anybody anywhere in
the world as long as they had a computer
and an internet connection.
We needed software that could be
installed on a Mac, a Windows machine,
or a Linux machine that would allow
somebody to participate in mining the
Gashimaru. They would have to install it
and activate it once and it would do
everything from that point forward
including auto updating any optimization
or development that goes into the
software so that it was really something
that anybody as long as they had a
computer and internet access could
install, run, and be part of. That was
the design spec. We thought that was
because look, I'm not a techie and you
three have all been building back-end
systems for a long, long time. This was
something that was retail.
It was going to go out and engage a
retail audience. It had to be it had to
be the front end as well and it had to
be literally dummy proof. That was a
pretty big challenge by itself across
three platforms. But the other part of
that is,
okay, so I don't have the software yet.
There's two things. You have to have the
Gaju mine. That's the miner itself. It
doesn't have to know any secrets. It
just knows whose account it's mining
for, and that's good enough. Um, but
then there's Gaju Desk. And Gaju Desk is
a
kind of overfeatured wallet. It's not
exactly just a wallet. It's got
development features and much other
stuff. That's why it's called Gaju Desk.
But that is the desktop wallet that we
have right now that's that's published.
And from their perspective coming in and
managing a wallet which is a collection
of accounts or key pairs
and then inside of a wallet they've got
accounts that they can create or
manipulate or whatever where that that's
stored somewhere. People are so used
today of not even storing anything on
their hard drive. It just magically
lists away to the cloud. You definitely
don't want your private keys saved in
one cloud or something. That's no good.
So, actually, one of the challenges that
we had with this was to make this
something that people who were not
crypto bros, who didn't know a lot about
blockchain, who hadn't used any of the
features that Craig was just talking
about, to be able to do this with
confidence. And for context, Craig
turned to me at one point and said, you
know, the only other company that's done
what we've done is Steam, and they have
like 600 developers.
I think the coolest feature that we've
got in this particular early crowd is
that so many of them are small business
owners because they have actual like
they do real business like they do they
provide an actual service somebody pays
for and that's how they make their money
and then they have real legit concern.
They're not thinking like how can I use
this money to make this other money and
then like trick this other guy to pay me
more rates for this other money. Like
they don't do that. They don't think
that way. They're like,"I have to bring
stuff in the door and put it back out in
a way that makes profit for me somehow
or I have to provide a certain they have
questions that are just like laser
focused on how can I apply this to a
real problem I've actually got that's a
real thing." It's so refreshing like
that. That's the best that's the best
early adopter crowd I think for a
project like this. And we really got
lucky.
This is probably the one and only chance
we have to try and get millions, maybe
tens of millions of people into doing
this at an early stage and effectively
create something that is akin to a G20
economy on chain. That was the whole
point of blockchain. It was about
creating a a an economy for the people,
by the people, the distribution in that
way, all of those pieces. So
when you consider this
and you think how do we solve that
distribution problem, the obvious answer
is you get people mining. How do you get
people mining when mining isn't easy?
And you come back to the idea that the
guys had of building this software that
would allow anybody to install this on
their computers, activate the software,
license, and and start mining. Once
people are mining, they have an interest
in getting other people on board and
trying to get the message out that we're
we're getting this movement for the
economic emancipation of humanity
underway. Longer term, if those people
can be organized into efficient mining
pools in their own right and be
incentivized to be part of that, we may
avoid the state that Bitcoin
Bitcoin is in today, which is that five
accounts do over 95% of all the
consensus on Bitcoin. and two do more
than 51%.
&gt;&gt; I guess one of the technical reasons
that that manifests is that in in one
day in 24 hours there's not that many
opportunities to even mine a block on
Bitcoin. So you have this like
collapsing reward problem uh in Bitcoin
in terms of like there's only so many
units per day available whereas we have
720 that gives a lot the the more smooth
you can make the the mining increments
the more fine-tuned it can be um with
your the smaller your block interval is
uh the more opportunities there are to
win in a day and that that incentivizes
the creation of competitive pools
because it gives has many more many more
efforts a chance to win. So I do think
we have a a really good chance to have a
a huge diversity out of this
&gt;&gt; that if we solve the distribution
problem, we solve the
problem of how to get true commercial
actors like retail on board. they will
be incentivized to chip in and actually
invest a little bit of resources into
mining to keep the chain stable
&gt;&gt; and and honest. So that's what we call
defensive mining. All of a sudden the
incentive isn't just about getting
juice. That's a that's a well a nice to
have. The incentive is actually about no
it really helps me to have a business
where my cost of operation is so low and
where everything is so very simple,
straightforward and transparent where
there are no nobody is devaluing my
human capital by money printing. Um
there is no tax upon my business
efficacy through the fragmentation and
fracturing of infrastructure that I have
to navigate at risk and at cost.
We cannot find a way to have governance
on chain and not have that become a
corrupted function at some point. It'll
become captured at some point. There's
no way to get away from it. So
&gt;&gt; internally the four of us had a number
of arguments over how we should do even
a foundation which is what has been
commonly used in the blockchain space in
order to perpetuate the Gimaru. And the
argument actually ended up the winning
argument became no there can be none.
There can be no governance because any
governance leads to corruption. Any
governance on a system defines it as
infrastructure rather than resource. In
order to be a resource layer, it must
have absolutely no governance. And this
must be one of the tests of whether it
is an actual blockchain that actually
works. We're giving ourselves a limited
span of time to be able to do things
like updates to the root of the of the
whole system where the minting function
occurs beyond which we will not be able
to unless everyone like agrees to do an
update with us um we won't be able to do
updates. So we have a limited time but
in that limited time we need to build up
mining power because there's another
problem that's as yet unmentioned which
is doing a proofof work blockchain. One
of the problems with thinking you can
just put a proof of work blockchain in
the world now and click your Ruby
slippers together, it's all done is that
you have predatory
mega mining operations that pre-exist
already. Entire data centers already
built up. There's national efforts
behind this that are enormous. Um, the
second you put your chain out, you're
not going to be you're not going to have
ordinary people being able to mine.
You're going to have a giant gorilla
show up and he's going to be 80% of the
mining power. And that one operation is
going to take every consume all of one
all the reward. So your distribution
angle just goes away because they're
consuming all the reward for all of the
people who are using the gajimaru. The
incentive to ensure the stability and
sanctity of the chain actually is
greater than simply the reward of having
gajus. And to some extent, that's what
we're hoping to fashion from all of the
millions of people we hope to bring into
doing this is that they will continue to
do this in the long term because they
are part of creating something that
they're foundational people within. But
if you're doing business in Gajus, you
want to secure the value of God you have
by contributing mining power to defend
the men and make sure that it's not
subject to capture by some weird
predatory gorillas that show up.
What is whitelist mining? Whitelist
mining essentially is where you have a
uh protected mining period. So to be
clear, the gajimaru itself is not
something that we have any control of.
The blockchain itself we do not control.
It is like bitcoin with native
uh enterprisegrade virtual machines and
smart contract language. uh Fate and
Sophia which we drew from the eternity
blockchain and integrated into this. So
we took Bitcoin made it tens of
thousands and according to chat GPT
potentially millions of times more
efficient than Bitcoin and then added in
those enterprisegrade virtual machines
and smart contract language the Sophia
which which is are excellent pieces of
of software and code. Um
what that then does is it creates this
blockchain as we intend Groot the core
where we think that we can develop all
of the features within that to the point
that it will be a fully functioning
fully operative backbone for a global
network of networks. And that's where we
see the real innovation going on beyond
that is at these associate chain levels
where sovereign states, major
corporations, community groups decide to
set up their own associate chains that
are linking into the gajimar in order to
get to the end point in development. as
we've illustrated that's really about
Groot and the tooling that allows people
to build whatever they want to build
from an associate chain perspective
which is as I say is where the real
innovation is going to occur in the next
thousand 5,000 years as we plan this
out. So what you can do in order to
ensure that you can push updates to the
chain as you're going is you can say
okay we'll just have a very restrictive
list of miners and that's the one piece
of control that QPQ has right now. We
have the ability to say you can mine you
cannot that's our only control function.
&gt;&gt; Mhm.
&gt;&gt; And that's the bit to make really clear
is that distinction that the chain
itself we have no control over. We have
no ability to influence what it does or
how it does it. People coming in and
using it can do as they please. We do
not gatekeep. We do not put any
governance on that.
What we do is we restrict the mining
access and that is only for a period of
time and we've made it very clear in all
of our documentation and our contracts
with people that look this is going to
go public. Our intention is to make it
such that there are millions of people,
hopefully tens of millions of people who
are forming into efficient mining pools
to either a continue to benefit from the
gajus that they can earn as a result or
b as olf was talking about the defensive
mining aspect because they have a vested
interest in the growth and development
and sustenance of the chain that they
would take an interest in ensuring ing
that even if the big commercial miners
do come in, they don't get a free run at
everything.
All of these things that we've kind of
just discussed wrapped together like how
do we
finish the development of the system,
fund the develop fund the completion of
that um which requires fiat because it's
a practical issue. Um
also make sure that at the end of the
development cycle for the core bit um
where the where the minting occurs make
sure that we can you know pull out the
stop and governance is no more at that
point. So even we can't control
anything. There's no foundation that can
be coerced or whatever um and get large
distribution and so on. How do we solve
all these things at the same time? with
a proofof work chain. Uh that's a tricky
problem. So we came up with this
whitelist mining period where during
that span we are able to make updates.
We can fund ourselves by having people
buy licenses to join the hive to mine.
They contribute mining power. That
raises the mining power. And as the
mining power increases, we're reaching
we start approaching that threshold
where it's then safe to at the end pull
the stop out and you're fully public and
you've already got distribution in that
window. Also, we can start deploying
products that are like the basics, the
basic go-tos any market economy needs,
like an online marketplace, a way to
invoice people online, you know, ba like
all the basic kind of software services
that you would need to transact online.
we can go ahead and put those out and
have a full offering by the end of that.
Um, but how do we create that space? And
whitelist mining is the way that we've
chosen to do it. Whitelist mining is a,
you know, there's a profit, there's a
there's a payfor-profit kind of
proposition there that funds the
development of the chain, but the whole
point of this is to fund it to that
point where we can pull the peg out and
that's it.
We're going to make it so that everybody
who comes in and gets involved in this
gets a significant piece of whatever
revenue comes in when they introduce
their friends. When they bring somebody
in that their parent, their brother,
their sister, their friend, their work
colleague, and that person buys a mining
license package that they can actually
come in and say if they spend a,000
Franks, the person who introduced them
might get 200.
Now, that isn't to do with multi-level
marketing by any stretch of the
imagination. It's literally just you
make a referral, you get something. And
that allows us to build a network
through word of mouth. It gives us an
army of people out there who know how to
install the software, run it, and get it
going, who can do that with their
friends.
This is really about creating that
grassroot movement.
This was one of the first dragons that
we knew we were going to have to slay
was
somebody comes to
godmining.com,
they buy a mining license of whatever
size and but they don't have anything
yet. all they've got is like, you know,
a couple dollars in a dream basically
and they show up and
they buy their license and then they get
an email and it says like, "Hey, thanks
for, you know, joining our our project
and now click here and come get your
software." So, they go there and the
problem comes in where we know they've
bought something. We've got that on
record. So, we like know their email
address, but
we can't generate an account ID for them
because their true account ID is really,
for really real, going to be on the
blockchain. We can't generate an account
for them on the blockchain because that
account ID is part of their key. Their
their account is one with their key.
It's one thing. So, they have to
generate that on their side and keep the
secret. we can't know what that is. So,
they get the software. Now, Godesk can
generate accounts for them. They can
come up with an account number, but the
account number is these big long crazy
like it's I mean, you you anybody
watching this video has probably seen a
a crypto address before. You're not
going to type that in like and get it
right most of the time.
So, in copy pasting, it's a little bit
fraud. There's a lot of issues. If they
give us the wrong account ID, there's no
way to check the account ID because it's
never occurred on the blockchain before.
So, we have to verify that they've we've
really got their account ID and that
it's the person that bought this. And
our backend needs to link those two
together so that we assign within. So,
all of our mining operation for
whitelist is governed by contracts that
are on the blockchain. It's not actually
inside gajmining.com. Gajjimoney.com's
kind of an interface for us and for them
to be able to kind of deal deal with the
interface with the blockchain in a in an
easy way. All the contract stuff that
govern all the governance for the way
that the white list mining actually
works is onchain. So we have to get
their accurate account number which
nobody can know except for them at the
moment it's generated and pair that with
what we do know which is their email
address. And we have to match that
together some way that our backend can
know to insert them into the mining
contract and insert them into the the
the hive, you know, the mining hive. And
so that means that the user now has a
task which is to generate an account for
themselves and then they need to come
log in to gajmining.com. Now the way
that you log into gajmining.com
is you do that through a grids URL.
Grids is a system for doing uh encoding
like remote transactions that you can
refer to or directly encode in the URL
and then a a wall that can speak grids
can decode that and and process the
transaction. So we need to
&gt;&gt; in English what Craig is saying is that
we've removed the need to use login and
passwords and we actually make the whole
thing a secure exchange between wallets.
So uh the version that he just gave you
is the is the nerd version. The reality
is that simple statement. It removes the
need to use login and passwords. And the
second part of that is making the
process something that's not completely,
you know, impossible for a user who
doesn't know any of this stuff yet to
use. And that's a big part of where the
community knowledge comes in. We've got
documentation now that tries to walk
people through in kind of a nice way.
And we're improving those things. And
we're we've got a big improvement to the
process coming uh pretty soon here based
again on community feedback. We're
getting to this kind of nice point now
where we've identified a lot of the
problems and things are finally working.
What we thought would be the quickest,
easiest way to get a website up and
running that people could come into a
web store, buy a license, install and
run was WordPress. And with that come a
whole pile of plugins that are very
welldeveloped for a massive market
appeal. Uh most of which relate to
Stripe. And
&gt;&gt; It was a very clunky, horrible system
that we absolutely hated from the very
first moment, but we thought it was the
fast way to get where we needed to go.
Turned out that was totally wrong. We we
then bounced through a whole litany of
people that all the household names and
payments, none of them would touch it
because
&gt;&gt; yeah,
&gt;&gt; even though it was software as a service
that would enable millions of people to
participate in mining, it wasn't it
wasn't a way of selling them crypto. It
wasn't, hey, uh, buy this, um,
here's 10,000 gajus, buy it for a 100
Franks type thing. It wasn't, it wasn't
that. It was buy some software that you
can install on your computer with a
license that allows you to participate
in mining this. And when we get to the
end of whitelist mining, by the way, you
still will own the software. We just
won't be pushing updates. and you can
you can you can be part of making this
all happen. This is yours.
that message somehow became crypto
adjacent. the antithesis of crypto, all
of these things that we looked at in the
payments world,
the opacity around it that the the
duplicitousness of so many of the
positions was really
I mean I've spent months on this now
trying to wade through all the different
providers around and
remarkable how much of the process is is
so-called AI driven large language
models and it doesn't really detect
anything until you get to the final boss
as it were and the final boss goes, "Oh,
actually you've said somewhere along the
way along the way that you're producing
uh software to mine a blockchain and
they then say, well actually in our
terms and conditions we exclude mining
pools and hardware." I'm like, "Well,
we're not either. It's software as a
service. We don't care. The fact that
you are almost or possibly or linked to
or adjacent to is enough for us to
exclude you. Even having worked in
banking and you know talked to people in
back offices about how does this work
and why does that do this
the
amount of game playing and lunacy that
goes on within the payments world.
Unspeakable.
Now to be fair, building payment rails
on top of existing blockchain
infrastructures
is an absolute nightmare. If only they
had Gajumaru fully developed, their
service would have been so much better.
That we've gotten as far as we have
without a payment solution to date has
been absolutely remarkable and it's a
testimony to the faith that the people
who've come in have had in us to do
this.
Now, we do have payment systems in place
and we have a fantastic company here in
Europe. They're going to work with us.
We've got another company over in
Singapore that will work with us and I'm
sure others will emerge over time.
Most of the things that we've had to do
in the last 10 months have been things
that you never did before. And actually,
it's not just that you never did them
before. Nobody else did either. We've
literally been breaking new ground in
terms of computer science and
programming development etc. for months
and you've all been doing it in
isolation. This and and I'm not a
programmer. I'm not a tech person. So
you've really been doing it on your own
with nothing more than one another as
referential points because when you go
out to the internet, which you could do
as a developer, and say, "I've got a
problem."
Pretty good chance that everyone else
who's doing something like this has had
a similar problem. I'll go into the
forums and see what people came up with
as a solution. That hasn't been a
resource that's been available to you
guys. So, I really think there's a huge
hats off to all three of you and the
other guys in the background that aren't
on this call, Jarvis and Peter
Harpending.
You've done incredible things with very
little resources and I'm enormously
proud to work with you and be part of a
team with you. We're getting to see this
problem before it becomes a scaled
problem. you know, if we get a thousand,
10,000, 100,000 people doing this, the
scale of that 1% problem becomes huge.
&gt;&gt; And
&gt;&gt; and I think one thing that's important
to note as well is that this has really
strengthened our
uh conviction that what we are doing at
the core is really necessary. So all
these mighty dragons have been
peripheral to what we are actually
trying to do. I mean like getting rug
pulled by payment operators
is not something that disqualifies the
idea of the gajuaru. It it rather
&gt;&gt; validates strengthens Yeah. validates
the argument.
&gt;&gt; Yeah, it totally validates. I mean, you
you lift the lid on on that lunatic
asylum and you think, "Why has no one
fixed this before now?" Oh, because lots
of people make lots of money out of not
fixing it. Okay. Well, guess what, guys?
You better learn gau quick. We talk
about the objective of the Gajim Maru
being the restoration of your economic
sovereignty, the creation of a of a free
and open economic resource layer that
everything else can operate with and
build upon. We're not anti- sovereign
states. We're not anti- uh legislation,
regulation. We understand that in the
real world all of these things occur.
But there is a tension that this is
going to prompt between. On the one
hand, we say to people, you will own
your data, your assets, and your money.
Which in turn means that your rights
become rights, not licenses.
This tension on the other side is with a
IMF, World Bank, uh the totalitarian
state apparati
who essentially say well hold on money
laundering can occur in crypto or can
occur in blockchain without
understanding actually no because it's
transparent where the money laundering
in trillions of dollars is occurring
is in the existing banking system.
The reason why you haven't stopped that
is too many people do well out of it.
But
there is a tension coming down the road.
But it is going to be a very interesting
time where that tension between the
status, the corporatist and the freedom
of the individual have to have to
rebalance.
And at the moment the individual, the
sovereign person, natural law, all of
these things, they are the they are the
sacrificial lamb that is being fought
over between the statist corporatist
sides.
Our object is to restore capacity to
that and make that an equal actor within
that tension and resettlement of the
corporate versus state versus person. I
mentioned before that our early
adopters, a huge percentage of them are
small business owners and that that's
fantastic for us.
I also mentioned elsewhere that the
uncertainty that we encountered the
moment we got our first payment
processor to clip us like that threw
everything into a spiral on the
technical level, on the interpersonal
level. We already had people like lined
up to buy. We'd already pushed ideas to
people, you know, promised things to
people. We suddenly couldn't deliver
because we couldn't accept payment and
so on. Our development requirements just
mushroomed at that moment. These are all
uncertainty problems and they trace back
to statutory problems. Statutory
problems meaning they're invented
problems that somebody else had to
legislate into existence
and then not be clear about. So you have
this gray zone that you're operating in.
And when you're trying to do anything as
a small business that doesn't have an
army of lawyers to go one, grease the
rails with
in sort of a morally gray way in
addition to research what the rules
might or might not be and then test
them, give subject them to legal tests
to figure out if you're even allowed to
do what you your idea is. You're
operating in an in a world where how
much are you going to risk in terms of
effort and blood and money and time on
an idea, business idea that you've got
that you don't even know if you're going
to just get like, you know, you you set
everything up, you build your oven,
everything's ready to go, and the next
day a regular a regulator shows up to
give you a an inspection for your new
pizza shop that you didn't know existed
and demand license fees from you that
you didn't know existed and demand, you
know, oh, just yesterday they They made
a new city law that you have to pay a
business license. All this stuff. If
that's the world that you're in where
you don't know what's coming next and
there's no way for you to research what
the rules are and you're operating in a
total context of uncertainty, nobody's
going to start anything new.
The the video in some has been we've
been absent for a long time because
we've been slaying some pretty enormous
dragons. We're back. We're going to be
doing this more regularly. We will get
into these topics in greater depth. Uh
we look forward to hearing more from
people. We'll evolve this as we go and
we'll bring more and more of the
community into these discussions as
well. With that, thank you all very much
for your time. Uh we look forward to
talking to you all again and keep in
touch.