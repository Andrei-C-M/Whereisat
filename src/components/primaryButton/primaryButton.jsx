import styles from './primaryButton.module.css'

const PrimaryButton = ({ buttonText, handleClick }) => {
  return (
    <button className={styles.primaryButton} onClick={handleClick}>
      {buttonText}
    </button>
  )
}

export default PrimaryButton
