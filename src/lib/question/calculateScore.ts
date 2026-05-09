// 학과 추천 점수 계산 (answers: major 문자열 배열)
export function calcMajorScore(
  answers: (string | null)[]
): Record<string, number> {
  const score: Record<string, number> = {};

  answers.forEach((major) => {
    if (!major) return;
    score[major] = (score[major] ?? 0) + 1;
  });

  return score;
}

// 동아리 추천 점수 계산 (answers: club 문자열 배열)
export function calcClubScore(
  answers: (string | null)[]
): Record<string, number> {
  const score: Record<string, number> = {};

  answers.forEach((club) => {
    if (!club) return;
    score[club] = (score[club] ?? 0) + 1;
  });

  return score;
}

// 점수 -> 퍼센트 + 순위 정렬 (공동 순위 포함, 밀집 순위 방식)
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

  const items = allIds.map((id) => ({
    id,
    percent: total === 0 ? 0 : Math.round(((score[id] ?? 0) / total) * 100),
  }));

  items.sort((a, b) => b.percent - a.percent);

  // 밀집 순위(dense ranking): 1,1,2,2 / 1,1,2,3 등
  let rank = 1;
  const ranked: RankedItem[] = items.map((item, i) => {
    if (i > 0 && items[i].percent < items[i - 1].percent) {
      rank += 1;
    }
    return { id: item.id, rank, percent: item.percent };
  });

  return ranked;
}