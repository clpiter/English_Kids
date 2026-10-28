// Soft moving colour blobs and floating letters behind every screen (CSS animations only)
const LETTERS = ['A', 'अ', 'B', 'आ', 'C', 'क', 'a', 'b', 'ख', 'Z', 'ग', '★']

export default function Background() {
  return (
    <div className="bg-anim" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      {LETTERS.map((l, i) => (
        <span key={i} className="float-letter" style={{ '--i': i }}>
          {l}
        </span>
      ))}
    </div>
  )
}
