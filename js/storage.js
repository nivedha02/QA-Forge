const Storage = {
  KEY: "qaforge-state",

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { completed: {}, streakDays: [], lastLogged: null, solvedProblems: {} };
  },

  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Could not save state:", e);
    }
  },

  clear() {
    localStorage.removeItem(this.KEY);
  }
};
