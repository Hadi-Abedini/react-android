import { useState } from 'react'
import './App.css'
import BottomSheet from './component/BottomSheet/BottomSheet'

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div>
        <button onClick={() => { setOpen(true) }}>باز کردن</button>
        <BottomSheet
          isOpen={open}
          onClose={handleClose}
        // height="60%" // You can customize the height
        // backgroundColor="#f0f0f0" // You can customize the background color
        // handleColor="#007bff" // You can customize the handle color
        // animationDuration={0.4} // You can customize the animation duration
        >
          <h2>Bottom Sheet Content</h2>
          <p>This is the content inside the Bottom Sheet. You can place any components or HTML elements here.</p>
        </BottomSheet>
      </div>
    </>
  )
}

export default App
