import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
    }
    // do nothing
    else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }
    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }
  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

// Kleinbuchstaben in Grossbuchstaben umwandeln
export function aufgabe02(args) {
  const input = args
  const result = [] // Resultatliste
  // läuft über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // .test (currentElement) um zu testen, ob das currentElement dem gesuchten Element entspricht
    if (/[a-z]/.test(currentElement)) {
      result.push(currentElement.toUpperCase())
    } else {
      result.push(currentElement)
      // result.push (currentElement), um nichts zu machen
    }
    // result.push zum ersetzen
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    } else {
      // do nothing
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

// Aufgabe 4: Wörter zählen
export function aufgabe04(args) {
  const input = args
  const result = []
  // const result = leeres Array
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // findet den ASCII
    if (ascii >= 65 && ascii <= 90) {
      // sucht nach gewissen Zeichen je nach Position im ascii, hier nur Grossbuchstaben
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // sucht nach gewissen Zeichen je nach Position im ascii, hier nach Kleinbuchstaben

      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
      // sucht nach gewissen Zeichen je nach Position im ascii, hier Leerzeichen
    }
  }
  const result2 = []
  // erstellet ein neues Array
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]
    if (currentElement === " " && nextElement === " ") {
      // überprüft, ob sowohl das currentElement als auch das nextElement Leerzeichen sind
    } else result2.push(currentElement)
  }
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count = count++
      // zählt die Leerzeichen
    }
  }
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

// Aufgabe 5: Großbuchstaben
export function aufgabe05(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "." || currentElement === " ") {
      continue // do nothing
    }
    if (currentElement === currentElement.toUpperCase()) {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

//Aufgabe 6: Sonderzeichen
export function aufgabe06(args) {
  const SpecialCharacter = "Not a letter or digit or space"
  const notSpecialCharacter = /[a-zA-Z0-9 ]/
  // 'const' um etwas zu definieren
  // '[a-zA-Z0-9 ]' -> a-z und A-Z, 0-9, Leerzeichen
  // '!' -> Nicht
  // /^ -> Anfang
  // $/ -> Ende
  // teilweise currentElement.match anstatt nur currentElement (ich glaube, das ist, um zu testen, ob es mit einem gewissen Element übereinstimmt)
  // 'test' hinzufügen, oder 'test (input)' -> Keine Ahnung, weshalb, ist halt so.
  // 'test' nach '! /[]/'
  // ';' nach 'true' und 'return'
  const input = args
  let hasSpecialCharacter = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (!notSpecialCharacter.test(currentElement)) {
      hasSpecialCharacter = true
    }
  }
  return hasSpecialCharacter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

// Aufgabe 7: 'und' finden
export function aufgabe07(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      input.substring(i, i + 3) === "und" ||
      input.substring(i, i + 3) === "UND" ||
      input.substring(i, i + 3) === "Und"
    ) {
      // input.substring(i, i + 3) -> 'und', weil mit currentElement nur 1 Buchstabe getestet wird
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

// Aufgabe 8: E durch 3 ersetzen
export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e" || currentElement === "E") {
      result.push("3")
      // result.push ("")um etwas zu ersetzen
    }
    // durch 3 ersetzen
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

// Aufgabe 9: überprüfen, ob eine Eingabe 6 Zeichen lang ist
export function aufgabe09(args) {
  const input = args
  return input.length === 6
  // input length === um zu bestimmen, wie viele Zeichen die Eingabe haben soll
  if (input.length === 6) {
    return true
  } else if (input.length !== 6) {
    return false
  }
  // !== um zu überprüfen, ob etwas nicht der Fall ist
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

// Aufgabe 10: Überprüfen, ob die Eingabe ein RGB Hexcode ist
export function aufgabe10(args) {
  const input = args
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  // regex testet, ob es ein RGB Hexcode ist
  // ^ = Anfang
  // $ = Ende
  // # = # als Zeichen
  // [A-Fa-f0-9] = a bis f und A bis F und 0 bis 9, also RGB Hexcode
  return regex.test(input)
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

// Aufgabe 11: ASCII-Code
export function aufgabe11(args) {
  const input = args
  if (input.length === 0) {
    return null
  }
  // erstelle eine Variable, um den ASCII zu speichern

  const asciicode = input.charCodeAt(0)
  // gib den ASCII zurück
  return asciicode
}
linkupExerciseHandler("[data-click=aufgabe11]"), aufgabe11

// Aufgabe 12: Position des ersten 'e'
export function aufgabe12(input) {
  // input statt args
  // kein const input args, weil die Funktion die Eingabe nicht verändert, sondern nur die Position des ersten e sucht
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "E") {
      return i + 1
      // erstes e finden
    }
  }
  return 0
}
linkupExerciseHandler("[data-click=aufgabe12]"), aufgabe12

// Aufgabe 13: Position des zweiten "e"
export function aufgabe13(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      for (
        let j = i + 1;
        j < input.length;
        j++ // j für i plus 1, weil das erste e schon gefunden wurde
        // j statt i, weil i das erste e wäre
      ) {
        const nextElement = input[j]
        if (nextElement === "e" || nextElement === "E") {
          return j + 1
          // j = nextElement
        }
      }
    }

    return -1
  }
}
linkupExerciseHandler("[data-click=aufgabe13]"), aufgabe13

