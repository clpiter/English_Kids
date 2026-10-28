import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// Every screen has its own URL:
//   /                                      who is learning (profiles)
//   /profile/new, /profile/:id/edit        add / edit a kid
//   /home                                  categories
//   /category/:category                    learn, read and games of one category
//   /category/:category/learn              flash cards
//   /category/:category/play/:activity     one game, e.g. /category/animals/play/picture
//   /category/:category/play/:activity/result
//   /reading, /reading/:lesson             reading lessons, e.g. /reading/animals-1
//   /book, /book/:lesson                   the reading books (?book=santoor|class8) and one lesson
//   /book/:lesson/play/:activity           a game with that lesson's words (?words=mine|all)
//   /words                                 my difficult words
//   /progress, /progress/:tab              progress details
//   /credits                               photo credits
const PATHS = {
  profiles: () => '/',
  profileForm: (p) => (p.id ? `/profile/${p.id}/edit` : '/profile/new'),
  home: () => '/home',
  category: (p) => `/category/${p.category}`,
  learn: (p) => `/category/${p.category}/learn`,
  activity: (p) => `/category/${p.category}/play/${p.activity}`,
  result: (p) => `/category/${p.category}/play/${p.activity}/result`,
  reading: (p) => (p.lesson ? `/reading/${p.lesson}` : p.category ? `/reading?category=${p.category}` : '/reading'),
  book: (p) => (p.lesson ? `/book/${p.lesson}` : p.book ? `/book?book=${p.book}` : '/book'),
  bookActivity: (p) => `/book/${p.lesson}/play/${p.activity}${p.words ? `?words=${p.words}` : ''}`,
  bookResult: (p) => `/book/${p.lesson}/play/${p.activity}/result`,
  words: () => '/words',
  progress: (p) => (p.tab ? `/progress/${p.tab}` : '/progress'),
  credits: () => '/credits',
}

export const pathFor = (screen, params = {}) => (PATHS[screen] || PATHS.home)(params)

// Describe where to go; `state` carries data that is not part of the URL (e.g. game results)
export const go = ({ screen, params = {}, state }) => ({ screen, params, state })

// nav(go({ screen: 'category', params: { category: 'animals' } }))
export function useNav() {
  const navigate = useNavigate()
  return useCallback(
    (target) => navigate(pathFor(target.screen, target.params), { state: target.state }),
    [navigate],
  )
}
