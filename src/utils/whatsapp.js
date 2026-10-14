export const buildWhatsAppLink = (context, data, settings) => {
  const phoneNumber = settings?.whatsapp_number || '94771234567'
  const baseNumber = phoneNumber.replace(/[^\d]/g, '')

  let message = ''

  switch (context) {
    case 'tour': {
      const tourTitle = data.title || 'Tour Inquiry'
      const preferences = data.preferences ? `\n\nInterests: ${data.preferences}` : ''
      message = `Hi Southlink, I'm interested in *${tourTitle}*.${preferences}`
      break
    }
    case 'corporate': {
      const sourceText = data.source || 'Corporate inquiry'
      message = `Hi Southlink, I'd like to request a corporate travel consultation.\n\n*Package:* ${data.package || 'General'}\n*Company:* ${data.company || 'Not provided'}\n*Contact:* ${data.phone || 'Not provided'}\n*Source:* ${sourceText}`
      break
    }
    case 'flight': {
      const origin = data.origin || 'Not specified'
      const destination = data.destination || 'Not specified'
      const dateStr = data.departure_date
        ? (typeof data.departure_date === 'string' && data.departure_date.trim()
          ? data.departure_date
          : 'Flexible')
        : 'Flexible'

      const passengers = data.passengers
        ? `${data.passengers.adults || 1} ${(data.passengers.adults || 1) === 1 ? 'adult' : 'adults'}${data.passengers.children ? `, ${data.passengers.children} ${data.passengers.children === 1 ? 'child' : 'children'}` : ''}${data.passengers.infants ? `, ${data.passengers.infants} ${data.passengers.infants === 1 ? 'infant' : 'infants'}` : ''}`
        : '1 adult'

      const cabin = data.cabin_class ? data.cabin_class.charAt(0).toUpperCase() + data.cabin_class.slice(1).replace('-', ' ') : 'Economy'

      message = `Hi Southlink, I need a flight quote:\n\n*From:* ${origin}\n*To:* ${destination}\n*Departure:* ${dateStr}`

      if (data.return_date && data.return_date.trim()) {
        message += `\n*Return:* ${data.return_date}`
      }

      message += `\n*Passengers:* ${passengers}\n*Cabin:* ${cabin}`

      if (data.phone) {
        message += `\n*Contact:* ${data.phone}`
      }
      break
    }
    case 'transfer': {
      const directionText = data.direction === 'pickup' ? 'Airport pickup' : 'Airport drop-off'
      const date = data.date || 'Not specified'
      const areaLabel = data.direction === 'pickup' ? 'Drop-off area' : 'Pickup area'
      const area = data.area ? `\n*${areaLabel}:* ${data.area}` : ''
      const contact = data.phone ? `\n*Contact:* ${data.phone}` : ''
      message = `Hi Southlink, I'd like to arrange an ${directionText.toLowerCase()}.\n\n*Service:* ${directionText}\n*Date:* ${date}${area}${contact}\n\nPlease confirm availability, a quote and my exact pickup point.`
      break
    }
    case 'general':
    default:
      message = 'Hi Southlink, I would like to know more about your travel packages.'
      break
  }

  const encodedMessage = encodeURIComponent(message)

  // wa.me is the universal WhatsApp deep link: it opens the native app on
  // mobile and falls back to WhatsApp Web on desktop, with no API key needed.
  return `https://wa.me/${baseNumber}?text=${encodedMessage}`
}

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const generateWhatsAppQRData = (context, data, settings) => {
  return buildWhatsAppLink(context, data, settings)
}
