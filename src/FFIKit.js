"use strict";

// module FFIKit

exports.mkFn0 = function (fn) {
  return function () {
    return fn({});
  };
};

exports.mkFn2 = function (fn) {
  /* jshint maxparams: 2 */
  return function (a, b) {
    return fn(a)(b);
  };
};

exports.mkFn3 = function (fn) {
  /* jshint maxparams: 3 */
  return function (a, b, c) {
    return fn(a)(b)(c);
  };
};

exports.mkFn4 = function (fn) {
  /* jshint maxparams: 4 */
  return function (a, b, c, d) {
    return fn(a)(b)(c)(d);
  };
};

exports.mkFn5 = function (fn) {
  /* jshint maxparams: 5 */
  return function (a, b, c, d, e) {
    return fn(a)(b)(c)(d)(e);
  };
};

exports.mkFn6 = function (fn) {
  /* jshint maxparams: 6 */
  return function (a, b, c, d, e, f) {
    return fn(a)(b)(c)(d)(e)(f);
  };
};

exports.mkFn7 = function (fn) {
  /* jshint maxparams: 7 */
  return function (a, b, c, d, e, f, g) {
    return fn(a)(b)(c)(d)(e)(f)(g);
  };
};

exports.mkFn8 = function (fn) {
  /* jshint maxparams: 8 */
  return function (a, b, c, d, e, f, g, h) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h);
  };
};

exports.mkFn9 = function (fn) {
  /* jshint maxparams: 9 */
  return function (a, b, c, d, e, f, g, h, i) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i);
  };
};

exports.mkFn10 = function (fn) {
  /* jshint maxparams: 10 */
  return function (a, b, c, d, e, f, g, h, i, j) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j);
  };
};

exports.runFn0 = function (fn) {
  return fn();
};

exports.runFn2 = function (fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};

exports.runFn3 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
};

exports.runFn4 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return fn(a, b, c, d);
        };
      };
    };
  };
};

exports.runFn5 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return fn(a, b, c, d, e);
          };
        };
      };
    };
  };
};

exports.runFn6 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return fn(a, b, c, d, e, f);
            };
          };
        };
      };
    };
  };
};

exports.runFn7 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return fn(a, b, c, d, e, f, g);
              };
            };
          };
        };
      };
    };
  };
};

exports.runFn8 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
                  return fn(a, b, c, d, e, f, g, h);
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runFn9 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
                  return function (i) {
                    return fn(a, b, c, d, e, f, g, h, i);
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runFn10 = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
                  return function (i) {
                    return function (j) {
                      return fn(a, b, c, d, e, f, g, h, i, j);
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.mkEffFn1 = function mkEffFn1(fn) {
  return function(x) {
    return fn(x)();
  };
};

exports.mkEffFn2 = function mkEffFn2(fn) {
  return function(a, b) {
    return fn(a)(b)();
  };
};

exports.mkEffFn3 = function mkEffFn3(fn) {
  return function(a, b, c) {
    return fn(a)(b)(c)();
  };
};

exports.mkEffFn4 = function mkEffFn4(fn) {
  return function(a, b, c, d) {
    return fn(a)(b)(c)(d)();
  };
};

exports.mkEffFn5 = function mkEffFn5(fn) {
  return function(a, b, c, d, e) {
    return fn(a)(b)(c)(d)(e)();
  };
};

exports.mkEffFn6 = function mkEffFn6(fn) {
  return function(a, b, c, d, e, f) {
    return fn(a)(b)(c)(d)(e)(f)();
  };
};

exports.mkEffFn7 = function mkEffFn7(fn) {
  return function(a, b, c, d, e, f, g) {
    return fn(a)(b)(c)(d)(e)(f)(g)();
  };
};

exports.mkEffFn8 = function mkEffFn8(fn) {
  return function(a, b, c, d, e, f, g, h) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)();
  };
};

exports.mkEffFn9 = function mkEffFn9(fn) {
  return function(a, b, c, d, e, f, g, h, i) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)();
  };
};

