import legacySlugs from '../data/legacy-tour-slugs.json'

// Older Gatsby page-data omitted fields.slug and used different query aliases.
// Keep those cached responses usable during a release; never create UUID URLs.
export function getTourSlug(tour) {
  const slug = tour?.fields?.slug || tour?.slug || legacySlugs[tour?.title]
  return typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
    ? slug
    : null
}

export function getTourNodes(data, direction) {
  const currentKey =
    direction === 'inbound' ? 'allInboundJson' : 'allOutboundJson'
  const collection = [
    data?.[direction],
    data?.[`${direction}Json`],
    data?.[currentKey],
  ].find((value) => Array.isArray(value?.nodes))
  return (collection?.nodes || []).filter(
    (tour) => tour && typeof tour.title === 'string',
  )
}
