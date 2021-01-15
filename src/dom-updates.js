const domUpdates = {
  toggle(anyArr) {
    anyArr.forEach(area =>
      document.querySelector(area).classList.toggle("hidden"))
  },

  addDisplay(area, where, what) {
    document.querySelector(area).insertAdjacentHTML(where, what)
  },

  clearDisplay(area) {
    document.querySelector(area).innerHTML = ''
  },

}

export default domUpdates;