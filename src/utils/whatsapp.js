export const buildWhatsAppLink = (context, data, settings) => {
  const phoneNumber = settings?.whatsapp_number || '94771234567'
  const baseNumber = phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber

  let message = ''

  switch (context) {
        case 'tour':
          const tourTitle = data.title || 'Tour Inquiry'
          const preferences = data.preferences ? `\n\nInterests: ${data.preferences}` : ''
          message = `Hi Southlink, I'm interested in *${tourTitle}*.${preferences}`
          break
    case 'flight':
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
    case 'general':
    default:
      message = 'Hi Southlink, I would like to know more about your travel packages.'
      break
  }

  const encodedMessage = encodeURIComponent(message)
  const isMobile = typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (isMobile) {
    return `whatsapp://send?phone=${baseNumber}&text=${encodedMessage}`
  }
  
  return `https://web.whatsapp.com/send?phone=${baseNumber}&text=${encodedMessage}`
}

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const generateWhatsAppQRData = (context, data, settings) => {
  const link = buildWhatsAppLink(context, data, settings)
  return link.replace('whatsapp://', 'https://web.whatsapp.com/').replace('send?', 'send?')
}
