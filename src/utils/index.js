/* global fetch, ga */

import 'whatwg-fetch'
import without from 'ramda/src/without'
import length from 'ramda/src/length'

export const fetchJson = url => fetch(url).then(response => response.json())

export function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

export function getRandomLesson (lessons, completedLessons = []) {
  const remainingLessons = without(completedLessons, lessons)
  const total = length(remainingLessons)
  const index = Math.floor(getRandomArbitrary(0, total))
  return remainingLessons[index]
}

export const calculateAccuracy = (mistakes, keystrokes) => {
  if (!keystrokes) return 100
  return Math.floor(100 - mistakes / keystrokes * 100)
}

const sendGa = document.location.host !== 'localhost' && window.ga

// trackEvent({ eventCategory: '', eventAction: '', eventLabel: '', eventValue: 0 })
export const trackEvent = ({ eventCategory, eventAction, eventLabel, eventValue, fieldsObject }) => {
  return sendGa('send', 'event', eventCategory, eventAction, eventLabel, eventValue, fieldsObject)
}

export const setPage = (page) => {
  return sendGa('set', 'page', page)
}
export const trackPageView = () => {
  return sendGa('send', 'pageview')
}
