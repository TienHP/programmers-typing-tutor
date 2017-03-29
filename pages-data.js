export function HomePage () {
  return {
    trainings: [
      {
        name: 'Java Script',
        slug: 'javascript',
        progress: 0
      }
    ]
  }
}

export function TrainingPage () {
  return {
    header: {
      keystrokes: 0,
      elapsedTime: 0,
      accuracy: 100,
      progress: 0
    },
    editor: {
      code: '',
      example: 'class User {}'
    }
  }
}

export function TrainingResultPage () {
  return {
    training: {
      name: 'Java Script Training'
    },
    trainingResult: {
      mistakes: 0,
      keystrokes: 0,
      accuracy: 100,
      elapsedTime: 0
    },
    lessonsResult: [
      {
        id: '04nfh5',
        mistakes: 0,
        keystrokes: 0,
        accuracy: 100,
        elapsedTime: 0
      }
    ]
  }
}
