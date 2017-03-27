export const state = {
  trainings: {
    'javascript': {
      name: 'Java Script',
      mode: 'javascript',
      lessons: ['react']
    }
  },
  trainingsResults: {
    'javascript': {
      lessonsCompleted: {
        'react': true
      }
    }
  },
  lessons: {
    'javascript#0': {
      example: 'React.Component',
      exercise: 'This is a docs',
      trainingId: 'javascript'
    }
  },
  lessonsResults: {
    'javascript#0': {
      editor: '',
      finishedAt: null,
      statedAt: null,
      keystrokes: 0,
      mistakes: 0
    }
  }
}

