/**
 * Very simple unit converter. Reads definition file from config.ts and sets UI accordingly
 */
import {inject} from 'aurelia-framework'
import {Config} from './config'

@inject(Config)
export class App {
  groups = []
  einheiten = []
  dests = []
  selectedGroup = {}
  input = 1
  output = 1

  /**
   * This is clled before the UI exists. So no interaction possible
   * @param Config
     */
  constructor(private Config) {
    this.groups = Config.groups
  }

  /**
   * Aurelia calls this after the component and the UI is created.
   */
  attached() {
    this.selectedGroup = this.groups[0]
    this.setParams()
  }

  /**
   * The UI triggers this whenever the user changes something.
   */
  recalc = function () {
    var mul = this.input * this.selectedParam.v
    var res = mul / this.selectedDest.v
    if (res > 1.0) {
      this.output = Math.round(100.0 * res) / 100.0
    } else {
      this.output = res;
    }
  }

  /**
   * populate the dropboxes for source and target units accordingly, if the unit type changes.
   */
  setParams = function () {
    var units = this.selectedGroup.units
    var keys = Object.keys(units)
    this.einheiten = keys.map(function (key) {
      let el = {}
      el['n'] = key
      el['v'] = units[key]
      return el
    })
    this.select.refresh()
    this.select2.refresh()
    this.selectedParam = this.einheiten[0]
    this.selectedDest = this.einheiten[0]
    this.recalc()
  }

  selectedParam = ""
  selectedDest = ""
}
