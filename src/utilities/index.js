/* global fetch */

import without from 'ramda/src/without'
import length from 'ramda/src/length'

/**
 * Вычисляет процент выполенных уроков
 * @param  {Number} completedLessons Количество пройденных уроков
 * @param  {Number} totalLessons     Количество всех уроков
 * @return {Number}                  Процент выполненных уроков
 */
export function computeTrainingProgress (completedLessons, totalLessons) {
  return Math.floor(completedLessons / totalLessons * 100)
}

export const fetchJson = url => fetch(url).then(response => response.json())

export const completedPercent = training => Math.floor(training.lessonsCompleted.length / training.lessons.length * 100)

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

export function calculateLessonResult (lessonResult = {}) {
  const {
    keystrokes = 0,
    mistakes = 0,
    startedAt,
    finishedAt
  } = lessonResult

  const accuracy = calculateAccuracy(mistakes, keystrokes)

  let elapsedTime = 0
  if (startedAt) {
    elapsedTime = ((Date.now() - startedAt) / 1000)
  }
  if (finishedAt) {
    elapsedTime = ((finishedAt - startedAt) / 1000)
  }

  return {
    keystrokes,
    elapsedTime,
    accuracy
  }
}
