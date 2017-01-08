## Module FFIKit

#### `Fn0`

``` purescript
data Fn0 :: Type -> Type
```

This is a collection of the most useful FFI conveniences I've found
in the PureScript community.  When you're wrapping a library, it's helpful
to have them all in one place.  (Credit is due to @garyb. @hdgarrood,
@hoodunit, and others.)
In particular, the `runThisFn*` and `runThisEff*` are time savers.
A function of zero arguments

#### `Fn1`

``` purescript
type Fn1 a b = a -> b
```

A function of one argument

#### `Fn2`

``` purescript
data Fn2 :: Type -> Type -> Type -> Type
```

A function of two arguments

#### `Fn3`

``` purescript
data Fn3 :: Type -> Type -> Type -> Type -> Type
```

A function of three arguments

#### `Fn4`

``` purescript
data Fn4 :: Type -> Type -> Type -> Type -> Type -> Type
```

A function of four arguments

#### `Fn5`

``` purescript
data Fn5 :: Type -> Type -> Type -> Type -> Type -> Type -> Type
```

A function of five arguments

#### `Fn6`

``` purescript
data Fn6 :: Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

A function of six arguments

#### `Fn7`

``` purescript
data Fn7 :: Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

A function of seven arguments

#### `Fn8`

``` purescript
data Fn8 :: Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

A function of eight arguments

#### `Fn9`

``` purescript
data Fn9 :: Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

A function of nine arguments

#### `Fn10`

``` purescript
data Fn10 :: Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

A function of ten arguments

#### `mkFn0`

``` purescript
mkFn0 :: forall a. (Unit -> a) -> Fn0 a
```

Create a function of no arguments

#### `mkFn1`

``` purescript
mkFn1 :: forall a b. (a -> b) -> Fn1 a b
```

Create a function of one argument

#### `mkFn2`

``` purescript
mkFn2 :: forall a b c. (a -> b -> c) -> Fn2 a b c
```

Create a function of two arguments from a curried function

#### `mkFn3`

``` purescript
mkFn3 :: forall a b c d. (a -> b -> c -> d) -> Fn3 a b c d
```

Create a function of three arguments from a curried function

#### `mkFn4`

``` purescript
mkFn4 :: forall a b c d e. (a -> b -> c -> d -> e) -> Fn4 a b c d e
```

Create a function of four arguments from a curried function

#### `mkFn5`

``` purescript
mkFn5 :: forall a b c d e f. (a -> b -> c -> d -> e -> f) -> Fn5 a b c d e f
```

Create a function of five arguments from a curried function

#### `mkFn6`

``` purescript
mkFn6 :: forall a b c d e f g. (a -> b -> c -> d -> e -> f -> g) -> Fn6 a b c d e f g
```

Create a function of six arguments from a curried function

#### `mkFn7`

``` purescript
mkFn7 :: forall a b c d e f g h. (a -> b -> c -> d -> e -> f -> g -> h) -> Fn7 a b c d e f g h
```

Create a function of seven arguments from a curried function

#### `mkFn8`

``` purescript
mkFn8 :: forall a b c d e f g h i. (a -> b -> c -> d -> e -> f -> g -> h -> i) -> Fn8 a b c d e f g h i
```

Create a function of eight arguments from a curried function

#### `mkFn9`

``` purescript
mkFn9 :: forall a b c d e f g h i j. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j) -> Fn9 a b c d e f g h i j
```

Create a function of nine arguments from a curried function

#### `mkFn10`

``` purescript
mkFn10 :: forall a b c d e f g h i j k. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> k) -> Fn10 a b c d e f g h i j k
```

Create a function of ten arguments from a curried function

#### `runFn0`

``` purescript
runFn0 :: forall a. Fn0 a -> a
```

Apply a function of no arguments

#### `runFn1`

``` purescript
runFn1 :: forall a b. Fn1 a b -> a -> b
```

Apply a function of one argument

#### `runFn2`

``` purescript
runFn2 :: forall a b c. Fn2 a b c -> a -> b -> c
```

Apply a function of two arguments

#### `runFn3`

``` purescript
runFn3 :: forall a b c d. Fn3 a b c d -> a -> b -> c -> d
```

Apply a function of three arguments

#### `runFn4`

``` purescript
runFn4 :: forall a b c d e. Fn4 a b c d e -> a -> b -> c -> d -> e
```

Apply a function of four arguments

#### `runFn5`

``` purescript
runFn5 :: forall a b c d e f. Fn5 a b c d e f -> a -> b -> c -> d -> e -> f
```

Apply a function of five arguments

#### `runFn6`

``` purescript
runFn6 :: forall a b c d e f g. Fn6 a b c d e f g -> a -> b -> c -> d -> e -> f -> g
```

Apply a function of six arguments

#### `runFn7`

``` purescript
runFn7 :: forall a b c d e f g h. Fn7 a b c d e f g h -> a -> b -> c -> d -> e -> f -> g -> h
```

Apply a function of seven arguments

#### `runFn8`

``` purescript
runFn8 :: forall a b c d e f g h i. Fn8 a b c d e f g h i -> a -> b -> c -> d -> e -> f -> g -> h -> i
```

Apply a function of eight arguments

#### `runFn9`

``` purescript
runFn9 :: forall a b c d e f g h i j. Fn9 a b c d e f g h i j -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j
```

Apply a function of nine arguments

#### `EffFn1`

``` purescript
data EffFn1 :: # Effect -> Type -> Type -> Type
```

#### `EffFn2`

``` purescript
data EffFn2 :: # Effect -> Type -> Type -> Type -> Type
```

#### `EffFn3`

``` purescript
data EffFn3 :: # Effect -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn4`

