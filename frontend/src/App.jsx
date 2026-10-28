import { Suspense, lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import TopBar from './components/TopBar'
import TabBar from './components/TabBar'
import Background from './components/Background'
// first screens are in the main bundle; the others load when they are opened (smaller, faster start)
import ProfileSelect from './screens/ProfileSelect'
import Home from './screens/Home'
const ProfileForm = lazy(() => import('./screens/ProfileForm'))
const CategoryScreen = lazy(() => import('./screens/CategoryScreen'))
const Learn = lazy(() => import('./screens/Learn'))
const ActivityScreen = lazy(() => import('./screens/ActivityScreen'))
const Result = lazy(() => import('./screens/Result'))
const Progress = lazy(() => import('./screens/Progress'))
const Reading = lazy(() => import('./screens/Reading'))
const ReadingLessons = lazy(() => import('./screens/ReadingLessons'))
const MyWords = lazy(() => import('./screens/MyWords'))
const BookLessons = lazy(() => import('./screens/BookLessons'))
const BookActivity = lazy(() => import('./screens/BookActivity'))
const Credits = lazy(() => import('./screens/Credits'))
import { fetchWords } from './store/wordsSlice'
import { fetchProfiles, selectCurrentProfile } from './store/profileSlice'
import { useT } from './useT'
import { EnglishFirst } from './englishFirst'

// Screens that need a selected kid. URL params (+ query and navigation state) become `params`.
function KidScreen({ component: Component }) {
  const profile = useSelector(selectCurrentProfile)
  const { status, currentId } = useSelector((s) => s.profiles)
  const urlParams = useParams()
  const [query] = useSearchParams()
  const location = useLocation()
  if (!profile && currentId && status !== 'ready' && status !== 'error') return <Loading />
  if (!profile) return <Navigate to="/" replace />
  const params = { ...Object.fromEntries(query), ...urlParams, ...(location.state || {}) }
  // key: a new visit (e.g. "Play again") always starts the screen fresh
  return <Component key={location.key} params={params} profile={profile} />
}

const BookReader = (props) => <Reading {...props} kind="book" />

function Loading() {
  return (
    <div className="status-box">
      <div className="loader-owl">🦉</div>
      <div className="loader-dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function EditProfile() {
  const { id } = useParams()
  return <ProfileForm key={id} id={id} />
}

function AppRoutes() {
  const location = useLocation()
  const kid = (Component) => <KidScreen component={Component} />
  const book = (Component) => (
    <EnglishFirst.Provider value={true}>
      <KidScreen component={Component} />
    </EnglishFirst.Provider>
  )
  return (
    <div className="page" key={location.pathname}>
      <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<ProfileSelect />} />
      <Route path="/profile/new" element={<ProfileForm key="new" />} />
      <Route path="/profile/:id/edit" element={<EditProfile />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/home" element={kid(Home)} />
      <Route path="/category/:category" element={kid(CategoryScreen)} />
      <Route path="/category/:category/learn" element={kid(Learn)} />
      <Route path="/category/:category/play/:activity" element={kid(ActivityScreen)} />
      <Route path="/category/:category/play/:activity/result" element={kid(Result)} />
      <Route path="/reading" element={kid(ReadingLessons)} />
      <Route path="/reading/:lesson" element={kid(Reading)} />
      {/* book pages: English first, then Hindi */}
      <Route path="/book" element={book(BookLessons)} />
      <Route path="/book/:lesson" element={book(BookReader)} />
      <Route path="/book/:lesson/play/:activity" element={book(BookActivity)} />
      <Route path="/book/:lesson/play/:activity/result" element={book(Result)} />
      <Route path="/words" element={kid(MyWords)} />
      <Route path="/progress" element={kid(Progress)} />
      <Route path="/progress/:tab" element={kid(Progress)} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
      </Suspense>
    </div>
  )
}

export default function App() {
  const dispatch = useDispatch()
  const wordsStatus = useSelector((s) => s.words.status)
  const profilesStatus = useSelector((s) => s.profiles.status)
  const profilesCount = useSelector((s) => s.profiles.list.length)
  const { t } = useT()

  const load = () => {
    dispatch(fetchWords())
    dispatch(fetchProfiles())
  }
  useEffect(load, [dispatch])

  let content
  if (wordsStatus === 'error' || (profilesStatus === 'error' && !profilesCount)) {
    content = (
      <div className="status-box">
        <div className="status-emoji">🔌</div>
        <p>{t('serverError')}</p>
        <button className="btn btn-primary" onClick={load}>
          {t('retry')}
        </button>
      </div>
    )
  } else if (wordsStatus !== 'ready') {
    content = <Loading />
  } else {
    content = <AppRoutes />
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        <div className="app-header">
          <TopBar />
          <TabBar />
        </div>
        <main className="main">{content}</main>
      </div>
    </BrowserRouter>
  )
}
