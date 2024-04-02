import style from "./HangmanWord.module.css";

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
  }
  
  export function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
  }: HangmanWordProps) {
    return (
      <div className={style.wordContainer} >
        {wordToGuess.split("").map((letter, index) => (
          <span className={style.letterContainer} key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "green" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    )
  }