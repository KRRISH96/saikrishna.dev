---
title: "Understanding Procs, Lambdas, and Blocks in Ruby - Part 1"
date: 2020-02-23
description: >-
  All What?s Answered. Blocks, Lambdas, and Procs are Closures… Procs and Lambdas are objects.. Argument Handling, Return Statement Behaviour.
keywords:
  - ruby
  - blocks
  - lambdas
  - procs
  - closures
path: /blogs/understanding-procs-lambdas-and-blocks-in-ruby-part-1-all-whats-answered
tags:
  - ruby
  - rails
  - beginners
  - webdev
coverImage: "content/blogs/understanding-procs-lambdas-and-blocks-in-ruby-part-1-all-whats-answered/images/cover_image.png"
---

I recently started learning ruby as part of my journey to be a full stack developer. I am using [rubymonk.com](https://rubymonk.com) which is a really good source for an absolute beginner. After a few smooth moving lessons and problems, I landed on the Procs and Lambdas section. I had a hard time understanding procs, lambdas, and blocks.

After spending a good amount of time with them, I finally have some clarity on how procs and lambdas work. Now I want to share my knowledge so that others will have an easier time understanding them.

I would like to explain procs and lambdas with two W questions, What? and Why? Let’s start with a few what?’s.

<hr>

## **What are the Blocks?**

Before jumping into procs and lambdas, let’s get a clear picture of what blocks are.

A block is a piece of a code that is either enclosed within curly braces `{}` or a `do..end`. It is similar to a method but neither belongs to any object nor it has a name. Syntactically `{}` is used for **one-liner** blocks and `do..end` for **multi-line** blocks. Let’s take a look at the following snippet to see the difference.

```ruby
  concepts = ['blocks', 'lambdas', 'procs']

  # One liner {} blocks
  concepts.each { |concept| puts "Ruby: #{concept}" }

  # Multi-line do..end blocks
  mastered_concepts = ['blocks', 'procs']

  concepts.each do |concept|
    if mastered_concepts.include?(concept)
      puts "I already mastered #{concept}"
    else
      puts "Yet to learn this #{concept}"
    end
  end
```

### **The Implicit Block with its friendly keyword yield**

Blocks are also called closures in other languages. Blocks can be passed to a method either implicitly or explicitly. Only one block can be passed to a method.

**_Implicit blocks_** are nameless and not necessarily we list them in the method arguments.

```ruby
  def implicit_block_method
    yield
  end

  implicit_block_method do
    puts "I am an implicit block, also I am nameless!"
  end
```

Implicit Blocks can be invoked using the keyword `yield`. They can accept arguments too, if necessary. In other terms, blocks are just an anonymous chunk of code that is passed to a method to perform something.

```ruby
  def my_skills
    yield "procs"
    yield "blocks"
  end

  my_skills { |skill| puts "I am skilled in Ruby #{skill}" }
```

One thing to note here is that yield is just a keyword that invokes the block as many times it is used inside a method.

### **The Explicit Block and its name everything syndrome**

**_Explicit blocks_** are named and should be included in the arguments list.

The block should be the last argument that a method accepts. Explicit Blocks can be invoked by using the .call method on the block name.

```ruby
  def explicit_block_method(*argument_list, &block_name)
    block_name.call
  end

  explicit_block_method do
    puts "I am an explicit block, My name is block_name"
  end
```

An Example with multiple arguments.

```ruby
  def block_caller_method(normal_argument, &block_as_argument)
    puts "I am #{normal_argument} inside method"
    block_as_argument.call "argument for block"
  end

  block_caller_method("Normal argument") do |argument_for_block|
    puts "Inside block and received #{argument_for_block}"
  end
```

### **Does a block return?**

**Yes**, Blocks can return, just like methods. let’s talk about this in code.

```ruby
  ['ruby', 'javascript', 'python', 'java'].select do |language|
    language.length == 4
  end

  # returns ['ruby', 'java']
```

Here we are performing [Array#select](https://apidock.com/ruby/Array/select) and passing in a block to specify our condition. This will return a new array with languages that have 4 character long names.

### **Safeguard your method with “block_given?”**

Huff!! That’s a lot. There is one last thing we should know about blocks.

What if no block is passed to a method but we are expecting one, Ruby throws an error `LocalJumpError` if yield is used and `NoMethodError` if the method call is called on the block.

```ruby
  def expecting_block
    yield
  end

  expecting_block
  # LocalJumpError (no block given (yield))

  def me_to_expecting_block (&block_name)
    block_name.call
  end

  me_to_expecting_block
  # NoMethodError (undefined method `call' for nil:NilClass)
```

To fix this we just need to check if the block is given or not, using `block_given?`.

```ruby
  def is_block_given
    if block_given?
      yield "Yes"
    else
      puts "I am hurt :-/, I thought you would give me a block!"
    end
  end

  is_block_given { |status| puts "#{status} it is." }
  # Yes it is.

  is_block_given
  # I am hurt :-/, I thought you would give me a block!
```

<hr>

## **What are Lambdas?**

Now that we have some knowledge on blocks let’s move on to lambdas. Understanding blocks makes understanding lambdas much easier.

Lambda is the eleventh letter in the Greek alphabets…. Whaaaat? Oh, Shoot!! We are not talking about this(`λ`) lambda. Let’s get to know the lambdas in ruby then.

> A Lambda is very similar to a block and is also called an anonymous function. But, unlike blocks **_lambdas are objects_** and can be assigned to variables with a special syntax.

We can create lambda by using the keyword `lambda` or the `->` stab operator. The lambdas created with `->` stab operator are also called a stabby lambda.

```ruby
  # lambda block
  lambda = lambda { puts "I am a block declared with lambda" }

  # -> block
  stabby_lambda = -> { puts "Alternate syntax, stabby lambda" }
```

### **The Proc class**

When we created a lambda you might have observed something weird.

```ruby
  lambda = lambda { puts "A new lambda has been created." }

  # <Proc:0x00007ff3758d7b68@(irb):54 (lambda)>
```

The lambda is created as a new instance of the class `Proc`. Yes, This is fine. Because lambda’s do not have a dedicated class they are part of the class `Proc`. You can check this by calling the method `class` on the lambda.

```ruby
  lambda = lambda { puts "Proc is my class!"}

  lambda.class
  # returns Proc
```

Proc is the short form for Procedure, We will talk more about procs in the next section. You can happily ignore it for now.

### **Arguments in lambda**

Lambdas also accept arguments, But the syntax for this is dependent on whether you’ve declared the lambda with the `lambda` keyword or with the `->` operator.

```ruby
  lambda = lambda { |arg| puts "I am lambda #{arg}." }

  stabby_lambda = -> (arg) { puts "I am also lambda #{arg}." }

  lambda.call "Argument"
  # I am lambda Argument.

  stabby_lambda.call "Argument"
  # I am also lambda Argument.
```

Lambdas can also be called in multiple ways.

```ruby
  lambda = lambda { |name| puts "Hello #{name}!" }

  lambda.call "Ruby"
  lambda.("Ruby")
  lambda["Ruby"]
  lambda.=== "Ruby"

  # all of them prints the same, "Hello Ruby!"
```

### **Lambda in action**

Lambdas can be stored in a variable and can be passed to any method as an argument.

```ruby
  double_it = -> (num) { num * 2}

  [1,2,3,4,5].map(&double_it)
  # returns [2,4,6,8,10]
```

Did you notice the `&`(ampersand) symbol appended to double_it?. That’s a short form for calling the methodto_proc on the variable we stored. Also, `&` is the one responsible for converting a lambda / proc to block. Usually, [Array#map](https://apidock.com/ruby/Array/map) expects a block, not a lambda / proc.

**_`&double_it` is equivalent to `double_it.to_proc.call`_**

That’s all we need to know about lambdas for now. Let’s move on to procs.

<hr>

## **What are Procs?**

Proc, the shorthand for Procedure, is a very similar concept to lambdas. Lambdas are a subpart of Procs. As we have already seen, the `class` for `lambda` is a `Proc`. Like lambdas, **_Procs are objects of ruby Proc class_**. Though lambdas and procs are similar, they also have their differences. But we will get to that in a bit.

We can create a proc with a new instance of the Proc class `Proc.new` or with the keyword `proc` which is again the same as `Proc.new` and is just syntactical sugar. Let's create some procs…

```ruby
  # Proc.new block
  proc = Proc.new { puts "I am proc, New instance of Proc class." }

  # proc block
  new_proc = **proc** { puts "I am a proc with keyword!" }
```

Calling procs and passing them arguments is very similar to lambdas, so I am not going to spend a whole lot of time on it. We should say lambdas are similar to procs. Just call the method class on lambda and proc and it answers everything. Both returns Proc.

```ruby
  lambda = -> {}
  proc = proc {}

  lambda.class
  proc.class

  # both returns Proc
```

Also to show that lambdas and procs are objects, call `superclass` method on the class Proc . It returns Object.

```ruby
  Proc.superclass

  # returns Object
```

### **Procs vs Lambdas**

There are a couple of important differences between **procs** and **lambdas** specifically Arguments Handling and Return statement behavior.

**_Arguments Handling_**, We have a very strict officer here. Guess Who? Yeah, you guessed it right. It’s officer Lambda.

Lambdas throw an exception (`ArgumentError`) when an incorrect number of arguments are passed.

```ruby
  lambda = -> (arg1, arg2) { puts "I am strict, #{arg1} and #{arg2}" }
  lambda.call("Tough")

  # ArgumentError (wrong number of arguments (given 1, expected 2))
```

While Procs aren’t worried about them at all. If an extra argument is passed procs will ignore it. If fewer than expected arguments are passed procs will replace all the missed ones with nil.

```ruby
  proc = proc { |arg| puts "I am too lazy to care about #{arg}" }
  proc.call

  # I am too lazy to care about
```

Though procs don’t throw an exception for the number of arguments, other cases could raise exceptions. For example:

```ruby
  addition = proc { |num1, num2| num1+num2 }

  # passing only 1 argument
  addition.call(1)
  # TypeError (nil can't be coerced into Integer)

  # passing no arguments
  addition.call
  # NoMethodError (undefined method `+' for nil:NilClass)
```

Here, `proc` is not worried about arguments and replaces the missed one with nil. Programmatically nil can’t be added to Integer. So, we get a `TypeError` or `NoMethodError` as above.

Just to be on the safer side, always set default values to arguments. If default values cannot be set make sure to pass the required number of arguments or have error handling blocks.

```ruby
  addition = proc { |num1=0, num2=0| num1+num2 }

  addition.call
  # returns 0

  addition.call(2)
  # returns 2
```

**_Return statement Behavior_**, lambdas, and procs behave in a very different manner when comes to return statements.

Lambdas will return from the executing block/lambda and the further execution will continue as usual.

```ruby
  def return_from_lambda
    lambda = lambda { **return** "I will just return from lambda!" }

    puts "I will execute, before lambda return!"
    puts "#{lambda.call}"
    puts "I too will execute, after lambda return!"
  end

  return_from_lambda

  # I will execute, before lambda return!
  # I will just return from lambda!
  # I too will execute, after lambda return!
```

While procs will return from the currently executing context/method.

```ruby
  def proc_return_method
    proc = proc { **return** "I will return the method!" }

    puts "I will execute, before proc return."
    proc.call
    puts "I will never execute, after proc return!"
  end

  proc_return_method

  # prints "I will execute, before proc return!"
  # returns "I will return the method!"
```

There is one thing that we must know while handling returns with `proc`. As I mentioned proc will return from the method. If we just create a proc and call it without any context ruby raises a `LocalJumpError` as there is nothing to Jump back after returning from the current context.

```ruby
  error_proc = proc { return "I will raise exception" }
  error_proc.call

  # LocalJumpError (unexpected return)
```

Aaannnddddd!!! We are done.

<hr>

## **In Nutshell**

**Blocks**

- Block is a piece of code enclosed between `{}` or `do..end`.

- Block neither belongs to any object nor it has a name.

- Blocks can return just like methods.

**Lambdas**

- Lambdas are objects, unlike blocks. Also, lambdas have a name and can be assigned to a variable for later use.

- Lambda can be created either with the `lambda` keyword or with the `->` stab operator.

- Lambdas are strict in terms of arguments.

- Lambdas are a part of the `Proc` class.

- Lambda returns from current lambda/block.

**Procs**

- Procs are also objects and have a name.

- Proc can be created by `Proc.new` or with keyword `proc`.

- Procs aren’t worried about the number of arguments passed.

- Proc returns from a method/current context.

- Blocks, Lambdas, and Procs are all Closures.

Well well, well!!! We made it! Now we have answers to most whats on Procs, Lambdas, and Blocks.

In the next part of this article, I will talk about next W “why?” with a few examples demonstrating why we need procs and lambdas in the first place.

I am a beginner to ruby, so please let me know if I have missed or misunderstood something above. I look forward to your suggestions and feedback in the comments section below.

I hope this article helped you understand procs, lambdas and blocks better.

Thank you for reading this post, This is [Sai Krishna Prasad](https://www.linkedin.com/in/kskp1996), a self-taught and passionate web developer. Signing off Bubye….. until next time.