exports.mkEffFn10 = function mkEffFn10(fn) {
  return function(a, b, c, d, e, f, g, h, i, j) {
    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)();
  };
};

exports.runEffFn1 = function runEffFn1(fn) {
  return function(a) {
    return function() {
      return fn(a);
    };
  };
};

exports.runEffFn2 = function runEffFn2(fn) {
  return function(a) {
    return function(b) {
      return function() {
        return fn(a, b);
      };
    };
  };
};

exports.runEffFn3 = function runEffFn3(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function() {
          return fn(a, b, c);
        };
      };
    };
  };
};

exports.runEffFn4 = function runEffFn4(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function() {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };
};

exports.runEffFn5 = function runEffFn5(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function() {
              return fn(a, b, c, d, e);
            };
          };
        };
      };
    };
  };
};

exports.runEffFn6 = function runEffFn6(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function() {
                return fn(a, b, c, d, e, f);
              };
            };
          };
        };
      };
    };
  };
};

exports.runEffFn7 = function runEffFn7(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function() {
                  return fn(a, b, c, d, e, f, g);
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runEffFn8 = function runEffFn8(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return function() {
                    return fn(a, b, c, d, e, f, g, h);
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runEffFn9 = function runEffFn9(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return function(i) {
                    return function() {
                      return fn(a, b, c, d, e, f, g, h, i);
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runEffFn10 = function runEffFn10(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return function(f) {
              return function(g) {
                return function(h) {
                  return function(i) {
                    return function(j) {
                      return function() {
                        return fn(a, b, c, d, e, f, g, h, i, j);
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.unsafeField = function(key){
  return function(obj){
    return obj[key];
  };
};

exports.unsafeGetFieldEff = function(key){
  return function(obj){
    return function(){
      return obj[key];
    };
  };
};

exports.unsafeSetFieldEff = function(key){
  return function(obj){
    return function(val){
      return function(){
        obj[key] = val;
      };
    };
  };
};

exports.unsafeDeleteFieldEff = function(key){
  return function(obj){
      return function(){
        delete obj[key];
      };
  };
};

exports.runThisEffFn0 = function(key){
  return function(self){
    return function(){
      return self[key]();
    };
  };
};

exports.runThisEffFn1 = function(key){
  return function(self){
    return function(a){
      return function(){
        return self[key](a);
      };
    };
  };
};

exports.runThisEffFn2 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(){
          return self[key](a, b);
        };
      };
    };
  };
};

exports.runThisEffFn3 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(){
            return self[key](a, b, c);
          };
        };
      };
    };
  };
};

exports.runThisEffFn4 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(d){
            return function(){
              return self[key](a, b, c, d);
            };
          };
        };
      };
    };
  };
};

exports.runThisEffFn5 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(d){
            return function(e){
              return function(){
                return self[key](a, b, c, d, e);
              };
            };
          };
        };
      };
    };
  };
};

exports.runThisEffFn6 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(d){
            return function(e){
              return function(f){
                return function(){
                  return self[key](a, b, c, d, e, f);
                };
              };
            };
          };
        };
      };
    };
  };
};

exports.runThisFn0 = function(key){
  return function(self){
    return self[key]();
  };
};

exports.runThisFn1 = function(key){
  return function(self){
    return function(a){
      return self[key](a);
    };
  };
};

exports.runThisFn2 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return self[key](a, b);
      };
    };
  };
};

exports.runThisFn3 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return self[key](a, b, c);
        };
      };
    };
  };
};

exports.runThisFn4 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(d){
            return self[key](a, b, c, d);
          };
        };
      };
    };
  };
};

exports.runThisFn5 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(d){
            return function(e){
              return self[key](a, b, c, d, e);
            };
          };
        };
      };
    };
  };
};

exports.runThisFn6 = function(key){
  return function(self){
    return function(a){
      return function(b){
        return function(c){
          return function(d){
            return function(e){
              return function(f){
                return self[key](a, b, c, d, e, f);
              };
            };
          };
        };
      };
    };
  };
};
