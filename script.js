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
  const result = [] // das ist die Resultatliste
  // läuft Zeichen für Zeichen über den ganzen Text
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
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      count = count + 1
    } else {
      // do nothing
    }
  }
  return count
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
  // teilweise currentElement.match anstatt nur currentElement
  // 'test' hinzufügen, oder 'test (input)' -> Keine Ahnung, weshalb, ist halt so.
  // 'test' nach '! /[]/'
  // ';' nach 'true' und 'return'
  const input = args
  let hasSpecialCharacter = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === !/[a-zA-Z0-9]/.test) {
      hasSpecialCharacter = true
    }
  }
  return hasSpecialCharacter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

// Aufgabe 7: 'und' zählen
export function aufgabe07(args) {
  const input = args
  let count = 0
  // const kann anstatt let verwendet werden
  for (let i = 0; i < input.length; i++) {
    // input [i] = currentElement

    if (input[i].toLowerCase() === "und") {
      count += 1
      // += anstatt nur =, und dann kein count + danach, sondern nur 1 oder die sonst gewünschte Zahl
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe071(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      currentElement === "und" ||
      currentElement === "UND" ||
      currentElement === "Und"
    ) {
      currentElement = true
    } else {
      currentElement = false
    }
  }
  return currentElement
}
linkupExerciseHandler("[data-click=aufgabe071]", aufgabe071)

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
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]"), aufgabe12

// Aufgabe 13: Position des zweiten "e"
export function aufgabe13(input) {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count++
      if (count === 2) {
        return i
      }
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe13]"), aufgabe13

// Aufgabe 14: Position des letzten "e"
export function aufgabe14(args) {
  for (let i = input.length - 1; i >= 0; i--) {
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
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

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
inkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

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

// Aufgabe 27:Testen, ob die Eingabe eine Zahl ist

export function aufgabe27(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement < 48 || currentElement > 57) {
      // ASCII verwenden wegen <>
      return false
    }
  }
  return true
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)
