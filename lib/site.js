// Shared business info (the single source of truth for NAP and schema).
// Set facts here once so the footer, contact page, and structured data all match.

export const SITE_NAME = 'Ascent Construction Group';

// The live site URL. Update this if a custom domain is connected later.
export const SITE_URL = 'https://ascent-construction.vercel.app';

// Confirmed with the client: (559) 790-5400 is the correct number.
export const PHONE = '(559) 790-5400';
export const PHONE_TEL = PHONE.replace(/[^0-9]/g, '');

// Confirmed: Patrick uses this inbox.
export const EMAIL = 'pat@ascentconstructiongroup.com';

// Confirmed: California contractor (CSLB) license number.
export const LICENSE_NUMBER = '1080865';

// Reconciled service areas. The footer previously listed Central Valley, Shaver
// Lake, and Huntington Lake; the contact page listed Fresno, Clovis, Madera. These
// are unified here, and Sanger and Auberry are added because completed projects
// there confirm them first-hand. [CONFIRM WITH CLIENT] any areas to add or remove.
export const SERVICE_AREAS = [
  'Fresno',
  'Clovis',
  'Madera',
  'Visalia',
  'Sanger',
  'Auberry',
  'Shaver Lake',
  'Huntington Lake',
];

export const SERVICE_AREA_TEXT =
  "Serving Fresno, Clovis, Madera, Visalia, Sanger, Auberry, Shaver Lake, and Huntington Lake across California's Central Valley and Sierra foothills.";

// Confirmed with the client: Monday through Friday, 8:00 AM to 5:00 PM.
export const HOURS_TEXT = 'Monday through Friday, 8:00 AM to 5:00 PM';

export const BUSINESS_DESCRIPTION =
  "Owner-led general contractor serving California's Central Valley and Sierra foothills. Custom homes, remodels, ranch and agricultural buildings, outdoor living, fire features, and commercial work.";
