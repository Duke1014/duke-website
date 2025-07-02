export default function BackButton({ setCurrentSection }) {

    const handleBackToDukeButton = () => {
        setCurrentSection("Start")
    }

  return (
    <div className='back-button-container'>
        <button className='back-button' onClick={handleBackToDukeButton}>Back to Duke</button>
    </div>
  )
}
