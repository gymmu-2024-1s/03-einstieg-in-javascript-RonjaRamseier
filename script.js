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

export function aufgabe02(args) {
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

// Aufgabe 4:
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
  const notSpecialCharacter = "Letter or digit or space" = /[a-zA-Z0-9 ]/
  // 'const' um etwas zu definieren
  // '[a-zA-Z0-9 ]' -> a-z und A-Z, 0-9, Leerzeichen
  // '!' -> Nicht
  // /^ -> Anfang
  // $/ -> Ende
  // teilweise currentElement.match anstatt nur currentElement
  // 'test' hinzufügen, oder 'test (input)' -> Keine Ahnung, weshalb, ist halt so.
  const input = args
  let hasSpecialCharacter = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
if (currentElement === (![a-zA-Z0-9 ]))
  notSpecialCharacter = false
    }
   if (currentElement === SpecialCharacter) {
      hasSpecialCharacter = true
    }

  return hasSpecialCharacter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

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

export function aufgabe27(args) {
 const input = args
 const Digit = /^[0-9]$/
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement.match === (/^[0 - 9]$/)) {
      Digit = true
    } else { ( currentElement.match === ! (/^[0-9]$/))
      notDigit = false
    }
  }
    return Digit.test
}
linkupExerciseHandler("[data-click=aufgabe27]"), aufgabe27
