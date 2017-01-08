module FFIKit where

import Control.Monad.Eff (Eff)
import Prelude (Unit)

-- | This is a collection of the most useful FFI conveniences I've found
-- | in the PureScript community.  When you're wrapping a library, it's helpful
-- | to have them all in one place.  (Credit is due to @garyb. @hdgarrood,
-- | @hoodunit, and others.)
-- | In particular, the `runThisFn*` and `runThisEff*` are time savers.

-- | A function of zero arguments
foreign import data Fn0 :: * -> *

-- | A function of one argument
type Fn1 a b = a -> b

-- | A function of two arguments
foreign import data Fn2 :: * -> * -> * -> *

-- | A function of three arguments
foreign import data Fn3 :: * -> * -> * -> * -> *

-- | A function of four arguments
foreign import data Fn4 :: * -> * -> * -> * -> * -> *

-- | A function of five arguments
foreign import data Fn5 :: * -> * -> * -> * -> * -> * -> *

-- | A function of six arguments
foreign import data Fn6 :: * -> * -> * -> * -> * -> * -> * -> *

-- | A function of seven arguments
foreign import data Fn7 :: * -> * -> * -> * -> * -> * -> * -> * -> *

-- | A function of eight arguments
foreign import data Fn8 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> *

-- | A function of nine arguments
foreign import data Fn9 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *

-- | A function of ten arguments
foreign import data Fn10 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *

-- | Create a function of no arguments
foreign import mkFn0 :: forall a. (Unit -> a) -> Fn0 a

-- | Create a function of one argument
mkFn1 :: forall a b. (a -> b) -> Fn1 a b
mkFn1 f = f

-- | Create a function of two arguments from a curried function
foreign import mkFn2 :: forall a b c. (a -> b -> c) -> Fn2 a b c

-- | Create a function of three arguments from a curried function
foreign import mkFn3 :: forall a b c d. (a -> b -> c -> d) -> Fn3 a b c d

-- | Create a function of four arguments from a curried function
foreign import mkFn4 :: forall a b c d e. (a -> b -> c -> d -> e) -> Fn4 a b c d e

-- | Create a function of five arguments from a curried function
foreign import mkFn5 :: forall a b c d e f. (a -> b -> c -> d -> e -> f) -> Fn5 a b c d e f

-- | Create a function of six arguments from a curried function
foreign import mkFn6 :: forall a b c d e f g. (a -> b -> c -> d -> e -> f -> g) -> Fn6 a b c d e f g

-- | Create a function of seven arguments from a curried function
foreign import mkFn7 :: forall a b c d e f g h. (a -> b -> c -> d -> e -> f -> g -> h) -> Fn7 a b c d e f g h

-- | Create a function of eight arguments from a curried function
foreign import mkFn8 :: forall a b c d e f g h i. (a -> b -> c -> d -> e -> f -> g -> h -> i) -> Fn8 a b c d e f g h i

-- | Create a function of nine arguments from a curried function
foreign import mkFn9 :: forall a b c d e f g h i j. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j) -> Fn9 a b c d e f g h i j

-- | Create a function of ten arguments from a curried function
foreign import mkFn10 :: forall a b c d e f g h i j k. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> k) -> Fn10 a b c d e f g h i j k

-- | Apply a function of no arguments
foreign import runFn0 :: forall a. Fn0 a -> a

-- | Apply a function of one argument
runFn1 :: forall a b. Fn1 a b -> a -> b
runFn1 f = f

-- | Apply a function of two arguments
foreign import runFn2 :: forall a b c. Fn2 a b c -> a -> b -> c

-- | Apply a function of three arguments
foreign import runFn3 :: forall a b c d. Fn3 a b c d -> a -> b -> c -> d

-- | Apply a function of four arguments
foreign import runFn4 :: forall a b c d e. Fn4 a b c d e -> a -> b -> c -> d -> e

-- | Apply a function of five arguments
foreign import runFn5 :: forall a b c d e f. Fn5 a b c d e f -> a -> b -> c -> d -> e -> f

-- | Apply a function of six arguments
foreign import runFn6 :: forall a b c d e f g. Fn6 a b c d e f g -> a -> b -> c -> d -> e -> f -> g

-- | Apply a function of seven arguments
foreign import runFn7 :: forall a b c d e f g h. Fn7 a b c d e f g h -> a -> b -> c -> d -> e -> f -> g -> h

-- | Apply a function of eight arguments
foreign import runFn8 :: forall a b c d e f g h i. Fn8 a b c d e f g h i -> a -> b -> c -> d -> e -> f -> g -> h -> i

-- | Apply a function of nine arguments
foreign import runFn9 :: forall a b c d e f g h i j. Fn9 a b c d e f g h i j -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j

foreign import data EffFn1 :: # ! -> * -> * -> *
foreign import data EffFn2 :: # ! -> * -> * -> * -> *
foreign import data EffFn3 :: # ! -> * -> * -> * -> * -> *
foreign import data EffFn4 :: # ! -> * -> * -> * -> * -> * -> *
foreign import data EffFn5 :: # ! -> * -> * -> * -> * -> * -> * -> *
foreign import data EffFn6 :: # ! -> * -> * -> * -> * -> * -> * -> * -> *
foreign import data EffFn7 :: # ! -> * -> * -> * -> * -> * -> * -> * -> * -> *
foreign import data EffFn8 :: # ! -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
foreign import data EffFn9 :: # ! -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
foreign import data EffFn10 :: # ! -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *

