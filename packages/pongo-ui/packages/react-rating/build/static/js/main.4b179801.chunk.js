/*! For license information please see main.4b179801.chunk.js.LICENSE.txt */
(this['webpackJsonp@pongo-ui/react-rating'] =
  this['webpackJsonp@pongo-ui/react-rating'] || []).push([
  [0],
  [
    function (e, t, r) {
      'use strict';
      e.exports = r(3);
    },
    function (e, t, r) {
      'use strict';
      var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable;
      function i(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t['_' + String.fromCharCode(r)] = r;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var n = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              n[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, n)).join('')
          );
        } catch (o) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var r, a, c = i(e), f = 1; f < arguments.length; f++) {
              for (var s in (r = Object(arguments[f])))
                o.call(r, s) && (c[s] = r[s]);
              if (n) {
                a = n(r);
                for (var l = 0; l < a.length; l++)
                  u.call(r, a[l]) && (c[a[l]] = r[a[l]]);
              }
            }
            return c;
          };
    },
    function (e, t, r) {
      'use strict';
      e.exports = r(4);
    },
    function (e, t, r) {
      'use strict';
      var n = r(1),
        o = 60103,
        u = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var i = 60109,
        a = 60110,
        c = 60112;
      t.Suspense = 60113;
      var f = 60115,
        s = 60116;
      if ('function' === typeof Symbol && Symbol.for) {
        var l = Symbol.for;
        (o = l('react.element')),
          (u = l('react.portal')),
          (t.Fragment = l('react.fragment')),
          (t.StrictMode = l('react.strict_mode')),
          (t.Profiler = l('react.profiler')),
          (i = l('react.provider')),
          (a = l('react.context')),
          (c = l('react.forward_ref')),
          (t.Suspense = l('react.suspense')),
          (f = l('react.memo')),
          (s = l('react.lazy'));
      }
      var p = 'function' === typeof Symbol && Symbol.iterator;
      function y(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            r = 1;
          r < arguments.length;
          r++
        )
          t += '&args[]=' + encodeURIComponent(arguments[r]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var d = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = {};
      function h(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = r || d);
      }
      function _() {}
      function m(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = r || d);
      }
      (h.prototype.isReactComponent = {}),
        (h.prototype.setState = function (e, t) {
          if ('object' !== typeof e && 'function' !== typeof e && null != e)
            throw Error(y(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (h.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (_.prototype = h.prototype);
      var b = (m.prototype = new _());
      (b.constructor = m), n(b, h.prototype), (b.isPureReactComponent = !0);
      var g = { current: null },
        w = Object.prototype.hasOwnProperty,
        O = { key: !0, ref: !0, __self: !0, __source: !0 };
      function j(e, t, r) {
        var n,
          u = {},
          i = null,
          a = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = '' + t.key),
          t))
            w.call(t, n) && !O.hasOwnProperty(n) && (u[n] = t[n]);
        var c = arguments.length - 2;
        if (1 === c) u.children = r;
        else if (1 < c) {
          for (var f = Array(c), s = 0; s < c; s++) f[s] = arguments[s + 2];
          u.children = f;
        }
        if (e && e.defaultProps)
          for (n in (c = e.defaultProps)) void 0 === u[n] && (u[n] = c[n]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: a,
          props: u,
          _owner: g.current,
        };
      }
      function S(e) {
        return 'object' === typeof e && null !== e && e.$$typeof === o;
      }
      var k = /\/+/g;
      function E(e, t) {
        return 'object' === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function R(e, t, r, n, i) {
        var a = typeof e;
        ('undefined' !== a && 'boolean' !== a) || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else
          switch (a) {
            case 'string':
            case 'number':
              c = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case o:
                case u:
                  c = !0;
              }
          }
        if (c)
          return (
            (i = i((c = e))),
            (e = '' === n ? '.' + E(c, 0) : n),
            Array.isArray(i)
              ? ((r = ''),
                null != e && (r = e.replace(k, '$&/') + '/'),
                R(i, t, r, '', function (e) {
                  return e;
                }))
              : null != i &&
                (S(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    r +
                      (!i.key || (c && c.key === i.key)
                        ? ''
                        : ('' + i.key).replace(k, '$&/') + '/') +
                      e
                  )),
                t.push(i)),
            1
          );
        if (((c = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(e)))
          for (var f = 0; f < e.length; f++) {
            var s = n + E((a = e[f]), f);
            c += R(a, t, r, s, i);
          }
        else if (
          ((s = (function (e) {
            return null === e || 'object' !== typeof e
              ? null
              : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
              ? e
              : null;
          })(e)),
          'function' === typeof s)
        )
          for (e = s.call(e), f = 0; !(a = e.next()).done; )
            c += R((a = a.value), t, r, (s = n + E(a, f++)), i);
        else if ('object' === a)
          throw (
            ((t = '' + e),
            Error(
              y(
                31,
                '[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t
              )
            ))
          );
        return c;
      }
      function C(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          R(e, n, '', '', function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function $(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var P = { current: null };
      function x() {
        var e = P.current;
        if (null === e) throw Error(y(321));
        return e;
      }
      var I = {
        ReactCurrentDispatcher: P,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: g,
        IsSomeRendererActing: { current: !1 },
        assign: n,
      };
      (t.Children = {
        map: C,
        forEach: function (e, t, r) {
          C(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          return (
            C(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            C(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e)) throw Error(y(143));
          return e;
        },
      }),
        (t.Component = h),
        (t.PureComponent = m),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
        (t.cloneElement = function (e, t, r) {
          if (null === e || void 0 === e) throw Error(y(267, e));
          var u = n({}, e.props),
            i = e.key,
            a = e.ref,
            c = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (c = g.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var f = e.type.defaultProps;
            for (s in t)
              w.call(t, s) &&
                !O.hasOwnProperty(s) &&
                (u[s] = void 0 === t[s] && void 0 !== f ? f[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) u.children = r;
          else if (1 < s) {
            f = Array(s);
            for (var l = 0; l < s; l++) f[l] = arguments[l + 2];
            u.children = f;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: i,
            ref: a,
            props: u,
            _owner: c,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: a,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = j),
        (t.createFactory = function (e) {
          var t = j.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: s,
            _payload: { _status: -1, _result: e },
            _init: $,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return x().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return x().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return x().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return x().useImperativeHandle(e, t, r);
        }),
        (t.useLayoutEffect = function (e, t) {
          return x().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return x().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return x().useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return x().useRef(e);
        }),
        (t.useState = function (e) {
          return x().useState(e);
        }),
        (t.version = '17.0.2');
    },
    function (e, t, r) {
      'use strict';
      r(1);
      var n = r(0),
        o = 60103;
      if (((t.Fragment = 60107), 'function' === typeof Symbol && Symbol.for)) {
        var u = Symbol.for;
        (o = u('react.element')), (t.Fragment = u('react.fragment'));
      }
      var i =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = Object.prototype.hasOwnProperty,
        c = { key: !0, ref: !0, __self: !0, __source: !0 };
      function f(e, t, r) {
        var n,
          u = {},
          f = null,
          s = null;
        for (n in (void 0 !== r && (f = '' + r),
        void 0 !== t.key && (f = '' + t.key),
        void 0 !== t.ref && (s = t.ref),
        t))
          a.call(t, n) && !c.hasOwnProperty(n) && (u[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === u[n] && (u[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: s,
          props: u,
          _owner: i.current,
        };
      }
      (t.jsx = f), (t.jsxs = f);
    },
    function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Rating', function () {
          return u;
        });
      var n = r(0),
        o = r(2),
        u = n.forwardRef(function (e, t) {
          return Object(o.jsx)('div', { children: 'Rating Control' });
        });
      u.displayName = 'Rating';
    },
  ],
  [[5, 1]],
]);
//# sourceMappingURL=main.4b179801.chunk.js.map
