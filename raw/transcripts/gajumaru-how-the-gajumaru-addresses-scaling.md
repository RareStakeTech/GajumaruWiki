---
type: transcript
title: "Gajumaru ｜ How the Gajumaru Addresses Scaling"
date_downloaded: 2026-05-16
transcript_method: subtitles
---

Kind: captions
Language: en
So, one of our pioneers, Susan, made the
mistake of asking a really good
question. As punishment for asking this
really good question, we're going to
record her asking the question and ask
Greg to answer it. Thank you, Susan.
>> Yeah, Greg, I've been thinking about
that. Craig, I've been thinking about
this a lot. So, uh, Bitcoin got slow at
scale. It was fast at first, but as you
get more and more computers mining in
the network, how come uh the gajumaru
isn't going to get slow and you've got a
100 million a billion computers mining
and they all have to agree what what the
blockchain ledger says and they all have
to sync up. Uh and I think you guys are
saying that that it'll do 300
transactions per
>> per second
>> per second. um won't the world's
financial in you know transactions
greatly exceed that and won't things
start to take 10 minutes to to write
onto the blockchain?
>> That is a good question and uh the
answer is kind of fun. Um so the uh
Bitcoin the way Bitcoin works is uh we
we've already established kind of the
puzzle thing, right? You've got all the
all the kids in class are doing the
jigsaw puzzle. The property of the
jigsaw puzzle is that it's hard to
solve, but it's very easy to prove. You
can just glance at and go, "Yep, it's
solved." Right? Um so they're all
competing
together to do this. In the Bitcoin
model, when you submit a transaction to
the chain, you're putting it into the me
pool. So that's shared across all nodes
because nobody knows who's going to be
the next leader. So everybody's inbox
gets a copy of whatever transaction you
submitted. So everyone's got visibility
on that which means all these puzzle
solvers have visibility on that as they
are doing the puzzle solving work.
Their inbox is stacking up and they're
taking they're they're evaluating
simultaneously
they are evaluating those transactions
to see which ones are going to pay them
the best if
they include them in the block. And I
say the block because Bitcoin has one
block. It's got the puzzle proof and a
stack of transactions with it all
wrapped up together and signed by that
leader and it's published all at once
and it goes out to the to the world.
That happens once every so many minutes.
The maximum amount of the maximum number
of transactions that can fit into a
block in Bitcoin is predetermined. You
cannot exceed this which get that's how
you get the the number how many
transactions per second is how many
transactions can fit into a block across
how many minutes it takes to create that
block. That's also why if you submit a
transaction to Bitcoin, it does not get
processed right away. It never has
actually from the beginning. Um so like
when Bitcoin is first released, you were
always going to have to wait for the
next block before your transaction could
come out. It might be really quick
because the next block might be coming
out soon. So you might submit it, it
gets picked up and the next block gets
published right then. Oh, yay. Lucky
you. Or you might be waiting for the
next one.
>> So that's what you guys are saying. When
you when you try to buy a loaf of bread
with Bitcoin at the grocery store, it'll
take at least 10 minutes before the
transaction is even in the queue to be
written onto the blockchain. But not
written onto the blockchain yet, but
just in the queue to get that's that
distinction there,
>> right? So that yeah, it might get into
the queue really quick, but you have to
even if you include a ton of gas, like
you're So you're basically bribing the
the leader, right? Hey, next leader, I
really need to go get, you know, I got
to pick my kid up real quick here. I'm
going to pay you 50 bucks if you let me
buy this loaf of bread, the $2 loaf of
bread real fast. So you submit a $52
transaction to Bitcoin. In that inbox,
the the guy doing the puzzle solution,
imagine it like a team. Okay, so you've
got in the Bitcoin case, you have two
kids. One of them's evaluating the the
inbox to pick out the the juicy
transactions, and the other one's doing
the puzzle solution, and they're a team.
And this guy's like, "Dude, that's a $2
transaction for 50 bucks. We will we get
paid 50 bucks to process your $2
transaction. I'm super including that
one." So, they pick that out and okay,
it's going to come out in the next
block, but you still got to wait for
that next block. And that's just the the
maximum speed of of Bitcoin. Now, they
did it that way because they were just
trying to prove the point that this can
work at all. And when you're writing a
system for the first time, it's very
common to kind of conflate two things
that are not necessarily related and you
miss the efficiencies that you could get
by separating them. It's very common. So
uh as a design principle in software
actually in engineering all over um we
say
the design principle is called
separation of concerns and that's
exactly this. So they conflated two
concerns which is the work of updating
the ledger with the work of proving
who's a leader because their technical
constraint at the time was they weren't
quite sure how well a pure gossip
messaging system was actually going to
work. So they didn't want to have two
different types of messages. They just
wanted everything to go through one
message type because they knew they
could make that work cuz it's simple. So
that wound up having the side effect of
your transactions can't get processed on
chain until the next block comes out. So
you've got this like chunky nature to
Bitcoin. Ethereum followed on with that.
Now Ethereum expanded the block size to
some degree and they made the interval
between those blocks shorter. So it it
was overall much faster, but it still
had a pretty low cap on how fast it
could go. Um what we've done in our
system is we we're using a protocol
called Bitcoin next generation where you
do the proof of work
similar to well same idea as Bitcoin,
right? You do proof of work to establish
who the leader is. Now we've separated
that proof from what we So we call that
the proof we call that a remember we've
got one big block in Bitcoin right the
top part has the proof the bottom part
has all these transactions we've broken
that apart and so now the proof part we
call a key block and a key block
establishes who the leader is the
transactions part we call those
microblocks and microblocks you can have
any number of them between key blocks
So you have a key block and that says
the leader is Mr. A. And Mr. A as soon
as he's affirmed as the leader starts
writing microblocks as fast as he can.
It's not actually as fast as he can.
It's every 3 seconds he can publish a
microblock. So everything in his inbox
up to that moment he can write into a
microblock and then at 3 seconds he has
to blast that out and then he starts
writing the next microblock. So the
effect the practical effect of that is
when you submit a transaction to the
memp pool so it gets gossiped around and
everybody sees the transaction the
current leader when it gets to his inbox
he can go oh microb block boom and push
it out. So you might wait up to 3
seconds. So our latency is about 3
seconds. The problem with both systems
in isolation
is that we can process we say 300
because we're including things like
contract calls which are very heavy. If
it was just uh if it was just spin
transactions like Bitcoin does, we could
do it like a really a lot of those per
second. Um because spin transactions are
very simple. It's like oh this from A to
B update done. It's real quick. Um but
the contract calls you have to load the
virtual machine into context. You have
to get the contract the the context of
this evolving state that is the contract
state and you got to pull it from all
these different places and lit it up and
then you've got all the cont the state
in context. Now you do the the actual
processing of the thing and then you
wrap it up, write the write the final
result back to the chain and and that's
it. So contract calls are heavy, like
quite quite a bit heavier, which is why
they're more expensive. So you have to
pay you have to pay for that complexity
as a as a caller. Um anyway, uh so in
both cases, you have a maximum per
second that you're going to get to. So
in our case, let's just say heristically
it's like 300 something. Um 300 to 900.
Again, it depends a lot on the category
of of the call. Regardless, if you look
at the whole world's economy,
that's still I mean that's really like
that's plenty for most
well
like quite a few countries would
actually fit inside of that. Um but
that's still not the whole world and
it's definitely not every casual
transaction. Like that's not every pay
at the pump. That's not every, you know,
slice of pizza. There's no way, right?
The ultimate scaling system is like
cash, right? Because they don't even
track anything. The proof is in the
cash. That's the whole point of cash.
Um, so
what happens in that case is you have
mempul contention. And that's that thing
I was mentioning about the $50
transaction. So, Bitcoin can only do um
so the the theoretical top speed of
Bitcoin is supposed to be around 7 per
second. That's the advertised. In
practice, it's about 3.2.
Um for whatever reason, it's just like
there's a flat line at about 100,000 per
day. Um and that that's just how
Bitcoin's worked up. the there's many
many many more transactions submitted to
the Bitcoin chain than that every day
though and most of those are just lost
to time because they're they're not
providing enough money to motivate a
minor to pick you know they're they're
not high enough on the priority queue
because they're too cheap. So those just
never get mined. Um what happens in our
case is similar. We would have
contention and the gas price winds up
going up until the miners picking the
juicy the juicy transactions. All of
this that I'm describing occurs in the
context of a single chain.
So just group the proofof work chain
group. The scaling system that we have
is called associate chains. So you can
one chain is sufficient for
you know a large a huge number of
transactions but there's still a limit.
>> So um sorry one second. I I'll step in
here and and bring you back a second
because there is a scaling solution
within Groot and it's called building
state channels. So
>> Oh yeah, that that's a huge one too.
>> Okay, so within Groot itself, we can
create state channels. State channels,
if you think of them in a simplistic
way, are a bit like um when I was in DC,
you could buy a card and you would swipe
the card. You'd pay for the card once.
You put cash onto it and you swipe the
card as you go through the machine. You
can do the same thing in London. In
Switzerland, where we're super advanced,
you just swipe an app as you walk on and
off public transport. Those are all
state channels. They facilitate huge
numbers of transactions between a party
that you trust like for example the
metro network or whatever it is and you.
So it's facilitating huge numbers of
very small transactions and every single
transaction is actually being recorded
into the blockchain but in a state
channel first. So it it essentially it's
batching in much the same way that Visa
batches. Actually Visa's number in terms
of how many transactions per second they
can process is about 124 I believe
transactions per second in real time.
Once they get contention that starts to
force that to slow, they just batch it.
So they go, "Okay, that's fine. We're
going to fill this batch here and then
we're going to start pushing them
through and when the demand goes down
will catch up. The real time piece will
catch up from the batch. So what we've
done with state channels and UL is the
true master of this. State channels
allow you to do a transaction with a
counterparty and then have every single
subtransaction
occur within that and it be properly
tracked in that way. So it's batching
without batching because every
transaction is being recorded. It's just
that you're doing a transaction in the
first place between the two
counterparties. a little bit like a
charge card,
>> right? So
>> that the limitation on that is
hardwardriven. So in theory you could
get to silly numbers like 50,000
transactions per second. But to give
that kind of silly number context, the
Tokyo subway, Tokyo Metro system, which
is the world's biggest of them all, that
doesn't do 300 transactions per second
at peak. So you get some idea of just
how redundant something like that could
very very quickly be. But all of this is
within the context of Groot and Groot is
an open resource layer for the world to
build associate chains on infrastructure
because one of the first things that we
recognize and right back when I was
first writing the papers out for this I
talked about creating networks within
networks and markets within markets.
This essentially is the idea. It's
recognizing that every country is going
to say, well, hey, if we're going to
allow blockchain based payments, if
we're going to allow blockchain based
identity, all of these different things,
we want it to work the way it works for
us, and we want specific rules. We want
to dictate who gets to be a a node, who
gets to confirm access, who gets to
provide access.
All of these things will be rule driven
because they'll be driven by laws.
They'll be driven by regulations. And
those laws and regulations are specific
to each jurisdiction. So the obvious
answer to the question is actually we
don't think that we'll ever really
stretch Groot because the moment people
start to do something that requires
large numbers of transactions, it's
likely that that's occurring within a
single jurisdiction.
>> Mhm.
>> And that jurisdiction will want its own
rules, its own supervision, its own
regulations. And therefore they can
instantiate a proof work chain of their
own which is unlikely because if it's
known actors like it's all the country's
banks for example setting up a national
payment system it's likely going to be a
proof ofstake system or a proof of
authority system. Proof of stake and
proof of authority allow you to operate
at phenomenally high speeds because
essentially they're centralization of
process.
The proof of work system. Now, if you
thought about Groot and you said, "Okay,
so let's say there are 10,000 channels,
10,000 associate chains, and all of them
take the open-source version of Groot
and apply it to their own chain, albeit
with some rules about what can go in and
what can come out. Multiply 300
transactions per second by by 10,000 and
you're talking about stupid numbers of
transactions that are occurring real
time around the world."
That's the true answer to how you scale.
>> Yeah. So that right so the the case of
state channels so Groot itself you can
make a state channel which is sort of
like you and I agree that we're going to
open a channel between us we both I
commit money to it and like you're
McDonald's for example every time I go
through the drive-thru to get a coffee
we don't want to have to remember that
transaction for like the life of the
universe right so but get silly we also
have lifetimes that's a whole different
discussion uh the it's a fallacy in
blockchain in general that you can store
everything forever. Um we'll put that to
the side for now. But uh the but in
state channels if we both agree that
um I've bought 10 coffees
and this week and you've got the money
for that, we both can just sign that and
save just the final state, right? We
don't have to remember all the receipts
in the middle except for my accounting
purposes and we could come up with any
way to do that that we want. But that
allows all those transactions to happen.
So like a lot of the retail level
transactions can occur actually on the
proof of work chain without any like
it doesn't affect scaling at all or if
it affects giant scale but it doesn't
affect the the core blockchain's
effective speed. The associate chains
that Greg was talking about the reason
blockchain has to be slow at all is
because of proof of work. It's solving a
super hard problem which is an
adversary. Remember keyword adversarial
in an adversarial peer network where you
can't trust any other nodes. You don't
trust them. They have to prove something
to you for you to trust anything. In
that context, picking a leader is a
super hard problem and that's what proof
of work solves.
Uh including transactions and
broadcasting to a peer network. That was
a solved problem a long long time ago.
Um but those are trustful networks. When
you get to associate chains, you now
have operators and they're known which
means you don't have the peer selection.
you don't have the leader selection
problem anymore. You have known actors,
they're under legal penalty if they
screw up, right? So like you can go
after somebody and you have a perfect
record of it on the blockchain anyway.
So a misbehaving actor is under
regulatory compliance burdens at that
point in an associate chain. Um the key
thing that's protected by proof of work
is the money supply.
When we when you have an associate
chain, your account on group is the same
as your account on an associate chain.
So the way that you get money over there
is you send money to yourself. So you
you do a spend transaction from you to
you on a different chain. And every key
block height is an opportunity for those
transactions to go both ways. From group
to an associate chain or back to group.
If you want to go from associate chain A
to associate chain B, they're both
associates in the context of the gaju.
So the nearest parent common parent for
those two chains is Groot. It goes from
chain A through Groot to chain B. Groot
is aware of all the subordinate chains.
And it maintains it. It ensures that
more money can never be taken out of
chain A or B or whatever. More money can
never be taken out of an associate chain
than was put in. So you have a hard cap
on the circulation of the money supply.
If you do shenanigans down here, if if
chain if an associate chain allows
sneaky stuff to happen and they're
inventing and blowing up money or or
whatever, if people start evacuating
from that chain, that whole thing
collapses and there's no bailout
mechanism whatsoever. So the the funny
money problem that you've got in the too
big to fail banks, that cannot occur in
the context of the Gaji. There's a hard
cap to that. So we get this ability to
scale with systems that we already
understand today with a hard cap on the
money supply insured by proof of working
group. So this is all about breaking up
transaction context to get massive
massive scale.
>> Does that make sense?
>> Something to to throw into the mix here.
>> Yeah, I'm with you Susan. Just that's
that's a lot to digest.
>> Wash over my head.
>> Yeah, same. It's a different language.
I'm I'm learning it. So one of the key
things that Craig spoke about there is
awareness that group knows what's in all
the associate chains. This is one of the
key things that makes them associate
chains not layer 2. Layer 2s and layer
1's have no relationship to one another
than what they pinky promise they do. So
when you do a transaction on arbitum for
example which scales Ethereum you have
to wait 8 days to have it confirmed that
that transaction was actually batched
into Ethereum. So the way they bring the
cost down is they just write all of
these contractual states into the the
the ledger and then they put the whole
thing in just like uh
5,000 years ago somebody went from the
Phoenician village to the Phoenician
town and had the console in the town
sign off on all the transactions that
happened that week in the marketplace.
It's as evolved as that. Um but even in
that context it's more evolved than
layer 2s because layer 2's the layer one
has no idea what is happening in the
layer 2. It is literally like a rubber
stamping service for the layer 2.
Everything goes back to trust and this
is the true fallacy of layer 2s and this
is why associate chains and layer twos
are not remotely the same thing.
>> Right? I think when when Greg's
answering that question, you're getting
quite deeply into monetary theory in a
way that people who haven't touched into
that subject before will find a little
bit alarming. But the basics of it are
that
Groot the mint creates so many gajus in
each day that are minable. It has a life
cycle over 87.5 years, 87 years
remaining to get all of those gau
minted. Once they're all minted,
allowing for recoveries and burns and
everything else,
that's it. There are no more gajus that
are ever going to be created is it is
done and dusted. So you now have a
finite monetary supply and that means
that everything has a real base to be
computed from. If you know the joke I
used to make to people is how fast are
you moving right now? And most people
will say well I'm not I'm sitting in
front of you looking at you. What sort
of a stupid question is that? And I say
well actually you're doing 20,000 28,000
km an hour around the sun.
um you're actually moving in all sorts
of directions in space, but because you
lack the perspective to see it, you
don't perceive it. Um and that's true of
the monetary system as well. If the
monetary system is fluid and in motion
all the time, how do you know what you
have or don't have? How do you know what
you have is worth anything? What's a
dollar?
Whereas if you have a constant now
everything else can be figured out from
the constant. It's like trigonometry.
It's like map reading. You want to know
where you're going, you have to start
with where you are.
Does that
make it a little bit more sensible?
Well,
>> adjustable is the word.
>> Yeah.
>> So, let recorded this. I'll watch it.
>> Yeah. Let me ask you this. So Groot
stands for a gajimaru root.
>> Yes, correct.
>> Okay. So that's sort of
the the tap routt if you will. And these
associate chains are essentially
companion
chains to Groot
>> talking to it or or or sort of it's very
again I'm I'm trying to really dumb it
down but I I'm also trying to sort of
understand the relationship between you
know the main and then all the
associates that sort of work with it or
in companionship with it.
>> Okay. So the all chains carry the gaju
as a currency
and all currencies have to have a
monetary authority. So that's a root
node somewhere.
Now from that you can have associates
that extend and take take down funds
from there and can do whatever they want
inside of their own context. Right? So
you have these little additional chains.
They can have children as well. So this
is a child chain. um they can have
children as well and so you get a root
looking structure from that. Um this is
all in the context of the gaju as a
currency and the top or the root node of
that tree is root.
>> So if I want to go from this chain to
this chain with some funds all chains
recognize my like my account is valid on
all chains. First, as we discussed
earlier, first occurrence of an account
on a given chain, it's instantiated
there, right? So, I can freely transfer
my money because I signed it. So,
there's no no funny thing can happen
between chain A and chain B because I
signed the transactions to go from, you
know, chain A2 to chain A1 and chain A1
back to Groot and from Groot back to B1
and to B2, right? So, I can do this
longchain transaction. So it, for
example, if I'm I live in Japan, I'm
going to go on vacation in El Salvador.
Well, maybe El Salvador's got its own
jurisdictional issues and maybe Japan's
got its own jurisdictional issues. So if
the Now this is assuming mass adoption
of the gaju, everything like a lot of
stuff's happening in gaju already. We
got tons of transactions happening all
over the world. I live in Japan, so I'm
going to be in the whatever the Japan
chain is. I want to go send my money to
myself in the context of the El
Salvadorian chain so that I can do
business with vendors that are operating
on that chain. But we're all using the
Gaju. So I send money to myself from my
Japan chain to the Guatemala chain. The
wallet facilitates those hops for you.
So you don't have to know the whole
thing. That will take a couple minutes
because you have to wait for key blocks
to occur here.
>> Then it hops up, another key block,
another hop, another key block, another
hop. So about every two minutes you get
a hop. So that's, you know, that's a lot
faster than doing it the bankto bank way
as we currently have it. Um, but it's
still slower than doing like just a
quick spend at the at the cash register.
A spend at the cash register takes about
3 seconds because remember we talked
about the micro, right? So you're you're
waiting for that microblock interval to
have normal transactions processed
within a single chain. You're waiting
about 2 minutes to have a transfer
between chains happen. Um, so as that
goes through Groot to get down to El
Salvador from Japan because there's not
a direct route. The reason being that
Groot has to guarantee to like everybody
that Japan chains not making up fake god
juice and sending them somewhere. So
they need to be take drawn down from the
the tree structure that is that the
Japan chain's a part of. that need to be
drawn down from there and plused up to
whatever tree structure the Al Salvador
chain is is a part of. Now I I keep
saying in the context of the gaju that's
because
there's so many features to this thing
that like it's hard to you can't tell
somebody everything that go can do at
once because it's like it doesn't work.
Um so now that we've established this
idea of trees right financial so we call
this the financial authority graph um so
the financial authority graph for the
for the gaju as its root at in in group
and that's proof of work nobody no human
can affect that so that's algorithmic
money there you can't have there's no
wacko inflation thing there everything's
algorithmic thereu
also supports multiple currencies though
So if the Japan chain, going back to our
previous example, if the Japan chain, if
the Bank of Japan says, "Hey, we really
wish that we could have the yen, as we
already have it, but we would like to be
able to write smart contracts on chain
in Sophia because that would be giving
the yen a new superpower. That'd be
awesome. So we want to keep our national
currency. We want to keep our cash
system, but we also want to be able to
write smart contracts." the Bank of
Japan. Again, this gets into legal
territory. So, you have to have
something other than just proof of work.
You have to have this ability to work in
and out of regul regulated spaces,
right? So, if the Bank of Japan says
we're going to establish an associate
chain in the Gaju market, and that
associate chain is going to be an
associate of Brute in the context of the
Gaju, but it will now be the root of the
digital yen.
and they make that up and that is their
they have monetary authority over
creation and destruction at arbit at
will as they have already right so it's
not like a it's not like a new change
they would have the same financial
authority they already have over the end
just in the digital context what that
would allow them to do is you could have
your ATM or your bank service take your
yen from the existing uh digitized money
system put it on chain so they destroy
it in the bank and they put it on chain
for you so it meant some there or draw
that back down. You could keep the cash
systems that you have and as a vendor
you could write smart contracts and have
smart contract covered transactions on
on chain which now eliminates all the
credit card overhead all the compliance
overhead the CPI overhead all that
compliance nonsense that goes with
taking the problem we're having right
now with taking fiat payments for
example all that goes away you could
actually still take fiat you could have
it governed by chain onchain you could
take advantage of all the things you've
got with fiat and all the things that
you like cash systems
which we already discussed before is the
massive that's the ultimate scaling
system is cash. You can have all that
that you've already got that banks are
already expert in dealing with like
we've already got all this expertise
over here. Throwing it away is a little
bit silly just to try to stick it to the
man, right? Um you can have all that and
you can have it work in the blockchain
context by having Japan chain have two
currencies instead of just one.
the yen, it's the financial authority
for the digital yen. It is an associate
of the gaju. And what that allows you
then to do is if you establish another
chain, an associate chain, it could be
an associate of both the gaju and the
digital yen. So you could have associate
chains extending from that. So the
scaling opportunities don't stop. This
also makes forex easier because I can
then buy gajus directly on chain with my
yen, transfer them through the group and
get down to El Salvador without having
to have any additional routes. So it
solves a really sticky forex problem as
well.
>> So just to add in you're saying that
you're saying that like you
>> uh you're saying that like US dollars
could be digitized on Groot?
>> Yes. Not on Groot on an American
associate chain. Yes, I could
>> associate change. Wow. Yeah.
>> Hold on, hold on, hold on. There are two
ways this can happen. So, yes and yes is
the answer.
>> So, number one, you can have what is
called a stable coin. Stable coins are
basically
we're very against them in so many ways,
but
>> what they are is a wrapped set of money.
So it's a pinky promise from Circle for
example that we have all these assets
that underpin our ability to say that a
Ethereum wrapped smart contract dollar
is the same as a dollar. So USDC as it's
called and USDT which is Tether which is
not even a pinky promise. It's more like
a nod and a wink. Um
they are essentially smart contracts
running on an Ethereum based system. So
you could do that in group that you
create a smart contract form of money.
Now that is what a stable coin is as it
stands. It's a it's a representation of
a token on chain that the issuer says we
pinky promise or we nod and wink is
actually worth a dollar because we've
got those assets in the background. So
on Groot you could do that. However,
that is a dumb thing to do when you can
have an associate chain in which the
Federal Reserve becomes
>> the issuer of money just like it is
today. And all of the um the Federal
Reserve bank pieces around the different
states of America can be the nodes on
that system and they can all say, "Yes,
well, we will have a proof ofstake
system. We're all known actors. We're
all known to one another and we're going
to mint money as we please. Now the
interesting thing is they're now going
to have a constraint because we have a
we have a a constant. The constant is
gajus. So if the US government decides
that it would like to keep printing
money like it's competition or Olympic
sport in which they intend to get the
gold time and time again. The problem
they're going to have is it's going to
be very obvious that the dollar is worth
less and less and less money immediately
because money now is gaju. Nothing else
is money. Everything else is currency.
And this is a very important distinction
to make. So
what you end up with is that the gaju
becomes the reference currency to
everything else. This isn't obviously
immediate, but within 10 years, this is
going to be a reality. Within five
years, I'm going to predict that
countries will no longer have whatever
ridiculous currency they have that no
one believes in anyway and everyone
trades in counterfeit dollars or faked
dollars. Um, they're going to be trading
in gajus. The solution to having cash as
gajus as cash is going to come. I mean,
people are already doing some of these
ideas. There's a company in Germany
who've been looking at this as a gasei
and something or else I can't remember
the name Deviant or something but uh
there's another company in the UK who
meant most of the world's cash. They
actually make cash for everybody. Uh the
Swiss government has six and they did
the Swiss uh which the Swiss notes are
actually plastic. So all of the the
point I'm getting at is you could
actually instantiate cache on the Groot
on Gajus using a state channel
effectively
because it goes in one side it has all
the operations occur in the middle and
basically you have an end point where
the cache comes back into the system.
>> Mh.
>> Uh this is getting more and more complex
okay let's take this simple. Last year
at point0, I met with uh a chap who
worked for the New Zealand Reserve Bank
and a person who worked for the Canadian
Reserve Bank and both of them identified
a problem. Uh the Canadians ironically
didn't identify the ability to shut down
everyone's account as a problem because
they were really good at that by then.
Um
sorry, Scott. uh
what actually happened was uh they both
identified that they they operate within
quite a cloistered banking market and
they weren't very happy about the fact
that their banks had not instantiated
high-speed reliable payment rails.
So the conversation we had was actually
pretty interesting that yes, you the
Reserve Bank of New Zealand could
actually create such a thing and you the
Reserve Bank of Canada could do that
too. And you could decide who within
your infrastructure, your associate
chain, gets to do what. In fact, you'll
set all of the rules because you may
want to have a foreign currency
controls. You may want to say, well, we
don't really want gajus coming in above
this amount relative to the New Zealand
dollar or whatever you want. It's yours.
This is the whole thing about the
gajimaru. We don't own or control your
ability to do anything. So whatever you
want to do, the tools are there for you
to do it to determine exactly what you
want it to look like. So one of the
things that we actually put into the
patenting around this was that we
understood that sometimes associate
chains may refuse transactions. They
can't just have transactions be sent to
them and they have to accept it. No,
they have total control. So
each country is going to have a
different set of requirements, different
set of systems, different set of rules
and applications. But the endup is that
the US government could instantiate a
digital form of a dollar. They can
decide how much they want to control
things through that dollar. They could
take the U the EUSR approach, which is
Vivo gives you the Y, but Vivo have
control at all times. And if we don't
like what you say on social media, guess
what? no more money for you. Uh that's
the Europe, that's the EU SSR approach.
In the US, you might get a a slightly
more libertarian approach that says it's
your money sort of is unless we decide
you're a really bad person and you know
turned up to the riots on the 6th of
January, for example.
>> Um that's the the the whole the whole
point here is that you have to have a
bridge. You have to have some way to map
between reality and legal fictions. And
reality is nobody controls anything.
We're manifest from a rule system in the
world that just is. And we all have
philosophies and religions about how
that thing is. But the bottom line is
we're here. International law is like a
made up your opinion, man. Like where's
your army? Show me what your
international law is. So you have this
merit kind of the the law of the sea
problem with when it comes to like
things like gold that there really is
gold. You really can't fake it. Nobody
can just blow up a star and make more.
So it's you can make it illegal to own
gold over here, but that doesn't mean
that some island isn't going to say it's
a free-for-all over here, right? So you
have to have some natural mapping to
that. And that's what the Groot is. We
have a paper on this that's about uh
well we have a few things written about
this that's uh we call this the
negotiated space or the negotiable space
meaning that this is a place where you
negotiate and that negotiation comes
right back down to uh to negotiating
you know negotiated originalism which is
that the own the root of negotiation
is the mutual capacity for violence and
that based on that you wind up
establishing trust signals and society
and cooperation. But when you get back
down to the bottom of it, the mutual
capacities for violence is that's the
root of negotiation. People don't like
that story today because they're weird.
But that is true. That's that you come
back to natural law and of nature has
one tool. It's the razor. And if you go
against her too much, she'll just cut
you out. So you can't ignore that. So
that's what proof of work really is, is
you've got people competing in a natural
way to try to capture value from the
monetary route and that's that
contention is what guarantees nobody can
control it. However, we do live in
societies and societies are based on
trust. It not everything can be
trustless. We can't trust the monetary
origin. That has to be like gold. That
has to be something out of our hands.
Nobody has the, you know,
imposing the moral burden on somebody to
control the money supply is probably
itself kind of evil because you're
you're foisting this horribly perverse
incentive on somebody to be absolutely
pure and nobody can live up to that. So
we have to take the monetary supply out
of anyone's hands, out of everyone's
hands. Um, but we do have to trust each
other. Every optimization in human
society is actually based on trust.
Trust is actually the ultimate
optimization
in the context of chaotic nature. That I
know this is getting philosophical, but
these are very true concrete points upon
which monetary theory has to rest. And
we can't go against that or just make up
like I'm a smart guy. You can trust me.
I'll just toss society and make it all
up again because it'll be perfect this
time if I do it. That's ridiculous.
Every society's got their own way of
doing stuff. They've come, they've
evolved through the ages to be whatever
they are now. We can't impose a new
thing on them. We can't change nature
and we can't change everybody. So, we
have to make a system that maps to this.
So, you have to have a very naturalistic
kind of route for money for the origins.
And then you have to be able to cross
into the regulatory space and say, "Hey,
there's no actors over here. They've got
rules, whatever they are. It's not up to
us what those are. But within that
structure, you can create rules over
here that are different from rules over
here. And they all communicate through
that sort of wild west crazy land that
is the contentious space that is Groot.
And initially we we're launching
products and everything on group
directly but we understand that in the
future group is probably going its main
role is probably going to be interchain
connections mostly you know that
eventually when you get out to these
crazy scales of like everybody buying a
watermelon by the road is doing it in
gaju well we're not going to track all
those on group so it's probably going to
be transactions you know transfers of of
value from one chain to another And most
retail level transactions are going to
and especially bank-to-bank transactions
and things are probably going to be
happening in the context of regulated
associate chains and and that's a
natural thing. There's nothing wrong
with that.
>> The the second part of this is that um
as Greg mentioned this does put fiat
currencies in direct
juosition with the the gaju and that's
going to have a couple of funny side
effects. One is that if fiat money does
have a future, it's a future
inconvenience for things like cash
systems.
Maybe that's where that goes. I don't
know. Nobody actually knows. We can't
predict it and force a certain thing.
It's just going to have to evolve
however it evolves. Um the trying to
never try to force things, right? It
just always gets in a stupid stupid land
real fast. Um so if they they have a
future, that's where that future
probably rests. And that's not
necessarily bad. Maybe that's a great
thing. We don't know yet how it's going
to go, but it does have the effect of
putting
making it so that if you do hyperinflate
your currency base, it's going to be
very hard to do things like play with
GDP numbers in a fake way. So, what
happens with GDP is you say, "Hey, our
GDP uh you know, our GDP grew by 5% last
year."
Meanwhile, the monetary base doubled.
Did GDP really increase by 5%? Well, it
increased by 5% as measured in the
currency that you hyperinflated,
>> but it could be a a practical loss.
You could have
>> is a practical loss.
>> Yeah, it so you can play with it's like
changing the uh you know the the the
Curious George sketch where like he
wants to go ride the he wants to ride
the roller coaster and they measure his
height in licorice sticks and then all
day he's like eating half of them. like
he eats them all down to like half the
size. He's like, "Oh, dude, I grew. I'm
huge now. I can totally go ride the
roller coaster because I'm measuring in
liquor sticks, which I just shrank." So,
I was I was five licorice sticks this
morning. Now I'm 12. I grew I'm more
than twice as tall as I was. Obviously,
I can ride this now. And the dude's like
with a meter stick. He's like, "Dude,
no, you're still short. Knock it off."
>> So, your meter stick
>> your meter stick is the gau is what
you're saying. Or did I
>> because
It's it's the only constant in the
financial system.
>> Now, um
>> look, I I think a lot of what we're
talking about is obviously not
immediate. You need to have broad
adoption for these kind of things to
happen. But
>> um you know when we've talked in the
past about one of the things that the
big question mark we have is if we get a
million people into mine then we're
going to have a massive amount of excess
and and the best thing we can do with
that excess is actually try and create
as best we can a ch a value channel for
the gaju so that it's reasonably stable.
It's not spiking up and down during the
day. But the flip side is if we get a
100 million people into mine this there
will be no access
it'll actually get to contention before
we exit whitelist mining which would be
fantastic
>> because we don't want to have excess.
Thank you very much. It's a headache for
us to then take responsibility for doing
more things when we'd really like to
focus on how we can make money ourselves
delivering services products platforms
within the context of a whole new
digital world. I mean, this is literally
like the new world opening up in the
1500s. That's what this is. And we want
to be out there with picks and shovels,
not trying to figure out how we fix the
law of the sea so that people are
crossing between Europe and the new the
new world in relative safety. That's
essentially when you know Craig touched
on this earlier that it's a bit like the
old laws of the sea. How do we react? So
when you're within somebody's national
waters, you have to comply with their
rules. When you're on the high seas, you
don't. The high seas are a negotiable
space. There are rules around it, which
is what group does. But
if we get a bunch of stuff there, is
this making sense? I just want to make
sure we're not losing people.
>> Yeah. If if we get to 100 million
people, then we have we have a global
size economy right there. And that will
grow and grow and grow organically to
become something that does the things
we're talking about.
Thank you so much. That was amazing.
>> Sorry that that was a lot. You asked
like a nice little question and we went
>> but um
>> that's tomorrow, right?
>> Recording and that was that's a wrap on
I think for one thing it's going to be a
really nice um video to show people