foreign import mkEffFn1 :: forall eff a r.
  (a -> Eff eff r) -> EffFn1 eff a r
foreign import mkEffFn2 :: forall eff a b r.
  (a -> b -> Eff eff r) -> EffFn2 eff a b r
foreign import mkEffFn3 :: forall eff a b c r.
  (a -> b -> c -> Eff eff r) -> EffFn3 eff a b c r
foreign import mkEffFn4 :: forall eff a b c d r.
  (a -> b -> c -> d -> Eff eff r) -> EffFn4 eff a b c d r
foreign import mkEffFn5 :: forall eff a b c d e r.
  (a -> b -> c -> d -> e -> Eff eff r) -> EffFn5 eff a b c d e r
foreign import mkEffFn6 :: forall eff a b c d e f r.
  (a -> b -> c -> d -> e -> f -> Eff eff r) -> EffFn6 eff a b c d e f r
foreign import mkEffFn7 :: forall eff a b c d e f g r.
  (a -> b -> c -> d -> e -> f -> g -> Eff eff r) -> EffFn7 eff a b c d e f g r
foreign import mkEffFn8 :: forall eff a b c d e f g h r.
  (a -> b -> c -> d -> e -> f -> g -> h -> Eff eff r) -> EffFn8 eff a b c d e f g h r
foreign import mkEffFn9 :: forall eff a b c d e f g h i r.
  (a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff r) -> EffFn9 eff a b c d e f g h i r
foreign import mkEffFn10 :: forall eff a b c d e f g h i j r.
  (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff r) -> EffFn10 eff a b c d e f g h i j r

foreign import runEffFn1 :: forall eff a r.
  EffFn1 eff a r -> a -> Eff eff r
foreign import runEffFn2 :: forall eff a b r.
  EffFn2 eff a b r -> a -> b -> Eff eff r
foreign import runEffFn3 :: forall eff a b c r.
  EffFn3 eff a b c r -> a -> b -> c -> Eff eff r
foreign import runEffFn4 :: forall eff a b c d r.
  EffFn4 eff a b c d r -> a -> b -> c -> d -> Eff eff r
foreign import runEffFn5 :: forall eff a b c d e r.
  EffFn5 eff a b c d e r -> a -> b -> c -> d -> e -> Eff eff r
foreign import runEffFn6 :: forall eff a b c d e f r.
  EffFn6 eff a b c d e f r -> a -> b -> c -> d -> e -> f -> Eff eff r
foreign import runEffFn7 :: forall eff a b c d e f g r.
  EffFn7 eff a b c d e f g r -> a -> b -> c -> d -> e -> f -> g -> Eff eff r
foreign import runEffFn8 :: forall eff a b c d e f g h r.
  EffFn8 eff a b c d e f g h r -> a -> b -> c -> d -> e -> f -> g -> h -> Eff eff r
foreign import runEffFn9 :: forall eff a b c d e f g h i r.
  EffFn9 eff a b c d e f g h i r -> a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff r
foreign import runEffFn10 :: forall eff a b c d e f g h i j r.
  EffFn10 eff a b c d e f g h i j r -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff r

foreign import unsafeField :: forall obj val. String -> obj -> val
foreign import unsafeGetFieldEff :: forall obj val eff. String -> obj -> Eff eff val
foreign import unsafeSetFieldEff :: forall obj val eff. String -> obj -> val -> Eff eff Unit
foreign import unsafeDeleteFieldEff :: forall obj eff. String -> obj -> Eff eff Unit

foreign import runThisEffFn0 :: forall eff this a. String -> this -> Eff eff a
foreign import runThisEffFn1 :: forall eff this a b. String -> this -> a -> Eff eff b
foreign import runThisEffFn2 :: forall eff this a b c. String -> this -> a -> b -> Eff eff c
foreign import runThisEffFn3 :: forall eff this a b c d. String -> this -> a -> b -> c -> Eff eff d
foreign import runThisEffFn4 :: forall eff this a b c d e. String -> this -> a -> b -> c -> d -> Eff eff e
foreign import runThisEffFn5 :: forall eff this a b c d e f. String -> this -> a -> b -> c -> d -> e -> Eff eff f
foreign import runThisEffFn6 :: forall eff this a b c d e f g. String -> this -> a -> b -> c -> d -> e -> f -> Eff eff g

foreign import runThisFn0 :: forall this a. String -> this -> a
foreign import runThisFn1 :: forall this a b. String -> this -> a -> b
foreign import runThisFn2 :: forall this a b c. String -> this -> a -> b -> c
foreign import runThisFn3 :: forall this a b c d. String -> this -> a -> b -> c -> d
foreign import runThisFn4 :: forall this a b c d e. String -> this -> a -> b -> c -> d -> e
foreign import runThisFn5 :: forall this a b c d e f. String -> this -> a -> b -> c -> d -> e -> f
foreign import runThisFn6 :: forall this a b c d e f g. String -> this -> a -> b -> c -> d -> e -> f -> g
