'use client'

import { useState } from 'react'

const criteria = [
  { id: 'completeness', label: 'Completeness', weight: 40, initialScore: 90 },
  { id: 'evidence', label: 'Clarity of evidence', weight: 35, initialScore: 80 },
  { id: 'specificity', label: 'Specificity of explanations', weight: 25, initialScore: 88 },
]
const initialScores = criteria.map(({ initialScore }) => initialScore)
const gradeThresholds = [
  { minimum: 95, grade: 'A' },
  { minimum: 90, grade: 'A−' },
  { minimum: 80, grade: 'B' },
  { minimum: 70, grade: 'C' },
  { minimum: 60, grade: 'D' },
]

export function VpatScoringDemo() {
  const [scores, setScores] = useState(initialScores)
  const total = criteria.reduce((sum, { weight }, index) => sum + weight * scores[index], 0)
  const score = Math.round(total / 100)
  const grade = gradeThresholds.find(({ minimum }) => score >= minimum)?.grade ?? 'F'

  return (
    <div className="example">
      <fieldset aria-describedby="vpat-demo-instructions">
        <legend className="text-sm font-semibold">Try the scoring</legend>
        <p id="vpat-demo-instructions">Adjust the scores from 0 to 100 for this fictional report. The weighted result rounds to the nearest whole point.</p>
        <div className="mt-4 grid gap-3">
          {criteria.map(({ id, label, weight }, index) => (
            <div key={id}>
              <div className="flex justify-between gap-3 text-sm">
                <label htmlFor={`vpat-score-${id}`}>{label} ({weight}% weight)</label>
                <span aria-hidden="true" className="tabular-nums">{scores[index]}</span>
              </div>
              <input
                id={`vpat-score-${id}`}
                type="range"
                min={0}
                max={100}
                value={scores[index]}
                onChange={(event) => {
                  const nextScore = event.currentTarget.valueAsNumber
                  setScores((previous) => previous.map((value, position) => position === index ? nextScore : value))
                }}
                className="block min-h-8 w-full accent-[var(--blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
              />
            </div>
          ))}
        </div>
      </fieldset>
      <div className="result" role="status">Weighted result <strong>{score}/100 · {grade}</strong></div>
      <button
        type="button"
        onClick={() => setScores(initialScores)}
        className="mt-3 cursor-pointer rounded border border-[var(--sub)] px-3 py-1.5 text-sm font-semibold hover:text-[var(--blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
      >
        Reset scores
      </button>
      <p>This measures documentation quality. Accessibility conformance requires a separate assessment.</p>
    </div>
  )
}
