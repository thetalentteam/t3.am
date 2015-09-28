This website uses [Middleman](https://middlemanapp.com/)

## Setup

Middleman is distributed using the RubyGems package manager. This means you will
need both the Ruby language runtime installed and RubyGems to begin using
Middleman.

Mac OS X comes prepackaged with both Ruby and Rubygems, however, some of the
Middleman's dependencies need to be compiled during installation and on OS X
that requires Xcode. Xcode can be installed via the Mac App Store. Alternately,
if you have a free Apple Developer account, you can just install Command Line
Tools for Xcode from their downloads page.

Once you have Ruby and RubyGems up and running, execute the following from the
command line:

    bundle install

This will install all of the gems required for this project (including
Middleman).

## Run Local Server

    middleman server

## Build

    middleman build

## Deploy

    middleman deploy

