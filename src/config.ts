/**
 * Definitions of the units to convert.
 */
export class Config {
  groups = [
    {
      "name": "Gewichte",
      "units": {
        "Tonne (t)":1000.0,
        "Zentner (Ztr)": 100.0,
        "Kilogramm (Kg)":1.0,
        "Pfund (Pfd)": 0.5,
        "Gramm (g)":0.001,
        "Milligramm (mg)":0.000001,
        "Mikrogramm (ug)":0.000000001,
        "Karat (k)":0.0002,
        "Ounce (oz)": 0.0283495231,
      }
    },
    {
      "name": "Hohlmasse",
      "units": {
        "Kubikmeter (m3)": 1000.0,
        "Hektoliter (hl)": 100.0,
        "Liter (l)": 1.0,
        "Deziliter (dl)": 0.1,
        "Centiliter (cl)": 0.01,
        "Milliliter (ml)": 0.001,
        "Mikroliter (ul)": 0.000001,
        "Gallone (gal)": 3.785,
        "Barrel": 158.987294928
      }
    },
    {
     "name":"Geschwindigkeiten",
      "units":{
        "Kilometer pro Stunde (km/h)":0.27777778,
        "Meter pro Sekunde (m/s)": 1.0,
        "Mach":299.8,
        "c":299792458
      }

    },
    {
      "name":"Energie",
      "units": {
        "Joule (J)": 1.0,
        "Kilojoule (kJ)": 1000,
        "Megajoule (MJ)": 1000000,
        "Wattsekunde (Ws)": 1.0,
        "Kilowattstunde (kWh)": 3600000,
        "Kalorie (cal)": 4.1868,
        "Kilokalorie (kcal)": 4186.8,
        "Tonne Steinkohle (SKE)": 29307600000,
        "Barrel Öleinheit (boe)": 5861520000,
        "Liter Benzin": 34900000,
        "erg": 0.0000001
      }
    }
  ]

}
