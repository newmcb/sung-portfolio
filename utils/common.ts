export const parseDuration = (period: string) => {
  const [startRaw, endRaw] = period.split('–').map((s) => s.trim());
  const [sY, sM] = startRaw.split('.').map(Number);
  const now = new Date();
  const [eY, eM] =
    endRaw === '재직중'
      ? [now.getFullYear(), now.getMonth() + 1]
      : endRaw.split('.').map(Number);

  const totalMonths = (eY - sY) * 12 + (eM - sM);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months, totalMonths };
}

export const formatDuration = ({ years, months }: { years: number; months: number }) => {
  const parts: string[] = [];
  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);
  return parts.length > 0 ? parts.join(' ') : '0개월';
}
