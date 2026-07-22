// Service-area pages. Each entry is hand-written, first-hand content that references
// real, completed projects in that market. Only markets with real projects are here,
// so there are no thin or near-duplicate pages.

export const AREAS = {
  fresno: {
    city: 'Fresno',
    title: 'Fresno Custom Homes & Construction | Ascent Construction',
    description:
      'Ascent Construction Group builds custom homes, home features, and commercial spaces in Fresno, California, including a pool house, a home wine bar, and an office build-out.',
    h1: 'Construction in Fresno, California',
    intro:
      'Fresno is one of the markets where several of our most detailed builds have come together. Patrick Steele runs each project personally, from the first walkthrough to the final punch list, so you work with the same person start to finish. Our Fresno work leans toward finish-driven residential features and polished commercial spaces, the kind of projects where the details decide whether the result feels ordinary or memorable.',
    projects: [
      {
        slug: 'pool-house',
        name: 'Pool House',
        blurb:
          'A ground-up pool house with a full kitchen, living room, game room, and a covered poolside patio, built as a true second living space beside the pool.',
      },
      {
        slug: 'wine-bar',
        name: 'Wine Bar',
        blurb:
          'A custom home wine lounge built around a backlit natural-stone countertop, with a glass wine display and warm wood ceilings.',
      },
      {
        slug: 'office',
        name: 'Office',
        blurb:
          'A commercial office build-out with a reception lounge, private offices, and an open workspace finished with warm wood floors and custom built-ins.',
      },
    ],
    services: [
      'Custom homes and additions',
      'High-end home features and specialty spaces',
      'Commercial build-outs',
      'Remodels',
    ],
    closing:
      'If you are planning a custom home, a standout home feature, or a commercial space in Fresno, reach out and we can walk through what it would take.',
  },

  sanger: {
    city: 'Sanger',
    title: 'Sanger Construction & Ranch Builds | Ascent Construction',
    description:
      "From a detached studio and tree house to a sport court, metal shop, and horse barns, see Ascent Construction Group's completed work on Sanger, California properties.",
    h1: 'Construction in Sanger, California',
    intro:
      'Some of our widest-ranging work has been on properties around Sanger, where a single project often means building several structures across one property. When a client needs a builder who can take on a whole property rather than one building at a time, that is the kind of work we are set up for.',
    projects: [
      {
        slug: 'studio',
        name: 'Studio',
        blurb:
          'A detached studio built from the ground up, with vaulted wood ceilings, a full kitchen, custom terrazzo, and a lofted sleeping area.',
      },
      {
        slug: 'treehouse',
        name: 'Tree House',
        blurb:
          'An elevated tree house retreat with a curved roof, wraparound deck, and big windows, built among the trees.',
      },
      {
        slug: 'sport-court',
        name: 'Sport Court',
        blurb:
          'A fenced multi-sport court with a basketball hoop and pickleball striping, paired with a timber-frame shade pavilion.',
      },
      {
        slug: 'shop',
        name: 'Shop',
        blurb:
          'A two-story metal shop with roll-up equipment bays on the ground floor and a finished studio living space upstairs.',
      },
      {
        slug: 'pasture',
        name: 'Horse Barns & Pasture',
        blurb:
          'A working horse property built with reclaimed lumber, including barns with a tack room and hay storage, a run-in shelter, board fencing, and irrigated pasture.',
      },
    ],
    services: [
      'Custom homes and detached studios',
      'Outdoor living and recreation',
      'Ranch and agricultural buildings',
      'Shops and outbuildings',
    ],
    closing:
      'If you have a Sanger property with more than one building in mind, get in touch and we can map out the whole scope with you.',
  },

  'shaver-lake': {
    city: 'Shaver Lake',
    title: 'Shaver Lake Mountain Homes & Remodels | Ascent Construction',
    description:
      'Ascent Construction Group builds and remodels mountain homes in Shaver Lake, California, planning for elevation, snow load, and weather, including a full cabin remodel.',
    h1: 'Mountain Home Construction and Remodels in Shaver Lake',
    intro:
      'Building and remodeling in Shaver Lake is a different job than working on the valley floor. Elevation, snow load, weather exposure, and remote access all change how a project has to be planned, and we account for those conditions from the first drawing forward.',
    projects: [
      {
        slug: 'shaver-cabin',
        name: 'Shaver Cabin',
        blurb:
          'A full interior remodel of a mountain cabin after significant flood and water damage. We rebuilt the inside from the studs out and restored the living spaces, bedrooms, and bathrooms with durable finishes throughout.',
      },
    ],
    services: [
      'Custom mountain homes and cabins',
      'Interior remodels',
      'Water damage restoration and rebuilds',
    ],
    closing:
      'If you are building or restoring a home in Shaver Lake, reach out early so we can plan around the mountain conditions from the start.',
  },

  auberry: {
    city: 'Auberry',
    title: 'Auberry Construction & Barn Conversions | Ascent',
    description:
      'Ascent Construction Group builds and converts structures in Auberry, California, including a fifty-year-old barn reimagined as a luxury residence in the Sierra foothills.',
    h1: 'Construction and Barn Conversions in Auberry',
    intro:
      'Auberry and the surrounding foothills call for a builder who is comfortable with rural properties and older structures. Our work here has focused on giving an existing building a second life while keeping the character that made it worth saving.',
    projects: [
      {
        slug: 'barn-to-residence',
        name: 'Barn to Residence',
        blurb:
          'A fifty-year-old barn transformed into a luxury residential living space. The original structure was reimagined and rebuilt inside and out, keeping the exposed wood ceilings while adding modern finishes and custom built-ins.',
      },
    ],
    services: [
      'Residential construction in the foothills',
      'Barn and outbuilding conversions',
      'Whole-home remodels',
    ],
    closing:
      'If you have a barn, outbuilding, or older home in Auberry you want to bring back to life, get in touch and we can talk through the possibilities.',
  },
};

export const AREA_SLUGS = Object.keys(AREAS);
