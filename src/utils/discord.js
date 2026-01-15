export const sendFlightRequestToDiscord = async (flightData, webhookUrl) => {
  if (!webhookUrl) {
    console.error('Discord webhook URL not configured')
    return { success: false, error: 'Webhook not configured' }
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

  // Create Discord embed
  const embed = {
    title: '✈️ New Flight Request',
    color: 15158332, // Red color (#D32F2F)
    fields: [
      {
        name: '📍 Route',
        value: `${origin || 'Not specified'} → ${destination || 'Not specified'}`,
        inline: false,
      },
      {
        name: '📅 Departure',
        value: departure_date || 'Flexible',
        inline: true,
      },
      ...(return_date
        ? [
            {
              name: '📅 Return',
              value: return_date,
              inline: true,
            },
          ]
        : []),
      {
        name: '👥 Passengers',
        value: passengerText,
        inline: true,
      },
      {
        name: '💺 Cabin Class',
        value: cabinText,
        inline: true,
      },
      {
        name: '📱 Contact',
        value: phone || 'Not provided',
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Southlink Travels',
    },
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending to Discord:', error)
    return { success: false, error: error.message }
  }
}
