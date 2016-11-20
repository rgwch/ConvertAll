import {inject} from 'aurelia-framework'
import {Config} from './config'

@inject(Config)
export class App {
  groups = []
  einheiten=["a","b"]
  dests = []
  selectedGroup = {}
  input=1
  output=1

  constructor(private Config) {
    this.groups = Config.groups
  }

  attached(){
    this.selectedGroup=this.groups[0]
    this.setParams()
  }
  recalc = function(){
    var mul=this.input*this.selectedParam.v
    var res=mul/this.selectedDest.v
    this.output=res
  }
  setParams = function () {
    var units=this.selectedGroup.units
    var keys=Object.keys(units)
    this.einheiten=keys.map(function(key) {
      let el={}
      el['n']=key
      el['v']=units[key]
      return el
    })
    this.select.refresh()
    this.select2.refresh()
    this.selectedParam=this.einheiten[0]
    this.selectedDest=this.einheiten[0]
    this.recalc()
  }

  selectedParam = ""
  selectedDest = ""
}
