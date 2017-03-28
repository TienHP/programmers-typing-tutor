import { pluck } from 'ramda'

export const CODE_THEME = 'material'
export const TRAININGS = [
  {
    id: 'reactjs-beginner',
    name: 'React.js',
    mode: 'javascript'
  },
  {
    id: 'html-beginner',
    name: 'HTML',
    mode: 'htmlmixed'
  },
  {
    id: 'css-beginner',
    name: 'CSS',
    mode: 'css'
  },
  {
    id: 'jquery-selectors',
    name: 'jQuery Selectors',
    mode: 'javascript',
    level: 'beginner',
    logo: 'images/languages/jquery-selectors.png'
  },
  {
    id: 'jquery-event-methods',
    name: 'jQuery Event Methods',
    mode: 'javascript',
    level: 'beginner',
    logo: 'images/languages/jquery-event-methods.png'
  },
  {
    id: 'git',
    name: 'GIT',
    mode: 'bash',
    level: 'beginner',
    logo: 'images/languages/git.png'
  }
]

if (process.env.NODE_ENV !== 'production') {
  TRAININGS.unshift({
    id: 'debug',
    name: 'Debug',
    mode: 'javascript'
  })
}

export const TRAININGS_MODES = pluck('mode', TRAININGS)

/** Redux Action Types */

export const SET_ENTITIES = 'entities/SET_ENTITIES'

export const SET_GLOBAL_NOTICE = 'notice/SET_GLOBAL_NOTICE'
export const RESET_GLOBAL_NOTICE = 'notice/RESET_GLOBAL_NOTICE'

export const SET_GLOBAL_ERROR = 'error/SET_GLOBAL_ERROR'
export const RESET_GLOBAL_ERROR = 'error/RESET_GLOBAL_ERROR'

export const FETCH_TRAINIG = 'training/FETCH_TRAINIG'
export const FETCH_TRAINIG_SUCCESS = 'training/FETCH_TRAINIG_SUCCESS'
export const FETCH_TRAINIG_FAILED = 'training/FETCH_TRAINIG_FAILED'

export const CREATE_TRAINING = 'training/CREATE_TRAINING'
export const CREATE_TRAINING_SUCCESS = 'training/CREATE_TRAINING_SUCCESS'
export const CREATE_TRAINING_FAILED = 'training/CREATE_TRAINING_FAILED'
export const UPDATE_TRAINING_FORM = 'training/UPDATE_TRAINING_FORM'
export const RESTART_TRAINING = 'training/RESTART_TRAINING'

export const START_TRAINING = 'training/START_TRAINING'
export const COMPLETE_TRAINING = 'training/COMPLETE_TRAINING'

export const START_LESSON = 'lesson/START_LESSON'
export const COMPLETE_LESSON = 'lesson/COMPLETE_LESSON'

export const UPDATE_EDITOR_CODE = 'lesson/UPDATE_EDITOR_CODE'
export const INCREMENT_MISTAKES = 'lesson/INCREMENT_MISTAKES'

export const SET_CURRENT_LESSON = 'ui/SET_CURRENT_LESSON'
export const SET_CURRENT_TRAINIG = 'ui/SET_CURRENT_TRAINIG'

export const TEXT = {
  Success: {
    mistakes: 'Mistakes',
    keystrokes: 'Keystrokes',
    elapsedTime: 'Elapsed time',
    accuracy: 'Accuracy'
  },
  Trainer: {
    loading: 'Loading training...',
    keystrokes: 'keystrokes',
    elapsedTime: 'elapsed-time',
    accuracy: 'accuracy',
    completed: 'completed'
  },
  Welcome: {
    title: 'Programmers typing tutor',
    subtitle: 'Write code quickly and without mistakes'
  }
}
