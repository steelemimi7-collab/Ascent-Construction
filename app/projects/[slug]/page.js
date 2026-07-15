import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';
import HeroPhoto from '@/components/HeroPhoto';
import { buildMetadata } from '@/lib/seo';

const projects = {
  'custom-home-fresno': {
    title: 'Custom Home',
    type: 'Residential Construction',
    location: 'Fresno, CA',
    year: '2024',
    description: 'A full custom home build in Fresno. This project involved site prep, foundation, framing, and all finishes through final walkthrough. Built around the client\'s vision from the ground up.',
    details: [
      { label: 'Project Type', value: 'Custom Home' },
      { label: 'Location', value: 'Fresno, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Front exterior' },
      { src: null, caption: 'Main living area' },
      { src: null, caption: 'Kitchen' },
      { src: null, caption: 'Master bedroom' },
    ],
  },
  'ranch-shop-madera': {
    title: 'Ranch Shop & Arena',
    type: 'Ranch & Agricultural',
    location: 'Madera, CA',
    year: '2024',
    description: 'A large-scale ranch build including a working shop and arena. Designed for real agricultural use and built to handle equipment, livestock, and the wear that comes with a working property.',
    details: [
      { label: 'Project Type', value: 'Ranch Shop & Arena' },
      { label: 'Location', value: 'Madera, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Shop exterior' },
      { src: null, caption: 'Arena overview' },
      { src: null, caption: 'Interior shop' },
    ],
  },
  'outdoor-living-clovis': {
    title: 'Outdoor Living Space',
    type: 'Outdoor Living & Recreation',
    location: 'Clovis, CA',
    year: '2023',
    description: 'A complete outdoor living build including a covered patio, fire pit, and landscaping. Designed to be used and enjoyed year-round.',
    details: [
      { label: 'Project Type', value: 'Outdoor Living' },
      { label: 'Location', value: 'Clovis, CA' },
      { label: 'Year', value: '2023' },
      { label: 'Features', value: 'Covered patio, fire pit' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Covered patio' },
      { src: null, caption: 'Fire pit area' },
      { src: null, caption: 'Overall view' },
    ],
  },
  'barn-to-residence': {
    title: 'Barn to Residence',
    type: 'Residential Construction',
    location: 'Auberry, CA',
    description: 'A fifty-year-old barn transformed into a luxury residential living space. The original structure was reimagined and rebuilt, keeping the character of the exposed wood ceilings while adding modern finishes, custom built-ins, and comfortable living and sleeping spaces throughout. From design through completion, every part of the conversion was handled with care and attention to detail.',
    details: [
      { label: 'Project Type', value: 'Residential Construction' },
      { label: 'Location', value: 'Auberry, CA' },
    ],
    hero: '/barn-to-residence/barn-to-residence-exterior.jpg',
    photos: [
      { src: '/barn-to-residence/barn-to-residence-exterior.jpg' },
      { src: '/barn-to-residence/barn-to-residence-01.jpg' },
      { src: '/barn-to-residence/barn-to-residence-06.jpg' },
      { src: '/barn-to-residence/barn-to-residence-02.jpg' },
      { src: '/barn-to-residence/barn-to-residence-03.jpg' },
      { src: '/barn-to-residence/barn-to-residence-04.jpg' },
      { src: '/barn-to-residence/barn-to-residence-05.jpg' },
      { src: '/barn-to-residence/barn-to-residence-07.jpg' },
      { src: '/barn-to-residence/barn-to-residence-08.jpg' },
    ],
  },
  'pool-house': {
    title: 'Pool House',
    type: 'Residential Construction',
    location: 'Fresno, CA',
    description: 'A complete pool house built from the ground up as a true second living space beside the pool. Inside, a full kitchen, a comfortable living room, and a game room with a pool table sit under vaulted wood ceilings, finished with custom cabinetry, patterned tile, and stonework throughout. Outside, a covered patio and lounge areas look out over the pool and grounds. Every phase was handled start to finish, from foundation and framing to the final finishes.',
    details: [
      { label: 'Project Type', value: 'Residential Construction' },
      { label: 'Location', value: 'Fresno, CA' },
    ],
    hero: '/pool-house/pool-house-21.jpg',
    photos: [
      { src: '/pool-house/pool-house-20.jpg' },
      { src: '/pool-house/pool-house-21.jpg' },
      { src: '/pool-house/pool-house-22.jpg' },
      { src: '/pool-house/pool-house-23.jpg' },
      { src: '/pool-house/pool-house-03.jpg' },
      { src: '/pool-house/pool-house-08.jpg' },
      { src: '/pool-house/pool-house-01.jpg' },
      { src: '/pool-house/pool-house-18.jpg' },
      { src: '/pool-house/pool-house-19.jpg' },
      { src: '/pool-house/pool-house-02.jpg' },
      { src: '/pool-house/pool-house-04.jpg' },
      { src: '/pool-house/pool-house-05.jpg' },
      { src: '/pool-house/pool-house-06.jpg' },
      { src: '/pool-house/pool-house-07.jpg' },
      { src: '/pool-house/pool-house-09.jpg' },
      { src: '/pool-house/pool-house-10.jpg' },
      { src: '/pool-house/pool-house-11.jpg' },
      { src: '/pool-house/pool-house-12.jpg' },
      { src: '/pool-house/pool-house-13.jpg' },
      { src: '/pool-house/pool-house-14.jpg' },
      { src: '/pool-house/pool-house-15.jpg' },
      { src: '/pool-house/pool-house-16.jpg' },
      { src: '/pool-house/pool-house-17.jpg' },
    ],
  },
  'studio': {
    title: 'Studio',
    type: 'Residential Construction',
    location: 'Sanger, CA',
    year: '2024',
    description: 'A detached studio designed as a complete, self-contained retreat and built from the ground up, from foundation and framing through every final detail. Inside, vaulted wood ceilings and walls of windows fill the open space with natural light. The full kitchen is finished with custom cabinetry and terrazzo countertops, flowing into a comfortable living area and a lofted sleeping space tucked above. Warm white oak floors, custom terrazzo, and carefully chosen finishes carry through every corner. The result is a flexible living, guest, or getaway space that feels like a true home in its own right.',
    details: [
      { label: 'Project Type', value: 'Residential Construction' },
      { label: 'Location', value: 'Sanger, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    hero: '/studio/studio-03.jpg',
    photos: [
      { src: '/studio/studio-01.jpg' },
      { src: '/studio/studio-02.jpg' },
      { src: '/studio/studio-03.jpg' },
      { src: '/studio/studio-04.jpg' },
      { src: '/studio/studio-05.jpg' },
      { src: '/studio/studio-06.jpg' },
      { src: '/studio/studio-07.jpg' },
      { src: '/studio/studio-08.jpg' },
      { src: '/studio/studio-09.jpg' },
      { src: '/studio/studio-10.jpg' },
      { src: '/studio/studio-11.jpg' },
      { src: '/studio/studio-12.jpg' },
      { src: '/studio/studio-13.jpg' },
    ],
  },
  'sport-court': {
    title: 'Sport Court',
    type: 'Outdoor Living & Recreation',
    location: 'Sanger, CA',
    year: '2024',
    description: 'A multi-sport court built for year-round recreation, with a basketball hoop, pickleball and tennis striping, and a full fenced surround. A covered timber-frame pavilion alongside the court offers shade and seating. The whole project was handled from the ground up, from grading and the concrete surround to the finished court coating and lighting for evening play.',
    details: [
      { label: 'Project Type', value: 'Outdoor Living & Recreation' },
      { label: 'Location', value: 'Sanger, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Features', value: 'Basketball, pickleball, tennis' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    hero: '/sport-court/sport-court-05.jpg',
    photos: [
      { src: '/sport-court/sport-court-05.jpg' },
      { src: '/sport-court/sport-court-03.jpg' },
      { src: '/sport-court/sport-court-01.jpg' },
      { src: '/sport-court/sport-court-04.jpg' },
      { src: '/sport-court/sport-court-06.jpg' },
      { src: '/sport-court/sport-court-02.jpg' },
    ],
  },
  'treehouse': {
    title: 'Tree House',
    type: 'Outdoor Living & Recreation',
    location: 'Sanger, CA',
    year: '2024',
    description: 'A modern elevated tree house retreat, built from the ground up among the trees. This custom getaway has a curved roof, wraparound deck, and big windows that open onto the property. Designed and constructed start to finish as a one-of-a-kind outdoor living and recreation space made for relaxing and getting away without leaving home.',
    details: [
      { label: 'Project Type', value: 'Outdoor Living & Recreation' },
      { label: 'Location', value: 'Sanger, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    hero: '/treehouse/treehouse-01.jpg',
    photos: [
      { src: '/treehouse/treehouse-01.jpg' },
      { src: '/treehouse/treehouse-02.jpg' },
      { src: '/treehouse/treehouse-03.jpg' },
      { src: '/treehouse/treehouse-04.jpg' },
    ],
  },
  'nature-fireball': {
    title: 'Nature Fire Pit',
    type: 'Fire Pits & Outdoor Fire Features',
    location: 'Sanger, CA',
    description: 'A custom steel fire ball with an intricate nature scene laser-cut into the sphere, from trees and branches to wildlife. Lit from within, the cutwork glows with the fire and casts patterns across the patio after dark. It stands as a true centerpiece for the outdoor space, built as a one-of-a-kind fire feature.',
    details: [
      { label: 'Project Type', value: 'Fire Pits & Outdoor Fire Features' },
      { label: 'Location', value: 'Sanger, CA' },
    ],
    hero: '/fireball/fireball-01.jpg',
    photos: [
      { src: '/fireball/fireball-01.jpg' },
    ],
  },
  'office': {
    title: 'Office',
    type: 'Commercial & Specialty',
    location: 'Fresno, CA',
    description: 'A full commercial office build-out designed as a clean, modern workspace. The space includes an open work area, private offices, and a comfortable reception and lounge, finished with warm wood floors, custom built-ins, and bright, professional lighting throughout.',
    details: [
      { label: 'Project Type', value: 'Commercial & Specialty' },
      { label: 'Location', value: 'Fresno, CA' },
    ],
    hero: '/office/office-01.jpg',
    photos: [
      { src: '/office/office-01.jpg' },
      { src: '/office/office-02.jpg' },
      { src: '/office/office-03.jpg' },
      { src: '/office/office-04.jpg' },
      { src: '/office/office-05.jpg' },
      { src: '/office/office-06.jpg' },
      { src: '/office/office-07.jpg' },
      { src: '/office/office-08.jpg' },
      { src: '/office/office-09.jpg' },
    ],
  },
  'wine-bar': {
    title: 'Wine Bar',
    type: 'Residential Construction',
    location: 'Fresno, CA',
    description: 'A custom wine bar and lounge built around a showpiece backlit countertop. The illuminated natural stone glows from within, making the bar the centerpiece of the room and the first thing every guest notices. Around it, warm wood ceilings, custom built-in display shelving, bar seating, and comfortable lounge furniture complete the space. The whole build was finished as a one-of-a-kind specialty project, from framing through the final details, with that lit stone countertop as its standout feature.',
    details: [
      { label: 'Project Type', value: 'Residential Construction' },
      { label: 'Location', value: 'Fresno, CA' },
    ],
    hero: '/wine-bar/wine-bar-02.jpg',
    photos: [
      { src: '/wine-bar/wine-bar-02.jpg' },
      { src: '/wine-bar/wine-bar-07.jpg' },
      { src: '/wine-bar/wine-bar-09.jpg' },
      { src: '/wine-bar/wine-bar-08.jpg' },
      { src: '/wine-bar/wine-bar-10.jpg' },
      { src: '/wine-bar/wine-bar-04.jpg' },
      { src: '/wine-bar/wine-bar-05.jpg' },
      { src: '/wine-bar/wine-bar-06.jpg' },
      { src: '/wine-bar/wine-bar-01.jpg' },
    ],
  },
  'shop': {
    title: 'Shop',
    type: 'Ranch & Agricultural',
    location: 'Sanger, CA',
    year: '2024',
    description: 'A full ground-up build, taken from bare site to finished structure. The ground floor is a complete working shop with roll-up equipment bays and plenty of room for vehicles, tools, and storage. Upstairs is a finished studio living space with its own private deck that looks out over the property, a comfortable retreat built right above the work below. Every phase was handled in-house: site work and foundation, the steel structure and metal siding, the roofing, windows and doors, all utilities, and the complete interior buildout of the upstairs studio. The result is a hardworking, built-to-last building that does double duty as both a serious shop and a true living space.',
    details: [
      { label: 'Project Type', value: 'Ranch & Agricultural' },
      { label: 'Location', value: 'Sanger, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    hero: '/shop/shop-01.jpg',
    photos: [
      { src: '/shop/shop-01.jpg' },
      { src: '/shop/shop-02.jpg' },
      { src: '/shop/shop-03.jpg' },
      { src: '/shop/shop-04.jpg' },
    ],
  },
  'pasture': {
    title: 'Horse Barns & Pasture',
    type: 'Ranch & Agricultural',
    location: 'Sanger, CA',
    year: '2023',
    description: 'A working horse property built with reclaimed lumber, featuring barns with a tack room and hay storage, a run-in shelter, board fencing, and irrigated pasture. Designed for real agricultural use and built to handle livestock, equipment, and weather over the long run.',
    details: [
      { label: 'Project Type', value: 'Ranch & Agricultural' },
      { label: 'Location', value: 'Sanger, CA' },
      { label: 'Year', value: '2023' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    hero: '/pasture/pasture-02.png',
    photos: [
      { src: '/pasture/pasture-08.jpg' },
      { src: '/pasture/pasture-01.png' },
      { src: '/pasture/pasture-02.png' },
      { src: '/pasture/pasture-03.png' },
      { src: '/pasture/pasture-04.png' },
      { src: '/pasture/pasture-05.jpg' },
      { src: '/pasture/pasture-06.jpg' },
      { src: '/pasture/pasture-07.jpg' },
    ],
  },
  'project-4': {
    title: 'Project Name',
    type: 'Mountain Homes',
    location: 'Oakhurst, CA',
    year: '2024',
    description: '[Project description coming soon]',
    details: [
      { label: 'Project Type', value: 'Mountain Home' },
      { label: 'Location', value: 'Oakhurst, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Photo 1' },
      { src: null, caption: 'Photo 2' },
      { src: null, caption: 'Photo 3' },
    ],
  },
  'project-5': {
    title: 'Project Name',
    type: 'Fire Pits',
    location: 'Clovis, CA',
    year: '2024',
    description: '[Project description coming soon]',
    details: [
      { label: 'Project Type', value: 'Fire Pit' },
      { label: 'Location', value: 'Clovis, CA' },
      { label: 'Year', value: '2024' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Photo 1' },
      { src: null, caption: 'Photo 2' },
      { src: null, caption: 'Photo 3' },
    ],
  },
  'shaver-cabin': {
    title: 'Shaver Cabin',
    type: 'Mountain Homes',
    location: 'Shaver Lake, CA',
    year: '2025',
    hero: '/ruiz-cabin/ruiz-cabin-exterior.jpg',
    description: 'A full interior remodel of a mountain cabin in Shaver Lake after significant flood and water damage. We rebuilt the inside from the studs out, restoring the living spaces, bedrooms, and bathrooms with durable, high-quality finishes throughout. The result is a warm, move-in ready mountain retreat that feels brand new.',
    details: [
      { label: 'Project Type', value: 'Mountain Home' },
      { label: 'Location', value: 'Shaver Lake, CA' },
      { label: 'Year', value: '2025' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: '/ruiz-cabin/ruiz-cabin-exterior.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-14.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-01.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-02.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-03.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-04.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-05.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-06.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-07.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-08.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-09.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-10.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-11.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-12.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-13.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-15.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-16.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-17.jpg' },
      { src: '/ruiz-cabin/ruiz-cabin-lower-18.jpg' },
    ],
  },
  'project-6': {
    title: 'Project Name',
    type: 'Commercial',
    location: 'Fresno, CA',
    year: '2023',
    description: '[Project description coming soon]',
    details: [
      { label: 'Project Type', value: 'Commercial' },
      { label: 'Location', value: 'Fresno, CA' },
      { label: 'Year', value: '2023' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Photo 1' },
      { src: null, caption: 'Photo 2' },
      { src: null, caption: 'Photo 3' },
    ],
  },
  'project-7': {
    title: 'Project Name',
    type: 'Residential',
    location: 'Visalia, CA',
    year: '2023',
    description: '[Project description coming soon]',
    details: [
      { label: 'Project Type', value: 'Residential' },
      { label: 'Location', value: 'Visalia, CA' },
      { label: 'Year', value: '2023' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Photo 1' },
      { src: null, caption: 'Photo 2' },
      { src: null, caption: 'Photo 3' },
    ],
  },
  'project-8': {
    title: 'Project Name',
    type: 'Ranch & Ag',
    location: 'Madera, CA',
    year: '2022',
    description: '[Project description coming soon]',
    details: [
      { label: 'Project Type', value: 'Ranch & Ag' },
      { label: 'Location', value: 'Madera, CA' },
      { label: 'Year', value: '2022' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Photo 1' },
      { src: null, caption: 'Photo 2' },
      { src: null, caption: 'Photo 3' },
    ],
  },
  'project-9': {
    title: 'Project Name',
    type: 'Outdoor Living',
    location: 'Fresno, CA',
    year: '2022',
    description: '[Project description coming soon]',
    details: [
      { label: 'Project Type', value: 'Outdoor Living' },
      { label: 'Location', value: 'Fresno, CA' },
      { label: 'Year', value: '2022' },
      { label: 'Size', value: '[Square footage]' },
      { label: 'Duration', value: '[Project timeline]' },
    ],
    photos: [
      { src: null, caption: 'Photo 1' },
      { src: null, caption: 'Photo 2' },
      { src: null, caption: 'Photo 3' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projects[params.slug];
  const path = `/projects/${params.slug}`;

  if (!project) {
    return buildMetadata({
      title: 'Project Not Found | Ascent Construction Group',
      description:
        "This project could not be found. Browse our completed work across California's Central Valley and the Sierra.",
      path,
    });
  }

  // Trim the project description to a clean ~150 character meta description.
  const raw = project.description || '';
  const description =
    raw.length > 155 ? raw.slice(0, 152).replace(/\s+\S*$/, '') : raw;

  return buildMetadata({
    title: `${project.title} in ${project.location} | Ascent Construction`,
    description,
    path,
    image: project.hero ? `/og/${params.slug}.png` : undefined,
    type: 'article',
  });
}

export default function ProjectPage({ params }) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-display text-4xl text-fore uppercase">Project not found</p>
          <Link href="/services" className="btn-primary mt-8 inline-block">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative bg-base pt-32 pb-16 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/services" className="font-display text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors mb-6 inline-block">
            ← Back to Services
          </Link>
          <p className="label mb-3">{project.type}</p>
          <h1 className="font-display font-800 text-5xl md:text-6xl uppercase tracking-tightest text-fore leading-none mb-4">
            {project.title}
          </h1>
          <p className="font-display text-sm tracking-widest uppercase text-muted">
            {project.location}
          </p>
        </div>
      </section>

      <section className="bg-surface-2 border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-surface border border-edge h-96 md:h-[500px] flex items-center justify-center relative overflow-hidden">
            {project.hero ? (
              <HeroPhoto src={project.hero} alt={project.title} />
            ) : (
              <div className="text-center">
                <div className="font-display text-xs tracking-widest uppercase text-muted/40 mb-2">Main Project Photo</div>
                <div className="font-body text-xs text-muted/30 italic">Add hero project photo here</div>
              </div>
            )}
            <div className="absolute top-0 left-0 w-16 h-1 bg-accent" />
            <div className="absolute top-0 left-0 w-1 h-16 bg-accent" />
            <div className="absolute bottom-0 right-0 w-16 h-1 bg-accent" />
            <div className="absolute bottom-0 right-0 w-1 h-16 bg-accent" />
          </div>
        </div>
      </section>

      <section className="bg-base border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label mb-4">About This Project</p>
              <p className="font-body text-base text-fore/80 leading-relaxed mb-6">{project.description}</p>
              <p className="font-body text-sm text-muted leading-relaxed italic border-l-2 border-edge pl-4">
                Interested in a similar project? Reach out and we can talk through what something like this would look like for your property.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-block">Discuss a Project</Link>
            </div>
            <div>
              <p className="label mb-4">Project Details</p>
              <div className="space-y-0 border border-edge">
                {project.details.filter(({ label }) => !['Year', 'Size', 'Duration'].includes(label)).map(({ label, value }) => (
                  <div key={label} className="flex border-b border-edge last:border-b-0">
                    <div className="w-40 flex-shrink-0 bg-surface px-5 py-4">
                      <span className="font-display font-semibold text-xs uppercase tracking-widest text-muted">{label}</span>
                    </div>
                    <div className="px-5 py-4">
                      <span className="font-body text-sm text-fore">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="label mb-8">Project Photos</p>
          <ProjectGallery photos={project.photos} title={project.title} />
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl uppercase tracking-tightest text-fore mb-4">
            Ready to Start Something Similar?
          </h2>
          <p className="font-body text-base text-muted max-w-lg mx-auto mb-8">
            Every project starts with a conversation. Tell us what you have in mind and we will help you figure out the right approach.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Talk to Patrick</Link>
            <Link href="/services" className="btn-outline">View More Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}