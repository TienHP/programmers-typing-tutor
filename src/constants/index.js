export const CODE_THEME = 'material'
import { pluck } from 'ramda'

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
    id: 'top-100-popular-clj-words',
    name: 'Top 100 popular clojure words',
    mode: 'clojure'
  },
  {
    id: 'top-100-popular-cmake-words',
    name: 'Top 100 popular cmake words',
    mode: 'cmake'
  },
  {
    id: 'top-100-popular-cpp-words',
    name: 'Top 100 popular cpp words',
    mode: 'cpp'
  },
  {
    id: 'top-100-popular-cs-words',
    name: 'Top 100 popular cs words',
    mode: 'cs'
  },
  {
    id: 'top-100-popular-css-words',
    name: 'Top 100 popular css words',
    mode: 'css'
  },
  {
    id: 'top-100-popular-elm-words',
    name: 'Top 100 popular elm words',
    mode: 'elm'
  },
  {
    id: 'top-100-popular-erl-words',
    name: 'Top 100 popular erl words',
    mode: 'erl'
  },
  {
    id: 'top-100-popular-ex-words',
    name: 'Top 100 popular ex words',
    mode: 'ex'
  },
  {
    id: 'top-100-popular-fs-words',
    name: 'Top 100 popular fs words',
    mode: 'fs'
  },
  {
    id: 'top-100-popular-go-words',
    name: 'Top 100 popular go words',
    mode: 'go'
  },
  {
    id: 'top-100-popular-groovy-words',
    name: 'Top 100 popular groovy words',
    mode: 'groovy'
  },
  {
    id: 'top-100-popular-hs-words',
    name: 'Top 100 popular hs words',
    mode: 'hs'
  },
  {
    id: 'top-100-popular-html-words',
    name: 'Top 100 popular html words',
    mode: 'html'
  },
  {
    id: 'top-100-popular-java-words',
    name: 'Top 100 popular java words',
    mode: 'java'
  },
  {
    id: 'top-100-popular-js-words',
    name: 'Top 100 popular javascript words',
    mode: 'javascript'
  },
  {
    id: 'top-100-popular-jsx-words',
    name: 'Top 100 popular jsx words',
    mode: 'jsx'
  },
  {
    id: 'top-100-popular-kt-words',
    name: 'Top 100 popular kt words',
    mode: 'kt'
  },
  {
    id: 'top-100-popular-lisp-words',
    name: 'Top 100 popular lisp words',
    mode: 'lisp'
  },
  {
    id: 'top-100-popular-lua-words',
    name: 'Top 100 popular lua words',
    mode: 'lua'
  },
  {
    id: 'top-100-popular-objc-words',
    name: 'Top 100 popular objc words',
    mode: 'objc'
  },
  {
    id: 'top-100-popular-pas-words',
    name: 'Top 100 popular pas words',
    mode: 'pas'
  },
  {
    id: 'top-100-popular-php-words',
    name: 'Top 100 popular php words',
    mode: 'php'
  },
  {
    id: 'top-100-popular-pl-words',
    name: 'Top 100 popular pl words',
    mode: 'pl'
  },
  {
    id: 'top-100-popular-purs-words',
    name: 'Top 100 popular purs words',
    mode: 'purs'
  },
  {
    id: 'top-100-popular-py-words',
    name: 'Top 100 popular py words',
    mode: 'py'
  },
  {
    id: 'top-100-popular-r-words',
    name: 'Top 100 popular r words',
    mode: 'r'
  },
  {
    id: 'top-100-popular-rb-words',
    name: 'Top 100 popular rb words',
    mode: 'rb'
  },
  {
    id: 'top-100-popular-rs-words',
    name: 'Top 100 popular rs words',
    mode: 'rs'
  },
  {
    id: 'top-100-popular-scala-words',
    name: 'Top 100 popular scala words',
    mode: 'scala'
  },
  {
    id: 'top-100-popular-sql-words',
    name: 'Top 100 popular sql words',
    mode: 'sql'
  },
  {
    id: 'top-100-popular-swift-words',
    name: 'Top 100 popular swift words',
    mode: 'swift'
  },
  {
    id: 'top-100-popular-vim-words',
    name: 'Top 100 popular vim words',
    mode: 'vim'
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
// export const RESTART_TRAINING = 'training/RESTART_TRAINING'

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
