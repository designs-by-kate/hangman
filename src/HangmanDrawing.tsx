import style from "./HangmanDrawing.module.css"
const HEAD = (
    <div className={style.head} />
  )
  
  const BODY = (
    <div className={style.body} />
  )
  
  const RIGHT_ARM = (
    <div className={style.rightArm} />
  )
  
  const LEFT_ARM = (
    <div className={style.leftArm} />
  )
  
  const RIGHT_LEG = (
    <div className={style.rightLeg} />
  )
  
  const LEFT_LEG = (
    <div className={style.leftLeg}  />
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  
  type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div className={style.drawingContainer}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={style.ele1} />
        <div className={style.ele2} />
        <div className={style.ele3} />
        <div className={style.ele4} />
      </div>
    )
  }