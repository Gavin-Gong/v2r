export default {
  /** @desc 计算百分比 */
  computePercent(cur: number, total: number) {
    // total = Math.floor(total)
    return Math.round((cur / total) * 100)
  },
  /** @desc 转化为HH:MM:SS 的格式 */
  convertSec2Time (secs: number): string {
    secs = Math.floor(secs)
    
    const h = Math.floor(secs / 3600)

    let tempM = Math.floor((secs % 3600) / 60)
    const m =  tempM > 9 ? tempM : `0${tempM}`

    const s = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`
    return `${h ? h + ':' : ''}${m}:${s}`
  }
}