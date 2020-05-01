export default function ({ redirect, route }) {
  if (!route.name) {
    return redirect('/not-found')
  }
}