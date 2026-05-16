---
type: transcript
title: "Gajumaru ｜ GajuDesk wallet： no dependencies"
date_downloaded: 2026-05-16
transcript_method: subtitles
---

Most wallets that we have seen uh for
convenience are built into browsers. And
when I say built into browsers, they're
browser plugins. Uh the execution
context in the browser world is
already pretty sketchy and and
it's hard to understand exactly what's
going on when uh one because it's a
highly concurrent environment. So just
even if you wrote all your own code as a
plugin, you don't necessarily know
what's talking to what or what's visible
to what and you're completely at the
mercy of the browser protecting you from
both yourself and everybody else which
could be moving. So uh malicious code
running in another tab could be reading
stuff in an extension somewhere. Uh
there's a bunch of vectors of attack and
they're not all discovered and they're
not all pinned down and there are
deliberate back doors in some of these
things too. npm is a package manager for
JavaScript. If you're going to write
things that plug into a browser, it has
to be in Web Assembly or JavaScript or
whatever. It has to be it has to execute
in that in that browser context. Um
there's only a handful of ways to to
write things for that. Um what it does
is it lets you quickly pull dependencies
in like, oh, I know a library that does
X, Y, and Z. I need those things. I'll
pull it in and just build it and it
runs. Okay, cool. That's a good thing.
Um o sensibly. What's not so good is
that it does automatic dependency
resolution
um quite often and what that means is I
want to use framework X that does a few
things for me but framework X depends on
package Y and package Y just got updated
and every time I build my code I don't
know if package X is being updated or
not actually
um so the
The principle that we took and this is
Peter Harpney and I we were kind of
starting with some of these ideas was
let's just write a wallet from like with
no dependencies let's just write all the
code and everybody recoiled oh my god
write your own code that's impossible
it's not it's just annoying. Um, so we
we did and uh we've written
well we've written a couple of wallets
now with no dependencies and um one
great thing is that they're really small
and fast. That's always a bonus.
