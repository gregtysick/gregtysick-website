export const MAP = {
  title: 'Greg Tysick — From Ledgers to Agents',
  badge: 'G. Tysick',
  odometerKm: 4200,

  opening: {
    headline: ['From Ledgers', 'to Agents'],
    tagline:  'Greg Tysick · a practical systems journey',
    arc:      'Accounting and operations  →  systems builder  →  practical AI',
    hero:     { image: 'opening-field-map.svg', caption: 'fig. 0 — the route' },
    place: {
      headline: { x: 5.2, y: 5.0, h: 2.6, tilt: -.02, font: '700 96px "Caveat"', ink: '#3b2f21' },
      tagline:  { x: 5.2, y: 6.6, h: .8, z: .06, font: '500 58px "Caveat"', ink: '#8a765a' },
      arc:      { x: 5.4, y: 3.4, h: .72, z: .06, tilt: .015, w: 1400, font: '500 52px "Caveat"', ink: '#6d5c43' },
      hero:     { x: 11.3, y: 4.7, h: 3.1, sway: .004 },
      caption:  { x: 11.3, y: 2.85, h: .5, z: .05, font: '500 44px "Caveat"', ink: '#8a765a' },
    },
    props: [
      { file: 'prop-compass.png', x: 3.4, h: 1.0, zBack: 1.6, sway: .008 },
    ],
  },

  // Temporary traveler wiring. The approved Practical Engineer Beaver assets are
  // the next binary intake; keep this block functional until those files are in site/assets.
  mascot: {
    scale: 1.10,
    sit:   { file: 'fox.png',        h: 1.24, yOff: 0, perch: [-.19, 0] },
    walkA: { file: 'fox-walk-a.png', h: 0.70 },
    walkB: { file: 'fox-walk-b.png', h: 0.70 },
  },

  // Source-demo vehicles are retained only as dormant assets for now. The Greg V1
  // journey travels on foot so the evolving Beaver remains the continuity device.
  vehicles: {
    tank:  { file: 'tank.png',  h: 2.0,  yOff: -.53, perch: [.68,  -.12] },
    plane: { file: 'plane.png', h: 2.35, yOff: .1,   perch: [1.12,  .08], flies: true },
    moto:  { file: 'moto.png',  h: 1.65, yOff: -.52, perch: [.22,  -.04] },
  },

  chapters: [
    {
      id: 'ledger',
      wp: 'WP·00', wpX: 15.2,
      note: {
        title: '00 · the ledger — 1990s–2008',
        lines: ['Accounting, controls, reporting,', 'payroll, budgeting, and operational',
                'responsibility. The first pattern:', 'reliable decisions begin with',
                'reliable information.'],
        x: 17.5, y: 5.9, h: 2.35, tilt: -.03,
      },
      aphorism: { lines: ['"Reliable decisions begin', ' with reliable information."'], ink: '#66713f',
                  x: 27.5, y: 6.9, h: 1.35, tilt: .025, font: '600 62px "Caveat"' },
      art: [ { file: 'terrain-ledger-north.svg', x: 22.5, y: 2.75, h: 6.1, wallPin: true, sway: 0 } ],
      detailLink: { href: '/experience/#ledger', label: 'Read the accounting story' },
    },

    {
      id: 'practice',
      wp: 'WP·01', wpX: 31.2,
      note: {
        title: '01 · the practice — 2009–2012',
        lines: ['Working across many small businesses', 'exposed the same recurring friction:',
                'reconciliations, handoffs, duplicated', 'data, and reporting that arrived',
                'too late.'],
        x: 32.6, y: 6.0, h: 2.2, tilt: .03,
      },
      aphorism: { lines: ['"The workflow around the work', ' mattered just as much."'], ink: '#4c6378',
                  x: 43.6, y: 6.7, h: 1.35, tilt: -.02, font: '600 56px "Caveat"' },
      art: [ { file: 'terrain-practice-files.svg', x: 39.2, y: 2.7, h: 5.8, wallPin: true, sway: 0 } ],
      detailLink: { href: '/experience/#practice', label: 'See the experience' },
    },

    {
      id: 'network',
      wp: 'WP·02', wpX: 47.2,
      note: {
        title: '02 · the network — 2012–2017',
        lines: ['At High Speed Canada, finance and', 'operations lived inside a growing',
                'telecommunications business — billing,', 'payroll, CRM, multi-province ops,',
                'people, and process integration.'],
        x: 51, y: 5.9, h: 2.35, tilt: -.025,
      },
      aphorism: { lines: ['"Ledger lines turned into', ' network lines."'], ink: '#4f6f88',
                  x: 57.5, y: 6.8, h: 1.35, tilt: .02, font: '600 56px "Caveat"' },
      art: [ { file: 'terrain-network.svg', x: 55.7, y: 2.65, h: 5.9, wallPin: true, sway: 0 } ],
      detailLink: { href: '/experience/#network', label: 'View career details' },
    },

    {
      id: 'builder',
      wp: 'WP·03', wpX: 63.2,
      note: {
        title: '03 · the builder — 2017–2023',
        lines: ['VitaCeuticals and Group Vita brought', 'product costing, vendors, reporting,',
                'ecommerce, marketing, automation, and', 'team coordination into one',
                'environment.'],
        x: 66.5, y: 5.9, h: 2.35, tilt: .03,
      },
      aphorism: { lines: ['"The work was no longer about one', ' department. It was about how the',
                          ' business operated."'], ink: '#96543f',
                  x: 73.5, y: 6.8, h: 1.4, tilt: -.025, font: '600 60px "Caveat"' },
      art: [ { file: 'terrain-builder-workshop.svg', x: 72.1, y: 2.55, h: 6.0, wallPin: true, sway: 0 } ],
      detailLink: { href: '/experience/#builder', label: 'See what I built' },
    },

    {
      id: 'models',
      wp: 'WP·04', wpX: 79.2,
      note: {
        title: '04 · the models — 2022–present',
        lines: ['Trading systems, analytics, Python,', 'dashboards, risk frameworks, and',
                'feedback loops pushed the same', 'operating instinct into explicit',
                'models and automation.'],
        x: 84.8, y: 6.3, h: 2.3, tilt: -.02,
      },
      aphorism: { lines: ['"Measure the signal. Define the rule.', ' Observe. Improve."'], ink: '#a9792f',
                  x: 80.5, y: 2.2, h: 1.2, tilt: .02, font: '600 64px "Caveat"' },
      art: [ { file: 'terrain-models-signals.svg', x: 87.8, y: 2.65, h: 6.0, wallPin: true, sway: 0 } ],
      detailLink: { href: '/projects/', label: 'Explore projects' },
    },

    {
      id: 'operating-system',
      wp: 'WP·05', wpX: 95.4,
      finale: true,
      note: {
        title: '05 · the operating system — current',
        lines: ['Practical AI deployment, workflow', 'architecture, agents, structured context,',
                'SignalDesk, governance, handoffs,', 'approvals, and forward-deployed',
                'operations work.'],
        x: 96.8, y: 5.9, h: 2.35, tilt: -.03,
      },
      aphorism: { lines: ['"He didn\'t leave operations to chase AI.', ' He brought operational judgment',
                          ' into deploying AI inside real businesses."'], ink: '#cf7a35',
                  x: 107.3, y: 6.6, h: 1.45, tilt: .02, font: '600 62px "Caveat"' },
      art: [ { file: 'terrain-operating-system.svg', x: 103.0, y: 2.55, h: 6.1, wallPin: true, sway: 0 } ],
      extraWriting: [
        { lines: ['the map is never finished —', 'and neither is the work. keep scrolling →'], ink: '#8a765a',
          x: 108.6, y: 2.6, h: 1.15, tilt: -.015, font: '500 52px "Caveat"' },
      ],
      detailLink: { href: '/projects/', label: 'See what I am building now' },
    },
  ],
};
