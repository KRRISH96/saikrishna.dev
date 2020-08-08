---
title: "Understanding Procs, Lambdas, and Blocks in Ruby - Part 2"
date: 2020-02-24
description: >-
  All Why?s Explained. With Blocks, Lambdas, and Procs — one method can be made to work in different aspects. Methods aren’t First-Class Functions unlike in few other languages, say Javascript.
keywords:
  - ruby
  - blocks
  - lambdas
  - procs
  - closures
path: /blogs/understanding-procs-lambdas-and-blocks-in-ruby-part-2-all-whys-explained
tags:
  - ruby
  - rails
  - beginners
  - webdev
coverImage: "./images/cover_image.png"
---

In the first part of this article, We learned about what Procs, Lambdas, and Blocks are? If you haven’t read it, I strongly recommend you to read [Part 1: All what?s Answered](/blogs/understanding-procs-lambdas-and-blocks-in-ruby-part-1-all-whats-answered), before continuing.

![Spiderman Meme - Cool story. But, What's your point?](./images/spiderman-meme.jpeg)

In this part, let’s explore why we need Procs, Lambdas, and Blocks in the first place and how helpful using them with few examples and use cases.

Let’s get started…

<hr>

## **Why Blocks?**

> **Recap**: _A block is a piece of a code that is either enclosed within curly braces `{}` or a `do..end`. It is similar to a method but neither belongs to any object nor it has a name._

To answer why blocks? and to understand the necessity of using them, we should answer one more question — Can the _identifier/reference_ of the ruby method be used as a _first-class_ value or passed with no additional action?

**No**. Ruby methods are not [First-Class Functions](https://en.wikipedia.org/wiki/First-class_function) unlike in few other languages, say Javascript.

> The identifier of a regular “function” in Ruby (which is really a method) cannot be used as a value or passed. It must first be retrieved into a `Method` or `Proc` object to be used as `first-class` data. — [wiki](https://en.wikipedia.org/wiki/First-class_function)

To be used as a first-class value, It must first be captured into a Method or Proc object first.

```ruby
  # Retrieving method reference into Method object
  def some_method
    puts "Called by Reference"
  end

  method_reference = method(:some_method)
  # <Method: main.some_method>

  # Calling the method using its reference
  def some_other_method(method_ref_argument)
    # Do something before
    method_ref_argument.call
    # Do some other things
  end

  some_other_method(method_reference)
  # returns "Called by Reference"
```

On the other hand, Blocks can be created “**on the go**” and we need not worry about reference. Let’s try to achieve the same as above with blocks.

```ruby
  # Block - No method reference capturing bullsh*t

  def some_other_method(&block_argument)
    # Do something before
    block_argument.call
    # Do some other things
  end

  some_other_method { puts "I am Block! and you are?" }
  # returns "I am Block! and you are?"
```

With this approach, we do not need to create a method each time we want some custom things to happen in different methods.

Well, can blocks be assigned/referenced at all? **Yes**, which we call as `procs` and `lambdas` — don’t worry about this now, we will discuss in later sections.

**P.S.** If you are curious about the `&` symbol prepended to the method argument, here is a beautifully written [article](https://ablogaboutcode.com/2012/01/04/the-ampersand-operator-in-ruby) that explains it.

### **Do you have a point?**

> One method can be made to work in different means by injecting some custom code within the method from outside.

In other words, Using the block gives back control to the programmer.

Let’s take a simple use-case…

A Customer Support System for a service provider, to manage support tickets that are raised by customers. Let’s just focus on ticket status and ignore other features.

A Ticket has one among open, on_hold or closed status. We have an API endpoint to mark the respective status for the tickets.

Usually, in our controller, we implement as below

```ruby
  class TicketsController < ApplicationController
    .....

    def mark_open
      if @ticket.update(status: "open")
        # request response logic
      else
        # error handler
      end
    end

    def mark_on_hold
      if @ticket.update(status: "on_hold")
        # request response logic
      else
        # error handler
      end
    end

    def mark_closed
      if @ticket.update(status: "closed")
        # request response logic
      else
        # error handler
      end
    end

    ......
  end
```

We can notice the repeated code for each method to handle the response and errors. The primary action of these methods is to update status let alone handle requests and responses.

By using blocks we can abstract the request-response and error handling to a new method keeping the actions clean and more readable.

```ruby
  class TicketsController < ApplicationController
    .....

    def mark_open
      status_manager do
        @ticket.update(status: "open")
      end
    end

    def mark_on_hold
      status_manager do
        @ticket.update(status: "on_hold")
      end
    end

    def mark_closed
      status_manager do
        @ticket.update(status: "closed")
      end
    end

    def status_manager
      is_status_changed = yield

      if is_status_changed
        # request response logic
      else
        # error handler
      end
    end

    ......
  end
```

### **Okay, so where can I use Blocks?**

The status_manager from our Ticketing app use case is one of many use cases where blocks can be helpful.

For instance, consider a few array methods [Array#each](https://apidock.com/ruby/Array/each), [Array#map](https://apidock.com/ruby/Array/map), [Array#select](https://apidock.com/ruby/Array/select), etc., — all these methods accept a block.

```ruby
  ["procs", "lambdas", "blocks"].each do |concept|
    puts "Ruby - #{concept}"
  end
```

We can do the same with a for loop or a while loop, literally any iterator. But, that’s a lot of code — In other terms, it is imperative programming. You can learn more about imperative, declarative and other programming paradigms [here](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms).

I suppose, by now we have our answer to “_Why Blocks?_”.

There is one limitation with blocks though. We can’t assign a `block` to a variable. Let’s say we want to implement similar functionality in more than one method. We have to send the block to each of the methods individually — this leads us to the next section “_Why Lambdas?_”.

<hr>

## **Why Lambdas?**

> **Recap:** *A Lambda is very similar to a block and is also called an anonymous function. But, unlike blocks *lambdas are objects* and can be assigned to variables with a special syntax.*

Using Lambdas and Procs, we can store a block in a variable and reuse. To be more specific, blocks are useless without a method call. Also, lambdas can be called repeatedly without having to rewrite them every time, unlike blocks.

Lambdas give more flexibility than methods.

```ruby
  greeter = -> (greeting, name) { greeting + " " + name }

  greeter.call("Dear", "Ruby Developer")
  # returns "Dear Ruby Developer"
```

In simpler terms, lambda is like any other method that takes a block with an exception being assignable to variables.

Let’s consider the Ticketing System again, this time will update our blocks to a single lambda.

```ruby
  class TicketsController < ApplicationController
    ......

    def mark_open
      status_manager("open")
    end

    def mark_on_hold
      status_manager("on_hold")
    end

    def mark_closed
      status_manager("closed")
    end

    status_updater = -> (ticket, status) do
      ticket.update(status: status)
    end

    def status_manager(status)
      is_status_changed = status_updater.call(@ticket, status)

      .....
    end

    ......
  end
```

Let’s take another use case and see how lambdas can be helpful.

This time we assume a gem for API service and we have a method called callback that is triggered for either success or failure responses. We need this method to be customizable and allow the gem user to define its functionality.

```ruby
  # gem code

  class SomeAPIServiceController
    .....

    def callback(on_success: on_failure:)
      if success
        on_success.call(res)
      else
        on_failure.call(err)
      end
    end

    .....
  end
```

We can use blocks, but we are limited to use only one block per method call. So, how can we pass multiple blocks to this callback method?

Wait for it, Wait for it, lambdas lambdas yessss, lambdas to the rescue.

```ruby
  success_callback = -> (response) { # Do something with response }
  failure_callback = -> (error) { # Do something with error }

  callback(
    on_success: success_callback,
    on_failure: failure_callback
  )
```

With that we are left with the final question in our Blocks, Lambdas and Procs Exploration — _Why Procs?_

With no further delay, let’s unravel the procs.

<hr>

## **Why Procs?**

> **Recap**: _Procs, the shorthand for Procedure, is a very similar concept to lambdas. Procs are instances of ruby `Proc` class._

Lambdas are a special case of Procs and are a `proc` object. There is no dedicated `Lambda` class. If you have understood the **why Lambdas?** section, we already have our answer to _why Procs?_

Also, we can use Procs instead of lambdas in every possible use-case, but lambdas and procs have their differences which I explained in [Part1: All’s What?s Answered.](/blogs/understanding-procs-lambdas-and-blocks-in-ruby-part-1-all-whats-answered)

> _Procs are full-fledged Objects and have all the abilities that an object does, while blocks on the other hand does not._

Since lambdas and procs are objects we can do all the crazy stuff that an object can do.

```ruby
  proc_object = Proc.new { puts "I am Proc!" }
  #<Proc:0x00007fc1ccfdcb50@(irb):9>

  proc_object.call
  # "I am Proc!"
```

Well, that concludes our journey.

<hr>

## **That’s too much man** 🤓

![Tired Puppy Image](./images/tired-puppy.jpeg)

Let’s do a quick summary and play with our cute little 🐶 buddy….

- A method can neither be passed as argument nor be returned from another method (methods in ruby are not first-class functions).

- Blocks are useless without method calls and have to be rewritten every time.

- Blocks give back control to the programmer.

- Procs are full-fledged Objects.

- Lambdas are a special case of procs.

- Lambdas are more flexible than methods.

- Using blocks, lambdas, and procs. One method can be made to work in different aspects by injecting some custom code within the method from outside.

### **References**

- [Any difference between First Class Function and High Order Function](https://stackoverflow.com/questions/10141124/any-difference-between-first-class-function-and-high-order-function)

- [Mastering Ruby Blocks in Less Than 5 Minutes](https://mixandgo.com/learn/mastering-ruby-blocks-in-less-than-5-minutes)

- [The Ultimate Guide to Blocks, Procs & Lambdas](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)

- And a lot of bits and pieces from mother google.

I am a beginner to ruby, so please let me know if I have missed or misunderstood something above. I look forward to your suggestions and feedback in the comments section below.

I hope this article helped you understand procs, lambdas and blocks better.

Thank you for reading this post, This is [Sai Krishna Prasad](https://www.linkedin.com/in/kskp1996), a self-taught and passionate web developer. Signing off Bubye….. until next time.
