const Streak = {
  dateStr(d) {
    return d.toISOString().slice(0, 10);
  },

  today() {
    return this.dateStr(new Date());
  },

  yesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return this.dateStr(d);
  },

  current(streakDays) {
    if (!streakDays.length) return 0;
    const today = this.today();
    const days = [...new Set(streakDays)].sort().reverse();
    if (days[0] !== today && days[0] !== this.yesterday()) return 0;
    let streak = 0;
    let cur = new Date(days[0]);
    for (let d of days) {
      if (d === this.dateStr(cur)) {
        streak++;
        cur.setDate(cur.getDate() - 1);
      } else if (d < this.dateStr(cur)) break;
    }
    return streak;
  },

  longest(streakDays) {
    if (!streakDays.length) return 0;
    const days = [...new Set(streakDays)].sort();
    let best = 1, cur = 1;
    for (let i = 1; i < days.length; i++) {
      const prev = new Date(days[i - 1]);
      prev.setDate(prev.getDate() + 1);
      if (this.dateStr(prev) === days[i]) {
        cur++;
        best = Math.max(best, cur);
      } else {
        cur = 1;
      }
    }
    return best;
  },

  last30() {
    const today = new Date();
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      days.push(this.dateStr(d));
    }
    return days;
  }
};
