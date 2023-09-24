;(SETS = {
  Sequance10: Array.from({ length: 10 })
    .fill(null)
    .map((_, i) => i + 1),
  Integer: [58, 80, 90, 43, 50, 23, 47, 60, 83, 1],
  Power: Array.from({ length: 10 })
    .fill(null)
    .map((_, i) => 2 << i),
  Number: [
    0,
    1,
    42,
    69,
    100.001,
    'Math.PI',
    2.3333333333333335,
    0.3333333333333333,
    'Number.MAX_SAFE_INTEGER',
    'Number.MAX_SAFE_INTEGER',
    'NaN',
    'Infinity',
    '-Infinity',
  ],
  String: [
    '""',
    '"a"',
    '"Hello world!"',
    '"512"',
    '"The quick brown fox jumps over the lazy dog"',
  ],
  Date: [
    'new Date(0)',
    'new Date("1990.06.29")',
    `new Date("${YEAR}.01.01")`,
    `new Date("${YEAR}.02.01")`,
    `new Date("${YEAR}.03.01")`,
    `new Date("${YEAR}.04.01")`,
    `new Date("${YEAR}.05.01")`,
    `new Date("${YEAR}.06.01")`,
    `new Date("${YEAR}.07.01")`,
    `new Date("${YEAR}.08.01")`,
    `new Date("${YEAR}.09.01")`,
    `new Date("${YEAR}.11.01")`,
    `new Date("${YEAR}.12.01")`,
    `new Date("${YEAR}.02.28")`,
    `new Date("${YEAR}.06.15")`,
    `new Date("${YEAR}.01.30")`,
  ],
  Boolean: [false, true],
  Function: ['() => {}', '(x) => x'],
  None: ['undefined', 'null'],
  Empty: ['undefined', 'null', 'false', '0', '""', '[]', '{}'],
  Falsy: ['undefined', 'null', 'false', '0', '-0', '""', 'NaN'],
}),
  (FIXTURES = {
    [`${PREFIX}Falsy`]: SETS.Falsy,
    [`${PREFIX}Integer`]: SETS.Integer,
    [`${PREFIX}Number`]: SETS.Number,
    [`${PREFIX}Sequance10`]: SETS.Sequance10,
    [`${PREFIX}Power`]: SETS.Power,
    [`${PREFIX}String`]: SETS.String,
    [`${PREFIX}Date`]: SETS.Date,
    [`${PREFIX}Boolean`]: SETS.Boolean,
    [`${PREFIX}None`]: SETS.None,
    [`${PREFIX}Function`]: SETS.Function,
    [`${PREFIX}Empty`]: SETS.Empty,
    [`${PREFIX}Array`]: ['[]'],
    [`${PREFIX}Array<${PREFIX}Integer>`]: [`[${SETS.Integer.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Number>`]: [`[${SETS.Number.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Sequance10>`]: [`[${SETS.Sequance10.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Power>`]: [`[${SETS.Power.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Strings>`]: [`[${SETS.String.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Date>`]: [`[${SETS.Date.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Boolean>`]: [`[${SETS.Boolean.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Empty>`]: [`[${SETS.Empty.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}None>`]: [`[${SETS.None.join(',')}]`],
    [`${PREFIX}Array<${PREFIX}Falsy>`]: [`[${SETS.Falsy.join(',')}]`],
    [`${PREFIX}Object`]: ['{}'],
    [`${PREFIX}Map`]: ['new Map()'],
    [`${PREFIX}Set`]: ['new Set()'],
    [`${PREFIX}Set<${PREFIX}Integer>`]: [
      `new Set([${SETS.Integer.join(',')}])`,
    ],
    [`${PREFIX}Set<${PREFIX}Number>`]: [`new Set([${SETS.Number.join(',')}])`],
    [`${PREFIX}Set<${PREFIX}Sequance10>`]: [
      `new Set([${SETS.Sequance10.join(',')}])`,
    ],
    [`${PREFIX}Set<${PREFIX}Power>`]: [`new Set([${SETS.Power.join(',')}])`],
    [`${PREFIX}Set<${PREFIX}String>`]: [`new Set([${SETS.String.join(',')}])`],
    [`${PREFIX}Set<${PREFIX}Date>`]: [`new Set([${SETS.Date.join(',')}])`],
    [`${PREFIX}Set<${PREFIX}None>`]: [`new Set([${SETS.None.join(',')}])`],
    [`${PREFIX}Set<${PREFIX}Empty>`]: [`new Set([${SETS.Empty.join(',')}])`],
    [`${PREFIX}Set<${PREFIX}Falsy>`]: [`new Set([${SETS.Falsy.join(',')}])`],
  })
