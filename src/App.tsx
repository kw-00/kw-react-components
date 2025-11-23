
import '@/styles/styles.css'
import VerticalContainer from './components/containers/VerticalContainer'
import Button from './components/buttons/Button'

function App() {


  return (
    <>
      <VerticalContainer orientation='vertical'>
        {[1, 2, 3, 4, 5].map((n, i) => {
          return (
            <Button onClick={() => alert("Clicked!")} variant='primary'>Hello there1</Button>
          )
        })
        }
      </VerticalContainer>
    </>
  )
}

export default App
