// 학과 추천 점수 계산
export function calcMajorScore(
  answers: (number | null)[],
  questions: { options: { major: string }[] }[]
): Record<string, number> {
  const score: Record<string, number> = {};

  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const major = questions[qIndex]?.options[answerIndex]?.major;
    if (!major) return;
    score[major] = (score[major] ?? 0) + 1;
  });

  return score;
}

// 동아리 추천 점수 계산
export function calcClubScore(
  answers: (number | null)[],
  questions: { options: { club: string }[] }[]
): Record<string, number> {
  const score: Record<string, number> = {};

  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const club = questions[qIndex]?.options[answerIndex]?.club;
    if (!club) return;
    score[club] = (score[club] ?? 0) + 1;
  });

  return score;
}

// 점수 -> 퍼센트 + 순위 정렬 (공동 순위 포함)
export interface RankedItem {
  id: string;
  rank: number;
  percent: number;
}

export function scoreToRanked(
  score: Record<string, number>,
  allIds: string[]
): RankedItem[] {
  const total = Object.values(score).reduce((a, b) => a + b, 0);

  // 모든 id에 대해 percent 계산 (선택 안 된 건 0%)
  const items = allIds.map((id) => ({
    id,
    count: score[id] ?? 0,
    percent: total === 0 ? 0 : Math.round(((score[id] ?? 0) / total) * 100),
  }));

  // 내림차순 정렬
  items.sort((a, b) => b.percent - a.percent);

  // 공동 순위 계산
  let rank = 1;
  const ranked: RankedItem[] = [];
  for (let i = 0; i < items.length; i++) {
    if (i > 0 && items[i].percent < items[i - 1].percent) {
      rank = i + 1;
    }
    ranked.push({ id: items[i].id, rank, percent: items[i].percent });
  }

  return ranked;
}