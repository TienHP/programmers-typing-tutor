export const CODE_THEME = 'material'
import { pluck } from 'ramda'

export const TRAININGS = [
  {
    id: 'debug',
    name: 'Debug',
    mode: 'javascript'
  },
  {
    id: 'reactjs-beginner',
    name: 'React.js',
    mode: 'javascript'
  },
  {
    id: 'html-beginner',
    name: 'HTML',
    mode: 'html'
  },
  {
    id: 'css-beginner',
    name: 'CSS',
    mode: 'css'
  },
  {
    id: 'top-1000-popular-clj-words',
    name: 'Top 1000 popular clj words',
    mode: 'clj'
  },
  {
    id: 'top-1000-popular-cmake-words',
    name: 'Top 1000 popular cmake words',
    mode: 'cmake'
  },
  {
    id: 'top-1000-popular-cpp-words',
    name: 'Top 1000 popular cpp words',
    mode: 'cpp'
  },
  {
    id: 'top-1000-popular-cs-words',
    name: 'Top 1000 popular cs words',
    mode: 'cs'
  },
  {
    id: 'top-1000-popular-css-words',
    name: 'Top 1000 popular css words',
    mode: 'css'
  },
  {
    id: 'top-1000-popular-elm-words',
    name: 'Top 1000 popular elm words',
    mode: 'elm'
  },
  {
    id: 'top-1000-popular-erl-words',
    name: 'Top 1000 popular erl words',
    mode: 'erl'
  },
  {
    id: 'top-1000-popular-ex-words',
    name: 'Top 1000 popular ex words',
    mode: 'ex'
  },
  {
    id: 'top-1000-popular-fs-words',
    name: 'Top 1000 popular fs words',
    mode: 'fs'
  },
  {
    id: 'top-1000-popular-go-words',
    name: 'Top 1000 popular go words',
    mode: 'go'
  },
  {
    id: 'top-1000-popular-groovy-words',
    name: 'Top 1000 popular groovy words',
    mode: 'groovy'
  },
  {
    id: 'top-1000-popular-hs-words',
    name: 'Top 1000 popular hs words',
    mode: 'hs'
  },
  {
    id: 'top-1000-popular-html-words',
    name: 'Top 1000 popular html words',
    mode: 'html'
  },
  {
    id: 'top-1000-popular-java-words',
    name: 'Top 1000 popular java words',
    mode: 'java'
  },
  {
    id: 'top-1000-popular-js-words',
    name: 'Top 1000 popular js words',
    mode: 'js'
  },
  {
    id: 'top-1000-popular-jsx-words',
    name: 'Top 1000 popular jsx words',
    mode: 'jsx'
  },
  {
    id: 'top-1000-popular-kt-words',
    name: 'Top 1000 popular kt words',
    mode: 'kt'
  },
  {
    id: 'top-1000-popular-lisp-words',
    name: 'Top 1000 popular lisp words',
    mode: 'lisp'
  },
  {
    id: 'top-1000-popular-lua-words',
    name: 'Top 1000 popular lua words',
    mode: 'lua'
  },
  {
    id: 'top-1000-popular-objc-words',
    name: 'Top 1000 popular objc words',
    mode: 'objc'
  },
  {
    id: 'top-1000-popular-pas-words',
    name: 'Top 1000 popular pas words',
    mode: 'pas'
  },
  {
    id: 'top-1000-popular-php-words',
    name: 'Top 1000 popular php words',
    mode: 'php'
  },
  {
    id: 'top-1000-popular-pl-words',
    name: 'Top 1000 popular pl words',
    mode: 'pl'
  },
  {
    id: 'top-1000-popular-purs-words',
    name: 'Top 1000 popular purs words',
    mode: 'purs'
  },
  {
    id: 'top-1000-popular-py-words',
    name: 'Top 1000 popular py words',
    mode: 'py'
  },
  {
    id: 'top-1000-popular-r-words',
    name: 'Top 1000 popular r words',
    mode: 'r'
  },
  {
    id: 'top-1000-popular-rb-words',
    name: 'Top 1000 popular rb words',
    mode: 'rb'
  },
  {
    id: 'top-1000-popular-rs-words',
    name: 'Top 1000 popular rs words',
    mode: 'rs'
  },
  {
    id: 'top-1000-popular-scala-words',
    name: 'Top 1000 popular scala words',
    mode: 'scala'
  },
  {
    id: 'top-1000-popular-sql-words',
    name: 'Top 1000 popular sql words',
    mode: 'sql'
  },
  {
    id: 'top-1000-popular-swift-words',
    name: 'Top 1000 popular swift words',
    mode: 'swift'
  },
  {
    id: 'top-1000-popular-vim-words',
    name: 'Top 1000 popular vim words',
    mode: 'vim'
  }
]

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
// export const RESTART_TRAINING = 'training/RESTART_TRAINING'

export const START_TRAINING = 'training/START_TRAINING'
export const COMPLETE_TRAINING = 'training/COMPLETE_TRAINING'

export const START_LESSON = 'lesson/START_LESSON'
export const COMPLETE_LESSON = 'lesson/COMPLETE_LESSON'

export const UPDATE_EDITOR_CODE = 'lesson/UPDATE_EDITOR_CODE'
export const INCREMENT_MISTAKES = 'lesson/INCREMENT_MISTAKES'

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
