export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'home_page') {
    return '/';
  }

  if (doc.type === 'projects_page') {
    return '/projects';
  }

  if (doc.type === 'about_us') {
    return '/about-us';
  }

  if (doc.type === 'career') {
    return '/career';
  }

  if (doc.type === 'service_page') {
    return `/services/${doc.uid}`;
  }

  return '/not-found';
};