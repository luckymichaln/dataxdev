export default function ({ redirect, route }) {
  const { params: { slug } } = route;

  if (!route.name) {
    return redirect('/not-found')
  }

  if (slug) {
    if (slug !== 'android' &&
      slug !== 'ios' &&
      slug !== 'dotnet' &&
      slug !== 'java') {
      return redirect('/not-found');
    }
  }
}