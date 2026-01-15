/**
 * Send flight request via WhatsApp Business API or service provider
 * 
 * Note: WhatsApp Business API requires setup and may have costs.
 * Free alternatives include:
 * - Twilio WhatsApp API (free tier available)
 * - MessageBird (free tier available)
 * - WhatsApp Business API Cloud (may have free tier)
 * 
 * This function can be adapted to work with any WhatsApp service provider.
 */

export const sendFlightRequestToWhatsApp = async (flightData, config) => {
  const {
    whatsapp_api_url, // Your WhatsApp API endpoint
    whatsapp_api_key, // API key if required
    recipient_number, // Where to send (your business number or agent number)
  } = config

  if (!whatsapp_api_url) {
    console.error('WhatsApp API URL not configured')
    return { success: false, error: 'WhatsApp API not configured' }
  }

  const {
    origin,
    destination,
    departure_date,
    return_date,
    passengers,
    cabin_class,
    phone,
  } = flightData

  // Format passengers
  const passengerText = passengers
    ? `${passengers.adults || 1} ${(passengers.adults || 1) === 1 ? 'adult' : 'adults'}${
        passengers.children ? `, ${passengers.children} ${passengers.children === 1 ? 'child' : 'children'}` : ''
      }${passengers.infants ? `, ${passengers.infants} ${passengers.infants === 1 ? 'infant' : 'infants'}` : ''}`
    : '1 adult'

  // Format cabin class
  const cabinText = cabin_class
    ? cabin_class.charAt(0).toUpperCase() + cabin_class.slice(1).replace('-', ' ')
    : 'Economy'

  // Format trip type
  const tripType = return_date ? 'Return' : 'One-way'

  // Format message for WhatsApp
  const message = `✈️ *New Flight Request*

📍 *Route:* ${origin || 'Not specified'} → ${destination || 'Not specified'}
📅 *Departure:* ${departure_date || 'Flexible'}${return_date ? `\n📅 *Return:* ${return_date}` : ''}
👥 *Passengers:* ${passengerText}
💺 *Cabin Class:* ${cabinText}
📱 *Contact:* ${phone || 'Not provided'}

_Trip Type:_ ${tripType}`

  try {
    // Option 1: WhatsApp Business API (official)
    // This is a generic structure - adapt to your provider's API
    const response = await fetch(whatsapp_api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(whatsapp_api_key && { 'Authorization': `Bearer ${whatsapp_api_key}` }),
      },
      body: JSON.stringify({
        to: recipient_number,
        message: message,
        // Additional fields depending on your provider:
        // type: 'text',
        // from: 'your_business_number',
      }),
    })

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending to WhatsApp:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Alternative: Send via Twilio WhatsApp API (free tier available)
 * Uncomment and configure if using Twilio
 */
/*
export const sendFlightRequestViaTwilio = async (flightData, twilioConfig) => {
  const { accountSid, authToken, fromNumber, toNumber } = twilioConfig
  
  // Format message (same as above)
  const message = `✈️ New Flight Request\n\nRoute: ${flightData.origin} → ${flightData.destination}...`
  
  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
        },
        body: new URLSearchParams({
          From: `whatsapp:${fromNumber}`,
          To: `whatsapp:${toNumber}`,
          Body: message,
        }),
      }
    )
    
    if (!response.ok) throw new Error('Twilio API error')
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
*/
