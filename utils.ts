export const createPageUrl = (pageName: string): string => {
  // Simple mapping for demonstration. 
  // In a real app with complex routing, this might be more dynamic.
  if (pageName === 'Portfolio') return '/';
  if (pageName === 'ProjectDetails') return '/project';
  return '/';
};