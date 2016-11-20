/**
 * Definitions of the units to convert.
 */
export class Config {
  groups = [
    {
      "name": "Gewichte",
      "units": {
        "Kilogramm (Kg)":1.0,
        "Tonne (t)":1000.0,
        "Zentner (Ztr)": 100.0,
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
        "Liter (l)": 1.0,
        "Kubikmeter (m3)": 1000.0,
        "Hektoliter (hl)": 100.0,
        "Deziliter (dl)": 0.1,
        "Centiliter (cl)": 0.01,
        "Milliliter (ml)": 0.001,
        "Mikroliter (ul)": 0.000001,
        "Gallone (gal)": 3.785,
        "Barrel": 158.987294928,
        "Fluid Ounce (fl.oz)":0.03,
        "Pint":0.56826125,
        "Suppenlöffel":0.015,
        "Teelöffel":0.005,
        "Tropfen":0.00005
      }
    },
    {
     "name":"Geschwindigkeiten",
      "units":{
        "Kilometer pro Stunde (km/h)":0.27777778,
        "Meter pro Sekunde (m/s)": 1.0,
        "Miles per hour (mph)":0.44704,
        "Knoten (kt)":0.51444444444,
        "Mach":299.8,
        "c":299792458
      }

    },
    {
      "name":"Energie",
      "units": {
        "Joule (J)": 1.0,
        "Newtonmeter (Nm)":1.0,
        "Wattsekunde (Ws)": 1.0,
        "Kilojoule (kJ)": 1000,
        "Megajoule (MJ)": 1000000,
        "Kilowattstunde (kWh)": 3600000,
        "Kalorie (cal)": 4.1868,
        "Kilokalorie (kcal)": 4186.8,
        "Tonne Steinkohle (SKE)": 29307600000,
        "Barrel Öleinheit (boe)": 5861520000,
        "Liter Benzin": 34900000,
        "erg": 0.0000001
      }
    },
    {
      "name":"Druck",
      "units":{
        "Pascal (Pa)":1.0,
        "Kilopascal (kPa)":1000,
        "Bar (bar)":100000,
        "Millibar (mbar)":100,
        "Atmosphäre (atm)":101325,
        "Pounds per square inch (psi)":6894.757293168,
        "Millimeter Quecksilber, Torr (mmHg)":133.322,
        "Millimeter Wasser (mmH2O)":9.80665
      }
    },
    {
      "name":"Verbrauch",
      "units":{
        "Liter/100km":1.0,
        "Kilometer pro Liter":100.0,
        "Miles per Gallon (mpg)":235.2145833
      }
    },
    {
      "name":"Längen",
      "units":{
        "Meter (m)": 1.0,
        "Kilometer (km)":1000,
        "Dezimeter (dm)":0.1,
        "Zentimeter (cm)":0.01,
        "Millimeter (mm)":0.001,
        "Mikrometer (um)":0.000001,
        "Yard (yd)":0.9144,
        "Fuss (ft)": 0.3048,
        "Zoll (in)":0.0254,
        "Meile (mi)": 1609.347219,
        "Seemeile":1852,
        "Römische Meile":1481.76
      }
    },
    {
      "name":"Flächen",
      "units":{
        "Quadratmeter (m2)":1.0,
        "Quadratzentimeter (cm2)":0.0001,
        "Quadratmillimeter (mm2)":0.0000001,
        "Are (ar)":100.0,
        "Hektare (ha)":10000,
        "Quadratkilometer (km2)":1000000,
        "Quadratmeile (sq mi)":2589988.110336,
        "Acre (ac)":4046.8564224,
        "Quadratfuss (sq ft)":0.09290304,
        "Quadratzoll (sq in)":0.00064516
      }
    }
  ]

}
