import React from 'react'

export default function Maps() {
  return (
    <div className='sm:w-1/2 flex justify-center items-center'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.3169563035686!2d-74.08894797648483!3d4.610245442129054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f01e10acdf3%3A0xaa6d4c990942ae79!2sAirmax%20pneumatic%20equipament%20sas!5e0!3m2!1ses!2sco!4v1738598873702!5m2!1ses!2sco"
            className="w-full max-w-[34rem] min-w-[14rem] h-96 rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
  )
}
