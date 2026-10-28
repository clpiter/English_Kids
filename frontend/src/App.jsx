import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import TopBar from './components/TopBar'
import TabBar from './components/TabBar'
import ProfileSelect from './screens/ProfileSelect'
import ProfileForm from './screens/ProfileForm'
import Home from './screens/Home'
import CategoryScreen from './screens/CategoryScreen'
import Learn from './screens/Learn'
import ActivityScreen from './screens/ActivityScreen'
import Result from './screens/Result'
import Progress from './screens/Progress'
import Reading from './screens/Reading'
import ReadingLessons from './screens/ReadingLessons'
import MyWords from './screens/MyWords'
import BookLessons from './screens/BookLessons'
import BookActivity from './screens/BookActivity'
import Credits from './screens/Credits'
import { fetchWords } from './store/wordsSlice'
import { fetchProfiles, selectCurrentProfile } from './store/profileSlice'
import { useT } from './useT'
import { EnglishFirst } from './englishFirst'

// Screens that need a selected kid. URL params (+ query and navigation state) become `params`.
function KidScreen({ component: Component }) {
  const profile = useSelector(selectCurrentProfile)
  const urlParams = useParams()
  const [query] = useSearchParams()
  const location = useLocation()
  if (!profile) return <Navigate to="/" replace />
  const params = { ...Object.fromEntries(query), ...urlParams, ...(location.state || {}) }
  // key: a new visit (e.g. "Play again") always starts the screen fresh
  return <Component key={location.key} params={params} profile={profile} />
}

const BookReader = (props) => <Reading {...props} kind="book" />

function EditProfile() {
  const { id } = useParams()
  return <ProfileForm key={id} id={id} />
}

function AppRoutes() {
  const kid = (Component) => <KidScreen component={Component} />
  const book = (Component) => (
    <EnglishFirst.Provider value={true}>
      <KidScreen component={Component} />
    </EnglishFirst.Provider>
  )
  return (
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
  )
}

export default function App() {
  const dispatch = useDispatch()
  const wordsStatus = useSelector((s) => s.words.status)
  const profilesStatus = useSelector((s) => s.profiles.status)
  const { t } = useT()

  const load = () => {
    dispatch(fetchWords())
    dispatch(fetchProfiles())
  }
  useEffect(load, [dispatch])

  let content
  if (wordsStatus === 'error' || profilesStatus === 'error') {
    content = (
      <div className="status-box">
        <div className="status-emoji">🔌</div>
        <p>{t('serverError')}</p>
        <button className="btn btn-primary" onClick={load}>
          {t('retry')}
        </button>
      </div>
    )
  } else if (wordsStatus !== 'ready' || profilesStatus !== 'ready') {
    content = (
      <div className="status-box">
        <div className="status-emoji bounce">🦉</div>
        <p>{t('loading')}</p>
      </div>
    )
  } else {
    content = <AppRoutes />
  }

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-header">
          <TopBar />
          <TabBar />
        </div>
        <main className="main">{content}</main>
      </div>
    </BrowserRouter>
  )
}
