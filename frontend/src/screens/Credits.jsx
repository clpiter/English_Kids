import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../api'
import { useT } from '../useT'
import BackButton from '../components/BackButton'
import { VOICE, useAnnounce } from '../utils/voice'

// Authors and licences of the photos (required by their Creative Commons licences)
export default function Credits() {
  const { t } = useT()
  const hasProfile = useSelector((s) => !!s.profiles.currentId)
  const [list, setList] = useState(null)
  const [error, setError] = useState(false)
  useAnnounce(VOICE.credits)

  useEffect(() => {
    api
      .get('/words/credits')
      .then((res) => setList(res.data))
      .catch(() => setError(true))
  }, [])

  return (
    <section className="screen">
      <BackButton screen={hasProfile ? 'progress' : 'profiles'} />
      <div className="card">
        <h2>📷 {t('credits')}</h2>
        <p className="muted">{t('creditsNote')}</p>
      </div>
      {error && <p className="error-text">{t('serverError')}</p>}
      {!list && !error && <p className="center muted">{t('loading')}</p>}
      {list && (
        <ul className="credits">
          {list.map((c) => (
            <li key={c.key}>
              <img src={c.file} alt={c.en} loading="lazy" />
              <div>
                <b>{c.en}</b>
                <small>
                  {c.artist} ·{' '}
                  {c.licenseUrl ? (
                    <a href={c.licenseUrl} target="_blank" rel="noreferrer">
                      {c.license}
                    </a>
                  ) : (
                    c.license
                  )}{' '}
                  ·{' '}
                  <a href={c.source} target="_blank" rel="noreferrer">
                    Wikimedia Commons
                  </a>
                </small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
