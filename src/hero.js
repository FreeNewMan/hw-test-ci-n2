export default function sortHeroList(hrs) {
    return hrs.sort((a,b) => b.health - a.health);
  }
  