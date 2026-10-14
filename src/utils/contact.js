// Keep the owner's requested 0094 display format and use E.164 for dial links.
export const phoneHref = (number) => {
  let digits = String(number || '').replace(/\D/g, '')
  if (digits.startsWith('00')) digits = digits.slice(2)
  else if (digits.startsWith('0')) digits = `94${digits.slice(1)}`
  return `tel:+${digits}`
}
