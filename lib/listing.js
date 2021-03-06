'use strict';

var _ = require('lodash'),
    mapping = require('./mapping');

/*----------------------------------------------------------------------------*/

/** List of all function property dependencies. */
exports.funcDeps = _.uniq(_.flatMap(mapping.funcDep)).sort();

/** List of all object property dependencies. */
exports.objDeps = _.uniq(_.flatMap(mapping.objDep)).sort();

/** List of all variable dependencies. */
exports.varDeps = _.uniq(_.flatMap(mapping.varDep)).sort();

/** List of ES5 built-ins. */
exports.builtins = [
  'Array',
  'Boolean',
  'Date',
  'Error',
  'EvalError',
  'Function',
  'JSON',
  'Math',
  'Object',
  'RangeError',
  'ReferenceError',
  'RegExp',
  'String',
  'SyntaxError',
  'TypeError',
  'URIEror'
];

/** List of all function categories. */
exports.categories = _.keys(mapping.category).sort();

/** List of variables with complex assignments. */
exports.complexVars = [
  'cloneableTags',
  'reComplexWord',
  'typedArrayTags'
];

/** List of functions included in the "core" build. */
exports.coreFuncs = [
  'assignIn',
  'before',
  'bind',
  'chain',
  'clone',
  'compact',
  'concat',
  'create',
  'defaults',
  'defer',
  'delay',
  'escape',
  'every',
  'filter',
  'find',
  'flatten',
  'flattenDeep',
  'forEach',
  'has',
  'head',
  'identity',
  'indexOf',
  'isArguments',
  'isArray',
  'isBoolean',
  'isDate',
  'isEmpty',
  'isEqual',
  'isFinite',
  'isFunction',
  'isNaN',
  'isNull',
  'isNumber',
  'isObject',
  'isRegExp',
  'isString',
  'isUndefined',
  'iteratee',
  'keys',
  'last',
  'map',
  'matches',
  'max',
  'min',
  'mixin',
  'negate',
  'noConflict',
  'noop',
  'once',
  'pick',
  'reduce',
  'result',
  'size',
  'slice',
  'some',
  'sortBy',
  'tap',
  'thru',
  'toArray',
  'uniqueId',
  'value',
  'values'
];

/** List of the default ways to export the `lodash` function. */
exports.exports = [
  'amd',
  'global',
  'iojs',
  'node',
  'umd'
];

/** List of all functions. */
exports.funcs = _.filter(_.difference(_.keys(mapping.funcDep), exports.objDeps, exports.varDeps).sort(), function(key) {
  var type = typeof _.prototype[key];
  return type == 'function' || type == 'undefined';
});

/** List of lodash functions included by default. */
exports.includes = _.intersection(exports.funcs, _.concat(
  _.functions(_),
  _.functions(_.prototype),
  mapping.category.Seq,
  ['main']
));

/** List of dependencies that should not cause a minor bump when changed. */
exports.laxSemVerDeps = [
  'eq',
  'gt',
  'gte',
  'isArguments',
  'isArray',
  'isArrayLike',
  'isArrayLikeObject',
  'isBoolean',
  'isDate',
  'isElement',
  'isError',
  'isFinite',
  'isFunction',
  'isInteger',
  'isLength',
  'isNaN',
  'isNative',
  'isNil',
  'isNull',
  'isNumber',
  'isObject',
  'isObjectLike',
  'isRegExp',
  'isSafeInteger',
  'isString',
  'isSymbol',
  'isTypedArray',
  'isUndefined',
  'lt',
  'lte',
  'toString'
];

/** List of functions that support argument placeholders. */
exports.placeholderFuncs = [
  'bind',
  'bindKey',
  'curry',
  'curryRight',
  'partial',
  'partialRight'
];

/* Used to designate dependencies at the top level. */
exports.topLevelDeps = [
  'main'
];

/** List of uninlinable dependencies. */
exports.uninlinables = _.union(
  _.keys(_.templateSettings),
  [
    'arrayEach',
    'arrayFilter',
    'arrayIncludes',
    'arrayIncludesWith',
    'arrayMap',
    'baseDifferenceBy',
    'baseEach',
    'baseEachRight',
    'baseFilter',
    'baseFind',
    'baseFindIndex',
    'baseFlatten',
    'baseFor',
    'baseIntersectionBy',
    'baseIsEqual',
    'baseIsMatch',
    'basePullAt',
    'basePullAllBy',
    'baseReduce',
    'baseSet',
    'baseSlice',
    'baseSortedIndexBy',
    'baseSortedUniqBy',
    'baseUniqBy',
    'baseXorBy',
    'cacheHas',
    'charsEndIndex',
    'charsStartIndex',
    'createWrapper',
    'MapCache',
    'SetCache',
    'Stack',
    'reInterpolate',
    'reEscape',
    'reEvaluate',
    'root',
    'templateSettings'
  ],
  _.without(exports.includes,
    'clamp',
    'constant',
    'drop',
    'dropRight',
    'eq',
    'filter',
    'gt',
    'gte',
    'head',
    'identity',
    'isArguments',
    'isArray',
    'isArrayLike',
    'isArrayLikeObject',
    'isBoolean',
    'isDate',
    'isElement',
    'isError',
    'isFinite',
    'isFunction',
    'isInteger',
    'isLength',
    'isNaN',
    'isNative',
    'isNil',
    'isNull',
    'isNumber',
    'isObject',
    'isObjectLike',
    'isRegExp',
    'isSafeInteger',
    'isString',
    'isSymbol',
    'isTypedArray',
    'isUndefined',
    'last',
    'lt',
    'lte',
    'matches',
    'noop',
    'now',
    'pluck',
    'property',
    'toInteger',
    'toLength',
    'toNumber',
    'toPlainObject',
    'toSafeInteger',
    'toString',
    'values',
    'wrap'
  )
).sort();
