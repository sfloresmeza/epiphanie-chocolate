// Section ordering configuration
// Reorder sections by changing this array
export const sectionOrder = [
  'Hero',
  'About', 
  'Categories',
  'Seasonal',
  'Gallery',
  'Testimonials',
  'HoursMap',
  'Contact',
  'Footer'
] as const;

export type SectionType = typeof sectionOrder[number];