// Aufgabe 14: Position des letzten "e"
export function aufgabe14(args) {
  for (let i = input.length - 1; i >= 0; i--) {
    // -1 iat das letzte Zeichen
    // i >= 0, um die Schleife weiterzuführen, solange die Eingabe grösser ist als null, oder gleich null
    // i--, sodass die Eingabe rückwärts  um jeweils 1 verkürzt wird, (bis zum e, das steht aber erst beim currenElement === e etc)
    const currentElement = args[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe14]"), aufgabe14
// Aufgabe 15: Eingabe nur bis zum ersten Leerzeichen einlesen
export function aufgabe15(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      return input.substring(0, i)
      // substring (0, i) holt einen Teil der Eingabe heraus
      // 0 für den Anfang der Eingabe
      // i für den momentanen Punkt, in dieser Aufgabe das Leerzeichen
    }
  }
  return input
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

// Aufgabe 16 Eingabe bis zum ersten $ in den ersten Teil einer Liste, Eingabe ab $ in den zweiten Teil der Liste
export function aufgabe16(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      return [input.substring(0, i), input.substring(i + 1)]
      // return input.substring (0, i) + input.substring (i + 1) teilt die Eingabe in zwei Teile ein
    } else {
      return notFound
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

// Aufgabe 17: Eingabe wird als Liste eingelesen, die Einträge in der Liste werden durch ein "," getrennt
export function aufgabe17(args) {
  const input = args
  const totallist = []
  // totallist = leeres Array, das dann die Schlussversion der Eingabe enthält
  const currentlist = []
  // currentlist = leeres Array, in dem die aktuelle Eingabe gespeichert wird

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ",") {
      totallist.push(currentlist.join(""))

      currentlist.length = 0
      // currentlist.length = 0 setzt die Liste auf 0 zurück
    } else {
      currentlist.push(currentElement)
      // Wenn das aktuelle Zeichen nicht ein Komma ist, wird es zur currrentlist hinzugefügt
    }
  }
  totallist.push(currentlist.join(""))
  // Wenn die Schleife fertig ist, wird curretlist zu totallist hinzugefügt
  return totallist
  // totallist wird als Resultat zurückgegeben
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

// Aufgabe 18: Schreiben Sie folgende Ausgabe: Sie heissen `name` und sind `alter` Jahre alt, wobei `name` und `alter` durch Eingaben eingesetzt werden.
export function aufgabe18(args) {
  const input = args
  const nameAnsage = aufgabe17(input)
  // NameAnsage soll sich auf Aufgabe 17 beziehen
  const result = []
  result.push("Sie heissen ")
  // result.push ("") um etwas zu hinzufügen
  result.push(nameAnsage[0])
  result.push(" und sind ")
  result.push(nameAnsage[1])
  result.push(" Jahre alt")

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

// Aufgabe 19: Zeichen verdoppeln
export function aufgabe19(args) {
  const input = args
  const result = [] // das ist die Resultatliste
  // läuft Zeichen für Zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // hänge das aktuelle Zeichen doppelt an.
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

// Aufgabe 20: überprüfen, ob nach jedem Punkt ein Leerzeichen kommt

export function aufgabe20(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      if (input[i + 1] !== " ") {
        // !== " " testet, ob das nächste Zeichen das gesuchte ist oder nicht
        return false
        // false, wenn es kein Leerzeichen nach dem Punkt hat
      }
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

// Aufgabe 21: Text umkehren
export function aufgabe21(args) {
  return args.split("").reverse().join("")
  // args.split ("") trennt die Zeichen auf
  // reverse () kehrt die Reihenfolge um
  // join ("") kombiniert die Zeichen wieder
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

// Aufgabe 22: alle Zeichen bis zu k mit _ erstzen
export function aufgabe22(args) {
  const input = args
  const result = []
  let foundK = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      foundK = true
      // found"" um zu zeigen, dass das Zeichen gefunden wurde
    }
    if (foundK) {
      result.push(currentElement)
    } else {
      result.push("_")
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

// Aufgabe 23: Erstes Zeichen verdoppeln, und das erste Zeichen am Schluss nochmals anhängen
export function aufgabe23(args) {
  const input = args
  return input[0] + input + input[input.length - 1] + input[0]
  // input [0] = 1. Zeichen
  // input = alle Zeichen
  // input[input.length - 1] = Letztes Zeichen
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

// Aufgabe 24: Ersten und letzten Buchstaben vertauschen
export function aufgabe24(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
      // Das erste Zeichen wird dem letzten Zeichen zugewiesen
    } else if (i === input.length - 1) {
      result.push(input[0])
      // Das letzte Zeichen wird dem ersten Zeichen zugewiesen
    } else {
      result.push(currentElement)
      // Alle anderen Zeichen sollen gleich bleiben
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)
// Aufgabe 25: Mittleres Zeichen bei ungerader Anzahl löschen, wenn gerade Anzahl, beide mittleren Zeichen löschen
export function aufgabe25(args) {
  const input = args
  if (input.length % 2 === 0) {
    // % 2 === 0 testet, ob der Input gerade ist
    // % 2 heisst Input durch 2, und 0 wäre dann der Rest, wenn die Anzahl Zeichen gerade ist
    return (
      input.substring(0, input.length / 2 - 1) +
      input.substring(input.length / 2 + 1)
    )
    // substring (0, input.length / 2 - 1) löscht das mittlere Zeichen
    // input.substring (input.length / 2 + 1) löscht das mittlere Zeichen
  } else {
    return (
      input.substring(0, input.length / 2) +
      input.substring(input.length / 2 + 1)
    )
    // substring (0, input.length / 2) löscht die mittleren Zeichen
  }
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

// Aufgabe 26: Erste zwei Zeichen der Eingabe alphanumerisch sortieren
export function aufgabe26(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i < 2) {
      // (i < 2) testet, ob das Zeichen zu den ersten zwei gehört
      result.push(currentElement)
    } else {
    }
    // else {...} heisst, dass einfach nichts gemacht wird
  }
  result.sort()
  // sort () sortiert die Zeichen alphabetisch
  return result.join("")
  // return result join gibt das sortierte Ergebnis zurück
}

// Aufgabe 27:Testen, ob die Eingabe eine Zahl ist

export function aufgabe27(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input.charCodeAt(i)
    // charCodeAt für den ASCII
    if (currentElement < 48 || currentElement > 57) {
      // ASCII verwenden wegen <>
      return false
    }
  }
  return true
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

// Aufgabe 28: Test, ob in der Eingabe 2 Zahlen von einem Leerzeichen getrennt sind.Falls jadie Summe als Ausgabe ausgeben; sonst Fehlermeldung.
export function aufgabe28(args) {
  const input = args
  const numbers = input.split(" ")
  // split (" ") trennt die Zeichen durch ein Leerzeichen
  if (numbers.length !== 2) {
    return "Fehlermeldung"
    // !==2 testet, ob es nicht zwei Zahlen sind
    // return "Fehlermeldung"sorgt dafür, dass es eine Fehlermeldung gibt, wenn es nicht zwei Zahlen sind
  } else {
    return Number(numbers[0]) + Number(numbers[1])
    // Number () wandelt die Zeichen in Zahlen um und addiert sie
  }
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

// Eigene Aufgaben:

// Aufgabe 29: Alle i durch 1 ersetzen
export function aufgabe29(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "i" || currentElement === "I") {
      result.push("1")
      // result.push ("")um etwas zu ersetzen
    }
    // ersetzt es durch 1
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

// Aufgabe 30: r bzw R zählen
export function aufgabe30(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "r") {
      count = count + 1
    } else if (currentElement === "R") {
      count = count + 1
    } else {
      // do nothing
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

// Aufgabe 31: Letztes Zeichen verdoppeln und vorne hinzufügen
export function aufgabe31(args) {
  const input = args
  return (
    input[input.length - 1] +
    input +
    input[input.length - 1] +
    input[input.length - 1]
  )
  // input [0] = 1. Zeichen
  // input = alle Zeichen
  // input[input.length - 1] = Letztes Zeichen
}
linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)