``` purescript
data EffFn4 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn5`

``` purescript
data EffFn5 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn6`

``` purescript
data EffFn6 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn7`

``` purescript
data EffFn7 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn8`

``` purescript
data EffFn8 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn9`

``` purescript
data EffFn9 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `EffFn10`

``` purescript
data EffFn10 :: # Effect -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type -> Type
```

#### `mkEffFn1`

``` purescript
mkEffFn1 :: forall eff a r. (a -> Eff eff r) -> EffFn1 eff a r
```

#### `mkEffFn2`

``` purescript
mkEffFn2 :: forall eff a b r. (a -> b -> Eff eff r) -> EffFn2 eff a b r
```

#### `mkEffFn3`

``` purescript
mkEffFn3 :: forall eff a b c r. (a -> b -> c -> Eff eff r) -> EffFn3 eff a b c r
```

#### `mkEffFn4`

``` purescript
mkEffFn4 :: forall eff a b c d r. (a -> b -> c -> d -> Eff eff r) -> EffFn4 eff a b c d r
```

#### `mkEffFn5`

``` purescript
mkEffFn5 :: forall eff a b c d e r. (a -> b -> c -> d -> e -> Eff eff r) -> EffFn5 eff a b c d e r
```

#### `mkEffFn6`

``` purescript
mkEffFn6 :: forall eff a b c d e f r. (a -> b -> c -> d -> e -> f -> Eff eff r) -> EffFn6 eff a b c d e f r
```

#### `mkEffFn7`

``` purescript
mkEffFn7 :: forall eff a b c d e f g r. (a -> b -> c -> d -> e -> f -> g -> Eff eff r) -> EffFn7 eff a b c d e f g r
```

#### `mkEffFn8`

``` purescript
mkEffFn8 :: forall eff a b c d e f g h r. (a -> b -> c -> d -> e -> f -> g -> h -> Eff eff r) -> EffFn8 eff a b c d e f g h r
```

#### `mkEffFn9`

``` purescript
mkEffFn9 :: forall eff a b c d e f g h i r. (a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff r) -> EffFn9 eff a b c d e f g h i r
```

#### `mkEffFn10`

``` purescript
mkEffFn10 :: forall eff a b c d e f g h i j r. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff r) -> EffFn10 eff a b c d e f g h i j r
```

#### `runEffFn1`

``` purescript
runEffFn1 :: forall eff a r. EffFn1 eff a r -> a -> Eff eff r
```

#### `runEffFn2`

``` purescript
runEffFn2 :: forall eff a b r. EffFn2 eff a b r -> a -> b -> Eff eff r
```

#### `runEffFn3`

``` purescript
runEffFn3 :: forall eff a b c r. EffFn3 eff a b c r -> a -> b -> c -> Eff eff r
```

#### `runEffFn4`

``` purescript
runEffFn4 :: forall eff a b c d r. EffFn4 eff a b c d r -> a -> b -> c -> d -> Eff eff r
```

#### `runEffFn5`

``` purescript
runEffFn5 :: forall eff a b c d e r. EffFn5 eff a b c d e r -> a -> b -> c -> d -> e -> Eff eff r
```

#### `runEffFn6`

``` purescript
runEffFn6 :: forall eff a b c d e f r. EffFn6 eff a b c d e f r -> a -> b -> c -> d -> e -> f -> Eff eff r
```

#### `runEffFn7`

``` purescript
runEffFn7 :: forall eff a b c d e f g r. EffFn7 eff a b c d e f g r -> a -> b -> c -> d -> e -> f -> g -> Eff eff r
```

#### `runEffFn8`

``` purescript
runEffFn8 :: forall eff a b c d e f g h r. EffFn8 eff a b c d e f g h r -> a -> b -> c -> d -> e -> f -> g -> h -> Eff eff r
```

#### `runEffFn9`

``` purescript
runEffFn9 :: forall eff a b c d e f g h i r. EffFn9 eff a b c d e f g h i r -> a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff r
```

#### `runEffFn10`

``` purescript
runEffFn10 :: forall eff a b c d e f g h i j r. EffFn10 eff a b c d e f g h i j r -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff r
```

#### `unsafeField`

``` purescript
unsafeField :: forall obj val. String -> obj -> val
```

#### `unsafeGetFieldEff`

``` purescript
unsafeGetFieldEff :: forall obj val eff. String -> obj -> Eff eff val
```

#### `unsafeSetFieldEff`

``` purescript
unsafeSetFieldEff :: forall obj val eff. String -> obj -> val -> Eff eff Unit
```

#### `unsafeDeleteFieldEff`

``` purescript
unsafeDeleteFieldEff :: forall obj eff. String -> obj -> Eff eff Unit
```

#### `runThisEffFn0`

``` purescript
runThisEffFn0 :: forall eff this a. String -> this -> Eff eff a
```

#### `runThisEffFn1`

``` purescript
runThisEffFn1 :: forall eff this a b. String -> this -> a -> Eff eff b
```

#### `runThisEffFn2`

``` purescript
runThisEffFn2 :: forall eff this a b c. String -> this -> a -> b -> Eff eff c
```

#### `runThisEffFn3`

``` purescript
runThisEffFn3 :: forall eff this a b c d. String -> this -> a -> b -> c -> Eff eff d
```

#### `runThisEffFn4`

``` purescript
runThisEffFn4 :: forall eff this a b c d e. String -> this -> a -> b -> c -> d -> Eff eff e
```

#### `runThisEffFn5`

``` purescript
runThisEffFn5 :: forall eff this a b c d e f. String -> this -> a -> b -> c -> d -> e -> Eff eff f
```

#### `runThisEffFn6`

``` purescript
runThisEffFn6 :: forall eff this a b c d e f g. String -> this -> a -> b -> c -> d -> e -> f -> Eff eff g
```

#### `runThisFn0`

``` purescript
runThisFn0 :: forall this a. String -> this -> a
```

#### `runThisFn1`

``` purescript
runThisFn1 :: forall this a b. String -> this -> a -> b
```

#### `runThisFn2`

``` purescript
runThisFn2 :: forall this a b c. String -> this -> a -> b -> c
```

#### `runThisFn3`

``` purescript
runThisFn3 :: forall this a b c d. String -> this -> a -> b -> c -> d
```

#### `runThisFn4`

``` purescript
runThisFn4 :: forall this a b c d e. String -> this -> a -> b -> c -> d -> e
```

#### `runThisFn5`

``` purescript
runThisFn5 :: forall this a b c d e f. String -> this -> a -> b -> c -> d -> e -> f
```

#### `runThisFn6`

``` purescript
runThisFn6 :: forall this a b c d e f g. String -> this -> a -> b -> c -> d -> e -> f -> g
```


